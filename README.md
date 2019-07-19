# angular-electron-tpl

Boilerplate for Desktop Applications with Angular + Electron. 
<br> <br>
<b>Caution: I'm getting lots of security alerts for this repo. Run ```npm audit fix``` before using!</b>
<br> <br>
What I've done after ```ng new angular-electron-tpl```: 

```
? Would you like to add Angular routing? YES
? Which stylesheet format would you like to use? CSS
```
* Set 4 spaces instead of 2.
* Removed RxJS from the import blacklist.
* Created ```src/electron.js```. It's basically [your first Electron App](https://electronjs.org/docs/tutorial/first-app#electron-development-in-a-nutshell) with a couple additions.
* ```src/app.component``` only contains ```<router-outlet>```, ```src/main/main.component``` is the entry-point.
* ```ng build``` or ```npm run build``` puts output in ```view/```.
* ```npm start``` runs ```electron .```, which loads ```view/index.html```.
* ```npm run live``` runs ```electron . -live```, which loads ```127.0.0.1:4200```.
<br> 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

<br>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
