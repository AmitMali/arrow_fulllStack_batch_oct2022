//"this' Keyword in Javascript (Implicit Binding)
// Question 3 - What is the Output?
const user = {
  name: "Piyush Agarwal!",
  logMessage() {
    console.log(this.name); // What is logged?
  },
};
setTimeout(user.logMessage, 1000);
