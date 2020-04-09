// 2. get input value
// 3. add new item to data structure
// 4. display new item
// 5. calculate budget
// 6. display budget

// BUDGET CONTROLLER
const budgetController = (() => {

 // code goes here

})();

// UI CONTROLLER
const UIController = (() => {

  // code goes here

})();

// GLOBAL CONTROLLER
const controller = ((budgetCtrl, UICtrl) => {

  const ctrlAddItem = () => {
    console.log('it works')
  }

  // 1. add event handler when user adds income/expenses
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
