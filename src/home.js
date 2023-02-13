window.onload = () => {
  main();
};
//main function
const main = () => {
  document.querySelector("#deposit").addEventListener("click", deposit);
  document.querySelector("#withdraw").addEventListener("click", withdraw);
};

// deposit event handler
const deposit = () => {
  const depositEle = document.querySelector("#depositEle"),
    totalDepositEle = document.querySelector("#totalDeposit"),
    totalBalance = document.querySelector("#totalBalance");

  if (depositEle.value !== "") {
    totalDepositEle.innerText = converToNumber(depositEle, totalDepositEle);
    totalBalance.innerText = converToNumber(depositEle, totalBalance);
    depositEle.value = "";
  }
};
// withdraw event handler
const withdraw = () => {
  const withdrawEle = document.querySelector("#withdrawEle"),
    totalWithdrawEle = document.querySelector("#totalWithdraw"),
    totalBalance = document.querySelector("#totalBalance");
  if (+withdrawEle.value > +totalBalance.innerText) {
    alert("Withdraw can not be grather than total balance");
    withdrawEle.value = "";
    return;
  }

  if (withdrawEle.value !== "") {
    totalWithdrawEle.innerText = converToNumber(withdrawEle, totalWithdrawEle);
    totalBalance.innerText = converToNumber(withdrawEle, totalBalance, "minus");
    withdrawEle.value = "";
  }
};

// convert string to number
/**
 *
 * @param {input.value} ele
 * @param {element.innerText} total
 * @param {plus or minus} oparetion
 * @returns total
 */
const converToNumber = (ele, total, oparetion = "plus") => {
  if (oparetion === "plus") {
    return Number.parseInt(ele.value) + Number.parseInt(total.innerText);
  }
  return Number.parseInt(total.innerText) - Number.parseInt(ele.value);
};
