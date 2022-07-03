chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    type: "normal",
    id: "goguma",
    title: "goguma解析",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(item, tab){
  chrome.tabs.sendMessage(tab.id, item.selectionText);
});