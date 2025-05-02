

var balance = 1000;

function updateBalance() {
  document.getElementById("balance").innerText = balance.toFixed(2);
}

 /*deposite*/
document.getElementById("dep").addEventListener("click", function () {
  let depositAmount = parseFloat(document.getElementById("num1").value);
  let message = document.getElementById("message");

  if (isNaN(depositAmount) || depositAmount <= 0) {
    message.textContent =alert( "Please enter a valid deposit amount.");
  } 
  else {
    balance += depositAmount;
    updateBalance();
    message.textContent = ""; 
  }
  document.getElementById("num1").value = ''; 
});



/*withdraw*/

document.getElementById("with").addEventListener("click", function () {
  let withdrawAmount = parseFloat(document.getElementById("num2").value);


  if (isNaN(withdrawAmount) || withdrawAmount <= 0 ) {
    message.textContent = alert("Please enter a valid withdrawal amount.");
  }
   else if (withdrawAmount > balance) {
    message.textContent = alert("Insufficient balance.");
  } 
  else {
    balance -= withdrawAmount;
    updateBalance();
    message.textContent = ""; 
  }
  document.getElementById("num2").value = ''; 

});
  
