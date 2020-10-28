var $error = $("#error");
$error.text("");
$error.hide(0);

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  
  var email = $("#email").val();
  

  if (validateEmail(email)) {
    $error.addClass("valid");
    $error.text(email + " принят");
    $error.show(500, function () {
      setTimeout(function () {
        $error.hide(500);
      }, 5000);
    });
  } else {
    $error.text("Неверный EMail");
    $error.show(500, function () {
      setTimeout(function () {
        $error.hide(500);
      }, 5000);
    });
  }
  return false;
}

$("#validate").on("click", validate);