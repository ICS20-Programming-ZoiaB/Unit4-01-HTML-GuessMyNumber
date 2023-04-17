// Copyright (c) 2023 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: April 2023
// This file contains the JS functions for index.html

function guessSent() {
 const MAX = 6;
 const MIN = 1;
 let correctNumber = Math.floor(Math.random() * MAX + MIN); 
 let guessedNumber = document.getElementById("user-guess").value;

//if/then statement: if correctNumber is equal to guessedNumber
 if (correctNumber == guessedNumber) {
   document.getElementById("results").innerHTML = "That is correct! Good job!";
 }

//if/then statement: if correctNumber is not equal to guessedNumber
if (correctNumber != guessedNumber) {
   document.getElementById("results").innerHTML = "Your guess was not correct! My number was " + correctNumber + ".";
 }
}