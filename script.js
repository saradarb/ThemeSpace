function sendMail(){
    let parms ={
        Name : document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        Subject : document.getElementById("Subject").value,
        Message : document.getElementById("Message").value,

    }
    emailjs.send("service_r5rj5zm","template_hgssy2q",parms)
}