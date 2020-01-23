import { HttpErrorResponse } from '@angular/common/http';
import { ToastOptions, ToastaService } from 'ngx-toasta';
import { OnDestroy } from '@angular/core';
import { IResponse, IResponseErrorItem } from 'response-type';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IsSuccessEntity, error, WorkingStates } from './common';
import { StartRequestResponse } from '../definitions';
import { ShowToast } from './configuration.service';

/**
 * @description Set of functions that every component needs.
 * You need to bind an instance of this component to your angular component.
 * Helps for http requests, working progress, managing response.
 */
export abstract class NgdBaseComponent implements OnDestroy {
  /**
   * List of RxJs observations that should be unsubscribed
   */

  protected toastaService: ToastaService;
  protected validator: (formDataObject) => IResponseErrorItem[];
  protected form: FormGroup;
  public res: IResponse<any>;
  public error = error;
  public ComponentType = 'COMPONENT';

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
    /* tslint:disable */
    // Config refers to the ngdashboard config, if exists, it will clear it's auto interative buttons
    const config = this['config'];
    /* tslint:enable */
    if (config && this.ComponentType === 'COMPONENT') {
      config.SetInteractiveButtons([]);
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
          const toastOptions: ToastOptions = {
            title: response.error.message,
            showClose: true,
            timeout: 5000
          };
          this.toastaService.error(toastOptions);
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
}
