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

  //   update total balance
  const totalBalance = document.getElementById("total-balance");
  const newBalance = parseFloat(totalBalance.innerText) + depositValue;
  totalBalance.innerText = newBalance;

  //   clear text field
  depositAmount.value = "";
});

// withdraw handle
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  // wirhdraw amount
  const wAmount = document.getElementById("withdraw-amount");
  const wAmountValue = parseFloat(wAmount.value);

  //  previous value
  const pWithdraw = document.getElementById("withdraw-update");

  // add
  const totalWithdraw = wAmountValue + parseFloat(pWithdraw.innerText);
  pWithdraw.innerText = totalWithdraw;

  //   update total balance
  const tBalance = document.getElementById("total-balance");
  const nBalance = parseFloat(tBalance.innerText) - wAmountValue;
  tBalance.innerText = nBalance;
  //   clear input
  wAmount.value = "";
  //

  console.log(pWithdraw.innerText);
});
