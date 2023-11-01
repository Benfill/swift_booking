function affiche() {
    let f_name = document.getElementById("first-name").value;
    let l_name = document.getElementById("last-name").value;
    let mail = document.getElementById("email").value;
    let phone = document.getElementById("phone-number").value;

    let affErrFName = document.getElementById("sp-first-name");
    let affErrLName = document.getElementById("sp-last-name");
    let affErrEmail = document.getElementById("sp-email");
    let affErrPhone = document.getElementById("sp-phone");
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let regexName=/^[A-Za-z]+$/;

    let regexPhone = /^\+212[0-9]{9}$/;
    let Check = true;

    //  First Name validation

    if(f_name=="" ){
        affErrFName.innerHTML = "this field must be filled out ";

    }else  if (!regexName.test(f_name) ) {
        affErrFName.innerHTML = "Invalid  name ";
        Check=false;
    }
    else{
        affErrFName.innerHTML ="";
    }


    //   Last Name validation

    if(l_name==""){
        affErrLName.innerHTML = "this field must be filled out ";
    }else  if (!regexName.test(l_name) ) {
        affErrLName.innerHTML = "Invalid name ";
        Check=false;
    }
    else{
        affErrLName.innerHTML ="";
    }



    // // Email validation & check
    if(mail==""){
        affErrEmail.innerHTML = "this field must be filled out ";

    } else  if (!regexEmail.test(mail) ) {
        affErrEmail.innerHTML = "Invalid email address  ";
        Check=false;
    }
    else{
        affErrEmail.innerHTML ="";
    }

    // // Phone validation
    if(phone==""){
        affErrPhone.innerHTML = "this field must be filled out ";
    }
    else if (!regexPhone.test(phone)) {
        affErrPhone.innerHTML = "Invalid phone number. <br>It should start with '+212' and have 9 digits.";
        Check=false;
    }
    else{
        affErrPhone.innerHTML ="";
    }

}