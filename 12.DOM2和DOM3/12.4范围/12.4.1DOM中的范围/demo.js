//or: var supportsRange = document.implementation.hasFeature('Range', '2.0');
var supportsRange = (typeof document.createRange == 'function');
if (supportsRange) {
    var range1 = document.createRange();
    var range2 = document.createRange();
    var p = document.getElementById('demo');

    var pIndex = -1;
    var i, len;
    for (i = 0, len = p.parentNode.childNodes.length; i < len; i++) {
        if (p.parentNode.childNodes[i] == p) {
            pIndex = i;
            break;
        }
    }

    range1.setStart(p.parentNode, pIndex);
}


var p1 = document.getElementById('demo'),
    helloNode = p1.firstChild.firstChild,
    worldNode = p1.lastChild,
    rang = document.createRange();

range.setStart(helloNode, 2);
range.setEnd(worldNode, 3);

range.deleteContents();


var range1 = document.createRange();
var range2 = document.createRange();
var p1 = document.getElementById('p1');

range1.selectNodeContents(p1);
range2.selectNodeContents(p1);
range2.setEndBefore(p1.lastChild);

console.log(range1.compareBoundaryPoints(Range.START_TO_START, range2));
