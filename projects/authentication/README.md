# Angular 6+ Signup, Login form @ng-dashboard/authentication
Gives you a ready to use login and signup mechanism easily. You need to give an endpoint to signup and signin.


## Install

1. install the package ( most likely on a projects/ng-dashboard-core/src/public_api project but still you can use some features)

```
npm install @ng-dashboard/authentication
```

2. Add it to your `app.module`:

```
...
  imports: [
    BrowserModule,
    NgAuthenticationModule.forRoot({
      baseUrl: 'https://my-api-set.com', // You need to support /api/signin, and /api/signup post methods
      provideFacebook: true,
    }),
...
