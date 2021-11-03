// Ace Editor Setup
let editor = ace.edit('aceEditor', {mode: "ace/mode/markdown", selectionStyle: "text"});
editor.getSession().setUseWrapMode(true);
editor.renderer.setScrollMargin(10, 5, 10, 5);
editor.setOptions({
  maxLines: Infinity,
  indentedSoftWrap: false,
  fontSize: 14
});
editor.setTheme("ace/theme/github");

// Render Markdown
function renderMd() {
  $('#output').html(DOMPurify.sanitize(marked.parse(editor.getValue())));
}
renderMd();
editor.gotoLine(editor.session.getLength());

let isEdited = false;
editor.on('change', () => {
  isEdited = true;
  renderMd();
});


// Download README.md file
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

// LIGHT THEMES
let icon = $("#modeIcon");
let day = true;

// Light theme
function lightDay() {
  icon.addClass("fa-moon").removeClass("fa-sun");
  editor.setTheme("ace/theme/github");
  $(".editor").css("background-color", "#fff");
}

// Dark theme
function lightNight() {
  icon.addClass("fa-sun").removeClass("fa-moon");
  editor.setTheme("ace/theme/twilight");
  $(".editor").css("background-color", "#141414");
}

// Toggle theme button
function toggleLight() {
  if (day) {
    day = false;
    lightNight();
  } else {
    day = true;
    lightDay();
  }
}
/*
//leave
$(window).bind('beforeunload', function() {
  if (isEdited) {
    return 'Your changes will be lost.';
  }
});
*/


