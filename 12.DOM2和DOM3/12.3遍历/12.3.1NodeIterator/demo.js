//document.createNodeIterator(root, whatToShow, filter, false);

var supportsTraversals = document.implementation.hasFeature('Traversal', '2.0');
var supportsNodeIterator = (typeof document.createNodeIterator == 'function');
var supportsTreeWalker = (typeof document.createTreeWalker == 'function');

if (supportsTraversals && supportsNodeIterator) {
    // ֻ��ʾ<p>Ԫ�صĽڵ������
    var filter = {
        acceptNode: function (node) {
            return node.tagName.toLowerCase() == 'li' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    };
    /**
     * ���߿�������д
        var filter = function(node){
            return node.tagName.toLowerCase() == 'li' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        };
     */

    var root = document.getElementById('demo');
    var iterator = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT, filter, false);
    var node = iterator.nextNode();
    while (node !== null) {
        console.log(node.tagName);
        node = iterator.nextNode();
    }
}