// Setup editor
let editor = ace.edit('aceEditor');
editor.getSession().setUseWrapMode(true);
editor.renderer.setScrollMargin(10, 5, 10, 5);
editor.setOptions({
  maxLines: Infinity,
  indentedSoftWrap: false,
  fontSize: 14
});

let isEdited = false;
editor.on('change', () => {
  isEdited = true;
  renderMd();
});

// Render
function renderMd() {
  $('#output').html(DOMPurify.sanitize(marked(editor.getValue())));
}

// Download
function download() {
  let filename = "README.md";
  let text = editor.getValue();
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}

/*
//leave
$(window).bind('beforeunload', function() {
  if (isEdited) {
    return 'Are you sure you want to leave? Your changes will be lost.';
  }
});
*/

// Welcome script
let welcomeScript = `# Welcome to Viewme.md Markdown Editor

Start typing or use buttons to add quick templates.
`;
editor.setValue(welcomeScript);
editor.gotoLine(editor.session.getLength());
renderMd();
