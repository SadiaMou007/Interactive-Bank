function newAmount(nValue) {
  const ntextId = document.getElementById(nValue);
  const ntextValue = parseFloat(ntextId.value);
  ntextId.value = "";
  return ntextValue;
}
function previousAmount(pValue) {
  const ptextId = document.getElementById(pValue);
  const ptextValue = parseFloat(ptextId.innerText);
  return ptextValue;
}
function totalBalanceAmount(isAdd, value2) {
  const tid = document.getElementById("total-balance");
  const tValue = parseFloat(tid.innerText);
  if (isAdd == true) {
    tid.innerText = value2 + tValue;
  } else {
    tid.innerText = tValue - value2;
  }
}
// deposit
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const newDepositAmount = newAmount("deposit-amount");
  const previousDepositAmount = previousAmount("deposit-update");
  //   update deposit
  document.getElementById("deposit-update").innerText =
    newDepositAmount + previousDepositAmount;
  totalBalanceAmount(true, newDepositAmount);
});
// withdraw
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const newWithdrawAmount = newAmount("withdraw-amount");
  const pWithdraw = previousAmount("withdraw-update");
  //   update withdraw
  document.getElementById("withdraw-update").innerText =
    newWithdrawAmount + pWithdraw;
  totalBalanceAmount(false, newWithdrawAmount);
});
