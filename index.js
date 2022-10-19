const username = prompt("Whats your name?: ");
let range = 2;
let trial = 1;
let level = 1;
let point = 0;

console.log(`
Welcome ${username}, Guess a wholenumber between 1 and ${range}, you have two trials
level 1
`)
let guess = parseInt(prompt("Your Guess: "))

const guessingGame = (range) => {
  while (true) {
    let random = Math.floor(Math.random() * range) + 1;
    if (guess === random) {
      range++
      level++
      trial = 2
      point++
      console.log(`Congrats you won ${username},you have ${point} point. Can you win level ${level}?, Guess a wholenumber between 1 and ${range}, you have two trials`)
      guess = parseInt(prompt("Your Guess: "))
      trial--
    } else if (guess !== random) {
      console.log(`Sorry try again, you have ${trial} trial remaining `)
      guess = parseInt(prompt("Your Guess: "))
      trial--
      if (guess !== random || trial === 0) {
        console.log(`Sorry ${username}, you lost`)
        break
      }
    }
  }
}

guessingGame(range);