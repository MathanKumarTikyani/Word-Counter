#! /usr/bin/env node

// This line is called a shebang. It tells the OS to run it with node.js

//import the "inquirer" module, which is a command line interface for Node.js
import inquirer from "inquirer";

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answer : {
  Sentence : string
} = await inquirer.prompt(
  [
    {
      name : "Sentence",
      type : "input",
      message : "Enter your Sentence to count the word: "
    }
  ]
)

const words = answer.Sentence.trim().split(" ")

// Print the array of words to the console
console.log(words);

// Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);