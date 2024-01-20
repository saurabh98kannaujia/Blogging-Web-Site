function copyCode() {
    // Get the text content of the code snippet
    var codeSnippet = document.getElementById("codeSnippet");
    var codeText = codeSnippet.textContent || codeSnippet.innerText;

    // Create a textarea element to hold the code
    var textarea = document.createElement("textarea");
    textarea.value = codeText;
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the textarea element
    document.body.removeChild(textarea);

    // Provide visual feedback
    alert("Code copied to clipboard!");
  }