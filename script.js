function run() {
  // Get the content of the textarea
  // const codeContent = document.getElementById('code').value;

  // Use eval to run the code
  // eval(codeContent);

  // Show the content in another file
  // const outputContent = document.getElementById('output').value;
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
  document.getElementById("code").value = ""
}