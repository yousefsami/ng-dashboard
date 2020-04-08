import { HttpErrorResponse } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { IResponse, IResponseErrorItem } from 'response-type';
import { FormGroup } from '@angular/forms';
import { Subscription, TimeoutError } from 'rxjs';
import {
  IsSuccessEntity,
  error,
  WorkingStates,
  getQuerystring,
  IsSuccessEmpty,
} from './common';
import {
  StartRequestResponse,
  InteractiveButton,
  IWorkingState,
} from '../definitions';
import { ShowToast, ConfigurationService } from './configuration.service';
import { startWith, pairwise } from 'rxjs/operators';

function diff(obj1, obj2) {
  const keys = Object.keys(obj1);

  for (const k of keys) {
    if (obj1[k] !== obj2[k]) {
      return k;
    }
  }
}

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
  private $unsubscribe: Array<Subscription> = [];

  protected validator: (formDataObject) => IResponseErrorItem[];
  protected form: FormGroup;
  public res: IResponse<any>;
  public error = error;
  public formTouchedElements: any = {};
  public ComponentType = 'COMPONENT';
  public submitRes;

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

  public ReactiveToFormChanges() {
    this.ComponentSubscription(
      this.form.valueChanges
        .pipe(startWith({}), pairwise())
        .subscribe(([before, now]) => {
          const lastTouchedField = diff(before, now);
          if (lastTouchedField) {
            this.formTouchedElements[lastTouchedField] = true;
          }

          let validation = this.validator(now);
          validation = validation.filter(
            (t) => this.formTouchedElements[t.location]
          );

          if (validation.length > 0) {
            this.res = {
              error: {
                message: 'VALIDATION_ERROR',
                errors: validation,
              },
            };
          } else {
            this.res = null;
          }
        })
    );
  }

  public touchForm() {
    if (!this.form) {
      return;
    }
    const keys = Object.keys(this.form.value);

    for (const key of keys) {
      this.formTouchedElements[key] = true;
    }
  }

  getPosition(element) {
    let yPosition = 0;

    while (element) {
      yPosition += element.offsetTop + element.clientTop;
      element = element.offsetParent;
    }

    return yPosition;
  }

  public get hasErrors() {
    if (
      this.res &&
      this.res.error &&
      this.res.error.errors &&
      this.res.error.errors.length > 0
    ) {
      return true;
    }
    return false;
  }

  private responseWarningToast(result) {
    if (
      !result.item &&
      this.res &&
      this.res.error &&
      this.res.error.errors.length &&
      window.innerWidth > 779
    ) {
      const key =
        this.res.error.errors.length > 1
          ? 'you_have_issues_in_the_form'
          : 'you_have_issue_in_the_form';
      this.config.ShowToast({
        message: this.config.translate(key, {
          count: this.res.error.errors.length,
        }),
        type: 'WARNING',
      });
    }
  }

  isVisible(elem: any) {
    const style = getComputedStyle(elem);

    if (style.display === 'none') {
      return false;
    }

    if (style.visibility !== 'visible') {
      return false;
    }

    if (+style.opacity < 0.1) {
      return false;
    }
    if (
      elem.offsetWidth +
        elem.offsetHeight +
        elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width ===
      0
    ) {
      return false;
    }
    const elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
    };

    if (elemCenter.x < 0) {
      return false;
    }

    if (
      elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)
    ) {
      return false;
    }

    if (elemCenter.y < 0) {
      return false;
    }

    if (
      elemCenter.y >
      (document.documentElement.clientHeight || window.innerHeight)
    ) {
      return false;
    }

    let pointContainer: any = document.elementFromPoint(
      elemCenter.x,
      elemCenter.y
    );
    do {
      if (pointContainer === elem) {
        return true;
      }

      /* tslint:disable */
    } while ((pointContainer = pointContainer.parentNode));
    /* tslint:enable */
    return false;
  }

  private scrollToFirstInputWithErrors() {
    setTimeout(() => {
      const firstInvalidField = document.querySelector(
        '.form-group .is-invalid'
      ) as any;

      if (!firstInvalidField) {
        return;
      }
      const firstFieldDistance = this.getPosition(firstInvalidField);

      if (this.isVisible(firstInvalidField)) {
        return;
      }

      firstInvalidField.focus();

      const ngdOutlet = document.querySelector('.ngd-outlet');
      if (!ngdOutlet) {
        return;
      }

      document
        .querySelector('.ngd-outlet')
        .scrollTo(0, firstFieldDistance - 100);
    }, 50);
  }

  public clearWorker(id: string) {
    WorkingStates.next(
      WorkingStates.value.filter((worker) => worker.id !== id)
    );
  }

  public set working(value: boolean) {
    setTimeout(() => {
      if (value) {
        WorkingStates.next([
          {
            active: true,
          },
        ]);
      } else {
        WorkingStates.next([]);
      }
    }, 50);
  }
  public get working() {
    return WorkingStates.value.length > 0;
  }

  /**
   * Set the latest response from a google json style guide API.
   * It's useful to validate the forms data easily, instead of writing code for it.
   */
  public SetLastResponse(res: IResponse<any>) {
    this.res = res;
    this.submitRes = res;
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
        message,
      },
    });
  }

  ngOnDestroy() {
    if (this.config && this.ComponentType === 'COMPONENT') {
      this.config.SetInteractiveButtons(
        this.config.GlobalInteractiveButtons.value
      );
    }
    this.$unsubscribe.forEach((t) => t.unsubscribe());
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

    console.error('Server error:', err);
    ShowToast({
      type: 'ERROR',
      title: 'Server unavailable ' + code,
      message: msg,
    });
  }

  public InternalError(err: Error) {
    console.error('Internal error:', err);
    ShowToast({
      title: err.name,
      message: err.message,
      type: 'ERROR',
    });
  }

  public async StartValidatedRequest<T>(
    callableRequest: any
  ): Promise<StartRequestResponse<T>> {
    const res = await this.StartRequest<T>(callableRequest, {
      validator: true,
      notifyAPIErrors: true,
    });

    this.scrollToFirstInputWithErrors();
    this.responseWarningToast(res);
    return res;
  }

  public async StartRequest<T>(
    callableRequest: any,
    params = { validator: false, notifyAPIErrors: true }
  ): Promise<StartRequestResponse<T>> {
    this.touchForm();

    if (this.validator && params.validator) {
      const formErrors = this.validator(this.form.value);
      if (formErrors.length) {
        this.ResponseFromErrors(formErrors);

        return {
          item: null,
          items: null,
        };
      }
    }

    this.res = null;

    this.working = true;
    try {
      const response: IResponse<T> = await callableRequest();
      this.working = false;

      if (IsSuccessEntity(response) || IsSuccessEmpty(response)) {
        return {
          items: response.data.items,
          item: response.data.items[0],
        };
      } else {
        if (params.notifyAPIErrors) {
          ShowToast({
            type: 'WARNING',
            message:
              response.error.message || (response.error.code || '').toString(),
          });
        }
        return {
          error: response.error,
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
        items: null,
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
      [field]: value,
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
    entityFilter: (T) => any = (x) => x
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
      store.select(storeSection).subscribe((items) => {
        if (items && items.length) {
          entity = items.find((t) => t.id === +id);
          if (entity) {
            this.form.patchValue(entityFilter(entity));
          }
        }
      })
    );
    this.StartRequest<T>(() => request(id, entity)).then((result) => {
      if (result && result.item) {
        this.form.patchValue(
          entityFilter({
            ...result.item,
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
      ...this.config.GlobalInteractiveButtons.value,
    ]);
  }

  /**
   * @description Deletes a record type, with given translation key as the confirmation message.
   * translation will receive the entity as params for translation.
   */
  public deleteEntity<T>(
    entity: any,
    translationMessageKey: string,
    storeActionType: string,
    handler: () => Promise<IResponse<T>>
  ) {
    /* tslint:disable */
    const store = this['store'];
    const confirm = this['confirm'];
    const config = this['config'];
    /* tslint:enable */

    confirm
      .open({
        content: config.translate(translationMessageKey, entity),
      })
      .subscribe(async ({ type }) => {
        if (type !== 'CONFIRMED') {
          return;
        }
        if (entity) {
          store.dispatch({
            type: storeActionType,
            payload: entity,
          });
        }
        await this.StartRequest<any>(handler);
      });
  }
}
