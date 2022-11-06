#!/usr/bin/env node

// This is going to be the file that runs when you 
// link/install the package and run roll-dice.

import minimist from "minimist";
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

const sides = args.sides? args.sides:6;
const dice = args.dice? args.dice:2;
const rolls = args.rolls? args.rolls:1;


const output = roll(sides, dice, rolls);
console.log(JSON.stringify(output));


