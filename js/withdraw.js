// Withdraw Area 
const withdraw_btn = document.getElementById('withdraw-btn');
const withdraw_ammount = document.getElementById('withdraw-ammount');
const pass = document.getElementById('pass');
withdraw_btn.addEventListener('click',function(){
    const total_withdraw = document.getElementById('total-withdraw');
    const total_withdraw_ammount = parseFloat(total_withdraw.innerText);
    const total_balance = document.getElementById('total-balance');
    const total_balance_ammount = parseFloat(total_balance.innerText);
    const ammount = parseFloat(withdraw_ammount.value);
    if(pass.value=="helloworld"){
        if(ammount>=total_balance_ammount || (total_balance_ammount-ammount) < 200){
            alert("Sorry. Insuficient Balance. Minimum Balance must be 200.");
            withdraw_ammount.value = '';
            pass.value = '';
        }
        else{
            const total = total_withdraw_ammount + ammount;
            total_withdraw.innerText = total;

            const total2 = total_balance_ammount - ammount ;
            total_balance.innerText = total2;

            withdraw_ammount.value = '';
            pass.value = '';
        }
    }
    else{
        alert("Invalid Password");
        withdraw_ammount.value = '';
        pass.value = '';
    }
})