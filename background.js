// Send a message to content script occasionally
function annoyUser() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { annoying: true });
    }
  });

  // Trigger every 30 to 90 seconds
  let nextAnnoyTime = Math.floor(Math.random() * (90000 - 30000)) + 30000;
  setTimeout(annoyUser, nextAnnoyTime);
}

chrome.runtime.onInstalled.addListener(() => {
  annoyUser();
});
