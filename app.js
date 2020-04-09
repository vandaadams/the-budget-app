// 1. add event handler when user adds income/expenses
// 2. get input value
// 3. add new item to data structure
// 4. display new item
// 5. calculate budget
// 6. display budget

const budgetController = (() => {

  var x = 23;
  var add = (a) => {
    return x + a;
  }

  return {
    publicTest: (b) => {
      return add(b);
    }
  }

})();

const UIController = (() => {

})();

const controller = ((budgetCtrl, UICtrl) => {

  var z= budgetCtrl.publicTest(5);

  return {
    anotherPublic: () => {
      console.log(z);
    }
  }

})(budgetController, UIController);
