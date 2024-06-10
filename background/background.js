chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'getWindows') {
    chrome.windows.getAll({populate: true}, (windows) => {
      sendResponse(windows);
    });
    return true;
  }
});
