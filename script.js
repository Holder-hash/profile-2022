//name

nameInp.onfocus = () => {
    nameText.style = 'top: 25px;';
}

nameInp.onblur = () => {
    if (nameInp.value) {
        nameText.style = 'top: 25px;';
    }
    else {
        nameText.style = 'top: 60px;';
    }
}

//mail

mailInp.onfocus = () => {
    mailText.style = 'top: -14px;';
}

mailInp.onblur = () => {
    if (mailInp.value) {
        mailText.style = 'top: -14px;';
    }
    else {
        mailText.style = 'top: 20px;';
    }
}

//message

msgInp.onfocus = () => {
    msgText.style = 'top: -14px;';
}

msgInp.onblur = () => {
    if (msgInp.value) {
        msgText.style = 'top: -14px;';
    }
    else {
        msgText.style = 'top: 20px;';
    }
}

//language checkbox

engInp.onclick = () => {
    rusInp.checked = false;
    window.open('english/english.html', '_self');
}

rusInp.onclick = () => {
    engInp.checked = false;
    window.open('../index.html', '_self');
}

var sendBtn = document.getElementById('send-btn');

sendBtn.onmouseover = () => {
    notWorking.style = 'opacity: 1;';
}

sendBtn.onmouseout = () => {
    notWorking.style = 'opacity: 0;';
}