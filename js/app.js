$(document).ready(function() {


function QnA () {
	var qArray = ["What is your name?", "What is what?", "What what?"];
	var arrayLength = qArray.length;
	for (var i = 0; i < arrayLength; i++) {
	var answer = prompt(qArray[i]);
	console.log(answer);
	var answerKey = [1, 2, 3];
	for (var i = 0; i < arrayLength; i++) {
		if (answer == answerKey) {
			console.log("Right!");
		} else if (answer !== answerKey) {
			console.log("Wrong!");
		}
	}
}
	alert("End!");
}
QnA();

});