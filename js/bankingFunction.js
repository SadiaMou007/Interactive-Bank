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
function totalBalance(isAdd, value2) {
  const tid = document.getElementById("total-balance");
  const tValue = parseFloat(tid.innerText);
  if (isAdd == true) {
    tid.innerText = value2 + tValue;
  } else {
    tid.innerText = tValue - value2;
  }
}
function getCurrentBalance() {
  return parseFloat(document.getElementById("total-balance").innerText);
}
// deposit
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const newDeposit = newAmount("deposit-amount");
  if (newDeposit > 0) {
    const previousDeposit = previousAmount("deposit-update");
    //   update deposit
    document.getElementById("deposit-update").innerText =
      newDeposit + previousDeposit;
    totalBalance(true, newDeposit);
  } else {
    alert("Invalid request");
  }
});
// withdraw
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const newWithdraw = newAmount("withdraw-amount");

  if (newWithdraw > 0 && getCurrentBalance() >= newWithdraw) {
    const previousWithdraw = previousAmount("withdraw-update");
    //   update withdraw
    document.getElementById("withdraw-update").innerText =
      newWithdraw + previousWithdraw;
    totalBalance(false, newWithdraw);
  } else {
    alert("Invalid request");
  }
});
