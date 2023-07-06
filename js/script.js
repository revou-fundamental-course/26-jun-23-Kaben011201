var counter = 1;
setInterval(function(){
    document.getElementById('btn' + counter).checked = true;
    const imgList = document.getElementsByClassName("slide");
    counter++;
    if(counter > imgList.length){
        counter = 1;
    }
}, 5000);

const usernameInput = document.getElementById("username")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const messageInput = document.getElementById("message")
const submitButton = document.getElementById("send")

submitButton.addEventListener("click", function(event){
    event.preventDefault()
    const usernameValue = usernameInput.value;
    const emailValue = emailInput.value;
    const phoneValue = phoneInput.value;
    const messageValue = messageInput.value;
    nameValidation(usernameValue, emailValue, phoneValue, messageValue);
})

function nameValidation(name, email, phone, message){
    if (name == "" || name.length < 6){
        if(name == ""){
            window.alert("Username anda belum diisi");
        }else{
            window.alert("Username harus lebih dari 5 karakter");
        }
    }else if (email == ""){
        window.alert("Email Kosong")
    }else if(phone == ""){
        window.alert("Nomor HP kosong")
    }else if(message == ""){
        window.alert("Message Kosong")
    }else{
        window.alert("Berhasil")
    }
    
}