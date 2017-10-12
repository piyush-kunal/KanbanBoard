export class MainController {
  constructor($scope) {
    'ngInject';

    $scope.$on('bag.drop', function(e, el, target){
      console.log(`Dropped ${el[0].id} on target ${target[0].id}`);
    });

    this.newTodo = [];
    this.submit = function() {
      this.board.lists[0].cards.push(this.newTodo);
      this.newTodo = '';
    }
    this.board = {
      title: "Kanban Board",
      lists: [{
        id: 1,
        name: "New",
        cards: [{
          id: 1,
          title: "Learn javascript",
          priority: "High"
        }, {
          id: 2,
          title: "Java revision",
          priority: "Low"
        }]
      }, {
        id: 2,
        name: "On-Hold",
        cards: [{
          id: 3,
          title: "Express JS",
          priority: "High"
        }]

      }, {
        id: 3,
        name: "In-Progress",
        cards: [{
          id: 3,
          title: "NodeJS tutorial",
          priority: "Medium"
        }]

      }, {
        id: 4,
        name: "Done",
        cards: [{
          id: 5,
          title: "Ready for mongo",
          priority: "Low"
        }]
      }]
    }
  }
}
