/// <reference path="App.ts" />
/// <reference path="AppController.ts" />
var app;
(function (app_1) {
    FastClick.attach(document.body);
    var app = new app_1.App("app", ["ui.bootstrap", "ngSanitize"]);
    app.addController("AppController", app_1.AppController);
})(app || (app = {}));
