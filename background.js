function annoyUser() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const tabId = tabs[0].id;

      // Inject content script if not already present
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId },
          files: ["content.js"]
        },
        () => {
          // Only send message if content script is properly injected
          chrome.tabs.sendMessage(tabId, { annoying: true }, () => {
            if (chrome.runtime.lastError) {
              console.warn("Message not sent:", chrome.runtime.lastError.message);
            }
          });
        }
      );
    }
  });

  // Trigger every 30 to 90 seconds
  let nextAnnoyTime = Math.floor(Math.random() * (30000 - 10000)) + 10000;
  setTimeout(annoyUser, nextAnnoyTime);
}

chrome.action.onClicked.addListener(() => {
  annoyUser();
});

chrome.runtime.onInstalled.addListener(() => {
  annoyUser();
});

