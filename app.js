(function() {


angular.module("calcApp", [])

// Sum one-time and monthly values
.filter('sumOfValue', function() {
  return function(data, key) {
    if (typeof(data) === "undefined"|| typeof(key) === 'undefined') {
      return 0;
  }
    var sum = 0;
    for (var i = data.length-1; i >=0; i--) {
      sum += parseInt(data[i][key]);
    }
    return sum;
  };

})
// Calculate percentage
.filter('percentage', ['$filter', function ($filter) {
      return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
      };
    }])

  .controller("CalcCtrl", function($scope) {
  // Revenue items
  $scope.items = [
    {
      text: "tickets on shuttle",
      once: 5000,
      monthly: 10000,
      done: false
    }, {
      text: "Call to Earth",
      once: 55,
      monthly: 250,
      done: false
    }
  ];

  $scope.addItem = function() {
    $scope.items.push({
      text: $scope.itemText,
      once: $scope.itemOne,
      monthly: $scope.itemMonthly,
      done: false
    });
    // clear input fields after add
    $scope.itemText = "";
    $scope.itemOne = "";
    $scope.itemMonthly = "";
  };

  $scope.deleteRv = function() {
    var oldItems;
    oldItems = $scope.items;
    $scope.items = [];
    angular.forEach(oldItems, function(item) {
      if (!item.done) {
        return $scope.items.push(item);
      }
    });
  };

  // Expenses items
  $scope.expenses = [
    {
      text: "space ship",
      once: 1000000,
      monthly: 5000000,
      done: false
    }, {
      text: "Fuel",
      once: 10000,
      monthly: 30000,
      done: false
    }
  ];

  $scope.addExpense = function() {
    $scope.expenses.push({
      text: $scope.expenseText,
      once: $scope.expenseOne,
      monthly: $scope.expenseMonthly,
      done: false
    });
    // clear input fields after add
    $scope.expenseText = "";
    $scope.expenseOne = "";
    $scope.expenseMonthly = "";
  };

  $scope.deleteExp = function() {
    var oldExpenses;
    oldExpenses = $scope.expenses;
    $scope.expenses = [];
    angular.forEach(oldExpenses, function(expense) {
      if (!expense.done) {
        return $scope.expenses.push(expense);
      }
    });
  };

}); // Controller end

})();
