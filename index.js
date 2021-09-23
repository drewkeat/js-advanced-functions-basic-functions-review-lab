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
    return args.reduce((accum, number) => accum + number);
  },
  subtract: (...args) => {
    return args.reduce((accum, number) => accum - number);
  },
  multiply: (...args)=> {
    return args.reduce((accum, number) => accum * number);
  },
  divide: (...args)=> {
    return args.reduce((accum, number) => accum / number);
  }
};

function actionApplyer(start, array) {
    if (array.length !== 0) {
        return array.reduce((result, func) => {return func(result)}, start)
    } else {
        return start
    }
}