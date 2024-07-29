/*import readline from 'readline';*/

const messages = [
  "2 Peter 3:9 Jehovah is not slow concerning his promise, as some people consider slowness, but he is patient with you because he does not desire anyone to be destroyed but desires all to attain to repentance",
  "Pslam 83:18 May people know that you, whose name is Jehovah, you alone are the Most High over all the earth.",
  "Pslam 8:4 What is mortal man that you keep him in mind, And a son of man that you take care of him?",
  "Isaiah 55:10,11 For just as the rain and the snow pour down from heaven And do not return there until they saturate the earth, making it produce and sprout, Giving seed to the sower and bread to the eater, 11 So my word that goes out of my mouth will be. It will not return to me without results, But it will certainly accomplish whatever is my delight, And it will have sure success in what I send it to do."
];

function generateMessage() {
  let randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return randomMessage;
} 

console.log(generateMessage()); 



/* 
const rL = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/**
 * Asks the user if they would like to generate a random message.
 * If the user responds with 'yes', it generates and logs a random message.
 * If the user responds with 'no', it logs 'Goodbye!'.
 * For any other response, it logs 'Invalid input. Please enter "yes" or "no".'.
 * Finally, it closes the readline interface.
 *
 * @param {string} answer - The user's response to the question.
 */
/*
rL.question('Would you like to generate a random message? (yes/no)', (answer) => {
  if (answer.toLowerCase() === 'yes') {
    console.log(generateMessage());
  } else if (answer.toLowerCase() === 'no') {
    console.log('Goodbye!');
  } else {
    console.log('Invalid input. Please enter "yes" or "no".');
  }
  rL.close();
}); 
*/
