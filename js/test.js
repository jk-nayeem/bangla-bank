// Deposit Area 
function getAmmount(inputId) {
    const input = document.getElementById(inputId);
    return parseFloat(input.value);
}

function updateBalance(inputId, inputId2, ammount) {
    if (inputId == 'deposit-ammount') {
        const input = document.getElementById(inputId2);
        var totalAmmount = parseFloat(input.innerText);
        totalAmmount = totalAmmount + ammount;
        input.innerText = totalAmmount;
    }
    else if(inputId == 'withdraw-ammount'){
        const input = document.getElementById(inputId2);
        var totalAmmount = parseFloat(input.innerText);
        totalAmmount = totalAmmount - ammount;
        input.innerText = totalAmmount;
    }
}

function updateValue(inputId, ammount, password) {
    if (inputId == 'deposit-ammount') {
        const input = document.getElementById(inputId);
        const pass = document.getElementById(password);
        if (pass.value == 'helloworld') {
            const total = document.getElementById('total-deposit');
            var totalAmmount = parseFloat(total.innerText);
            totalAmmount = totalAmmount + ammount;
            total.innerText = totalAmmount;
            input.value = '';
            pass.value = '';
            updateBalance(inputId, 'total-balance', ammount);
        }
        else {
            alert("Invalid Password.");
            input.value = '';
            pass.value = '';
        }
    }
    else if (inputId == 'withdraw-ammount') {
        const input = document.getElementById(inputId);
        const pass = document.getElementById(password);
        if (pass.value == 'helloworld') {
            const total = document.getElementById('total-withdraw');
            var totalAmmount = parseFloat(total.innerText);
            totalAmmount = totalAmmount + ammount;
            total.innerText = totalAmmount;
            input.value = '';
            pass.value = '';
            updateBalance(inputId, 'total-balance', ammount);
        }
        else {
            alert("Invalid Password.");
            input.value = '';
            pass.value = '';
        }
    }
}

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    const ammount = getAmmount('deposit-ammount');
    updateValue('deposit-ammount', ammount, 'password');
})


// Withdraw Area 
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const ammount = getAmmount('withdraw-ammount');
    updateValue('withdraw-ammount', ammount, 'pass');
})