import { Injectable, Inject, EventEmitter, HostListener } from '@angular/core';
import { NgBasicConfig, PagePointerPosition } from '../definitions';
import { GlobalizationService } from '../services/globalization.service';
import { BehaviorSubject } from 'rxjs';

const LOCAL_STORAGE_KEY = 'ngx_sidebar_visibility';

@Injectable({
  providedIn: 'root'
})
export class NgxSidebarService {
  public SidebarVisibilityState: BehaviorSubject<boolean> = new BehaviorSubject(
    true
  );

  public menuItemChange: BehaviorSubject<Array<any>> = new BehaviorSubject(
    null
  );

  private eventIsActive = false;
  private eventMoveChange: PagePointerPosition = { x: undefined, y: undefined };
  private eventStartPoint: PagePointerPosition = { x: undefined, y: undefined };

  constructor(
    @Inject('config') public config: NgBasicConfig,
    private globalization: GlobalizationService
  ) {
    this.SidebarVisibilityState.next(this.IsSidebarVisibleInitially());
    window.addEventListener('resize', (event: any) => {
      if (event.target.innerWidth < 992) {
        this.Hide();
      }
    });
    this.addListenerMulti(
      window,
      'touchstart touchend touchmove mousedown mouseup mousemove',
      (e: any) => {
        const path =
          e.path ||
          (e.composedPath && e.composedPath()) ||
          this.composedPath(e.target);
        this.sidebarStatus(path).then(status => {
          if (!status) {
            if (e.type === 'touchstart' || e.type === 'mousedown') {
              this.eventIsActive = true;
            }
            if (e.type === 'touchend' || e.type === 'mouseup') {
              if (window.innerWidth < 992) {
                if (
                  !(
                    Math.abs(this.eventStartPoint.y - this.eventMoveChange.y) >
                    50
                  )
                ) {
                  if (this.globalization.getLayoutDirection() === 'rtl') {
                    if (this.eventStartPoint.x > this.eventMoveChange.x + 15) {
                      this.Show();
                    } else if (
                      this.eventStartPoint.x <
                      this.eventMoveChange.x - 15
                    ) {
                      this.Hide();
                    }
                  } else {
                    if (this.eventStartPoint.x > this.eventMoveChange.x + 15) {
                      this.Hide();
                    } else if (
                      this.eventStartPoint.x <
                      this.eventMoveChange.x - 15
                    ) {
                      this.Show();
                    }
                  }
                }
              }
              this.eventIsActive = false;
              this.eventStartPoint = { x: undefined, y: undefined };
            }
            if (
              this.eventIsActive &&
              (e.type === 'mousemove' || e.type === 'touchmove')
            ) {
              if (
                this.eventStartPoint.x === undefined &&
                this.eventStartPoint.y === undefined
              ) {
                this.eventStartPoint = this.getClientPostion(e);
              }
              this.eventMoveChange = this.getClientPostion(e);
            }
          }
        });
      }
    );
  }

  addListenerMulti(el, s, fn) {
    s.split(' ').forEach(e => el.addEventListener(e, fn, false));
  }

  getClientPostion(e): PagePointerPosition {
    switch (e.type) {
      case 'mousemove':
        return {
          x: e.clientX,
          y: e.clientY
        };
      case 'touchmove':
        return {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        };
    }
  }

  sidebarStatus(el) {
    return new Promise((res, rej) => {
      for (const e of el) {
        if (e.tagName !== undefined) {
          if (e.hasAttribute('ngx-sidebar-off')) {
            res(true);
            return;
          }
        }
      }
      res(false);
    });
  }

  composedPath(el) {
    const path = [];
    while (el) {
      path.push(el);
      if (el.tagName === 'HTML') {
        path.push(document);
        path.push(window);
        return path;
      }
      el = el.parentElement;
    }
  }

  private GetCachedState(): boolean {
    let state = null;
    try {
      state = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    } catch (error) {
      // @ left intentionally blank
    }
    return state === true || state === false ? state : null;
  }

  public IsSidebarVisibleInitially() {
    if (this.GetCachedState() === true || this.GetCachedState() === false) {
      return this.GetCachedState();
    }
    if (this.config.sidebar && this.config.sidebar.visible === false) {
      return false;
    }
    if (window.innerWidth < 992) {
      return false;
    }
    return true;
  }

  public Show() {
    this.SidebarVisibilityState.next(true);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(true));
  }

  public Hide(type: null | 'OUTSIDE_CLICK' | 'MENU_ITEM_CLICK' = null) {
    if (window.innerWidth > 992 && type === 'MENU_ITEM_CLICK') {
      return;
    }
    if (window.innerWidth > 992 && 'OUTSIDE_CLICK' === type) {
      return;
    }
    this.SidebarVisibilityState.next(false);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(false));
  }

  public Toggle() {
    if (this.IsVisible) {
      return this.Hide();
    }
    return this.Show();
  }

  public get IsVisible() {
    return this.SidebarVisibilityState.value;
  }
}
