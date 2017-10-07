<<<<<<< HEAD
<?php
  include("imkeys.php");
  include("../res/x5engine.php");
  
  //Header("Content-Type: text/html; charset=UTF-8");

	$cpt = new imCaptcha();
  //Check Captcha
  if ($_GET["action"] == "check")
		echo $cpt->check($_GET["code"], $_GET["ans"]);
		
  //Show Captcha chars
  else if ($_GET["action"] == "show")
		echo $cpt->show($_GET['code']);

=======
<?php
  include("imkeys.php");
  include("../res/x5engine.php");
  
  //Header("Content-Type: text/html; charset=UTF-8");

	$cpt = new imCaptcha();
  //Check Captcha
  if ($_GET["action"] == "check")
		echo $cpt->check($_GET["code"], $_GET["ans"]);
		
  //Show Captcha chars
  else if ($_GET["action"] == "show")
		echo $cpt->show($_GET['code']);

>>>>>>> 20f28141af7ed81ccc0b9dbc430733cdc5f8e5d3
// End of file imcaptcha.php