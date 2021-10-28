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
  let link = "https://youtu.be/dQw4w9WgXcQ";
  if (t == 2) {
    pref = "!";
    link = "https://raw.githubusercontent.com/Coskntkk/viewme.md/main/icon/icon.ico.png";
  } else if (t == 3) {
    link = $("#linkUrl").val();
  }
  let final = nl + pref + `[ Display Text ]( ${link} )` + nl;
  updateMd(final);
}

function img(t) {
  let [ imgHeight, imgWidth, imgUrl ] = [ $("#imgH").val(), $("#imgV").val(), $("#imgURL").val() ];
  final = nl + `<img src="${imgUrl}" alt="alt text" width="${imgWidth}px" height="${imgHeight}px">` + nl;
  $("#imgH").val("");
  $("#imgV").val("");
  $("#imgURL").val("");
  updateMd(final);
}

function tbl(t) {
  let final = "";
  if (t == 1){
    final = nl + `| Heading | Heading |
| --- | --- |
| Item | Item |
| Item | Item |`
} else if (t == 2 && $("#tableC").val()>0 && $("#tableR").val()>0) {
  let tCols = $("#tableC").val();
  let tRows = $("#tableR").val();
  final = nl + "|" + " Heading |".repeat(tCols) + nl + "|" + " ----- | ".repeat(tCols) + nl;
  final += ("|" + " Item |".repeat(tCols) + nl).repeat(tRows);
  $("#tableC").val(0);
  $("#tableR").val(0);
}
  updateMd(final);
}

function tList(){
  let final = nl + `- [x] Task 1
- [ ] Task 2
- [ ] Task 3` + nl;
updateMd(final);
}

function line(t){
  let [ tag1, tag2, final ] = [ "~~", "~~", "" ];
  if (t == 1){
    final = nl + tag1 + "Styled text" + tag2 + nl;
  } else if (t == 2) {
    [ tag1, tag2, final] = ["<", "ins>", ""];
    final = nl + tag1 + tag2 + "Styled text" + tag1 + "/" + tag2 + nl;
  }
  updateMd(final);
}
