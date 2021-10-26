
marked.setOptions({
  renderer: new marked.Renderer(),
  langPrefix: 'language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

let isEdited = false;


// Setup editor
let editor = ace.edit('editor');
editor.getSession().setUseWrapMode(true);
editor.renderer.setScrollMargin(10, 10, 10, 10);
editor.setOptions({
  maxLines: Infinity,
  indentedSoftWrap: false,
  fontSize: 14,
  wrapBehavioursEnabled: true,
  // TODO consider some options
});
editor.on('change', () => {
  isEdited = true;
  convert();
});

let convert = () => {
  let html = marked(editor.getValue());
  let sanitized = DOMPurify.sanitize(html);
  $('#output').html(sanitized);
}

/*
//leave
$(window).bind('beforeunload', function() {
  if (isEdited) {
    return 'Are you sure you want to leave? Your changes will be lost.';
  }
});
*/

convert();

function download(){
  alert("working")
}
