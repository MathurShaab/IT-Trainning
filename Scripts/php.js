const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-que");
const gradeSpan=document.querySelector(".grade");
const percentage=document.querySelector(".per");

const question=document.querySelector(".question");
const op1=document.querySelector(".option1"); 
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myarr=[];
let score=0;
let limit=10;

//question and options and answers
const questions=[
	
{
	q:'PHP stands for -',
	options:['Hypertext Preprocessor','Pretext Hypertext Preprocessor','Personal Homepage','None Of The Above'],
	answer:0
},


{
	q:'Who is known as the father of PHP?',
	options:['Drek Kolvi','List Berly','Ramus Ladrof','None Of The Above'],
	answer:2
},

{
	q:'Variable name in PHP starts with -',
	options:['!','$','&','#'],
	answer:1
},

{
	q:'Which of the following is the default file extension of PHP?',
	options:['.php','.js','.html','.xml'],
	answer:0
},

{
	q:' Which of the following is not a variable scope in PHP?',
	options:['Extern','local','Static','Global'],
	answer:0
},

{
	q:'Which of the following is correct to add a comment in php?',
	options:['& …… &','// ……','/* …… */','Both (b) and (c)'],
	answer:3
},
	
{
	q:'Which of the following is used to display the output in PHP?',
	options:['echo','write','print','both A AND B'],
	answer:3
},


{
	q:'Which of the following is the use of strlen() function in PHP?',
	options:['The strlen() function returns the type of string','The strlen() function returns the length of string','The strlen() function returns the value of string','The strlen() function returns both value and type of string'],
	answer:1
},
{
	q:' Which of the following is used for concatenation in PHP?',
	options:['+(Plus)','.(dot)','*(Asterisk)','append()'],
	answer:1
},

{
	q:'Which of the following starts with __ (double underscore) in PHP?',
	options:['Inbuilt constants','User-defined constants','Magic constants','Magic constants'],
	answer:2
},

{
	q:'Which of the following is the use of strpos() function in PHP?',
	options:['The strpos() function is used to search for the spaces in a string','The strpos() function is used to search for a number in a string','The strpos() function is used to search for a character/text in a string','The strpos() function is used to search for a capitalize character in a string'],
	answer:2
},

{
	q:'What does PEAR stands for?',
	options:['PHP extension and application repository','PHP enhancement and application reduce','PHP event and application repository','None of the above'],
	answer:0
},

{
	q:'Which of the following is the correct way to create a function in PHP?',
	options:['Create myFunction()','New_function myFunction()','function myFunction()','None of the above'],
	answer:2
},


 {
	q:') Which of the following PHP function is used to generate unique id?',
	options:['id()','mdid()','uniqueid()','None of the above'],
	answer:2
},
]



// set questions and option and question number
totalQuestionSpan.innerHTML=limit;
function load()
{
	questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;

}


function check(element){
	if(element.id==questions[questionIndex].answer)
	{
		element.classList.add("correct");
		updateAnswerTracker("correct")
		score++;
		console.log("score :"+score)
	}
	else
	{
		element.classList.add("wrong");
		updateAnswerTracker("wrong")
	}
	disabledOptions()
}

function disabledOptions()
{
	for(let i=0;i<options.length; i++)
	{
		options[i].classList.add("disabled");
		if(options[i].id==questions[questionIndex].answer)
			{
				options[i].classList.add("correct");
	}
}
}
function enableOptions()
{
for(let i=0; i<options.length;i++)
{
	options[i].classList.remove("disabled","correct","wrong");
}

	}

function validate(){
	if(!options[0].classList.contains("disabled")){
		alert("Please Select One Option Atlest")
	}
	else{
		enableOptions();
		randomQuestion();

	}
}
function next(){

	resetmyTimer();
validate();


}    




function randomQuestion(){
	
	let randomNumber=Math.floor(Math.random()*questions.length);
let hitDuplicate=0;   
   if(index==limit)
   {
    quizOver();
   }
   else{
   	if(myArray.length>0)
   	{
   		for(let i=0; i<myArray.length; i++){
	if(myArray[i]==randomNumber){
		hitDuplicate=1;
		break;
	}


}
if(hitDuplicate==1)
{
	randomQuestion();
}
else{
	questionIndex=randomNumber;
	load();
	myarr.push(questionIndex);
}
   	}
   	if(myArray.length==0)
   	{
   		questionIndex=randomNumber;
   		load();
   		myarr.push(questionIndex);
   	}

//console.log("myArr:"+myarr);
myArray.push(randomNumber);
    
}
}
function answerTrakcer(){
	for(let i=0; i<limit; i++){
		const div=document.createElement("div");
		answerTrackerContainer.appendChild(div);
	}
}
function updateAnswerTracker(classNam)
{
	answerTrackerContainer.children[index-1].classList.add(classNam);
}

function quizOver()
{
	
document.querySelector(".quiz-over").classList.add("show");
correctAnswerSpan.innerHTML=score;
totalQuestionSpan2.innerHTML=limit;
percentage.innerHTML=(score/limit)*100 +"%";

}

function tryAgain()

{	
	console.log(score);
if(score < 6){

	window.location.href ="bronze.html";
}
else if(score < 8)
{
	window.location.href ="silver.html";
}
else
{
	window.location.href ="gold.html";
}
}

var sec = 30;
var time = setInterval(myTimer, 1000);

function myTimer() {
	
    document.getElementById('timer').innerHTML = sec ;
    sec--;

    if (sec == -1) {
        clearInterval(time);
        window.location.href = '##times.html';
    }

   }
function resetmyTimer()
{
	sec =0;
	sec=30;
	myTimer();
}

window.onload=function()
{
	randomQuestion()
	answerTrakcer()
	myTimer()
}

