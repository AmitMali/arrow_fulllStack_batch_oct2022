//'this' Keyword in Javascript (Implicit Binding)
// Question 2 - What is the result of accessing its ref? Why?
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser();
console.log(user.ref.name); // What's the result?
