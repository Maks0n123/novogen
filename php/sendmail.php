<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/languge/');
    $mail->IsHTML(true);

    $mail->setFrom('2@gmail.com', 'maksim');
    $mail->addAddress('maksimgrinin93@gmail.com');

    $product = "NOVOGEN PRO";
    if($_POST['product'] == "NovogenPlus"){
        $product = "NOVOGEN PLUS";
    }
    if($_POST['product'] == "NovogenSmart"){
        $product = "NOVOGEN SMART";
    }

    $body = '<h1>Новый заказ!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail</strong> '.$_POST['email'].'</p';
    }
    if(trim(!empty($_POST['product']))){
        $body.='<p><strong>Продукт</strong> '.$_POST['product'].'</p';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['message'].'</p';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);



    // ваш секретный ключ
    $secret = '6Lftjg0oAAAAAGE7Tgizh8Gp7ce3_EsWIIYjf3u9';
    // однократное включение файла autoload.php (клиентская библиотека reCAPTCHA PHP)
    require_once (dirname(__FILE__).'/recaptcha/autoload.php');
    // если в массиве $_POST существует ключ g-recaptcha-response, то...
    if (isset($_POST['g-recaptcha-response'])) {
    // создать экземпляр службы recaptcha, используя секретный ключ
    $recaptcha = new \ReCaptcha\ReCaptcha($secret);
    // получить результат проверки кода recaptcha
    $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
    // если результат положительный, то...
    if ($resp->isSuccess()){
        // действия, если код captcha прошёл проверку
        //...
    } else {
        // иначе передать ошибку
        $errors = $resp->getErrorCodes();
        $data['error-captcha']=$errors;
        $data['msg']='Код капчи не прошёл проверку на сервере';
        $data['result']='error';
    }

    } else {
    //ошибка, не существует ассоциативный массив $_POST["send-message"]
    $data['result']='error';
    }
?>    