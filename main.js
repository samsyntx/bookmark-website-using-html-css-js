// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");

siteNameInputEl.addEventListener("blur", function() {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
})

siteUrlInputEl.addEventListener("blur", function() {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
})

function functionToAddItem(siteNameInputElValue, siteUrlInputElValue) {

    let creatediv = document.createElement("div");
    creatediv.classList.add("div-items");
    bookmarksListEl.appendChild(creatediv);

    let createLi = document.createElement("li");
    createLi.classList.add("liststyle");
    createLi.textContent = siteNameInputElValue;
    creatediv.appendChild(createLi);

    let createAnchor = document.createElement("a");
    createAnchor.textContent = siteUrlInputElValue;
    createAnchor.href = siteUrlInputElValue;
    creatediv.appendChild(createAnchor);
}

submitBtnEl.addEventListener("click", function() {
    let siteNameInputElValue = siteNameInputEl.value;
    let siteUrlInputElValue = siteUrlInputEl.value;

    if (siteNameInputElValue === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else if (siteUrlInputElValue === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        functionToAddItem(siteNameInputElValue, siteUrlInputElValue);
    }
})


bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});
