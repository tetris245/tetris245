function sendMessage(data) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, data);
  });
}
// calls on popup load
chrome.runtime.onMessage.addListener(function (request) {
  if (request.autoRelog) {
    autoRelogButton.parentElement.remove();
  }
  if (request.CurrentScreen === 'Login') {
    safewordButton.disabled = true;
    addMoneyButton.disabled = true;
    addMoneyField.disabled = true;
    autoRelogButton.hidden = false;
  }
});

window.onload = function () {
  autoRelogButton.hidden = true;
  checkForDisabledUI();
};

// function readLocalStorage() {
//   return new Promise((reslove, reject) => {
//     chrome.storage.local.get('Settings', (data) => {
//       if (data.Settings != undefined) {
//         reslove(data.Settings);
//       } else {
//         reject();
//       }
//     });
//   });
// }
let addMoneyButton = document.querySelector('#addMoneyButton');
let addMoneyField = document.querySelector('#addMoneyField');
let safewordButton = document.querySelector('#safewordButton');
let executeButton = document.querySelector('#executeButton');
let executeField = document.querySelector('#executeField');
let autoRelogButton = document.querySelector('#autoRelogButton');

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (document.activeElement.id === 'addMoneyField') {
      console.log('money click');
      addMoneyButton.click();
    }
    if (document.activeElement.id === 'executeField') {
      console.log('execute click');
      executeButton.click();
    }
  }
});

addMoneyButton.addEventListener('click', () => {
  sendAction('AddMoney');
});
safewordButton.addEventListener('click', () => {
  sendAction('Safeword');
});
executeButton.addEventListener('click', () => {
  sendAction('Execute');
});
autoRelogButton.addEventListener('click', () => {
  sendAction('AutoRelog');
  autoRelogButton.disabled = true;
  autoRelogButton.innerHTML = 'Auto-relog is enabled';
});

function sendAction(action) {
  let data = { action: action };
  if (action === 'AddMoney') {
    data.money = addMoneyField.valueAsNumber;
  }
  if (action === 'Execute') {
    data.code = executeField.value;
  }
  sendMessage(data);
}

function checkForDisabledUI() {
  sendAction('CheckForDisabledUI');
}
