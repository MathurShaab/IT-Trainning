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
	q:'Which of the following can read and render HTML web pages',
	options:['Server','Head Tag','Web Browser','Empty'],
	answer:2
},


{
	q:'Identify the range of byte data types in JavaScript.',
	options:['-10 to 9','-128 to 127','-32768 to 32767','None'],
	answer:1
},

{
	q:'The latest HTML standard is',
	options:['HTML 4.0','HTML 5.0','XML','SGML'],
	answer:1
},

{
	q:'Why were cookies designed?',
	options:['For Server - Side Programming','For Client - Side Programming ','Both A And B','None'],
	answer:0
},

{
	q:'What are variables used in JavaScript programs',
	options:['Varying Randomly','Storing Numbers ,Dates And Other Values','Used As Header File','None The Above'],
	answer:1
},
	
{
	q:'Simple network management protocol uses which of the following port number',
    options:['163','164','160','161'],
	answer:3
},


{
	q:'Identify the incorrect HTML tag among the following',
	options:['<input>','<select>','<list>','<textarea>'],
	answer:2
},
{
	q:'Full form of W3C is _____________',
	options:['World Wide Website Community','World Wide Web Community','World Wide Web Consortium','None'],
	answer:2
},

{
	q:'Identify the empty or void element in HTML.',
	options:['<sup>','<br>','<p>','<abbr>'],
	answer:1
},

{
	q:'Which of the following is used to transmit information on the world wide web?',
	options:['HPPT','HTTP','HTTTP','HTPP'],
	answer:1
},

{
	q:'A website is a _______  cookie.',
	options:['volatile','transient','Non volatile','None'],
	answer:1
},

{
	q:'Among which of the following is HTML a subset.',
	options:['SGMD','SGMT','SGML','None'],
	answer:2
},
{
		q:'When is the body tag used?',
		options:['After Head Tag','After FORM Tag','After Title Tag','None'],
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

