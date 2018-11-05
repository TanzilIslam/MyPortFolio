

function populate(){
	if(quiz.isEnded()){
		showScore();
		
		}
	
	else{
		
		//show Question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getquestionIndex().text;
		
		console.log(quiz.getquestionIndex().answer);
		
		//show choices
		var choices = quiz.getquestionIndex().choices;
		length1 = choices.length;
		
		for(var i = 0; i<length1; i++ ){
			var element1 = document.getElementById("choice" +i);
			element1.innerHTML=choices[i];
			
			guess("btn" + i,choices[i]);
		}
		showProgress();
	}
};

function showProgress(){
	var current_question_number = quiz.questionIndex +1;
	var element4 = document.getElementById("progress");
	element4.innerHTML="Question " + current_question_number + " of " + quiz.questions.length; 
	 
	
};


function guess(id, guess){
	var button = document.getElementById(id);
	button.onclick = function()
	{
		quiz.guess(guess);
		populate();
	}
};

function showScore(){
	
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id ='score' background-color: white > Your scores: "+ quiz.score  +  "</h2>";
	
	var element3 = document.getElementById("quiz");
	element3.innerHTML= gameOverHtml;
	
};


//creating new object of Question function which is :1.text 2.choices 3.answare
var questions = [
				 new Question("Which one is not OOP Language?", ["java","c#","c++","c"],  "c"),
				 new Question("Which Language is used for styling web pages?", ["HTML","JQuery","XML","css"],  "css"),
				 new Question("Which is used for web Apps?", ["PHP","python","JavaScript","All"], "All"),
				 new Question("MVC is a _____",["language","library","FrameWork","All"], "FrameWork")
];


var quiz = new Quiz (questions);

populate();