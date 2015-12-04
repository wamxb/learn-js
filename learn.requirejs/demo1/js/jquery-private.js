define(['jquery'], function(jq) {
    console.log('jquery-private');
    return jq.noConflict(true);
});