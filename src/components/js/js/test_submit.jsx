<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> test Submit </title>
    <style>
        #onInvalid{ padding:90px 0px; text-align:center; font-size: 60px;}
        #email_test{padding:90px 0px; text-align:center; font-size: 60px;}
        #email_test_onsubmit{padding:90px 0px; text-align:center; font-size: 60px;}
    </style>
</head>
<body>
    <div id="onInvalid">
        you submit : 
        <?php 
        if(isset($_GET['quantity'])) 
            echo $_GET['quantity']; 
        else { ?>
            <script> document.getElementById('onInvalid').style.display = 'none' </script>
        <?php }?>
    </div>
    <div id="email_test">
        Email is : 
        <?php 
        if(isset($_POST['Email'])) 
            echo $_POST['Email']; 
        else{ ?>
            <script> document.getElementById('email_test').style.display = 'none' </script>
        <?php }?>
    </div>
    <div id="email_test_onsubmit">
        Email is : 
        <?php 
        if(isset($_POST['Email_submit'])) 
            echo $_POST['Email_submit']; 
        else{ ?>
            <script> document.getElementById('email_test_onsubmit').style.display = 'none' </script>
        <?php }?>
    </div>
</body>
</html>