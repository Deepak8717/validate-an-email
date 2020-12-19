var checkEmail = function (value) {
  var valid = true;
  if (value.indexOf("@") == -1) {
    valid = false;
  } else {
    var parts = value.split("@");
    var domain = parts[1];
    if (domain.indexOf(".") == -1) {
      valid = false;
    } else {
      var domainParts = domain.split(".");
      var ext = domainParts[1];
      if (ext.length > 4 || ext.length < 2) {
        valid = false;
      }
    }
  }
  return valid;
};

var form = document.getElementById("test");
var validate = function (event) {
  event.preventDefault();
  var val = document.getElementById("email").value;
  var valid = checkEmail(val);
  if (!valid) {
    alert("not valid");
  } else {
    alert("valid");
  }
};
