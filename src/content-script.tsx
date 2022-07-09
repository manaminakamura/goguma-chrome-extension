import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    sendResponse({ message: "response" }); 
    showModal(message);
    return true;
  }
);

const showModal = (message) => {
  const modal = document.createElement("dialog");
  modal.setAttribute(
    "style",`
			max-height: 450px;
			width: 600px;
			border: none;
			top: 150px;
			border-radius: 10px;
			background-color: white;
			position: fixed;
			`
  );
  modal.innerHTML = `<div id="popup-content"; style="height: 100%"></div>
			<div style="position: absolute; top: 5px; right: 40px;">
			<button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px; position: fixed; cursor: pointer;">×</button>
			</div>`;
  document.body.appendChild(modal);
  const dialog = document.querySelector("dialog");
  dialog.showModal();
  dialog.querySelector("button").addEventListener("click", () => {
    dialog.close();
  });
  ReactDOM.render(
    <React.StrictMode>
      <App text={message} />
    </React.StrictMode>,
    document.getElementById("popup-content")
  );
};