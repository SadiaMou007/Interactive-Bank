const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  // new amount
  const depositAmount = document.getElementById("deposit-amount");
  //   previous amount
  const depositUpdate = document.getElementById("deposit-update");
  //   add new value with previous
  const totalDeposit =
    parseFloat(depositAmount.value) + parseFloat(depositUpdate.innerText);
  //   set total value as innertext
  depositUpdate.innerText = totalDeposit;
  //   clear text field
  depositAmount.value = "";
});
