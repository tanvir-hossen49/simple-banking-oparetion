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
    totalDepositEle.innerText =
      converToNumber(depositEle, true) + converToNumber(totalDepositEle, false);
    totalBalance.innerText =
      converToNumber(totalBalance, false) + converToNumber(depositEle, true);
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
    totalWithdrawEle.innerText =
      converToNumber(withdrawEle, true) +
      converToNumber(totalWithdrawEle, false);
    totalBalance.innerText =
      converToNumber(totalBalance, false) - converToNumber(withdrawEle, true);
    withdrawEle.value = "";
  }
};

// convert string to number
const converToNumber = (ele, isInput) => {
  if (isInput) {
    return Number.parseInt(ele.value);
  }
  return Number.parseInt(ele.innerText);
};
