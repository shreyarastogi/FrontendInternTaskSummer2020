/* ========================WRITE YOUR JS FROM HERE======================== */

$(function () {
    $("#button").click(function () {
        var password = $("#pass").val();
        var confirmPassword = $("#confpass").val();
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    });
});
function validateForm() {
    var valid = true;
    $('.form-field').each(function () {
        if ($(this).val() === '') {
            valid = false;
            return false;
        }
    });
    return valid
}

function success(){
    var good = validateForm();
    if(good == true){
     alert('You have successfully registered!!!');
    }
}

