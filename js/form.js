//get element

function submitData() {
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phone = document.getElementById('input-phone').value;
    let subject = document.getElementById('input-subject').value;
    let message = document.getElementById('input-message').value;

    
    // read data with alert
    if(name == "") {
        return alert ('Harap diisi terlebih dahulu');
    } else if (email == "") {
        return alert ('Harap diisi terlebih dahulu');
    } else if (phone == "") {
        return alert ('Harap diisi terlebih dahulu');
    } else if (subject == "") {
        return alert ('Harap diisi terlebih dahulu');
    } else if (message == "") {
        return alert ('Harap diisi terlebih dahulu');
    }

    // // read the data
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(subject);
    // console.log(message);

    //mailto

    let a = document.createElement('a');
    a.href = `mailto:${email}?subject=${subject}&body=halo, Hello my name is ${name}, ${message}`
    a.click()
}



