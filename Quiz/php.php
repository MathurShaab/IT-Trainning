<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	 <meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	

	<center>
	<div class="circle">
	<div id="timer" ></div></div></center>

		
		<div class="quiz-container">
	<div class="question-number">
		<h3>QUESTION <span class="question-num-value"> </span> of <span class="total-question"></span></h3>

	</div>
    <div class="question">
    	
    </div>
    <div class="options">
    	<div id="0" class="option1 " onclick="check(this)"> </div>
    	<div id="1" class="option2 " onclick="check(this)">  </div>
    	<div id="2" class="option3 " onclick="check(this)"> </div>
    	<div id="3" class="option4 " onclick="check(this)">  </div>
    </div>
    <div class="button">
     <button type="button" class="btn" onclick="next()">NEXT</button>
    </div>
    <div class="answers-tracker">

</div></div>
<div class="quiz-over">
	<div class="box">
		
	<h1 ><span class="grade"></span> <br>
		You Got <span class="correct-answers"></span> out of <span class="total-que"></span> answers correct!<br>
		That's <span class="per"> </span>
	</h1>
	<button type="button" onclick="tryAgain()"> SEE YOOUR BADGE </button>
</div>
</div>
<script src="Scripts/php.js"></script>


</body>
</html>