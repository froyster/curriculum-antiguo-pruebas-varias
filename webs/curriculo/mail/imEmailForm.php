<?php
	$settings['imEmailForm_6_3'] = array(
		"owner_email_from" => "javiersanchez.mlg@gmail.com",
		"owner_email_to" => "javiersanchez.mlg@gmail.com",
		"customer_email_from" => "javiersanchez.mlg@gmail.com",
		"customer_email_to" => "",
		"owner_message" => "Solicito te pongas en comunicacion conmigo!
",
		"customer_message" => "",
		"owner_subject" => "WEBcurriculum",
		"customer_subject" => "",
		"owner_csv" => False,
		"customer_csv" => True,
		"confirmation_page" => "../index.html"
	);

	if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
		include "../res/x5engine.php";

		$answers = array(
		);

		$form_data = array(
			array('label' => 'Ingresa tu Email y me pondre en contacto.', 'value' => $_POST['imObjectForm_3_1']),
			array('label' => 'Datos:', 'value' => $_POST['imObjectForm_3_2'])
		);

		$files_data = array(
		);

		if(@$_POST['action'] != "check_answer") {
			if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != "jsactive")
				die(imPrintJsError());
			if(isset($_POST['imSpProt']) && $_POST['imSpProt'] != "")
				die(imPrintJsError());
			$email = new imSendEmail();
			$email->sendFormEmail($settings['imEmailForm_6_3'], $form_data, $files_data);
			@header('Location: ' . $settings['imEmailForm_6_3']['confirmation_page']);
		} else {
			if(@$_POST['id'] == "" || @$_POST['answer'] == "" || strtolower(trim($answers[@$_POST['id']])) != strtolower(trim(@$_POST['answer'])))
				echo "0";
			else
				echo "1";
		}
	}

// End of file