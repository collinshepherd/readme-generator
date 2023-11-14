const fs = require("fs");

const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the name of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter instructions on how to install your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter instructions on how to use your project:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter how people can contribute to your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter testing instructions for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPL-3.0", "MPL-2.0", "Apache-2.0", "MPL-2.0", "None"],
  },
];
