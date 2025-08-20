
const chatFlow = {
  "start": {
    message: "Hi!  Welcome to Support. Please choose an option:",
    options: ["Orders", "Returns & Refunds", "Payments", "Offers", "Account"]
  },
  "Orders": {
    message: "Please select an order issue:",
    options: ["Track Order", "Cancel Order", "Back"]
  },
  "Track Order": {
    message: "To track your order, go to 'My Orders' > Select your product > Track.",
    options: ["Back to Orders", "Main Menu"]
  },
  "Cancel Order": {
    message: "To cancel, go to 'My Orders' > Choose order > Cancel.",
    options: ["Back to Orders", "Main Menu"]
  },
  "Returns & Refunds": {
    message: "Please select:",
    options: ["Return Policy", "Refund Status", "Back"]
  },
  "Return Policy": {
    message: "You can return items within 7 days of delivery.",
    options: ["Back to Returns", "Main Menu"]
  },
  "Refund Status": {
    message: "Refunds are credited within 5-7 business days.",
    options: ["Back to Returns", "Main Menu"]
  },
  "Payments": {
    message: "Choose a payment issue:",
    options: ["Payment Failed", "Wallet Balance", "Back"]
  },
  "Payment Failed": {
    message: "If payment failed, the deducted amount will be refunded within 3-5 days.",
    options: ["Back to Payments", "Main Menu"]
  },
  "Wallet Balance": {
    message: "You can check your wallet balance under 'My Account' > 'Wallet'.",
    options: ["Back to Payments", "Main Menu"]
  },
  "Offers": {
    message: "Choose an offer query:",
    options: ["Coupons", "Bank Offers", "Back"]
  },
  "Coupons": {
    message: "Apply coupons at checkout under 'Apply Coupon'.",
    options: ["Back to Offers", "Main Menu"]
  },
  "Bank Offers": {
    message: "Check latest bank offers on the payment page.",
    options: ["Back to Offers", "Main Menu"]
  },
  "Account": {
    message: "Choose account help:",
    options: ["Change Password", "Update Address", "Back"]
  },
  "Change Password": {
    message: "Go to 'Settings' > 'Security' > 'Change Password'.",
    options: ["Back to Account", "Main Menu"]
  },
  "Update Address": {
    message: "Go to 'My Account' > 'Addresses' > 'Add/Edit'.",
    options: ["Back to Account", "Main Menu"]
  }
};

let currentState = "start";

function showState(state) {
  const chatBox = document.getElementById("chatBox");
  const suggestionsDiv = document.getElementById("suggestions");

  const botMessage = document.createElement("div");
  botMessage.classList.add("message", "bot");
  botMessage.innerText = chatFlow[state].message;
  chatBox.appendChild(botMessage);
  chatBox.scrollTop = chatBox.scrollHeight;

  suggestionsDiv.innerHTML = "";

  chatFlow[state].options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("suggestion-btn");
    btn.onclick = () => handleUser(option);
    suggestionsDiv.appendChild(btn);
  });
}

function handleUser(choice) {
  const chatBox = document.getElementById("chatBox");

  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user");
  userMessage.innerText = choice;
  chatBox.appendChild(userMessage);

  if (choice === "Back") {
    currentState = "start";
  } else if (choice === "Back to Orders") {
    currentState = "Orders";
  } else if (choice === "Back to Returns") {
    currentState = "Returns & Refunds";
  } else if (choice === "Back to Payments") {
    currentState = "Payments";
  } else if (choice === "Back to Offers") {
    currentState = "Offers";
  } else if (choice === "Back to Account") {
    currentState = "Account";
  } else if (choice === "Main Menu") {
    currentState = "start";
  } else {
    currentState = choice;
  }

  setTimeout(() => showState(currentState), 500);
}

window.onload = () => showState(currentState);
