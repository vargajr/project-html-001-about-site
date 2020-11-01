function validateForm () {
    let FName = document.querySelector("input[name='fname']").value;
    let LName = document.querySelector("input[name='lname']").value;
    let MailAddr = document.querySelector("input[name='email']").value;
    let MessageContent = document.querySelector("textarea[name='message']").value.trim();
    let WholeName = LName + " " + FName;
    let message ="";
    if (WholeName.length<5) {
        message = " (hibás név) "
    } else if (MailAddr.indexOf("@")<1 || MailAddr.slice(MailAddr.indexOf("@")).indexOf(".")<1) {
        message = message + " (hibás e-mail cím) "
    } else if (MessageContent.length<20) {
        message = message + "(tartalmatlan üzenet)"
    } else {
        message = "Köszönjük az érdeklődést. Hamarosan válaszolunk."
    }
alert(message);
}

