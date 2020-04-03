import { HttpErrorResponse } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { IResponse, IResponseErrorItem } from 'response-type';
import { FormGroup } from '@angular/forms';
import { Subscription, TimeoutError } from 'rxjs';
import {
  IsSuccessEntity,
  error,
  WorkingStates,
  getQuerystring
} from './common';
import {
  StartRequestResponse,
  InteractiveButton,
  IWorkingState
} from '../definitions';
import { ShowToast, ConfigurationService } from './configuration.service';

/**
 * @description Set of functions that every component needs.
 * You need to bind an instance of this component to your angular component.
 * Helps for http requests, working progress, managing response.
 */
export abstract class NgdBaseComponent implements OnDestroy {
  /**
   * List of RxJs observations that should be unsubscribed
   */

  public config: ConfigurationService;
  protected componentInteractiveButtons: InteractiveButton[] = [];

  protected validator: (formDataObject) => IResponseErrorItem[];
  protected form: FormGroup;
  public res: IResponse<any>;
  public error = error;
  public ComponentType = 'COMPONENT';

  public setWorker(worker: IWorkingState) {
    if (!worker.id) {
      console.warn('Working should have id in order to update or cancel later');
      return;
    }
    WorkingStates.next([worker]);
  }

  public clearWorkers() {
    WorkingStates.next([]);
  }

  public clearWorker(id: string) {
    WorkingStates.next(WorkingStates.value.filter(worker => worker.id !== id));
  }

  public set working(value: boolean) {
    setTimeout(() => {
      if (value) {
        WorkingStates.next([
          {
            active: true
          }
        ]);
      } else {
        WorkingStates.next([]);
      }
    }, 50);
  }
  public get working() {
    return WorkingStates.value.length > 0;
  }

  private $unsubscribe: Array<Subscription> = [];

  /**
   * Set the latest response from a google json style guide API.
   * It's useful to validate the forms data easily, instead of writing code for it.
   */
  public SetLastResponse(res: IResponse<any>) {
    this.res = res;
  }

  public ComponentSubscription(t: Subscription) {
    this.$unsubscribe.push(t);
  }

  /**
   * When having a list of IResponseErrorItem, this is useful to generate a full response from server
   * (simulated), in order to put in component, basically a sugar code for not creating a IResponse again
   */
  public ResponseFromErrors(errors: IResponseErrorItem[], message = null) {
    this.SetLastResponse({
      error: {
        errors,
        message
      }
    });
  }

  ngOnDestroy() {
    if (this.config && this.ComponentType === 'COMPONENT') {
      this.config.SetInteractiveButtons(
        this.config.GlobalInteractiveButtons.value
      );
    }
    this.$unsubscribe.forEach(t => t.unsubscribe());
  }

  public ResponseError(err: HttpErrorResponse) {
    if (window.location.hostname === 'localhost') {
      console.error('Http error:', err);
    }
    let msg = err.statusText;
    if (err.status === 0) {
      msg = 'Might be a server, or connection issue.';
    }

    if (err.status === 404) {
      msg =
        'This part of service is not available at the moment. Try it in few hours, or contact us.';
    }
    let code = `(${err.status})`;
    if (err.status === 0) {
      code = '';
    }

    ShowToast({
      type: 'ERROR',
      title: 'Server unavailable ' + code,
      message: msg
    });
  }

  public InternalError(err: Error) {
    if (window.location.hostname === 'localhost') {
      console.error('Internal error:', err);
    }
    ShowToast({
      title: err.name,
      message: err.message,
      type: 'ERROR'
    });
  }

  public async StartValidatedRequest<T>(
    callableRequest: any
  ): Promise<StartRequestResponse<T>> {
    return this.StartRequest<T>(callableRequest, {
      validator: true,
      notifyAPIErrors: true
    });
  }

  public async StartRequest<T>(
    callableRequest: any,
    params = { validator: false, notifyAPIErrors: true }
  ): Promise<StartRequestResponse<T>> {
    if (this.validator && params.validator) {
      const formErrors = this.validator(this.form.value);
      if (formErrors.length) {
        this.ResponseFromErrors(formErrors);
        return {
          item: null,
          items: null
        };
      }
    }

    this.res = null;

    this.working = true;
    try {
      const response: IResponse<T> = await callableRequest();
      this.working = false;
      if (
        IsSuccessEntity(response) ||
        (response.data &&
          response.data.items.push &&
          response.data.items.length === 0)
      ) {
        return {
          items: response.data.items,
          item: response.data.items[0]
        };
      } else {
        if (params.notifyAPIErrors) {
          ShowToast({
            type: 'ERROR',
            message:
              response.error.message || (response.error.code || '').toString()
          });
        }
        return {
          error: response.error
        };
      }
    } catch (error) {
      this.working = false;

      if (error instanceof HttpErrorResponse) {
        this.ResponseError(error);
      } else {
        this.InternalError(error);
      }
      return {
        error,
        item: null,
        items: null
      };
    }
  }

  /**
   * Useful when you want to subscribe the input, select,... events directly
   * to form change, or from a custom input which doesn't support Reactive forms.
   * @param field form element name
   */
  public setFormData(field: string, value: any) {
    if (!this.form || !this.form.patchValue || !field) {
      return null;
    }
    this.form.patchValue({
      [field]: value
    });
  }

  /**
   * Subscribe to store and get data from API at the same time, without letting user
   * to see if the UI is flickering, or waiting for data to be loaded. Use it,
   * when data might already be in the store before the new API request.
   * e.g. user navigates back to a previous URL
   *
   * Subscriptions will be removed automatically
   * @param storeSection AppState<...> name, where we should look in. (string)
   * @param request callback, which receives the id, and entity.
   * @param entityFilter callback, which receives the entity before patch to form. you can edit fields before
   * anything else happens
   */
  public SubscribeAndFetchForm<T>(
    storeSection: any,
    request: (id: number, entity?: T) => Promise<IResponse<T>>,
    entityFilter: (T) => any = x => x
  ) {
    /* tslint:disable */
    const route = this['route'];
    const store = this['store'];
    /* tslint:enable */

    if (!route) {
      return console.warn(
        'SubscribeAndFetchForm needs Angular ActivatedRoute to exists. Add to your constructor (this.route: ActivatedRoute)'
      );
    }
    if (!store) {
      return console.warn(
        'This function requires to have store on the child component to be injected (this.store is undefined)'
      );
    }
    let entity = null;
    const { id } = route.snapshot.params;
    if (!id) {
      return;
    }

    this.ComponentSubscription(
      store.select(storeSection).subscribe(items => {
        if (items && items.length) {
          entity = items.find(t => t.id === +id);
          if (entity) {
            this.form.patchValue(entityFilter(entity));
          }
        }
      })
    );
    this.StartRequest<T>(() => request(id, entity)).then(result => {
      if (result && result.item) {
        this.form.patchValue(
          entityFilter({
            ...result.item
          })
        );
      }
    });
  }
  /**
   * @todo ng-dashboard NgdBaseComponent
   * Sometimes when coming back from a single record form to list of items
   * we want to most recent added element be focused to get users attention.
   * @param id number
   */
  public IsFocusedItem(id: number) {
    if (!id) {
      return false;
    }
    return getQuerystring('focus') === id.toString();
  }

  /**
   * Sets this component interactive buttons, and clears them when leaving this component
   */
  public SetInteractiveButtons(buttons: InteractiveButton[]) {
    this.componentInteractiveButtons = buttons;

    this.config.SetInteractiveButtons([
      ...buttons,
      ...this.config.GlobalInteractiveButtons.value
    ]);
  }
}
