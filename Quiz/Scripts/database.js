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
	q:'What do you mean by one to many relationships?',
	options:['One class may have many teachers','One teacher can have many classes','Many classes may have many teachers','Many teachers may have many classes'],
	answer:1
},


{
	q:'Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?',
	options:['DML(Data Manipulation Language)','Query','Relational Schema','DDL(Data Definition Language)'],
	answer:3
},

{
	q:'Which of the following provides the ability to query information from the database and insert tuples into, delete tuples from, and modify tuples in the database?',
	options:['DML(Data Manipulation Language)','DDL(Data Definition Language)','Query','Relational Schema'],
	answer:0
},

{
	q:' A Database Management System is a type of _____software.',
	options:['It is a type of system software','It is a kind of application software','It is a kind of general software','Both A and C'],
	answer:0
},

{
	q:'The term "FAT" is stands for___',
	options:['File Allocation Tree','File Allocation Table','File Allocation Graph','All of the above'],
	answer:1
},

{
	q:' Which of the following can be considered as the maximum size that is supported by FAT?',
	options:['8GB','4GB','4TB','None of the above'],
	answer:1
},
	
{
	q:'The term "NTFS" refers to which one of the following?',
	options:['New Technology File System','New Tree File System','New Table type File System','Both A and C'],
	answer:0
},


{
	q:'Which of the following can be considered as the maximum size that is supported by NTFS?',
	options:['4GB','16TB','64TB','8TB'],
	answer:0
},
{
	q:'A huge collection of the information or data accumulated form several different sources is known as ____:',
	options:['Data Management','Data Mining','Data Warehouse','Both B and C'],
	answer:2
},

{
	q:'Which of the following can be used to extract or filter the data & information from the data warehouse?',
	options:['Data redundancy','Data recovery tool','Data mining','Both B and C'],
	answer:2
},

{
	q:' Which one of the following refers to the copies of the same data (or information) occupying the memory space at multiple places.',
	options:['Data Repository','Data Inconsistency','Data Mining','Data Redundancy'],
	answer:3
},

{
	q:' Which one of the following refers to the "data about data"?',
	options:['Directory','Sub Data','Warehouse','Meta Data'],
	answer:3
},

{
	q:'Which of the following refers to the level of data abstraction that describes exactly how the data actually stored?',
	options:['Conceptual Level','Physical Level','File Level','Logical Level'],
	answer:1
},

 {
	q:' To which of the following the term "DBA" referred?',
	options:['Data Bank Administrator','Database Administrator','Data Administrator','None of the above'],
	answer:1
},


{
	q:'In general, a file is basically a collection of all related____. ',
	options:['Rows & Columns','Fields','Database','Records'],
	answer:3
},
{
	q:'The term "Data" refers to:',
	options:['The electronic representation of the information( or data)','Basic information','Row Facts and figures','Both A and C'],
	answer:2
},
{
	q:'Rows of a relation are known as the ___.',
	options:['Degree','Tuples','Entity','All of the above'],
	answer:3
},

{
	q:'Which of the following refers to the number of tuples in a relation?',
	options:['Entity','Column','Cardinality','None of the above '],
	answer:2
},
{
	q:'Which one of the following is a type of Data Manipulation Command?',
	options:['Create','Alter','Delete','All of the above'],
	answer:2
},
{
	q:'Which of the following command is a type of Data Definition language command? ',
	options:['Create','Update','Delete','Merge'],
	answer:0
},

{
	q:'Which of the following is a top-down approach in which the entity higher level can be divided into two lower sub-entities?',
	options:['Aggregation','Generalization','Specialization','All of the above'],
	answer:2
},
{
	q:'In which one of the following, the multiple lower entities are grouped (or combined) together to form a single higher-level entity? ',
	options:['Specialization','Generalization','Aggregation','None of the above '],
	answer:1
},
{
	q:' In a relation database, every tuples divided into the fields are known as the____.',
	options:['Queries','Domains','Relations','All of the above'],
	answer:1
},

{
	q:'The term "TCL" stands for___. ',
	options:['Ternary Control Language','Transmission Control Language','Transaction Central Language','Transaction Control Language'],
	answer:3
},
{
	q:' In the relational table, which of the following can also be represented by the term "attribute"?',
	options:['Entity','Row','Column','Both B &C'],
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

