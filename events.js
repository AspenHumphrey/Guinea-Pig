console.log("hey");

let outputDiv = document.getElementById("output-target");
let articleEl = document.getElementsByClassName("article-section");
let header = document.getElementById("page-title");
let input = document.getElementById("keypress-input");

header.addEventListener("mouseleave", function(){
	outputDiv.innerHTML = `you left me`
});

header.addEventListener("mouseover", function(){
	outputDiv.innerHTML = `you moved over the header`
});

// When you type characters into the input field, 
// the output element should mirror the text in the input field.
// mirrorInputToOutput = function(mirroredInput){
// 	input.innerHTML = mirroredInput;
// 	outputDiv.appendChild(input);
// 	console.log(mirroredInput );
// };

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    	let inputText = input.value;
    	let outputText = document.createElement("p");
    	outputText.setAttribute("class", "mirrored");
    	outputText.innerHTML = inputText;

    	outputDiv.appendChild(outputText);
   		console.log(inputText);
   }
});


// input = outputDiv

let piggie = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function(){
	piggie.classList.toggle("blue");
	console.log(piggie, piggie.classList);
});

document.getElementById("make-large").addEventListener("click", function(){
	piggie.classList.toggle("bold");
	console.log(piggie, piggie.classList);
});

document.getElementById("add-border").addEventListener("click", function(){
	piggie.classList.toggle("border");
	console.log(piggie, piggie.classList);
});

document.getElementById("add-rounding").addEventListener("click", function(){
	piggie.classList.toggle("rounded");
	console.log(piggie, piggie.classList);
});