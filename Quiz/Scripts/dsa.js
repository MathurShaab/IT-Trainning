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
	q:'How is an array initialized in C language?',
	options:['int a[3]={1,2,3}','int a = {1,2,3}','int a[]={1,2,3}','int a(3)=[1,2,3]'],
	answer:0
},


{
	q:'Which of the following is a linear data structure?',
	options:['Array','AVL Tree','Binary Tree','Graph'],
	answer:0
},

{
	q:'How is the 2nd element in an array accessed based on pointer notation?',
	options:['*a+2','*(a+2)','*(*a+2)','&(a+2)'],
	answer:1
},

{
	q:'Which of the following is not the type of queue?',
	options:['Piority queue','Single-End queue','Circular Queue','Ordinary Queue'],
	answer:1
},

{
	q:'From following which is not the operation of data structure?',
	options:['Operation That Maniplate data in some way','Operation That Perform Calculation','Operations That Check For Syntax Error','None Of the Above'],
	answer:2
},

{
	q:'What is the size of the int data type (in bytes) in C?',
	options:['4','8','2','1'],
	answer:0
},
	
{
	q:'How to declare a double-pointer in C?',
	options:['int *val','int **val','int &val','int *&val'],
	answer:1
},


{
	q:'If p is an integer pointer with a value 1000, then what will the value of p + 5 be?',
	options:['1020','1004','1005','1010'],
	answer:0
},
{
	q:'What is the disadvantage of array data structure?',
	options:['The Amount Of Memory to be  allocted should be known beforehand','Element of And Array Can Be Accessed In Constant Time','Both A And B','None Of The Above'],
	answer:0
},

{
	q:'What function is used to append a character at the back of a string in C++?',
	options:['push_back()','append()','push()','insert()'],
	answer:0
},

{
	q:'When a pop() operation is called on an empty queue, what is the condition called?',
	options:['Overflow','Underflow','Syntax Error','Garbage value'],
	answer:1
},

{
	q:'Which of the following data structures can be used to implement queues?',
	options:['Stack','Arrays','LinkedList','All Of The Above'],
	answer:3
},

{
	q:'Why is reusability a desirable feature?',
	options:['Reduced Compilation Time','Decrease Testing Time','Lower Maintance Cost','None'],
	answer:2
},

 {
	q:'Identify the operators which cannot be overloaded.',
	options:['?:','.(dot operator)','> >','Both A And B'],
	answer:3
},



{
	q:'By default, fields in a structure of a C program is?',
	options:['Public','Private','Protected','None'],
	answer:0
},


{
	q:'Identify the feature using which, one object can interact with another object.',
	options:['Message passing','Message Reading','Data Binding','Data Transfer'],
	answer:0
},
{
	q:'How to find the length of an array in C?',
	options:['sizeof(a)','sizeof(a[0])','sizeof(a)/sizeof(a[0])','sizeof(a)*sizeof(a[0])'],
	answer:2
},
{
	q:'Which of the following is not a storage class specifier in C?',
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

