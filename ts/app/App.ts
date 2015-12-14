/// <reference path="../angular/angular.d.ts"/>

module app {
  export class App {
    app: ng.IModule;
 
    constructor(name: string, modules: Array<string>) {
      this.app = angular.module(name, modules)
      
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
 
    addController(name: string, controller: Function) {
      this.app.controller(name, controller)
    }
  }
}
