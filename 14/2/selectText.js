/**
 + ---------------------------------------- +
 + Function: selectText
 + By: zplus
 + ---------------------------------------- +
 + Date: 2014/11/8
 + Update:
 + ---------------------------------------- +
 **/

// 得到选择的文本
function getSelectedText(textbox) {
    if (typeof textbox.selectionStart == 'number') {
        return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd);
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
}

// 选择部分文本
function selectText(textbox, startIndex, stopIndex) {
    if (textbox.setSelectionRange) {
        textbox.setSelectionRange(startIndex, stopIndex);
    } else if (textbox.createTextRange) { // IE8及早版支持使用范围选择部分文本
        var range = textbox.createTextRange(); // 要先创建一个范围
        range.collapse(true);
        range.moveStart("character", startIndex);
        range.moveEnd("character", stopIndex - startIndex);
        range.select();
    }
    textbox.focus();
}