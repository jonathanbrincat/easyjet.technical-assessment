# Easyjet Technical Assessment June 2023

## Development Test

Choose **one** of the problems below and solve it using a C# console application. Once you are finished please zip your entire solution (include your name in the filename) and e-mail it back to your contact who will pass it on to us.

> *Candidate notes: It turned out that Easyjet mail servers prohibit the delivery of zip file formats and so this demand was never achievable.*

### Fizz Buzz

Write a program that can be given a start and end integer and iterate over every number in that range.

When the number is a multiple of three mark it as Fizz.  
When the number is a multiple of five mark it as Buzz.  
When a number is a multiple of three and five mark it as FizzBuzz.

The program should show the list to the user when it is done

---

### Knights Travel

Write a program to represent the travel of a knight around a chess board. The knight can only move in the normal way and cannot travel through a square it has already been on. If the knight reaches the end of its travel but has not passed through every possible space on the chess board it must backtrack its moves until it finds the route that passes through them all.

The program should represent the state of the board and the moves the knight has made around the board when it is done.

---
### Craps

Write a program to simulate a number of games of craps, the user should be able to type in how many games they want played. When finished tell the user:


+ The average number rolls per game
+ The highest number of rolls
+ The lowest number of rolls
+ The most common roll
+ The average winning percentage
+ The number of wins
+ The number of losses

### How to play craps

Each game the "shooter" rolls two dice. If the numbers on the dice add up to 2, 3, or 12 the shooter loses. If the numbers on the dice add up to 7 or 11 the shooter wins. If the numbers on the dice add up to 4, 5, 6, 8, 9, or 10 that sets the "points", the shooter continues to roll until the numbers match the points then the shooter wins, or if a 7 is rolled the shooter loses.

---

Node: v18.16.x  
NPM: v9.5.x

## Project setup
```bash
# npm install
npm ci # if you have a package-lock.json already generated
```

### Compiles and hot-reloads for development
```bash
npm start
# npm run serve
```

### Compiles and minifies for production
```bash
npm run build
```