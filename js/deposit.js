// Deposit Area 
const deposit_btn = document.getElementById('deposit-btn');
const deposit_ammount = document.getElementById('deposit-ammount');
const password = document.getElementById('password');

deposit_btn.addEventListener('click', function(){
    const total_deposit = document.getElementById('total-deposit');
    const total_deposit_ammount = parseFloat(total_deposit.innerText);
    const total_balance = document.getElementById('total-balance');
    const total_balance_ammount = parseFloat(total_balance.innerText);
    const temp = deposit_ammount.value;
    const ammount = parseFloat(temp);
    const p = password.value;
    if(p=="helloworld"){
        //set total deposit ammount
        const total = total_deposit_ammount + ammount;
        console.log(total)
        total_deposit.innerText = total;

        //set total balance ammount
        const total2 = total_balance_ammount + ammount;
        total_balance.innerText = total2

        deposit_ammount.value = '';
        password.value = '';
    }
    else {
        alert("Invalid Password");
        deposit_ammount.value = '';
        password.value = '';
    }
})



// // Withdraw Area 
// const withdraw_btn = document.getElementById('withdraw-btn');
// const withdraw_ammount = document.getElementById('withdraw-ammount');
// const pass = document.getElementById('pass');
// withdraw_btn.addEventListener('click',function(){
//     const total_withdraw = document.getElementById('total-withdraw');
//     const total_withdraw_ammount = parseFloat(total_withdraw.innerText);
//     const total_balance = document.getElementById('total-balance');
//     const total_balance_ammount = parseFloat(total_balance.innerText);
//     const ammount = parseFloat(withdraw_ammount.value);
//     if(pass.value=="helloworld"){
//         if(ammount>=total_balance_ammount || (total_balance_ammount-ammount) < 200){
//             alert("Sorry. Insuficient Balance. Minimum Balance must be 200.");
//             withdraw_ammount.value = '';
//             pass.value = '';
//         }
//         else{
//             const total = total_withdraw_ammount + ammount;
//             total_withdraw.innerText = total;

//             const total2 = total_balance_ammount - ammount ;
//             console.log(total2)
//             total_balance.innerText = total2;

//             withdraw_ammount.value = '';
//             pass.value = '';
//         }
//     }
//     else{
//         alert("Invalid Password");
//         withdraw_ammount.value = '';
//         pass.value = '';
//     }
// })