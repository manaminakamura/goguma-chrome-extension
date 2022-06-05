chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        sendResponse({ message: "response" }); 
        console.log(message);
        showModal(message);
        return true;
    }
);

const showModal = (data) => {
    const modal = document.createElement("dialog");
    modal.setAttribute(
    "style",`
    height:450px;
    border: none;
    top:150px;
    border-radius:20px;
    background-color:white;
    position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
    `
    );
    modal.innerHTML = `<div id="popup-content"; style="height:100%">${JSON.stringify(data)}</div>
    <div style="position:absolute; top:0px; left:5px;">
    <button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
    </div>`;
    document.body.appendChild(modal);
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    // const iframe = document.getElementById("popup-content");
    // iframe.src = chrome.runtime.getURL("popup.html");
    // iframe.frameBorder = 0;
    dialog.querySelector("button").addEventListener("click", () => {
        dialog.close();
    });
}