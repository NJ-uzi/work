#!/usr/bin/env node


//node factor.js 11110000

var number = Number(process.argv[2])

function factor(num) {
  var factors = []
  for (let i = 0; ; i++) {
    if (num % i == 0) {
      factors.push[i]
      num = num / i
      i--
    }
  }
  return factors
}

var factors = factor(number)
console.log(number + ':' + factors.join(' '))