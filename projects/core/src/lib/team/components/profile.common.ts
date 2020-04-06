import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { CookiesService } from 'ngx-universal-cookies';
import { NgdBaseComponent } from '../../ng5-basic/services/ngd-base.component';
import { UserService } from '../../ng5-basic/services/user.service';
import { ConfigurationService } from '../../ng5-basic/services/configuration.service';
import { RequestsService } from '../../ng5-basic/services/requests.service';

export class ProfileCommon extends NgdBaseComponent {
  public form = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    picture_id: new FormControl(''),
    picture: new FormControl(null),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });

  public get Form() {
    return this.form.value;
  }

  constructor(
    public requests: RequestsService,
    public user: UserService,
    public config: ConfigurationService,
    public profileService: ProfileService,
    public cookie: CookiesService
  ) {
    super();
  }

  public uploadFinish(files: Array<any>) {
    if (files[0] && files[0].id) {
      this.form.patchValue({
        picture: {
          ...(this.Form.picture || {}),
          publicUrl: files[0].publicUrl,
        },
      });
      this.setFormData('picture_id', files[0].id);
      this.onSubmit();
    }
  }

  public async onSubmit() {
    this.StartRequest<any>(() =>
      this.requests.PostProfile(this.form.value)
    ).then((result) => {
      if (result.item) {
        this.user.SetUser({
          ...result.item.user,
          picture: this.form.value.picture,
        });
        this.config.ShowToast({
          message: 'Profile has been updated',
          type: 'SUCCESS',
        });
      }
    });
  }
}
