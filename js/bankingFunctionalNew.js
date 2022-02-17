addEvent("withdraw-btn", "withdraw-amount", "withdraw-update", false);
addEvent("deposit-btn", "deposit-amount", "deposit-update", true);

function addEvent(eventBtnId, updateFromId, updateToId, isTrue) {
  document.getElementById(eventBtnId).addEventListener("click", function () {
    const changingAmount = updateBalance(updateFromId, updateToId);
    updateTotalBalance(changingAmount, "total-balance", isTrue);
  });
}
function updateBalance(getValueId, setValueId) {
  const getId = document.getElementById(getValueId);
  const getValue = parseFloat(getId.value);
  if (getValue > 0) {
    document.getElementById(setValueId).innerText = getValue;
  } else {
    alert("invalid input");
  }
  getId.value = "";
  return getValue;
}
function updateTotalBalance(changeBalance, updateId, isIncrease) {
  const totalId = document.getElementById(updateId);
  const totalValue = parseFloat(totalId.innerText);
  if (isIncrease) {
    totalId.innerText = totalValue + changeBalance;
  } else {
    totalId.innerText = totalValue - changeBalance;
  }
}
