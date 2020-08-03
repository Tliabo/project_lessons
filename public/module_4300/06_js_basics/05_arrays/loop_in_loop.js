/**
 * You are in charge of managing social channels for your company.
 * One of your tasks is to get go over user messages and change any negative
 * comments to possitive comments.
 * You have grown tired of doing this and want to automate the process.
 *
 * You have already prepared a bit and created 2 dictionaries.
 * The first one: goodwords, is a list of possitive words that you can use to replace negative words with
 * The second one: evilwords, is a list of words that you know are negative and need to be removed.
 */

let goodWords = ['amazing', 'intriguing', 'versatile'];
let evilWords = ['boring', 'useless', 'obsolete'];

let messages = [
  'Learning to code is very important in the modern age',
  'JavaScript is an obsolete and useless programming language',
  'There is nothing more useless than programming',
  'I think writing code is boring',
  'I absolutely love js',
];

/* Think about this logically first, what do we need to do? */
/**
 * 1. We are going to need to go through every sentence in 'messages'
 *  - This means we are going to need to loop throught messages
 * 2. We are going to need to go through all the evilwords
 *  - This means we are going to need to loop through evilwords
 *
 * This puts us in a position where we need to create a loop in a loop
 * Out first loop goes through every sentence and then for every single sentence we need to go
 * through all the evil words, to check if there is an evil word in it
 */

let changedMessages = [];

for (let i = 0; i < messages.length; i++) {
  let currentMessage = messages[i];

  for (let j = 0; j < evilWords.length; j++) {
    currentMessage = currentMessage.replace(evilWords[j], goodWords[j]);
  }

  changedMessages.push(currentMessage);
}

console.log(changedMessages);
