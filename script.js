const messages = ["2 Peter 3:9 Jehovah is not slow concerning his promise, as some people consider slowness, but he is patient with you because he does not desire anyone to be destroyed but desires all to attain to repentance", "Pslam 83:18 May people know that you, whose name is Jehovah, you alone are the Most High over all the earth.", "Pslam 8:4 What is mortal man that you keep him in mind, And a son of man that you take care of him?", "Isaiah 55:10,11 For just as the rain and the snow pour down from heaven And do not return there until they saturate the earth, making it produce and sprout, Giving seed to the sower and bread to the eater, 11 So my word that goes out of my mouth will be. It will not return to me without results, But it will certainly accomplish whatever is my delight, And it will have sure success in what I send it to do."]; 

function generateMessage() {
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];

 return `${randomMessage}, remember that its Jehovah talking to you!`;
}

/**
 * Adds an event listener to the specified button element that changes its text content when clicked.
 *
 * @param {string} buttonId - The ID of the button element to add the event listener to.
 * @param {string} newText - The new text content to set for the button when clicked.
 */console.log(generateMessage());

