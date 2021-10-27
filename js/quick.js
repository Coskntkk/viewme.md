let nl = "\n";

function updateMd(content) {
  editor.setValue(editor.getValue() + `${content}`);
  editor.gotoLine(editor.session.getLength());
}

function h(t) {
  let tag = "#".repeat(t);
  let final = nl + tag + " Heading";
  updateMd(final);
}

function emp(t) {
  let tag = "*".repeat(t);
  let final = nl + tag + "Text" + tag + nl;
  updateMd(final);
}

function bq() {
  let tag = "> ";
  let final = nl + tag + "Blockquote" + nl;
  updateMd(final);
}

function ol() {
  let lines = $("#olLine").val();
  let final = "";
  for (var i=1; i<=lines; i++) {
    final += `${i}. ` + nl;
  }
  updateMd(final);
}

function ul() {
  let lines = $("#ulLine").val();
  if (!lines) {
    lines = 1;
  }
  let final = `- ${nl}`.repeat(lines);
  updateMd(final);
}

function code(t) {
  let tag = "`";
  let final = "";
  if (t == "2"){
    tag = tag.repeat(3);
    final = nl + tag + " language"+ nl + "Code" + nl.repeat(2) + tag + nl;
  } else {
    final = tag + "Code" + tag;
  }
  updateMd(final);
}

function hr() {
 let tag = "---";
 let final = nl + tag + nl.repeat(2);
 updateMd(final);
}

function link(t) {
  let pref = "";
  if (t == 2){
    pref = "!";
  }
  let final = nl + pref + "[ Display Text ]( Link )" + nl;
  updateMd(final);
}

function img() {
  let height = $("#imgH").val();
  let width = $("#imgV").val();
  final = nl + `<img src="image adress" alt="alt text" width="${width}" height="${height}">` + nl;
  updateMd(final);
}
