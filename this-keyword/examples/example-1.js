//"this'Keyword in Javascript (Implicit Binding)
// Question 1- What is the Output?
const user = {
  firstName: "Amit!",
  getName() {
    const firstName = "amit mali!";
    return this.firstName;
  },
};

console.log(user.getName());

// What is logged?
