// Ace Editor Setup
let editor = ace.edit('aceEditor', {mode: "ace/mode/markdown", selectionStyle: "text"});
editor.getSession().setUseWrapMode(true);
editor.renderer.setScrollMargin(10, 5, 10, 5);
editor.setOptions({
  maxLines: Infinity,
  indentedSoftWrap: false,
  fontSize: 14
});
editor.setTheme("ace/theme/twilight");

let isEdited = false;
editor.on('change', () => {
  isEdited = true;
  renderMd();
});

// Render Markdown
function renderMd() {
  $('#output').html(DOMPurify.sanitize(marked(editor.getValue())));
}

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

// Auto theme depending on time
let d = new Date();
let hour = d.getHours();
let day;
if (hour <= 18 || hour >= 6) {
  day = true;
  lightDay();
} else {
  day = false;
  lightNight();
}

// Toggle theme button
function toggleLight() {
  if (day) {
    day = false;
    lightDay();
  } else {
    day = true;
    lightNight();
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

// Welcome script
let welcomeScript = `# Welcome to Viewme.md Markdown Editor

Start typing or use buttons to add quick templates.
`;
editor.setValue(welcomeScript);
editor.gotoLine(editor.session.getLength());
renderMd();
