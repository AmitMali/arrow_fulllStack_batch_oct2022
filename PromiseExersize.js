// Use Promise.resolve(value) to create a promise that will resolve with the value 3.

const resolvePromise = new Promise(function (resolve, reject) {
  resolve(3);
});

resolvePromise.then((result) => console.log(result));

// Use Promise.reject(error) to create a promise that will reject with the string "Boo!"
const rejectPromise = new Promise(function (reolve, reject) {
  reject("Boo!");
});

rejectPromise.catch((err) => console.log(err));

// You have the outline of a function makePromiseWithConstructor(itShouldResolve)

// Use the Promise constructor to create a promise that will:

// resolve if itShouldResolve is truthy

// reject if itShouldResolve is falsy

const makePromiseWithConstructor = (itShouldResolve) => {
  return new Promise(function (resolve, reject) {
    if (itShouldResolve) resolve("resolved");
    else reject("rejected");
  });
};

makePromiseWithConstructor(true)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// This is a common use of the Promise constructor. If you want to simulate waiting for a value, a common technique is to create a function like the following.

// It simply accepts a value, and a delayInMs, then returns a promise that will resolve with that value after that delay.

const resolveAfterTime = (time, value) => {
  let MyPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(value);
    }, 1000);
  });
  return MyPromise;
};

resolveAfterTime(15, 10)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
