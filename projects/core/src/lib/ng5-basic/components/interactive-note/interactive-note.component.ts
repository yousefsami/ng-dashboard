import { Component, OnInit, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { IInteractiveNote, IInteraciveAction } from '../../definitions';
import { Router } from '@angular/router';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'ngd-interactive-note',
  templateUrl: './interactive-note.component.html',
  styleUrls: ['./interactive-note.component.scss'],
})
export class InteractiveNoteComponent implements OnInit {
  @Input()
  public note: IInteractiveNote = null;
  public get options(): AnimationOptions {
    return {
      loop: false,
      path: `assets/animations/${this.note.animation}.json`,
    };
  }
  constructor(private router: Router, public ngdRouter: RouterService) {}

  ngOnInit() {}

  animationCreated(animationItem: AnimationItem): void {}

  actionClick(action: IInteraciveAction) {
    action.click(this.router, this.ngdRouter);
  }
}
