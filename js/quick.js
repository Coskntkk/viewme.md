function h(t) {
  let tag = "#".repeat(t);
  let final = tag + " Heading";
  editor.setValue(editor.getValue() + `\n${final}`);
  editor.gotoLine(editor.session.getLength());
}

function emp(t){
  let tag = "*".repeat(t);
  let final = tag + "Text" + tag;
  editor.setValue(editor.getValue() + `\n${final}\n`);
  editor.gotoLine(editor.session.getLength());
}
