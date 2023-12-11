function validateForm() {
    let firstName = document.querySelector('.input-div1 input').value;
    let lastName = document.querySelector('.input-div2 input').value;
    let email = document.querySelector('.input-div3 input').value;
    let password = document.querySelector('.input-div4 input').value;

    if (firstName === '') {
        showError('.input-div1 input', 'errorFirstName', 'გთხოვთ შეავსოთ გრაფა');
    } else {
        hideError('.input-div1 input', 'errorFirstName');
    }
    if (lastName === '') {
        showError('.input-div2 input', 'errorLastName', 'გთხოვთ შეავსოთ გრაფა');
    } else {
        hideError('.input-div2 input', 'errorLastName');
    }
    if (email === '') {
        showError('.input-div3 input', 'errorEmail', 'გთხოვთ შეავსოთ გრაფა');
    } else if (!isValidEmail(email)) {
        showError('.input-div3 input', 'errorEmail', 'გთხოვთ ჩაწეროთ ნამდვილი იმეილი');
    } else {
        hideError('.input-div3 input', 'errorEmail');
    }
    if (password === '') {
        showError('.input-div4 input', 'errorPassword', 'გთხოვთ შეავსოთ გრაფა');
    } else {
        hideError('.input-div4 input', 'errorPassword');
    }
     if((password.length >= 1) && (password.length < 6)){
        showError('.input-div4 input','errorPassword','პაროლი უნდა იყოს 6 სიმბოლოზე მეტი')
    }
}

function showError(selector, errorId, message) {
    document.querySelector(selector).style.borderColor = 'red';
    document.getElementById(errorId).style.display = 'block';
    document.getElementById(errorId).innerText = message;
}

function hideError(selector, errorId) {
    document.querySelector(selector).style.borderColor = '';
    document.getElementById(errorId).style.display = 'none';
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
