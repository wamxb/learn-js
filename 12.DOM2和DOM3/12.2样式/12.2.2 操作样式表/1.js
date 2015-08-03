var myDiv = document.getElementById('myDiv');
if (document.defaultView.getComputedStyle) {
    var computedStyle = document.defaultView.getComputedStyle(myDiv, null);

    console.log(computedStyle.backgroundColor); // rgb(255, 0, 0)
    console.log(computedStyle.width); // 100px;
    console.log(computedStyle.height); // 200px;
    console.log(computedStyle.border); // chrome:"1px solid rgb(0, 0, 0)" firfox ������ֵ����ͬ����������ۺϣ�rollup�����ԣ���border���ķ�ʽ��ͬ
    console.log(computedStyle.visibility); // 'visible'
}

// IE��
if (myDiv.currentStyle) {
    var currentStyle = myDiv.currentStyle;
    console.log(currentStyle.backgroundColor); // red
    console.log(currentStyle.width); // 100px
    console.log(currentStyle.height); // 200px
    console.log(currentStyle.border); // '' �ۺ����Բ�����
    console.log(currentStyle.visibility); // 'inherit'
}