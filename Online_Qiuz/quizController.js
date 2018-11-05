
function Quiz(questions)
{
	this.score = 0;
	this.questionIndex = 0;
	this.questions = questions;
};
Quiz.prototype.getquestionIndex = function(){
	return this.questions[this.questionIndex];
};

//isEnded function is used for checking the quiz is end or not
Quiz.prototype.isEnded = function(){
	return this.questions.length === this.questionIndex;
};

//guess function is used for scoring
Quiz.prototype.guess = function(answer){
	
	if(this.getquestionIndex().correctAnsware(answer))
	{
		  this.score++;
		
	}
	this.questionIndex++;

};