/// <reference path="../angular/angular.d.ts" />
/// <reference path="../underscore.string/underscore.string.d.ts" />
var app;
(function (app) {
    var AppController = (function () {
        function AppController($timeout, $scope, $sce) {
            this.$timeout = $timeout;
            this.$scope = $scope;
            this.$sce = $sce;
            this.isGameOver = false;
            this.cells = [];
            this.init();
        }
        AppController.prototype.init = function () {
            this.isGameOver = false;
            for (var i = 0; i < 10; i++) {
                this.cells[i] = new Array();
                for (var j = 0; j < 10; j++) {
                    var rand = Math.floor(Math.random() * 10);
                    if (rand == 0) {
                        this.cells[i][j] = {
                            x: i,
                            y: j,
                            isBomb: true,
                            num: 0,
                            state: "normal"
                        };
                    }
                    else {
                        this.cells[i][j] = {
                            x: i,
                            y: j,
                            isBomb: false,
                            num: 0,
                            state: "normal"
                        };
                    }
                }
            }
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    for (var x = -1; x <= 1; x++) {
                        var targetX = i + x;
                        if (targetX >= 0 && targetX < 10) {
                            for (var y = -1; y <= 1; y++) {
                                var targetY = j + y;
                                if (targetY >= 0 && targetY < 10) {
                                    if (this.cells[targetX][targetY].isBomb) {
                                        this.cells[i][j].num++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        AppController.prototype.clickCell = function (cell) {
            cell.state = "open";
            if (cell.isBomb) {
                if (this.isGameOver == false) {
                    setTimeout("alert('Game Over.')", 0);
                }
                this.isGameOver = true;
            }
            else {
                this.openCell(cell);
            }
        };
        AppController.prototype.openCell = function (cell) {
            if (cell.num == 0) {
                for (var x = -1; x <= 1; x++) {
                    var targetX = cell.x + x;
                    if (targetX >= 0 && targetX < 10) {
                        for (var y = -1; y <= 1; y++) {
                            var targetY = cell.y + y;
                            if (targetY >= 0 && targetY < 10) {
                                if (this.cells[targetX][targetY].state != "open") {
                                    this.cells[targetX][targetY].state = "open";
                                    this.openCell(this.cells[targetX][targetY]);
                                }
                            }
                        }
                    }
                }
            }
        };
        return AppController;
    })();
    app.AppController = AppController;
})(app || (app = {}));