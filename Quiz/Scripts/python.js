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
	q:'Who developed Python Programming Language? ',
	options:[' Wick van Rossum','Rasmus Lerdorf','Guido van Rossum','Niene Stom '],
	answer:2
},


{
	q:'Which type of Programming does Python support? ',
	options:['Object-oriented programming','Structured programming','Functional programming','All of the mentioned'],
	answer:3
},

{
	q:'Is Python case sensitive when dealing with identifiers?',
	options:['No','Yes','Machine dependent','None of the mentioned'],
	answer:0
},

{
	q:'Which of the following is the correct extension of the Python file? ',
	options:['.python','.pl','.py','.p'],
	answer:2
},

{
	q:'Is Python code compiled or interpreted?',
	options:[' Python code is both compiled and interpreted','Python code is neither compiled nor interpreted,Python code is only compiled,Python code is only interpreted'],
	answer:1
},

{
	q:'All keywords in Python are in ___',
	options:[' Capitalized','Lower case','UPPER CASE','None of the mentioned'],
	answer:3
},
	
{
	q:'Which of the following is used to define a block of code in Python language?',
	options:['Indentation','Key','Brackets','All of the mentioned'],
	answer:0
},
{
	q:' Which keyword is used for function in Python language?',
	options:['Function','Def','Fun','Define'],
	answer:1
},
{
	q:' Which of the following character is used to give single-line comments in Python?',
	options:['//','#','!','/*'],
	answer:1

},

{
	q:'Which of the following functions can help us to find the version of python that we are currently working on?',
	options:['sys.version(1)','sys.version(0)','sys.version()','sys.version'],
	answer:0
},

{
	q:'Python supports the creation of anonymous functions at runtime, using a construct called ____ ',
	options:['Pi','Anonymous','Lambda','None of the mentioned'],
	answer:2
},

{
	q:'What is the order of precedence in python? ',
	options:[' Exponential/Parentheses/Multiplication/Division/Addition/Subtraction','Exponential/Parentheses/Division/Multiplication/Addition/Subtraction','Parentheses/Exponential/Multiplication/Division/Subtraction/Addition','Parentheses/Exponential/Multiplication/Division/Addition/Subtraction'],
	answer:3
},

{
	q:'What does pip stand for python?',
	options:[' Unlimited length','All private members must have leading and trailing underscores','Preferred Installer Program','None of the mentioned'],
	answer:2
},

 {
	q:' Which of the following functions is a built-in function in python? ',
	options:[' Factorial()','Print()','Seed()','Sqrt()'],
	answer:1
},


{
	q:'Which of the following is the use of id() function in python?',
	options:['Every object doesn’t have a unique id','Id returns the identity of the object','All of the mentioned,None of the mentioned'],
	answer:1
},
{
	q:' Which of the following is not a core data type in Python programming?',
	options:['Tuples','Lists','Class','Dictionary'],
	answer:2
},
{
	q:'Which of these is the definition for packages in Python?',
	options:[' A set of main modules','A folder of python modules','A number of files containing Python definitions and statements','A set of programs making use of Python modules'],
	answer:1
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

