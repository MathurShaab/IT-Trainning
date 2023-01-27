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
	q:'Number of primitive data types in Java are?',
	options:['6','7','8','9'],
	answer:2
},


{
	q:'What is the size of float and double in java?',
	options:['32 And 64','32 And 32','64 And 64','64 And 32'],
	answer:0
},

{
	q:'Automatic type conversion is possible in which of the possible cases?',
	options:['Byte to Int','Int To Long','Long To Int','Short To Int'],
	answer:1
},

{
	q:'Select the valid statement?',
	options:['Char[] ch = new char(5)','Char[] ch = new char[5]','Char[] ch = new char()','char[] ch = new char[]'],
	answer:1
},

{
	q:'When an array is passed to a method, what does the method receive?',
	options:['The Reference Of An Array','A Copy of the array','length of the array','Copy The First Element'],
	answer:0
},

{
	q:'What is the size of the int data type (in bytes) in C?',
	options:['4','8','2','1'],
	answer:0
},
	
{
	q:'Select the valid statement to declare and initialize an array?',
    options:['Int[] A = {}','Int [] A = {1,2,3}','Int [] A = (1,2,3)','int [][] A = {1,2,3}'],
	answer:1
},


{
	q:'Arrays in java are-',
	options:['Object Reference','objects','Primitive data type','None'],
	answer:1
},
{
	q:'When is the object created with new keyword?',
	options:['At Run Time','At The Compile Time','Depends On Code','None'],
	answer:0
},

{
	q:'Identify the corrected definition of a package.',
	options:['A package is collection of editing tools','A package is collection of classes','A package is collection of classes and interfaces','A package is collection of interfaces'],
	answer:2
},

{
	q:'Identify the keyword among the following that makes a variable belong to a class,rather than being defined for each instance of the class.',
	options:['final','static','volatile','abstract'],
	answer:1
},

{
	q:'In which of the following is toString() method defined?',
	options:['java.lang.object','java.lang.String','java.lang.util','None'],
	answer:0
},

{
	q:'compareTo() returns',
	options:['True','False','An int Value','None'],
	answer:2
},

 {
	q:'To which of the following does the class string belong to.',
	options:['java.lang','java.awt','java.applet','java.String'],
	answer:0
},


{
	q:'Total constructor string class have?',
	options:['3','7','13','20'],
	answer:2
},
{
	q:'Identify the return type of a method that does not return any value.',
	options:['int','void','double','none'],
	answer:1
},
{
	q:'What is the return type of the fopen() function in Java?',
	options:['Pointer to the FILE object','Pointer to an Integer','An Integer','An Integer'],
	answer:0
},

{
	q:'Identify the feature using which, one object can interact with another object.',
	options:['Message passing','Message Reading','Data Binding','Data Transfer'],
	answer:0
},
{
	q:'How to find the length of an array in java?',
	options:['sizeof(a)','sizeof(a[0])','sizeof(a)/sizeof(a[0])','sizeof(a)*sizeof(a[0])'],
	answer:2
},
{
	q:'Which of the following is not a storage class specifier in java?',
	options:['volatile','extern','typedef','static'],
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

