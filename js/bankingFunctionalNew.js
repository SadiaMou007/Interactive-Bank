addEvent("withdraw-btn", "withdraw-amount", "withdraw-update", false);
addEvent("deposit-btn", "deposit-amount", "deposit-update", true);
const totalId = document.getElementById("total-balance");
const totalValue = parseFloat(totalId.innerText);

function addEvent(eventBtnId, updateFromId, updateToId, isTrue) {
  document.getElementById(eventBtnId).addEventListener("click", function () {
    const change = updateBalance(updateFromId, updateToId);
    updateTotalBalance(change, isTrue);
  });
}
function updateBalance(getValueId, setValueId) {
  const getId = document.getElementById(getValueId);
  const getValue = parseFloat(getId.value);
  if (getValue > 0 && totalValue >= getValue) {
    document.getElementById(setValueId).innerText = getValue;
  } else {
    alert("invalid input");
  }
  getId.value = "";
  return getValue;
}
function updateTotalBalance(changeBalance, isIncrease) {
  if (isIncrease) {
    totalId.innerText = totalValue + changeBalance;
  } else {
    if (totalValue >= changeBalance) {
      totalId.innerText = totalValue - changeBalance;
    } else {
      alert("reduce withdraw amount");
    }
  }
}
