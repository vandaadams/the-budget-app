// 2. get input value
// 3. add new item to data structure
// 4. display new item
// 5. calculate budget
// 6. display budget

// BUDGET CONTROLLER
const budgetController = (() => {

  const Expense = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals : {
      exp: 0,
      inc: 0
    }
  }
})();

// UI CONTROLLER
const UIController = (() => {

  const DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  }
})();

// GLOBAL CONTROLLER
const controller = ((budgetCtrl, UICtrl) => {

  const setupEventListeners = () => {
    const DOM = UICtrl.getDOMstrings();
    // 1. add event handler when user adds income/expenses
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', (event) => {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  const ctrlAddItem = () => {
    const input = UICtrl.getInput();
    console.log(input);
  };

  return {
    init: () => {
      console.log('application has started')
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();
