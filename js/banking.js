// deposit handle
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  // new amount
  const depositAmount = document.getElementById("deposit-amount");
  const depositValue = parseFloat(depositAmount.value);
  //   previous amount
  const depositUpdate = document.getElementById("deposit-update");
  //   add new value with previous
  const totalDeposit = depositValue + parseFloat(depositUpdate.innerText);
  //   set total value as innertext
  depositUpdate.innerText = totalDeposit;
  depositAmount.value = "";

  //   update total balance
  const totalBalance = document.getElementById("total-balance");
  const newBalance = parseFloat(totalBalance.innerText) + depositValue;
  totalBalance.innerText = newBalance;

  //   clear text field
  depositAmount.value = "";
});
