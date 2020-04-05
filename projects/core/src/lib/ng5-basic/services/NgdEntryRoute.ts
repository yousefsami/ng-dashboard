import { OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from './configuration.service';

/* tslint:disable */

export class NgdRouteEntryPointComponent implements OnInit {
  public pageTitleFilter = (title) => title;
  public pageDescriptionFilter = (title) => title;

  constructor(
    public meta: Meta,
    public title: Title,
    public route: ActivatedRoute,
    public config: ConfigurationService
  ) {}

  public setTitle() {
    let title = '';
    if (this['pageTitle']) {
      title = this['pageTitle'];
    } else if (this.route.snapshot.data.title) {
      title = this.route.snapshot.data.title;
    }
    this.title.setTitle(this.pageTitleFilter(this.config.translate(title)));
  }

  public setDescription() {
    let description = '';

    if (this['pageDescription']) {
      description = this['pageDescription'];
    } else if (this.route.snapshot.data.description) {
      description = this.route.snapshot.data.description;
    }
    const rawText = this.pageDescriptionFilter(
      this.config.translate(description)
    );
    this.meta.addTag({
      name: 'description',
      content: rawText,
    });
  }

  ngOnInit() {
    this.setTitle();
    this.setDescription();
  }
}
