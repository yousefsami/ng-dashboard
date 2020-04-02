import {
  Component,
  AfterViewInit,
  HostBinding,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  selector: 'ngd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @HostBinding() public class = 'ngd-toolbar';
  @Input() public set toolbarData(value) {
    if (!value) {
      return;
    }
    setTimeout(() => {
      this.renderComponents(value.component, value.callback);
    }, 100);
  }
  @Input() public isSidebarVisible = false;

  @ViewChild('dynamic', {
    read: ViewContainerRef,
    static: false
  })
  public target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(
    private config: ConfigurationService,
    private compiler: ComponentFactoryResolver
  ) {}

  renderComponents(childComponent, callback) {
    if (!childComponent) {
      return;
    }
    let componentFactory = this.compiler.resolveComponentFactory(
      childComponent
    );
    this.componentRef = this.target.createComponent(componentFactory);

    callback && callback(this.componentRef);
  }
}
