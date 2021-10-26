# The App Shell

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Scaffold a new feature team

```bash
ng new team-name --strict --prefix at --style scss --routing
cd team-name

ng add @ngrx/store --defaults --skip-confirmation
ng add @ngrx/effects --defaults --skip-confirmation
ng add @ngrx/store-devtools --defaults --skip-confirmation
ng add @angular/material --defaults --skip-confirmation
npm i @mr-talk/mr-core @mr-talk/jokes @mr-talk/jokes-store
```

Add MrCoreModule, JokesStoreModule to app.module

Replace HTML in app.component.html with <app-navigation></app-navigation>

```bash
ng g lib libname
```

Adapt package name to have project `@scope` in lib package.json and app tsconfig.json
Remove crap from `libname`

Add all necessary dependencies provided by App Shell as `peerDependencies`.
Example:

```json
{
  "name": "@mr-talk/libname",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^12.2.0",
    "@angular/core": "^12.2.0",
    "@angular/material": "^12.2.10",
    "@mr-talk/mr-core": "*",
    "@mr-talk/jokes-store": "*"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  }
}
```

Register lib root Module in `AppRoutingModule`

```bash
ng build libname --watch (second shell)
ng serve
```

Start migrating the features ...

```bash
ng build libname
cd dist/libname
npm publish --access public
```

...

### In App Shell

```bash
npm i libname
```

Add Module to routing config.

```typescript
{
    path: 'libname',
    loadChildren: () => import('@scope/libname').then((m) => m.LibModule),
  },
```

Verify everything works, then remove features from AppShell.
