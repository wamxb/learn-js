// http://www.cnblogs.com/yincheng/p/h5-history.html
// 当前第几页
var pageIndex = window.location.hash.replace('#page=', '') || 0;
// 请求函数
function makeRequest(url, cb) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = stateChange;
    // 请求传两个参数，一个是当前第几页，另一个是每页的数据条数
    request.open('GET', url, true);
    request.send(null);

    function stateChange() {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var req = JSON.parse(request.responseText);
                typeof cb == 'function' && cb(req);
            } else {
                // Error :(
                console.error(request.status, request.responseText);
            }
        }
    }
}

function renderPage(books) {
    books = books.data;
    var bookHtml =
        "<table>" +
        "   <tr>" +
        "       <th>书名</th>" +
        "       <th>作者</th>" +
        "       <th>版本</th>" +
        "   </tr>";
    for (var i in books) {
        bookHtml +=
            "<tr>" +
            "   <td>" + books[i].book_name + "</td>" +
            "   <td>" + books[i].author + "</td>" +
            "   <td>" + books[i].edition + "</td>" +
            "</tr>";
    }
    bookHtml += "</table>";
    bookHtml +=
        "<button>上一页</button>" +
        "<button onclick='nextPage();'>下一页</button>";
    document.getElementById('book').innerHTML = bookHtml;
}

function nextPage() {
    // 将页面的index+1
    pageIndex++;
    // 重新发请求和页面加载
    makeRequest('getBook' + pageIndex + '.json', renderPage);
    window.location.hash = '#page=' + pageIndex;
}

window.onhashchange = function(){
    var page = window.location.hash.replace('#page=', '') || 0;
    makeRequest('getBook' + pageIndex + '.json', renderPage);
};

makeRequest('getBook' + pageIndex + '.json', renderPage);