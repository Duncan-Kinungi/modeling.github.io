<?php
  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if (!empty($name) && !empty($email) && !empty($message)) {
      $to = "kinungiduncan@gmail.com";
      $subject = "Form Submission";
      $message = $name . " sent a message: " . $message;
      $headers = "From: " . $email;
      if (mail($to, $subject, $message, $headers)) {
        echo "Your message was sent successfully!";
      } else {
        echo "There was an error sending your message. Please try again later.";
      }
    } else {
      echo "Please fill in all fields before submitting the form.";
    }
  }
?>
