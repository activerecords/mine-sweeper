/// <reference path="../angular/angular.d.ts" />
/// <reference path="../underscore.string/underscore.string.d.ts" />

module app {
  interface Cell {
    x: number
    y: number
    isBomb: boolean
    num: number
    state: string
  }

  export class AppController {
    private isGameOver: boolean = false
    public cells: Cell[][] = []

    constructor(private $timeout: ng.ITimeoutService, private $scope: ng.IRootScopeService, private $sce) {
      this.init()
    }

    private init() {
      this.isGameOver = false

      for (var i = 0; i < 10; i++) {
        this.cells[i] = new Array()

        for (var j = 0; j < 10; j++) {
          var rand = Math.floor(Math.random() * 10)

          if (rand == 0) {
            this.cells[i][j] = {
              x: i,
              y: j,
              isBomb: true,
              num: 0,
              state: "Close"
            }
          } else {
            this.cells[i][j] = {
              x: i,
              y: j,
              isBomb: false,
              num: 0,
              state: "Close"
            }
          }
        }
      }

      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          for (var x = -1; x <= 1; x++) {
            var targetX = i + x
            if (targetX >= 0 && targetX < 10) {
              for (var y = -1; y <= 1; y++) {
                var targetY = j + y
                if (targetY >= 0 && targetY < 10) {
                  if (this.cells[targetX][targetY].isBomb) {
                    this.cells[i][j].num++
                  }
                }
              }
            }
          }
        }
      }
    }

    public clickCell(cell) {
      if (cell.state == "Close") {
        cell.state = "Open"

        if (cell.isBomb) {
          if (this.isGameOver == false) {
            setTimeout("alert('Game Over.')", 0)
          }
          this.isGameOver = true
        } else {
          this.openCell(cell)
        }

        var isClear = true

        for (var i = 0; i < 10; i++) {
          for (var j = 0; j < 10; j++) {
            if (this.cells[i][j].isBomb == false && this.cells[i][j].state == "Close") {
              isClear = false
            }

            if (this.cells[i][j].isBomb == true && this.cells[i][j].state == "Open") {
              isClear = false
            }
          }
        }

        if (isClear == true) {
          setTimeout("alert('Game Clear.')", 0)
        }
      }
    }

    private openCell(cell) {
      if (cell.num == 0) {
        for (var x = -1; x <= 1; x++) {
          var targetX = cell.x + x
          if (targetX >= 0 && targetX < 10) {
            for (var y = -1; y <= 1; y++) {
              var targetY = cell.y + y
              if (targetY >= 0 && targetY < 10) {
                if (this.cells[targetX][targetY].state == "Close") {
                  this.cells[targetX][targetY].state = "Open"
                  this.openCell(this.cells[targetX][targetY])
                }
              }
            }
          }
        }
      }
    }
  }
}
