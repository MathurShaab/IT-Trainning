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
	q:'ASP stands for?',
	options:['Active Server Pages,Access Server Pages,Active Server Platform,Active Server Programming'],
	answer:0
},


{
	q:'ASP (aka Classic ASP) was introduced in?',
	options:['1997,1998,1999,2000'],
	answer:1
},

{
	q:'Classic ASP pages have the file extension?',
	options:['.aspx,.net,.asp,.cs'],
	answer:2
},

{
	q:'Which of the following is true? ',
	options:[' ASP.NET Web Forms is not a part of the new ASP.NET Core,ASP.NET Web Forms is an event driven application model.,ASP.NET MVC is an MVC application model (Model-View-Controller),All of the above'],
	answer:3
},

{
	q:'ASP.NET is?',
	options:[' client side technologies,,server side technologies,Both A and B,None of the above'],
	answer:2
},

{
	q:'Web.config file is used',
	options:['Configures the time that the server-side codebehind module is called,To store the global information and variable definitions for the application,To configure the web server,To configure the web browser'],
	answer:1
},
	
{
	q:'Difference between Response.Write() andResponse.Output.Write().',
	options:[' Response.Output.Write() allows you to buffer output,Response.Output.Write() allows you to write formatted output,Response.Output.Write() allows you to flush output,Response.Output.Write() allows you to stream output'],
	answer:1
},


{
	q:'What class does the ASP.NET Web Form class inherit from by default?',
	options:[' System.Web.UI.Page,System.Web.UI.Form,System.Web.GUI.Page,System.Web.Form'],
	answer:1
},
{
	q:'Attribute must be set on a validator control for the validation to work',
	options:[' ControlToValidate,ControlToBind,ValidateControl,Validate'],
	answer:0
},

{
	q:'Default Session data is stored in ASP.Net.',
	options:[' StateServer,Session Object,InProcess,All of the above'],
	answer:2
},

{
	q:' What is Maximum No. Of Cookies That Can Be Allowed Website ?',
	options:['10','20','30','More Than 30'],
	answer:0
},

{
	q:'We Are not using server when we run our .aspx project ',
	options:['True','False','Depends Upon Code','None'],
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

