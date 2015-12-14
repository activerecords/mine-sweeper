/// <reference path="../angular/angular.d.ts"/>
var app;
(function (app) {
    var App = (function () {
        function App(name, modules) {
            this.app = angular.module(name, modules);
            /*
            this.app.directive( "stringToNumber", () =>
            {
              return {
                require: "ngModel",
                link: ( scope, element, attrs, ngModel ) =>
                {
                  ngModel.$parsers.push( ( value ) =>
                  {
                    return '' + value;
                  });
                  ngModel.$formatters.push( ( value ) =>
                  {
                    return parseFloat( value );
                  });
                }
              };
            });
      
            this.app.directive( "whenScrolled", () =>
            {
              return ( scope, elem,  attr ) =>
              {
                elem.bind( "scroll", () =>
                {
                  scope.$apply( attr.whenScrolled );
                });
              };
            });
      */
        }
        App.prototype.addController = function (name, controller) {
            this.app.controller(name, controller);
        };
        return App;
    })();
    app.App = App;
})(app || (app = {}));
