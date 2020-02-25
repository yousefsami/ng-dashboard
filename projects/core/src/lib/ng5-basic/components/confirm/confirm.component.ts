import { Component, OnInit, HostListener } from '@angular/core';
import { ModalDialog } from '../../definitions';
import { Subject } from 'rxjs';
import { ConfigurationService } from '../../services/configuration.service';

@Component({
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  public activeModal = false;
  public appRef: any;
  public ref: any;
  public modal: ModalDialog;
  public subject: Subject<any> = null;

  constructor(private config: ConfigurationService) {}

  ngOnInit() {}
}
