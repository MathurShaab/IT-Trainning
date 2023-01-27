<!DOCTYPE  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <title>file_1656158778717</title>
      <style type="text/css"> * {margin:0; padding:0; text-indent:0; }
         p { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 12pt; margin:0pt; }
         .a { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }
         .s1 { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }
         .s2 { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10.5pt; }
         .s3 { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }
         .s4 { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10.5pt; }
         .s5 { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10.5pt; }
         table, tbody {vertical-align: top; overflow: visible; }
      </style>
   </head>
   <body>
      <?php 
       $name = $_POST['name'];
       $email = $_POST['email'];
      $objectives = $_POST['objectives'];
      $skills = $_POST['skills'];
      $sec_edu_year = $_POST['sec_edu_year'];
      $sec_edu_per = $_POST['sec_edu_per'];
      $sec_edu_ins = $_POST['sec_edu_ins'];
      $hsec_edu_year = $_POST['hsec_edu_year'];
      $hsec_edu_per = $_POST['hsec_edu_per'];
      $hsec_edu_ins = $_POST['hsec_edu_ins'];
      $other_edu_year = $_POST['other_edu_year'];
      $other_edu_per = $_POST['other_edu_per'];
      $other_edu_ins = $_POST['other_edu_ins'];
      $strenghts = $_POST['strenghts'];
      $hobbies= $_POST['hobbies'];
      $city = $_POST['city'];
      $dob = $_POST['dob'];
      $gender = $_POST['gender'];
      $nationality = $_POST['nationality'];
      $lang =  $_POST['language'];
      $mob = $_POST['mob'];
      $address = $_POST['address'];


       ?>
      <div id="htmlContent">
      <p class="s1" style="padding-top: 4pt;padding-left: 100pt;text-indent: 0pt;line-height: 141%;text-align: left;"><a href="mailto:jatin.mathur0710@gmail.com" style=" color: black; font-family:&quot;Trebuchet MS&quot;, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 12pt;" target="_blank"><?php echo $name ?> <br> </a><a href="mailto:jatin.mathur0710@gmail.com" class="a" target="_blank"><?php echo $email ?></a><br><?php echo $mob ?></p>
      <p style="padding-top: 6pt;padding-left: 320pt;">CAREER OBJECTIVE</p>
      <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;"/>
      <p class="s2" style="padding-top: 3pt;padding-left: 100pt;text-indent: 0pt;text-align: left;">A challenging Career which offers an opportunity to apply my skills knowledge with continuous learning and Growth.</p>
      <p style="text-indent: 0pt;text-align: left;"><br/></p>
      <p style="padding-top: 6pt;padding-left: 320pt;">SKILLS</p>      
      <p class="s2" style="padding-top: 3pt;padding-left: 110pt;text-indent: 0pt;text-align: left;"><?php echo $skills ?><br/></p>
      <p style="padding-top: 6pt;padding-left: 320pt;">EDUCATION</p>
      <p style="text-indent: 0pt;text-align: left;"><br/></p>
      <table style="border-collapse:collapse;margin-left:110pt" cellspacing="0">
         <tbody>  
      <tr>  
        <th>Degree</th>  
        <th>Ins./College</th>  
        <th>Per.(%)</th>
        <th>Year</th>  
      </tr>
         <tr style="height:16pt">
            <td style="width:131pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:5pt">
               <p class="s4" style="padding-top: 2pt;padding-left: 12pt;padding-right: 11pt;text-indent: 0pt;text-align: center;">Secondary Education</p>
            </td>
            <td style="width:132pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:5pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:5pt">
               <p class="s4" style="padding-top: 2pt;padding-left: 2pt;text-indent: 0pt;text-align: center;"><?php echo $sec_edu_ins ?></p>
            </td>
            <td style="width:132pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:5pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:5pt">
               <p class="s4" style="padding-top: 2pt;padding-left: 2pt;text-indent: 0pt;text-align: center;"><?php echo $sec_edu_per ?></p>
            </td>
            <td style="width:132pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:5pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:2pt">
               <p class="s4" style="padding-top: 2pt;padding-left: 21pt;padding-right: 19pt;text-indent: 0pt;text-align: center;"><?php echo $sec_edu_year ?></p>
            </td>
         </tr>
         <tr style="height:28pt">
            <td style="width:131pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:5pt">
               <p class="s4" style="padding-top: 2pt;padding-left: 39pt;text-indent: -17pt;text-align: left;">Senior Secondary Education</p>
            </td>
            <td style="width:132pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:5pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:5pt">
               <p class="s4" style="padding-top: 8pt;padding-left: 2pt;text-indent: 0pt;text-align: center;"><?php echo $hsec_edu_ins ?></p>
            </td>
            <td style="width:132pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:5pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:5pt">
               <p class="s4" style="padding-top: 8pt;padding-left: 2pt;text-indent: 0pt;text-align: center;"><?php echo $hsec_edu_per ?></p>
            </td>
            <td style="width:132pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:5pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:2pt">
               <p class="s4" style="padding-top: 8pt;padding-left: 21pt;padding-right: 19pt;text-indent: 0pt;text-align: center;"><?php echo $hsec_edu_year ?></p>
            </td>
         </tr>
         <tr style="height:28pt">
            <td style="width:131pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:2pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:5pt">
               <p class="s4" style="padding-top: 2pt;padding-left: 39pt;text-indent: -17pt;text-align: left;">Other / College</p>
            </td>
            <td style="width:132pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:5pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:5pt">
               <p class="s4" style="padding-top: 8pt;padding-left: 1pt;text-indent: 0pt;text-align: center;"><?php echo $other_edu_ins ?></p>
            </td>
            <td style="width:132pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:5pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:5pt">
               <p class="s4" style="padding-top: 8pt;padding-left: 1pt;text-indent: 0pt;text-align: center;"><?php echo $other_edu_per ?></p>
            </td>
            <td style="width:132pt;border-top-style:solid;border-top-width:5pt;border-left-style:solid;border-left-width:5pt;border-bottom-style:solid;border-bottom-width:5pt;border-right-style:solid;border-right-width:2pt">
               <p class="s4" style="padding-top: 8pt;padding-left: 21pt;padding-right: 19pt;text-indent: 0pt;text-align: center;"><?php echo $other_edu_year ?></p>
            </td>
         </tr>
         
      </table>
      <p style="text-indent: 0pt;text-align: left;"><br/></p>
      <p style="padding-top: 6pt;padding-left: 320pt;">STRENGTHS</p>
      <p class="s2" style="padding-top: 3pt;padding-left: 110pt;text-indent: 0pt;text-align: left;"><?php echo $strenghts ?></p>
      <p style="text-indent: 0pt;text-align: left;"><br/></p>
      <p style="padding-top: 6pt;padding-left: 320pt;">HOBBIES</p>
      <p class="s2" style="padding-top: 3pt;padding-left: 110pt;text-indent: 0pt;text-align: left;"><?php echo $hobbies ?></p>
      <p style="text-indent: 0pt;text-align: left;"><br/></p>
      <p style="padding-top: 6pt;padding-left: 320pt;">PERSONAL DETAILS</p>
      <p class="s1" style="padding-top: 3pt;padding-left: 110pt;">Address -           
         <span class="s5"><?php echo $address ?></span>
      </p>
      <p class="s1" style="padding-top: 3pt;padding-left: 110pt;text-indent: 0pt;text-align: left;">Date of Birth -        <span class="s5"><?php echo $dob ?></span></p>
      <p class="s1" style="padding-top: 5pt;padding-left: 110pt;text-indent: 0pt;text-align: left;">Gender -           <span class="s5"><?php echo $gender ?></span></p>
      <p class="s1" style="padding-top: 5pt;padding-left: 110pt;text-indent: 0pt;text-align: left;">Nationality -         <span class="s5"><?php echo $nationality ?></span></p>
      <p class="s1" style="padding-top: 5pt;padding-left: 110pt;text-indent: 0pt;text-align: left;">Marital Status -       <span class="s5">Single</span></p>
      <p class="s1" style="padding-top: 5pt;padding-left: 110pt;text-indent: 0pt;text-align: left;">Languages Known -     <span class="s5"><?php echo $lang ?></span></p>
      <p style="padding-top: 6pt;padding-left: 320pt;">DECLARATION</p>
      <p class="s2" style="padding-top: 2pt;padding-left: 110pt;text-indent: 0pt;text-align: left;">I hereby declare that all the above information is true to best of my knowledge</p>
      <p style="text-indent: 0pt;text-align: left;"><br/></p>
      <p class="s2" style="padding-top: 2pt;padding-left: 110pt;text-indent: 0pt;text-align: left;"><?php echo $name ?></p>
  </div>
  
  <center>
  <button id="generatePDF">Download</button></center>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>
  <script type="text/javascript">
     var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

//margins.left, // x coord   margins.top, { // y coord
$('#generatePDF').click(function () {
    doc.fromHTML($('#htmlContent').html(), 7, 7, {
        'width': 700,
        'elementHandlers': specialElementHandlers
    });
    doc.save('sample_file.pdf');
});
  </script>
   </body>

</html>