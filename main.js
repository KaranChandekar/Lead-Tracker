let myLeads = []
const inputBtn = document.getElementById("input-btn")
const saveEl = document.getElementById("save-el")

inputBtn.addEventListener("click", function () {
    myLeads.push("www.owesomleads.com")
    console.log(myLeads)
})