var supportsTraversals = document.implementation.hasFeature('Traversal', '2.0');
var supportsNodeIterator = (typeof document.createNodeIterator == 'function');
var supportsTreeWalker = (typeof document.createTreeWalker == 'function');

if (supportsTraversals && supportsTreeWalker) {
    // 只显示<p>元素的节点迭代器
    var filter = {
        acceptNode: function (node) {
            return node.tagName.toLowerCase() == 'li' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    };
    /**
     * 或者可以这样写
     var filter = function(node){
            return node.tagName.toLowerCase() == 'li' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        };
     */

    var root = document.getElementById('demo');
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null, false);

    var firstNode = walker.firstChild();
    console.log(firstNode.tagName); // P
    var nextNode = walker.nextSibling();
    console.log(nextNode.tagName); // UL

    var node = walker.firstChild();
    console.log(node == walker.currentNode); // true
    while (node !== null) {
        console.log(node.tagName);
        node = walker.nextSibling();
    }
}