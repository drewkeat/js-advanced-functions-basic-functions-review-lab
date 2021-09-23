// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string = "*") {
  return function (adjective = "special") {
    return `You are ${string}${adjective}${string}!`;
  };
}

const Calculator = {
  add: (...args) => {
    return args.reduce(function sum(accum, number) {
      return accum + number;
    });
  },
  subtract: (...args) => {
    return args.reduce(function subtract(accum, number) {
      return accum - number;
    });
  },
  multiply: (...args)=> {
      return args.reduce(function multiply(accum, number) {
          return accum * number;
      })
  },
  divide: (...args)=> {
    return args.reduce(function multiply(accum, number) {
        return accum / number;
    })
}
};

function actionApplyer(start = 0, array) {
    if (array.length === 0) {
        return start
    }
}