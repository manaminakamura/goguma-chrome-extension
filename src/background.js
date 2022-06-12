chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        type: 'normal',
        id: 'goguma',
        title: 'goguma解析',
        contexts: ['selection']
    });
});

chrome.contextMenus.onClicked.addListener(function(item, tab){
    console.log(item.selectionText);
    var url = `https://django-konlpy-api-wbc37rju4a-uc.a.run.app/analysis?text=${item.selectionText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        chrome.tabs.sendMessage(tab.id, data)
    })
});