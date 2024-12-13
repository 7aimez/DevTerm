function run() {
  code = document.getElementById("code")
}

function save() {
  documentName = document.getElementById("documentName").value;
  localStorage.setItem(documentName, document.getElementById("code").value)
}

function load() {
  requestedName = prompt("What is the name of the document?")
  document.getElementById("code").value = localStorage.getItem(requestedName)
}

function clear() {
  code = document.getElementById("code")
  code.value = ""
}
