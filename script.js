function toCase(text) {
  // write your code here
	let captialText= text.toUpperCase();
    let lowerText = text.toLowerCase();
    return lowerText+"-"+captialText;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
