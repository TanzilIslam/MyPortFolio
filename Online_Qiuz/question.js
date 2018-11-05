
function Question(text, choices, answer){
	
	this.text = text;
	this.choices = choices;
	this.answer = answer;
	//var z  = answer;
	//console.log(z);
	 
};
//prototype : it is used for writing the function outside of the constructor
 // correctAnsware is equal to a function which is recevied by choice
 Question.prototype.correctAnsware = function(choice){
	 return choice === this.answer;
 };

 