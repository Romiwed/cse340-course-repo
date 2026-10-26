// Arrow function that adds two numbers
const add = (a, b) => a + b;

console.log("The result is:", add(5, 3));
const course = "CSE 340";
let week = 1;

console.log("My course is", course);
console.log("I am in week", week);

week = 2;

console.log("Next week is", week);
// Template literals
const student = "Romina";
const subject = "JavaScript";
const score = 95;

const message = `Hello ${student}! You are learning ${subject}. Your score is ${score}%.`;

console.log(message);
// Promises and Async/Await
const getMessage = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("JavaScript is working!");
    }, 2000);
  });
};

async function showMessage() {
  console.log("Loading message...");

  const result = await getMessage();

  console.log(result);
}

showMessage();