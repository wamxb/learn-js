/**
 * Compares equality of a and b
 * @param a
 * @param b
 */
function equal(a, b){
  if (a === b) return true;
  if (a === undefined || b === undefined) return false;
  if (a === null || b === null ) return false;

  if (a.constructor === String) return a+'' === b+'';
  if (b.constructor === String) return b+'' === a+'';
  return false;
}


function indexOf(value, array) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (equal(value, array[i])) return i;
  }
  return -1;
}


function createContainer() {
    var container = $(document.createElement("div")).attr({
        "class": "select2-container select2-container-multi"
    }).html([
        "<ul class='select2-choices'>",
        "  <li class='select2-search-field'>",
        "    <label for='' class='select2-offscreen'></label>",
        "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
        "  </li>",
        "</ul>",
        "<div class='select2-drop select2-drop-multi select2-display-none'>",
        "   <ul class='select2-results'>",
        "   </ul>",
        "</div>"].join(""));
    return container;
}
