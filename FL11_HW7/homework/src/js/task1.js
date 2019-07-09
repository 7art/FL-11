let emailUser = 'user@gmail.com';
let emailAdmin = 'admin@gmail.com';
let passwordUser = 'UserPass';
let passwordAdmin = 'AdminPass';
let emailValue = prompt('Enter your email');
const minLengthEmail = 6;
const minLengthNewPassword = 5;
let login = false;
let password = false;
let changePass = false;

if (emailValue) {
    if (emailValue.length < minLengthEmail) {
        alert('I don\'t know any emails having name length less than 6 symbols');
    } else if (emailValue === emailAdmin || emailValue === emailUser) {
        login = true;
    } else {
        alert('I don’t know you');
    }
} else {
    alert('Canceled.');
}

if (login) {
    let passwordValue = prompt('Enter your password');
    if (passwordValue) {
        if (emailValue === emailAdmin && passwordValue === passwordAdmin ||
            emailValue === emailUser && passwordValue === passwordUser) {
            password = true;
        } else {
            alert('Wrong password');
        }
    } else {
        alert('Canceled.');
    }
}

if (login && password) {
    let changePasswordConfirm = confirm('Do you want to change your password?');
    if (changePasswordConfirm) {
        let changePasswordValue = prompt('Write your old password');
        if (changePasswordValue) {
            if (emailValue === emailAdmin && changePasswordValue === passwordAdmin ||
                emailValue === emailUser && changePasswordValue === passwordUser) {
                changePass = true;
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('You have failed the change.');
    }
}

if (changePass) {
    let newPasswordValue = prompt('Enter your new password');
    if (newPasswordValue) {
        if (newPasswordValue.length < minLengthNewPassword) {
            alert('It’s too short password. Sorry.');
        } else {
            let newPasswordConfirmValue = prompt('Re-enter your new password');
            if (newPasswordConfirmValue === newPasswordValue) {
                alert('You have successfully changed your password.');
            } else {
                alert('You wrote the wrong password.');
            }
        }
    } else {
        alert('Canceled.');
    }
}