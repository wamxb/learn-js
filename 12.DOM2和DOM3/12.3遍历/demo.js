var supportsTraversals = document.implementation.hasFeature('Traversal', '2.0');
var supportsNodeIterator = (typeof document.createNodeIterator == 'function');
var supportsTreeWalker = (typeof document.createTreeWalker == 'function');