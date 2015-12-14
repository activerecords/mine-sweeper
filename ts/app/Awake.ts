/// <reference path="App.ts" />
/// <reference path="AppController.ts" />

module app {
  declare var FastClick: any

  FastClick.attach(document.body)

  var app = new App("app", ["ui.bootstrap", "ngSanitize"])

  app.addController("AppController", AppController)
}
