<?php 

session_start();

if (isset($_SESSION['s.no']) && isset($_SESSION['email'])) {

 ?>
<!doctype html>
<html lang="en">

<head>
   
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="quizlandpagecss.css">
  <title>Homepage</title>
</head>

<!-- Body start -->

<body>

  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="">IT Training</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="aboutus.html" target="_blank">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="feedback.html" target="_blank">Feedback</a>
          </li>
          </li>
        </ul>
      </div>
    </div>
  </nav>


 <div class="card" style="width: 18rem;" id="cards">
    <img src="clang.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">C Programmming</h1></h5>
      <p class="card-text">C is a procedural programming language. It was initially developed by Dennis Ritchie in the
        year 1972. It was mainly developed as a system programming language to write an operating system. The main
        features of the C language include low-level memory access, a simple set of keywords, and a clean style, these
        features make C language suitable for system programmings like an operating system or compiler development. </p>
      <a href="cprog.php" class="btn btn-primary">Run Quiz</a>
    </div>
  </div>

  <div class="card" style="width: 18rem;" id="cards">
    <img src="c++.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">C++ Programming</h5>
      <p class="card-text">C++ is a cross-platform language that can be used to create high-performance applications.
        C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of
        control over system resources and memory.C++ is an object-oriented programming language which gives a clear
        structure to programs and allows code to be reused, lowering development costs. </p>
      <a href="oops.php" class="btn btn-primary">Run Quiz</a>
    </div>
  </div>

  <div class="card" style="width: 18rem;" id="cards">
    <img src="java.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Java Programming</h5>
      <p class="card-text">Java is a popular programming language, created in 1995.
        It is owned by Oracle, and more than 3 billion devices run Java.
        It is used for:
        Mobile applications (specially Android apps)
        Desktop applications
        Web applications
        Web servers and application servers
        Games
        Database connection
        Java is an object oriented language which gives a clear structure to programs and allows code to be reused,
        lowering development costs</p>
        <a href="java.php" class="btn btn-primary">Run Quiz</a>
      </div>
  </div>

  <div class="card" style="width: 18rem;" id="cards">
    <img src="python.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Python Programming</h5>
      <p class="card-text">Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
        It is used for:
        web development (server-side),
        software development,
        mathematics,
        system scripting.
        Python runs on an interpreter system, meaning that code can be executed as soon as it is written.prototyping can
        be very quick.
        Python can be treated in a procedural way, an object-oriented way or a functional way.
      </p>
        <a href="python.php" class="btn btn-primary">Run Quiz</a>
      </div>
  </div>

  <div class="card" style="width: 18rem;" id="cards">
    <img src="webdev.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Web Development</h5>
      <p class="card-text">Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a
        private network).Web development can range from developing a simple single static page of plain text to complex
        web applications, electronic businesses, and social network services."Web development" usually refers to the
        main non-design aspects of building Web sites.</p>
        <a href="webdev.php" class="btn btn-primary">Run Quiz</a>
      </div>
  </div>

  <div class="card" style="width: 18rem;" id="cards">
    <img src="DATAbase.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">DataBase</h5>
      <p class="card-text">A database is an organized collection of data, to be accessed and managed.
        The main purpose of the database is to operate a large amount of information by storing,
        retrieving, and managing data.There are many dynamic websites on the World Wide Web nowadays which are handled
        through databases.There are many databases available like MySQL, Sybase, Oracle, MongoDB, Informix, PostgreSQL,
        SQL
        Server, etc.</p>
        <a href="database.php" class="btn btn-primary">Run Quiz</a>
      </div>
  </div>

  <div class="card" style="width: 18rem;" id="cards">
    <img src="DATASTRUCTURE.webp" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">DSA</h5>
      <p class="card-text">A data structure is a particular way of organizing data
        in a computer so that it can be used effectively.An efficient data structure also uses minimum memory space and execution time to process the structure. The idea is to reduce the space and time complexities of
        different tasks. Data structures are used in:
        Operating system
        Graphics
        Computer Design
        Blockchain
        Genetics
        Image Processing
        Simulation etc.</p>
        <a href="dsa.php" class="btn btn-primary">Run Quiz</a>
      </div>
  </div>

  <div class="card" style="width: 18rem;" id="cards">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">PHP</h5>
      <p class="card-text">PHP is a recursive acronym for "PHP: Hypertext Preprocessor".

        PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content,
        databases, session tracking, even build entire e-commerce sites.

        It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and
        Microsoft SQL Server.PHP is forgiving: 

        PHP Syntax is C-Like.</p>
        <a href="php.php" class="btn btn-primary">Run Quiz</a>
      </div>
  </div>

  



  <!-- FOOTER -->
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="logout.php" class="nav-link px-2 text-muted">Logout,<?php echo $_SESSION['fname']; ?></a></li>
      <li class="nav-item"><a href="feedback.html" class="nav-link px-2 text-muted">Feedback</a></li>
      <li class="nav-item"><a href="#top" class="nav-link px-2 text-muted">Go on Top</a></li>
    </ul>
    <p class="text-center text-muted">© IT Training, Inc</p>
    <p class="text-center text-muted">Contact : <a href="tel:1800233192">1800-233-192</a></p>
    <p class="text-center text-muted">E-Mail : ITtraining@gmail.com</p>
  </footer>

  <!-- JAVASCRIPT FILES -->
  <script type="text/javascript" src="navcolor.js"></script>


  <!-- Optional JavaScript; choose one of the two! -->

  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>

  <!-- Option 2: Separate Popper and Bootstrap JS -->
  <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
</body>

</html
<?php 

}else{

     header("Location: index.html");

     exit();

}

 ?>