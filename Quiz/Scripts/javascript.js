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
	q:'Which type of JavaScript language is ___',
	options:['Object-Oriented,Object-Based,Assembly-language,High-level'],
	answer:1
},


{
	q:' In JavaScript, what is a block of statement?',
	options:['Conditional block,block that combines a number of statements into a single compound statement,both conditional block and a single statement,block that contains a single statement'],
	answer:1
},

{
	q:'When interpreter encounters an empty statements, what it will do:',
	options:['Shows a warning,Prompts to complete the statement,Throws an error,Ignores the statements'],
	answer:3
},

{
	q:'The "function" and " var" are known as:',
	options:['Keywords,Data types,Declaration statements,Prototypes'],
	answer:2
},

{
	q:'Which of the following variables takes precedence over the others if the names are the same?',
	options:['Global variable,The local element,The two of the above,None of the above'],
	answer:1
},

{
	q:'Which one of the following is the correct way for calling the JavaScript code?',
	options:['Preprocessor,Triggering Event,RMI,Function/Method'],
	answer:3
},
	
{
	q:'Which of the following type of a variable is volatile?',
	options:['Mutable variable,Dynamic variable,Volatile variable,Immutable variable'],
	answer:0
},


{
	q:'When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.',
	options:['Prints an exception error,Prints an overflow error,Displays "Infinity",Prints the value as such'],
	answer:2
},
{
	q:'In the JavaScript, which one of the following is not considered as an error:',
	options:['Syntax error,Missing of semicolons,Division by zero,Missing of Bracket'],
	answer:2
},

{
	q:'Which of the following number object function returns the value of the number?',
	options:['toString(),valueOf(),toLocaleString(),toPrecision()'],
	answer:1
},

{
	q:' Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?',
	options:['slice(),split(),substr(),search()'],
	answer:2
},

{
	q:' In JavaScript, what will be used for calling the function definition expression:',
	options:['Function prototype,Function literal,Function calling,Function declaration'],
	answer:1
},

{
	q:'Which of the following one is the property of the primary expression:',
	options:['Contains only keywords,basic expressions containing all necessary functions,contains variable references alone,stand-alone expressions'],
	answer:3
},

 {
	q:' Which one of the following is used for the calling a function or a method in the JavaScript: ',
	options:['Property Access Expression,Functional expression,Invocation expression,Primary expression'],
	answer:2
},


{
	q:' The "new Point(3,2)", is a kind of _______ expression',
	options:['Object Creation Expression,Primary Expression,Invocation Expression,Constructor Calling Expression'],
	answer:0
},
{
	q:'Which one of the following operator is used to check weather a specific property exists or not:',
	options:['Exists,exist,within,in'],
	answer:3
},
{
	q:'"An expression that can legally appear on the left side of an assignment expression." is a well known explanation for variables, properties of objects, and elements of arrays. They are called_____.',
	options:['Properties,Prototypes,Definition,Lvalue'],
	answer:3
},

{
	q:'In a case, where the value of the operator is NULL , the typeof returned by the unary operator is___.',
	options:['undefined,string,boolean,object'],
	answer:3
},
{
	q:'What are the three important manipulations for a loop on a loop variable?',
	options:['Updation/Incrementation/Initialization,Initialization/Testing/Incrementation,Testing/Updation/Testing,Initialization/Testing/Updation'],
	answer:3
},
{
	q:'Which one of the following is not considered as "statement" in the JavaScript? ',
	options:['use strict,debugger,if,with'],
	answer:0
},

{
	q:'What if we define a "for" loop and it removes one of the properties that has not yet been enumerated?',
	options:['The removed property will be stored in a cache,The loop will not run at all,That property will be enumerated,That specific property will not be enumerated'],
	answer:3
},
{
	q:' Which of the following is the correct response by the interpreter in a jump statement when an exception is thrown? ',
	options:['The interpreter will jump to the one of the nearest enclosing exception handler,The interpreter will throw another exception,The interpreter will stop working,The interpreter throws an error '],
	answer:0
},
{
	q:'What is the basic purpose of the "toLocateString()" method? ',
	options:['It returns a localised object representation,It returns a localized string representation of the object,It return a local time in the string format,It return a parsed string'],
	answer:1
},

{
	q:' A set of unordered properties that, has a name and value is called______',
	options:['String,Array,Serialized Object,Object'],
	answer:3
},
{
	q:' Every object contains three object attributes that are _______.',
	options:['Prototype/class/object extensible flag,Prototype/class/objects parameters,Class/parameters/object extensible flag,Native object/ Classes and Interfaces and Object extensible flag'],
	answer:0
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

