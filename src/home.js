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

  if (depositEle.innerText !== "") {
    totalDepositEle.innerText = +depositEle.value + +totalDepositEle.innerText;
    totalBalance.innerText = +totalBalance.innerText + +depositEle.value;
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

  if (withdrawEle.innerText !== "") {
    totalWithdrawEle.innerText =
      +withdrawEle.value + +totalWithdrawEle.innerText;
    totalBalance.innerText = +totalBalance.innerText - +withdrawEle.value;
    withdrawEle.value = "";
  }
};
