function defineJS() {
    var e = $.getPathName();
    require(["MarketApp",
        "MainPage",
        "FunPage",
        "RankingFrame",
        "MainHeader",
        "MainNav",
        "MainAppView",
        "AppGridView",
        "AppListView",
        "MainAppListView",
        "SearchAppListView",
        "CategoryPopView",
        "CategoryItemView",
        "CategoryFrame",
        "CategoryAppView",
        "CategoryGameView",
        "CategoryApkListPage",
        "TopicFrame",
        "TopicItemView",
        "AppDetailPage",
        "AppHeaderFrame",
        "AppIntroduceFrame",
        "AppScreenhot",
        "AppComment",
        "AppCommentItemView",
        "TopicAppView",
        "SearchPage",
        "SearchFrame",
        "SearchNoneFrame",
        "SearchTopHeader",
        "GuessLikeFrame",
        "AuthorOtherAppFrame",
        "WeeklyFrame",
        "WeeklyItemView",
        "WeeklyDetail",
        "AppPopImg",
        "AutoComplete",
        "FooterView"], function () {
        MarketApp.baseUrl = "",
            MarketApp.webSitePath = "/",
            $(window).orientation(),
                e != "/" ? (e += "skins.json", $.getSkins(e)) : Backbone.history.start()
    })
}
var Manager;
Manager || (Manager = {}), function () {
    function t() {
    }

    var n = {
        MAIN_PAGE: {value: ["MainPage"], writable: !1, enumerable: !0, configurable: !1},
        FUN_PAGE: {value: ["FunPage"], writable: !1, enumberable: !0, configurable: !1},
        RANKING_PAGE: {value: ["RankingFrame"], writable: !1, enumerable: !0, configurable: !1},
        RankingAppView: {value: ["RankingAppView"], writable: !1, enumerable: !0, configurable: !1},
        MAIN_HEADER: {value: ["MainHeader"], writable: !1, enumerable: !0, configurable: !1},
        MAIN_NAV: {value: ["MainNav"], writable: !1, enumerable: !0, configurable: !1},
        MAIN_APPVIEW: {value: ["MainAppView"], writable: !1, enumerable: !0, configurable: !1},
        APPLISTVIEW: {value: ["AppListView"], writable: !1, enumerable: !0, configurable: !1},
        MAINAPPLIST: {value: ["MainAppListView"], writable: !1, enumerable: !0, configurable: !1},
        SEARCHAPPLIST: {value: ["SearchAppListView"], writable: !1, enumerable: !0, configurable: !1},
        CATEGORY_POP_VIEW: {value: ["CategoryPopView"], writable: !1, enumerable: !0, configurable: !1},
        CATEGORY_ITEM_VIEW: {value: ["CategoryItemView"], writable: !1, enumerable: !0, configurable: !1},
        CATEGORY_PAGE: {value: ["CategoryFrame"], writable: !1, enumerable: !0, configurable: !1},
        CATEGORY_APP_VIEW: {value: ["CategoryAppView"], writable: !1, enumerable: !0, configurable: !1},
        CATEGORY_GAME_VIEW: {value: ["CategoryGameView"], writable: !1, enumerable: !0, configurable: !1},
        APPGRIDVIEW: {value: ["AppGridView"], writable: !1, enumerable: !0, configurable: !1},
        CATEGORYLIST_PAGE: {value: ["CategoryApkListPage"], writable: !1, enumerable: !0, configurable: !1},
        TOPIC_PAGE: {value: ["TopicFrame"], writable: !1, enumerable: !0, configurable: !1},
        TOPICITEM: {value: ["TopicItemView"], writable: !1, enumerable: !0, configurable: !1},
        APPDETAIL_PAGE: {value: ["AppDetailPage"], writable: !1, enumerable: !0, configurable: !1},
        APPHEADER_FRAME: {value: ["AppHeaderFrame"], writable: !1, enumerable: !0, configurable: !1},
        APPINTRODUCE_FRAME: {value: ["AppIntroduceFrame"], writable: !1, enumerable: !0, configurable: !1},
        APPSCREENHOT: {value: ["AppScreenhot"], writable: !1, enumerable: !0, configurable: !1},
        APPCOMMENT: {value: ["AppComment"], writable: !1, enumerbale: !0, configurable: !1},
        APPCOMMENTITEMVIEW: {value: ["AppCommentItemView"], writable: !1, enumerable: !0, configurable: !1},
        TOPICLIST_PAGE: {value: ["TopicAppView"], writable: !1, enumerable: !0, configurable: !1},
        SEARCH_PAGE: {value: ["SearchPage"], writable: !1, enumerable: !0, configurable: !1},
        SEARCH_FRAME: {value: ["SearchFrame"], writable: !1, enumerable: !0, configurable: !1},
        SEARCH_NONEFRAME: {value: ["SearchNoneFrame"], writable: !1, enumerable: !0, configurable: !1},
        SEARCH_TOPHEADER: {value: ["SearchTopHeader"], writable: !1, enumerable: !0, configurable: !1},
        GUESSLIKE_FRAME: {value: ["GuessLikeFrame"], writable: !1, enumerable: !0, configurable: !1},
        AUTHOR_OTHERAPP_FRAME: {value: ["AuthorOtherAppFrame"], writable: !1, enumerable: !0, configurable: !1},
        WEEKLY_FRAME: {value: ["WeeklyFrame"], writable: !1, enumerable: !0, configurable: !1},
        WEEKLYITEMVIEW: {value: ["WeeklyItemView"], writable: !1, enumerable: !0, configurable: !1},
        WEEKLY_DETAIL: {value: ["WeeklyDetail"], writable: !1, enumerable: !0, configurable: !1},
        APPPOPIMG: {value: ["AppPopImg"], writable: !1, enumerable: !0, configurable: !1},
        AUTOCOMPLETE: {value: ["AutoComplete"], writable: !1, enumerable: !0, configurable: !1},
        FOOTER: {value: ["FooterView"], writable: !1, enumerable: !0, configurable: !1}
    };
    Object.defineProperties(t, n), t.callBacks = {}, t.requrieFile = function (e, n) {
        var r = "";
        for (var i in e)r += e[i];
        var s = t.callBacks[r];
        Boolean(s) || (s = new Array), s.push(n), t.callBacks[r] = s, require(e, function () {
            if (Boolean(t.callBacks[r])) {
                for (var e in s)s[e]();
                delete t.callBacks[r]
            }
        })
    }, Manager.ViewHandler = t
}(), define("ViewHandler", function () {
});
var Manager;
Manager || (Manager = {}), function () {
    function t() {
        var e = {
            webSiteUrl: {value: "", writable: !1, enumerable: !0, configurable: !1},
            qt: {value: "qt", writable: !1, enumerable: !0, configurable: !1},
            sort: {value: "sort", writable: !1, enumerable: !0, configurable: !1},
            pi: {value: "pi", writable: !1, enumerable: !0, configurable: !1},
            ps: {value: "ps", writable: !1, enumerable: !0, configurable: !1},
            key: {value: "key", writable: !1, enumerable: !0, configurable: !1},
            type: {value: "type", writable: !1, enumerable: !0, configurable: !1},
            id: {value: "id", writable: !1, enumerable: !0, configurable: !1},
            pid: {value: "pid", writable: !1, enumerable: !0, configurable: !1},
            rid: {value: "rid", writable: !1, enumerable: !0, configurable: !1},
            aid: {value: "aid", writable: !1, enumerable: !0, configurable: !1},
            poptype: {value: "poptype", writable: !1, enumerable: !0, configurable: !1},
            name: {value: "name", writable: !1, enumerable: !0, configurable: !1},
            num: {value: "num", writable: !1, enumerable: !0, configurable: !1},
            q: {value: "q", writable: !1, enumerable: !0, configurable: !1},
            QtAppList: {value: "wap/api.do?qt=1020", writable: !1, enumerable: !0, configurable: !1},
            QtAppRankingList: {value: "wap/api.do?qt=1022", writable: !1, enumerable: !0, configurable: !1},
            QtTestAppList: {value: "resultjson/allapplist.json?qt=1020", writable: !1, enumerable: !0, configurable: !1},
            QtSearchAppList: {value: "wap/api.do?qt=1005", writable: !1, enumerable: !0, configurable: !1},
            QtPopAppList: {value: "wap/api.do?qt=1012", writable: !1, enumerable: !0, configurable: !1},
            QtGuessLikeAppList: {value: "wap/api.do?qt=1019", writable: !1, enumerable: !0, configurable: !1},
            QtGuessLikeRandomAppList: {value: "wap/api.do?qt=1038", writable: !1, enumerable: !0, configurable: !1},
            QtAuthorOtherAppList: {value: "wap/api.do?qt=1014", writable: !1, enumerable: !0, configurable: !1},
            QtCatAppList: {value: "wap/api.do?qt=1008", writable: !1, enumerable: !0, configurable: !1},
            QtCategoryList: {value: "wap/api.do?qt=1100", writable: !1, enumerable: !0, configurable: !1},
            QtTopicAppList: {value: "wap/api.do?qt=1018", writable: !1, enumerable: !0, configurable: !1},
            QtAppDetail: {value: "wap/api.do?qt=1010", writable: !1, enumerable: !0, configurable: !1},
            QtAppItemSummary: {value: "wap/api.do?qt=1016", writable: !1, enumerable: !0, configurable: !1},
            QtAppComment: {value: "wap/api.do?qt=1011", writable: !1, enumerable: !0, configurable: !1},
            QtWeeklyList: {value: "wap/api.do?qt=2001", writable: !1, enumerable: !0, configurable: !1},
            QtWeeklyDetail: {value: "wap/api.do?qt=2002", writable: !1, enumerable: !0, configurable: !1},
            QtHotWordList: {value: "wap/api.do?qt=1107", writable: !1, enumerable: !0, configurable: !1},
            QtHotWordDefault: {value: "wap/api.do?qt=1105", writable: !1, enumerable: !0, configurable: !1},
            QtDownLoad: {value: "wap/api.do?qt=8001", writable: !1, enumerable: !0, configurable: !1},
            QtDownClient: {value: "wap/api.do?qt=8051", writable: !1, enumerable: !0, configurable: !1},
            QtGetCheckCode: {value: "wap/api.do?qt=8000", writable: !1, enumerable: !0, configurable: !1},
            QtHimarketInfo: {value: "wap/api.do?qt=8050", writable: !1, enumerable: !0, configurable: !1}
        };
        Object.defineProperties(t.prototype, e)
    }

    t.prototype.handleSearchAllAppListUrl = function (e, t, n, r, i) {
        var s = this, o = {};
        o[s.pi] = e, o[s.ps] = t, o[s.key] = decodeURI(n), o[s.type] = r, o[s.pid] = i;
        var u = s.webSiteUrl + MarketApp.webSitePath + s.QtSearchAppList + "&" + $.param(o);
        return u
    }, t.prototype.handleSearchAppListUrl = function (e, t, n, r, i) {
        var s = this, o = {};
        o[s.pi] = e, o[s.ps] = t, o[s.key] = decodeURI(n), o[s.type] = r, o[s.pid] = i;
        var u = s.webSiteUrl + MarketApp.webSitePath + s.QtSearchAppList + "&" + $.param(o);
        return u
    }, t.prototype.handleSearchGameListUrl = function (e, t, n, r, i) {
        var s = this, o = {};
        o[s.pi] = e, o[s.ps] = t, o[s.key] = decodeURI(n), o[s.type] = r, o[s.pid] = i;
        var u = s.webSiteUrl + MarketApp.webSitePath + s.QtSearchAppList + "&" + $.param(o);
        return u
    }, t.prototype.handleMainBoutiqueAppListUrl = function (e, t, n) {
        var r = this, i = {};
        i[r.pi] = e, i[r.ps] = t, i[r.poptype] = n;
        var s = r.webSiteUrl + MarketApp.webSitePath + r.QtPopAppList + "&" + $.param(i);
        return s
    }, t.prototype.handleRiseAppListUrl = function (e, t, n) {
        var r = this, i = {};
        i[r.pi] = e, i[r.ps] = t, i[r.pid] = n;
        var s = r.webSiteUrl + MarketApp.webSitePath + r.QtAppRankingList + "&" + $.param(i);
        return s
    }, t.prototype.handleRankingWeekAppListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleRankingWeekGameListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleCategoryTopAppListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleCategoryTopGameListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleAppDownListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleAppRateListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleAppTimeListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleGameDownListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleGameRateListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleGameTimeListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.pid] = n, s[i.sort] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleAuthorOthersAppListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.name] = n, s[i.aid] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtAuthorOtherAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleGuessLikeAppListUrl = function (e, t, n) {
        var r = this, i = {};
        i[r.pi] = e, i[r.ps] = t, i[r.aid] = n;
        var s = r.webSiteUrl + MarketApp.webSitePath + r.QtGuessLikeAppList + "&" + $.param(i);
        return s
    }, t.prototype.handleGuessLikeRandomAppListUrl = function (e, t, n) {
        var r = this, i = {};
        i[r.pi] = e, i[r.ps] = t;
        var s = r.webSiteUrl + MarketApp.webSitePath + r.QtGuessLikeRandomAppList + "&" + $.param(i);
        return s
    }, t.prototype.handleCategoryListUrl = function () {
        var e = this, t = e.webSiteUrl + MarketApp.webSitePath + e.QtCategoryList;
        return t
    }, t.prototype.handleCategoryItemAppListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.sort] = n, s[i.pid] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtCatAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleRateCategoryItemAppListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.sort] = n, s[i.pid] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtCatAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleTimeCategoryItemAppListUrl = function (e, t, n, r) {
        var i = this, s = {};
        s[i.pi] = e, s[i.ps] = t, s[i.sort] = n, s[i.pid] = r;
        var o = i.webSiteUrl + MarketApp.webSitePath + i.QtCatAppList + "&" + $.param(s);
        return o
    }, t.prototype.handleTopicItemAppListUrl = function (e, t, n) {
        var r = this, i = {};
        i[r.pi] = e, i[r.ps] = t, i[r.rid] = n;
        var s = r.webSiteUrl + MarketApp.webSitePath + r.QtTopicAppList + "&" + $.param(i);
        return s
    }, t.prototype.handleAppDetailUrl = function (e) {
        var t = this, n = {};
        n[t.id] = e;
        var r = t.webSiteUrl + MarketApp.webSitePath + t.QtAppDetail + "&" + $.param(n);
        return r
    }, t.prototype.handleAppCommentUrl = function (e, t, n) {
        var r = this, i = {};
        i[r.id] = e, i[r.pi] = t, i[r.ps] = n;
        var s = r.webSiteUrl + MarketApp.webSitePath + r.QtAppComment + "&" + $.param(i);
        return s
    }, t.prototype.handleWeeklyAppListUrl = function (e, t) {
        var n = this, r = {};
        r[n.pi] = e, r[n.ps] = t;
        var i = n.webSiteUrl + MarketApp.webSitePath + n.QtWeeklyList + "&" + $.param(r);
        return i
    }, t.prototype.handleWeeklyDetailUrl = function (e) {
        var t = this, n = {};
        n[t.id] = e;
        var r = t.webSiteUrl + MarketApp.webSitePath + t.QtWeeklyDetail + "&" + $.param(n);
        return r
    }, t.prototype.handleHotWordAppListUrl = function (e, t) {
        var n = this, r = {};
        r[n.num] = e;
        var i;
        t != "" ? (r[n.q] = t, i = n.QtHotWordList) : i = n.QtHotWordDefault;
        var s = n.webSiteUrl + MarketApp.webSitePath + i + "&" + $.param(r);
        return s
    }, t.prototype.handleDownLoadUrl = function (e) {
        var t = this, n = {};
        n[t.aid] = e;
        var r = t.webSiteUrl + MarketApp.webSitePath + t.QtDownLoad + "&" + $.param(n);
        return r
    }, t.prototype.handleHimarketUrl = function (e) {
        var t = this, n = {};
        n[t.id] = e;
        var r = t.webSiteUrl + MarketApp.webSitePath + t.QtDownClient + "&" + $.param(n);
        return r
    }, t.prototype.handleAppItemSummaryUrl = function (e) {
        var t = this, n = {};
        n[t.id] = e;
        var r = t.webSiteUrl + MarketApp.webSitePath + t.QtAppItemSummary + "&" + $.param(n);
        return r
    }, t.prototype.handleCheckCode = function () {
        var e = this, t = e.webSiteUrl + MarketApp.webSitePath + e.QtGetCheckCode;
        return t
    }, t.prototype.handleHimarketInfoUrl = function () {
        var e = this, t = e.webSiteUrl + MarketApp.webSitePath + e.QtHimarketInfo;
        return t
    }, Manager.ProtocolFactory = t
}(), define("ProtocolFactory", function () {
});
var Manager;
Manager || (Manager = {}), function () {
    function t() {
    }

    t.getAppListTaskMarkDataUrl = function (e) {
        var t = e.get("taskMark"), n = t.taskMarkType, r = "";
        switch (n) {
            case Mark.MPageTaskMark.TASKMARK_APP_BOUTIQUE_LIST:
                r = MarketApp.protocolFactory.handleMainBoutiqueAppListUrl(t.pageIndex, t.pageSize, 1);
                break;
            case Mark.MPageTaskMark.TASKMARK_APPRANKING_LIST_RISE:
                r = MarketApp.protocolFactory.handleRiseAppListUrl(t.pageIndex, t.pageSize, 0);
                break;
            case Mark.MPageTaskMark.TASKMARK_APPRANKING_LIST_WEEK:
                r = MarketApp.protocolFactory.handleRankingWeekAppListUrl(t.pageIndex, t.pageSize, 1, 5);
                break;
            case Mark.MPageTaskMark.TASKMAEK_GAMENKING_LIST_WEEK:
                r = MarketApp.protocolFactory.handleRankingWeekGameListUrl(t.pageIndex, t.pageSize, 2, 5);
                break;
            case Mark.MPageTaskMark.TASKMARK_APPTOP_LIST:
                r = MarketApp.protocolFactory.handleCategoryTopAppListUrl(t.pageIndex, t.pageSize, 1, 4);
                break;
            case Mark.MPageTaskMark.TASKMARK_GAMETOP_LIST:
                r = MarketApp.protocolFactory.handleCategoryTopGameListUrl(t.pageIndex, t.pageSize, 2, 4);
                break;
            case Mark.MPageTaskMark.TASKMARK_APP_DOWN_LIST:
                r = MarketApp.protocolFactory.handleAppDownListUrl(t.pageIndex, t.pageSize, 1, 4);
                break;
            case Mark.MPageTaskMark.TASKMARK_APP_RATE_LIST:
                r = MarketApp.protocolFactory.handleAppRateListUrl(t.pageIndex, t.pageSize, 1, 8);
                break;
            case Mark.MPageTaskMark.TASKMARK_APP_TIME_LIST:
                r = MarketApp.protocolFactory.handleAppTimeListUrl(t.pageIndex, t.pageSize, 1, 9);
                break;
            case Mark.MPageTaskMark.TASKMARK_GAME_DOWN_LIST:
                r = MarketApp.protocolFactory.handleGameDownListUrl(t.pageIndex, t.pageSize, 2, 4);
                break;
            case Mark.MPageTaskMark.TASKMARK_GAME_RATE_LIST:
                r = MarketApp.protocolFactory.handleGameRateListUrl(t.pageIndex, t.pageSize, 2, 8);
                break;
            case Mark.MPageTaskMark.TASKMARK_GAME_TIME_LIST:
                r = MarketApp.protocolFactory.handleGameTimeListUrl(t.pageIndex, t.pageSize, 2, 9);
                break;
            default:
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_CATEGORY_APP_LIST) != -1) {
                    var t = e.get("taskMark"), n = t.taskMarkType, i = n.substring(n.lastIndexOf("_") + 1);
                    r = MarketApp.protocolFactory.handleCategoryItemAppListUrl(t.pageIndex, t.pageSize, 4, i)
                }
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_CATEGORY_RATE_APP_LIST) != -1) {
                    var t = e.get("taskMark"), n = t.taskMarkType, i = n.substring(n.lastIndexOf("_") + 1);
                    r = MarketApp.protocolFactory.handleRateCategoryItemAppListUrl(t.pageIndex, t.pageSize, 8, i)
                }
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_CATEGORY_TIME_APP_LIST) != -1) {
                    var t = e.get("taskMark"), n = t.taskMarkType, i = n.substring(n.lastIndexOf("_") + 1);
                    r = MarketApp.protocolFactory.handleTimeCategoryItemAppListUrl(t.pageIndex, t.pageSize, 9, i)
                }
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_TOPIC_APP_LIST) != -1) {
                    var t = e.get("taskMark"), n = t.taskMarkType, s = n.substring(n.lastIndexOf("_") + 1);
                    r = MarketApp.protocolFactory.handleTopicItemAppListUrl(t.pageIndex, t.pageSize, s)
                }
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_SEARCH_ALL_LIST) != -1) {
                    var o = n.replace(Mark.MPageTaskMark.TASKMARK_SEARCH_ALL_LIST, "");
                    r = MarketApp.protocolFactory.handleSearchAllAppListUrl(t.pageIndex, t.pageSize, o, 1, 0)
                }
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_SEARCH_APP_LIST) != -1) {
                    var o = n.replace(Mark.MPageTaskMark.TASKMARK_SEARCH_APP_LIST, "");
                    r = MarketApp.protocolFactory.handleSearchAppListUrl(t.pageIndex, t.pageSize, o, 1, 1)
                }
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_SEARCH_GAME_LIST) != -1) {
                    var o = n.replace(Mark.MPageTaskMark.TASKMARK_SEARCH_GAME_LIST, "");
                    r = MarketApp.protocolFactory.handleSearchGameListUrl(t.pageIndex, t.pageSize, o, 1, 2)
                }
                if (n.indexOf(Mark.MPageTaskMark.HOTWORD_LIST) != -1) {
                    var u = n.replace(Mark.MPageTaskMark.HOTWORD_LIST, "");
                    r = MarketApp.protocolFactory.handleHotWordAppListUrl(10, u)
                }
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_AUTHOR_OTHERAPP_LIST) != -1) {
                    var a = n.replace(Mark.MPageTaskMark.TASKMARK_AUTHOR_OTHERAPP_LIST, ""), f = a.lastIndexOf("_"), l = a.substring(0, f), c = a.substring(f + 1);
                    r = MarketApp.protocolFactory.handleAuthorOthersAppListUrl(t.pageIndex, t.pageSize, l, c)
                }
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_GUESS_LIKEAPP_LIST) != -1) {
                    var t = e.get("taskMark"), n = t.taskMarkType, c = n.substring(n.lastIndexOf("_") + 1);
                    r = MarketApp.protocolFactory.handleGuessLikeAppListUrl(t.pageIndex, t.pageSize, c)
                }
                if (n.indexOf(Mark.MPageTaskMark.TASKMARK_GUESS_LIKE_RANDOM_APP_LIST) != -1) {
                    var l = n.replace(Mark.MPageTaskMark.TASKMARK_AUTHOR_OTHERAPP_LIST, "");
                    r = MarketApp.protocolFactory.handleGuessLikeRandomAppListUrl(t.pageIndex, t.pageSize)
                }
        }
        return r
    }, t.getCategoryTaskMarkDataUrl = function (e) {
        var t = e.get("taskMark"), n = t.taskMarkType, r = MarketApp.protocolFactory.handleCategoryListUrl();
        return r
    }, t.getAppDetailTaskMarkDataUrl = function (e) {
        var t = e.get("taskMark"), n = t.taskMarkType, r = n.substring(n.lastIndexOf("_") + 1), i = MarketApp.protocolFactory.handleAppDetailUrl(r);
        return i
    }, t.getAppCommentaskMarkDataUrl = function (e) {
        var t = e.get("taskMark"), n = t.taskMarkType, r = n.substring(n.lastIndexOf("_") + 1), i = MarketApp.protocolFactory.handleAppCommentUrl(r, t.pageIndex, t.pageSize);
        return i
    }, t.getWeeklyTaskMarkDataUrl = function (e) {
        var t = e.get("taskMark"), n = t.taskMarkType, r = MarketApp.protocolFactory.handleWeeklyAppListUrl(t.pageIndex, t.pageSize);
        return r
    }, t.getWeeklyDetailTaskMarkDataUrl = function (e) {
        var t = MarketApp.protocolFactory.handleWeeklyDetailUrl(e);
        return t
    }, t.getHimarketInfoUrl = function () {
        var e = MarketApp.protocolFactory.handleHimarketInfoUrl();
        return e
    }, t.getDownLoadUrl = function (e) {
        var t = MarketApp.protocolFactory.handleDownLoadUrl(e);
        return t
    }, t.getDownHimarketUrl = function (e) {
        var t = MarketApp.protocolFactory.handleHimarketUrl(e);
        return t
    }, t.getAppItemSummaryUrl = function (e) {
        var t = MarketApp.protocolFactory.handleAppItemSummaryUrl(e);
        return t
    }, t.getCheckCodeUrl = function () {
        var e = MarketApp.protocolFactory.handleCheckCode();
        return e
    }, Manager.TaskMarkHandler = t
}(), define("TaskMarkHandler", function () {
});
var Manager;
Manager || (Manager = {}), function () {
    function t() {
        this.mFunPage, this.mMainPage, this.mCategorysPage, this.mTopicsPage, this.mSearhPage, this.mDetailIscroll
    }

    t.prototype.showMainPage = function () {
        var e = this;
        if (!Boolean(e.mMainPage)) {
            var t = function () {
                e.mMainPage = new View.MainPage, e.mMainPage.initMainPage()
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.MAIN_PAGE, t)
        } else e.mMainPage.initMainPage()
    }, t.prototype.showMainHeaderView = function (e) {
        var t = function () {
            var t = new View.MainHeader(e);
            t.initMainHeader()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.MAIN_HEADER, t)
    }, t.prototype.showMainNavView = function (e) {
        var t = function () {
            var t = new View.MainNav(e);
            t.initMainNav()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.MAIN_NAV, t)
    }, t.prototype.showMainAppView = function (e, t) {
        var n = function () {
            var n = new View.MainAppView({selfHref: e, $tpl: t});
            n.initMainAppView()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.MAIN_APPVIEW, n)
    }, t.prototype.showMainAppItemView = function (e, t, n) {
        var r = Mark.MPageTaskMark.TASKMARK_APP_BOUTIQUE_LIST, i = function () {
            var i = new View.MainAppListView(e, t, r, n);
            i.initAppListView()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.MAINAPPLIST, i)
    }, t.prototype.showFunHeader = function () {
        var e = function () {
            var e = new View.FunHeader;
            e.initFunHeader()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.FUN_PAGE, e)
    }, t.prototype.showRankingFrame = function () {
        var e = this;
        if (!Boolean(e.mFunPage)) {
            var t = function () {
                e.mFunPage = new View.FunPage, e.mFunPage.initFunPage(e.mFunPage.showRankingFrame)
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.FUN_PAGE, t)
        } else e.mFunPage.initFunPage(e.mFunPage.showRankingFrame)
    }, t.prototype.showRiseList = function (e, t, n) {
        var r = Mark.MPageTaskMark.TASKMARK_APPRANKING_LIST_RISE;
        this.showAppListView(e, t, n, r)
    }, t.prototype.showAppRankingWeekList = function (e, t, n) {
        var r = Mark.MPageTaskMark.TASKMARK_APPRANKING_LIST_WEEK;
        this.showAppListView(e, t, n, r)
    }, t.prototype.showGameRankingWeekList = function (e, t, n) {
        var r = Mark.MPageTaskMark.TASKMAEK_GAMENKING_LIST_WEEK;
        this.showAppListView(e, t, n, r)
    }, t.prototype.showCateAppList = function (e, t, n, r, i) {
        var s;
        e == 34 ? s = Mark.MPageTaskMark.TASKMARK_APP_DOWN_LIST : e == 17 ? s = Mark.MPageTaskMark.TASKMARK_GAME_DOWN_LIST : s = Mark.MPageTaskMark.getTaskMarkCategoryApkListValue(e), this.showAppListView(t, n, r, s)
    }, t.prototype.showCateRateAppList = function (e, t, n, r) {
        var i;
        e == 34 ? i = Mark.MPageTaskMark.TASKMARK_APP_RATE_LIST : e == 17 ? i = Mark.MPageTaskMark.TASKMARK_GAME_RATE_LIST : i = Mark.MPageTaskMark.getTaskMarkCategoryRateApkListValue(e), this.showAppListView(t, n, r, i)
    }, t.prototype.showCateTimeAppList = function (e, t, n, r) {
        var i;
        e == 34 ? i = Mark.MPageTaskMark.TASKMARK_APP_TIME_LIST : e == 17 ? i = Mark.MPageTaskMark.TASKMARK_GAME_TIME_LIST : i = Mark.MPageTaskMark.getTaskMarkCategoryTimeApkListValue(e), this.showAppListView(t, n, r, i)
    }, t.prototype.showTopicFrame = function () {
        var e = this;
        if (!Boolean(e.mFunPage)) {
            var t = function () {
                e.mFunPage = new View.FunPage, e.mFunPage.initFunPage(e.mFunPage.showTopicFrame)
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.FUN_PAGE, t)
        } else e.mFunPage.initFunPage(e.mFunPage.showTopicFrame)
    }, t.prototype.showTopicItemView = function (e, t) {
        var n = function () {
            var n = new View.TopicItemView(e, t);
            n.initTopicItemView()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.TOPICITEM, n)
    }, t.prototype.showTopicAppList = function (e, t, n, r) {
        var i = Mark.MPageTaskMark.getTaskMarkTopicAppListValue(e);
        this.showAppListView(t, n, r, i)
    }, t.prototype.showTopicListPage = function (e) {
        var t = this;
        if (!Boolean(t.mTopicsPage)) {
            var n = function () {
                t.mTopicsPage = new View.TopicAppView, t.mTopicsPage.initTopicAppView(e)
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.TOPICLIST_PAGE, n)
        } else t.mTopicsPage.initTopicAppView(e)
    }, t.prototype.showCategoryFrame = function () {
        var e = this;
        if (!Boolean(e.mFunPage)) {
            var t = function () {
                e.mFunPage = new View.FunPage, e.mFunPage.initFunPage(e.mFunPage.showCategoryFrame)
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.FUN_PAGE, t)
        } else e.mFunPage.initFunPage(e.mFunPage.showCategoryFrame)
    }, t.prototype.showCategoryAppView = function (e, t) {
        var n = function () {
            var n = new View.CategoryAppView(e, t);
            n.initCategoryAppView()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORY_APP_VIEW, n)
    }, t.prototype.showCategoryGameView = function (e, t) {
        var n = function () {
            var n = new View.CategoryGameView(e, t);
            n.initCategoryGameView()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORY_GAME_VIEW, n)
    }, t.prototype.showCategoryAppItemView = function (e, t) {
        var n = function () {
            var n = new View.CategoryItemView(e, t);
            n.initCategoryItemView(0)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORY_ITEM_VIEW, n)
    }, t.prototype.showCategoryGameItemView = function (e, t) {
        var n = function () {
            var n = new View.CategoryItemView(e, t);
            n.initCategoryItemView(1)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORY_ITEM_VIEW, n)
    }, t.prototype.showAppTopList = function (e, t) {
        var n = Mark.MPageTaskMark.TASKMARK_APPTOP_LIST;
        this.showAppGridView(e, t, n, "topAppList")
    }, t.prototype.showGameTopList = function (e, t) {
        var n = Mark.MPageTaskMark.TASKMARK_GAMETOP_LIST;
        this.showAppGridView(e, t, n, "topGameList")
    }, t.prototype.showAppListView = function (e, t, n, r) {
        var i = function () {
            var i = new View.AppListView(e, t, r, n);
            i.initAppListView()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.APPLISTVIEW, i)
    }, t.prototype.showAppGridView = function (e, t, n, r) {
        var i = function () {
            var i = new View.AppGridView(e, t, n, r);
            i.initAppGridView()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.APPGRIDVIEW, i)
    }, t.prototype.showCategoryListPage = function (e) {
        var t = this;
        if (!Boolean(t.mCategorysPage)) {
            var n = function () {
                t.mCategorysPage = new View.CategoryApkListPage, t.mCategorysPage.initCategoryListPage(e)
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORYLIST_PAGE, n)
        } else t.mCategorysPage.initCategoryListPage(e)
    }, t.prototype.popAppCategorys = function (e) {
        var t = this, n, r = function () {
            n = new View.CategoryPopView(e), n.initCategoryPopView(0)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORY_POP_VIEW, r)
    }, t.prototype.popGameCategorys = function (e) {
        var t = this, n, r = function () {
            n = new View.CategoryPopView(e), n.initCategoryPopView(1)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORY_POP_VIEW, r)
    }, t.prototype.showDetailPage = function (e) {
        var t = function () {
            var t = MarketApp.appCacheMng.allAppItemList[e],
                n = new View.AppDetailPage(t);
            n.initAppDetailPage();
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.APPDETAIL_PAGE, t)
    }, t.prototype.showAppHeaderFrame = function (e) {
        var t = function () {
            var t = new View.AppHeaderFrame(e);
            t.initAppHeaderFrame()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.APPHEADER_FRAME, t)
    }, t.prototype.showAppIntroduceFrame = function (e) {
        var t = function () {
            var t = new View.AppIntroduceFrame(e);
            t.initAppIntroduceFrame()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.APPINTRODUCE_FRAME, t)
    }, t.prototype.showAppScreenhot = function (e) {
        var t = function () {
            var t = new View.AppScreenhot({appModel: e.appModel, $el: e.$el});
            t.initAppScreenhot()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.APPSCREENHOT, t)
    }, t.prototype.showAppPopImg = function (e, t, n) {
        var r = function () {
            var r = new View.AppPopImg({appModel: e, $el: t, index: n});
            r.initAppPopImg()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.APPPOPIMG, r)
    }, t.prototype.showGuessLikeFrame = function (e, t) {
        var n = function () {
            var n = new View.GuessLikeFrame;
            n.initGuessLikeFrame(e, t)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.GUESSLIKE_FRAME, n)
    }, t.prototype.showAuthorOtherAppFrame = function (e, t, n) {
        var r = function () {
            var r = new View.AuthorOtherAppFrame;
            r.initAuthorOtherAppFrame(e, t, n)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.AUTHOR_OTHERAPP_FRAME, r)
    }, t.prototype.showWeeklyFrame = function () {
        var e = this;
        if (!Boolean(e.mFunPage)) {
            var t = function () {
                e.mFunPage = new View.FunPage, e.mFunPage.initFunPage(e.mFunPage.showWeeklyFrame)
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.FUN_PAGE, t)
        } else e.mFunPage.initFunPage(e.mFunPage.showWeeklyFrame)
    }, t.prototype.showWeeklyItemView = function (e, t) {
        var n = function () {
            var n = new View.WeeklyItemView(e, t);
            n.initWeeklyItem()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.WEEKLYITEMVIEW, n)
    }, t.prototype.showWeeklyDetail = function (e) {
        var t = this, n = function () {
            var t = new View.WeeklyDetail;
            t.initWeeklyDetail(e)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.WEEKLY_DETAIL, n)
    }, t.prototype.showAppComment = function (e) {
        var t = function () {
            var t = new View.AppComment(e);
            t.initAppComment()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.APPCOMMENT, t)
    }, t.prototype.showAppCommentItem = function (e, t) {
        var n = function () {
            var n = new View.AppCommentItemView(e, t);
            n.initCommentItem()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.APPCOMMENTITEMVIEW, n)
    }, t.prototype.showSearchFrameView = function (e) {
        var t = this, n = function () {
            var t = new View.SearchFrame;
            t.initSearchFrame(e)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.SEARCH_FRAME, n)
    }, t.prototype.showSearchPage = function (e) {
        var t = this;
        if (!Boolean(t.mSearhPage)) {
            var n = function () {
                t.mSearhPage = new View.SearchPage, t.mSearhPage.initSearchPage(e)
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.SEARCH_PAGE, n)
        } else t.mSearhPage.initSearchPage(e)
    }, t.prototype.showSearchTopHeader = function (e) {
        var t = this, n = function () {
            var t = new View.SearchTopHeader;
            t.initSearchTopHeader(e)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.SEARCH_TOPHEADER, n)
    }, t.prototype.showSearchAllAppItemView = function (e, t, n, r) {
        var i = Mark.MPageTaskMark.getTaskMarkSearchAllAppListValue(encodeURIComponent(e));
        this.showSearchAppItemListView(t, n, i, r)
    }, t.prototype.showSearchAppItemView = function (e, t, n, r) {
        var i = Mark.MPageTaskMark.getTaskMarkSearchAppListValue(encodeURIComponent(e));
        this.showSearchAppItemListView(t, n, i, r)
    }, t.prototype.showSearchGameItemView = function (e, t, n, r) {
        var i = Mark.MPageTaskMark.getTaskMarkSearchGameListValue(encodeURIComponent(e));
        this.showSearchAppItemListView(t, n, i, r)
    }, t.prototype.showSearchAppItemListView = function (e, t, n, r) {
        var i = function () {
            var i = new View.searchAppListView(e, r, n, t);
            i.initAppListView()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.SEARCHAPPLIST, i)
    }, t.prototype.showSearchNoneView = function (e, t, n) {
        var r = function () {
            var r = new View.SearchNoneFrame(t, n);
            r.initSearchNoneFrame(e)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.SEARCH_NONEFRAME, r)
    }, t.prototype.showGuessLikeAppView = function (e, t, n) {
        var r = Mark.MPageTaskMark.getTaskMarkGuestLikeAppListValue(e);
        this.showAppGridView(t, n, r, "guessAppList")
    }, t.prototype.showGuessLikeByRandomAppView = function (e, t, n, r, i) {
        var s = Mark.MPageTaskMark.getTaskMarkGuestLikeRandomAppListValue(t, n);
        this.showAppGridView(e, r, s, i)
    }, t.prototype.showAuthorOtherAppView = function (e, t, n) {
        var r = Mark.MPageTaskMark.getTaskMarkAuthorOtherAppListValue(e);
        this.showAppGridView(t, n, r, "appAuthorOtherUl")
    }, t.prototype.showHotWordComplete = function (e, t) {
        var n = function () {
            var n = new View.AutoComplete(e, t);
            n.initAutoComplate()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.AUTOCOMPLETE, n)
    }, t.prototype.showFooterView = function () {
        var e = function () {
            var e = new View.FooterView;
            e.initFooterView()
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.FOOTER, e)
    }, Manager.ViewWraper = t
}(), define("ViewWraper", ["ViewHandler", "ProtocolFactory", "TaskMarkHandler"], function () {
});
var Router;
Router || (Router = {}), function () {
    var t = Backbone.Router.extend({initialize: function (e) {
        this.route(/category\/categorylist:(\d{1,})$/, "categorylist", function (e) {
            MarketApp.viewWraper.showCategoryListPage(e)
        }), this.route(/^.*?\/detail:(\d{1,})\/Screen$/, "detail", function (e) {
            MarketApp.viewWraper.showDetailPage(e)
        }), this.route(/^.*?\/detail:(\d{1,})$/, "detail", function (e, t) {
            MarketApp.viewWraper.showDetailPage(e)
        }), this.route(/^.*?\/topiclist:(\d{1,})$/, "topiclist", function (e) {
            MarketApp.viewWraper.showTopicListPage(e)
        }), this.route(/search:([^\/]{1,})$/, "search", function (e) {
            MarketApp.viewWraper.showSearchPage(e)
        }), this.route(/weekly\/weeklydetail:(\d{1,})$/, "weeklydetail", function (e) {
            MarketApp.viewWraper.showWeeklyDetail(e)
        })
    }, routes: {index: "showIndex", ranking: "showRanking", category: "showCategory", topic: "showTopic", weekly: "showWeekly", himarket: "showHimarket", "*actions": "defaultRouter"}, showIndex: function () {
        MarketApp.viewWraper.showMainPage()
    }, showRanking: function () {
        MarketApp.viewWraper.showRankingFrame()
    }, showCategory: function () {
        MarketApp.viewWraper.showCategoryFrame()
    }, showTopic: function () {
        MarketApp.viewWraper.showTopicFrame()
    }, showHimarket: function () {
    }, showWeekly: function () {
        MarketApp.viewWraper.showWeeklyFrame()
    }, defaultRouter: function () {
        t.getCurrentHref() == "index" ? this.showIndex() : MarketApp.exception.RouterErrorTip($("body"), lang[404])
    }});
    t.getCurrentHref = function () {
        var e = window.location.href;
        return e.indexOf("#") >= 0 ? e = e.substring(e.indexOf("#") + 1) : e = "index", e
    }, t.isCurrentHref = function (e) {
        return t.getCurrentHref() == e
    }, t.getParentHref = function (e) {
        return e.lastIndexOf("/") >= 0 ? e.substring(0, e.lastIndexOf("/")) : "index"
    }, t.getHrefString = function (e) {
        var t = e;
        return t.indexOf("#") >= 0 ? t = t.substring(t.indexOf("#") + 1) : t = "index", t
    }, Router.MarketRouter = t
}(), define("MarketRouter", ["ViewWraper"], function () {
});
var Service;
Service || (Service = {}), function () {
    function t() {
    }

    t.prototype.getHeaders = function () {
        var e = {}, t = {.75: 120, 1: 160, 1.5: 240, 2: 320};
        return e.density = t[window.devicePixelRatio], e
    }, t.prototype.getAppList = function (e, t, n, r) {
        this.getPageCollectionList(e, t, n, r)
    }, t.prototype.getAppCommentList = function (e, t, n, r) {
        this.getPageCollectionList(e, t, n, r)
    }, t.prototype.getPageCollectionList = function (e, t, n, r) {
        var i = t.get("taskMark"), s = this;
        e.fetch({url: n, success: function (e, t) {
            t.success ? (i.taskStatus = Mark.ATaskMark.HANDLE_OVER, _.isNumber(t.total) && (t.total <= i.maxItemSize ? i.total = t.total : i.total = i.maxItemSize), i.recordNum = e.models.length, i.loadItemSize = e.models.length + i.loadItemSize, e.models.length > 0 && (i.pageIndex = i.pageIndex + 1), r(e)) : (i.taskStatus = Mark.ATaskMark.HANDLE_ERROR, Boolean(i.errorCallbacks) && i.errorCallbacks())
        }, error: function (e, t) {
            i.taskStatus = Mark.ATaskMark.HANDLE_ERROR, MarketApp.exception.handerException("httpService", t.status, t), Boolean(i.errorCallbacks) && i.errorCallbacks()
        }})
    }, t.prototype.getApkDetail = function (e, t, n, r) {
        this.getItemModel(e, t, n, r)
    }, t.prototype.getAppSummaryModel = function (e, t, n, r) {
        this.getItemModel(e, t, n, r)
    }, t.prototype.getItemModel = function (e, t, n, r) {
        e.fetch({url: n, success: function (e, n) {
            t.get("taskMark").taskStatus = Mark.ATaskMark.HANDLE_OVER, r(e)
        }, error: function (e, t) {
            MarketApp.exception.RouterErrorTip($("body"), lang[404]), MarketApp.exception.handerException("httpService", t.status, t)
        }})
    }, t.prototype.getCategoryItemList = function (e, t, n, r) {
        this.getTotalItemList(e, t, n, r)
    }, t.prototype.getWeeklyItemList = function (e, t, n, r) {
        this.getTotalItemList(e, t, n, r)
    }, t.prototype.getHotWordItemList = function (e, t, n, r) {
        this.getTotalItemList(e, t, n, r)
    }, t.prototype.getTotalItemList = function (e, t, n, r) {
        var i = t.get("taskMark");
        e.fetch({url: n, success: function (e, t) {
            t.success ? (i.taskStatus = Mark.ATaskMark.HANDLE_OVER, i.recordNum = e.models.length, r(e)) : (i.taskStatus = Mark.ATaskMark.HANDLE_ERROR, i.errorCallbacks())
        }, error: function (e, n) {
            t.get("taskMark").taskStatus = Mark.ATaskMark.HANDLE_ERROR, MarketApp.exception.handerException("httpService", n.status, n)
        }})
    }, t.prototype.getHimarketInfo = function (e, t, n, r) {
        var i = {}, s = window.location.href;
        if (s.indexOf("?") != -1) {
            s = s.substring(s.indexOf("?") + 1), s.indexOf("/") != -1 && (s = s.substring(0, s.indexOf("/"))), s.indexOf("#") != -1 && (s = s.substring(0, s.indexOf("#")));
            var o = s.split("&"), u = /^[0-9]*[1-9][0-9]*$/;
            for (var a in o) {
                var f = o[a].split("=");
                u.test(f[1]) && (i[f[0]] = f[1])
            }
        }
        e.fetch({url: t, type: "POST", dataType: "json", data: i, success: function (t) {
            e = t, MarketApp.hiMarketModel = t, n.get("taskMark").taskStatus = Mark.ATaskMark.HANDLE_OVER, r()
        }, error: function (t, i) {
            e = null, n.get("taskMark").taskStatus = Mark.ATaskMark.HANDLE_ERROR, r()
        }})
    }, Service.HttpService = t
}(), define("HttpService", function () {
});
var Service;
Service || (Service = {}), function () {
    function t() {
    }

    Service.LocalService = t
}(), define("LocalService", function () {
});
var Service;
Service || (Service = {}), function () {
    function t() {
        var e = {localService: {value: new Service.LocalService, writable: !1, enumerable: !0, configurable: !1}, httpService: {value: new Service.HttpService, writable: !1, enumerable: !0, configurable: !1}, taskMarkHandler: {value: null, writable: !1, enumerable: !0, configurable: !1}, callBacks: {value: {}, writable: !1, enumerable: !0, configurable: !1}, passTime: {value: 30, writable: !1, enumerable: !0, configurable: !1}};
        Object.defineProperties(t.prototype, e)
    }

    t.prototype.getAppList = function (e, t, n) {
        var r = this, i = e.get("taskMark"), s = i.taskMarkType, o = MarketApp.appCacheMng.getAppMap(i);
        if (_.isArray(o) && o.length > 0) {
            var u = this.getAppListByCache(o, i, t, n);
            if (!u)return
        }
        var a = Manager.TaskMarkHandler.getAppListTaskMarkDataUrl(e);
        if (i.taskStatus == Mark.ATaskMark.HANDLE_DOING)return;
        if (i.taskStatus == Mark.ATaskMark.HANDLE_OVER) {
            o = MarketApp.appCacheMng.getAppMap(i);
            if (_.isArray(o) && o.length > 0) {
                var u = this.getAppListByCache(o, i, t, n);
                if (!u)return
            }
        }
        i.taskStatus = Mark.ATaskMark.HANDLE_DOING;
        var f = function (e) {
            var t = new Collection.AppItemCollection;
            if (s == Mark.MPageTaskMark.TASKMARK_APP_BOUTIQUE_LIST) {
                var r = MarketApp.appCacheMng.appItemTaskMap[s];
                e.each(function (e) {
                    var n = !1;
                    for (var i in r) {
                        var s = r[i];
                        s == e.get("id") && (n = !0)
                    }
                    n || t.add(e)
                })
            } else t = e;
            MarketApp.appCacheMng.addAppItemListToCache(i.taskMarkType, t), n(t)
        };
        r.httpService.getAppList(t, e, a, f)
    }, t.prototype.getAppListByCache = function (e, t, n, r) {
        var i = Date.parse(new Date), s = !1;
        t.taskStatus = Mark.ATaskMark.HANDLE_DOING;
        for (var o in e) {
            var u = MarketApp.appCacheMng.allAppItemList[e[o]], a = (i - u.get("passTime")) / 6e4;
            if (a > this.passTime && this.passTime > 0) {
                s = !0;
                break
            }
            n.add(u)
        }
        return!s && t.taskStatus != Mark.ATaskMark.HANDLE_OVER ? (t.pageIndex = t.pageIndex + 1, t.recordNum = n.length, t.loadItemSize += n.length, t.taskStatus = Mark.ATaskMark.HANDLE_OVER, r(n)) : t.taskStatus = Mark.ATaskMark.HANDLE_WAIT, s
    }, t.prototype.taskAppCategoryItemList = function (e, t, n) {
        this.taskCategoryItemList(e, t, n, 0)
    }, t.prototype.taskGameCategoryItemList = function (e, t, n) {
        this.taskCategoryItemList(e, t, n, 1)
    }, t.prototype.taskTopicCategoryItemList = function (e, t) {
        this.taskCategoryItemList(e, t, !1, 2)
    }, t.prototype.taskCategoryItemList = function (e, t, n, r) {
        var i = this, s = Manager.TaskMarkHandler.getCategoryTaskMarkDataUrl(e), o = new Collection.CategoryItemCollection, u = e.get("taskMark"), a = u.taskMarkType, f = function (e) {
            var n = _.filter(e.models, function (e) {
                return e.get("categoryType") == r && e.get("isLeaf")
            }), i = new Collection.CategoryItemCollection(n);
            t(i)
        };
        if (u.taskStatus == Mark.ATaskMark.HANDLE_OVER) {
            i.getCategoryItemByCache(o, f);
            return
        }
        n && i.addCallbacks(f, a);
        if (u.taskStatus == Mark.ATaskMark.HANDLE_DOING)return;
        u.taskStatus = Mark.ATaskMark.HANDLE_DOING;
        var l = function (e) {
            MarketApp.appCacheMng.addCategoryItemListToCache(e), u.taskStatus = Mark.ATaskMark.HANDLE_OVER, n ? i.runCallbacks(a, e) : f(e)
        };
        i.httpService.getCategoryItemList(o, e, s, l)
    }, t.prototype.addCallbacks = function (e, t) {
        var n = this, r = n.callBacks[t];
        Boolean(r) || (r = new Array), r.push(e), n.callBacks[t] = r
    }, t.prototype.runCallbacks = function (e, t) {
        var n = this, r = n.callBacks[e];
        if (Boolean(r)) {
            for (var i in r)_.isObject(t) ? r[i](t) : r[i]();
            delete n.callBacks[e]
        }
    }, t.prototype.getCategoryItemByCache = function (e, t) {
        var n = this;
        for (var r in MarketApp.appCacheMng.allCategoryItemList) {
            var i = MarketApp.appCacheMng.allCategoryItemList[r];
            e.add(i)
        }
        t(e)
    }, t.prototype.getApkDetail = function (e, t, n, r) {
        var i = this, s = Manager.TaskMarkHandler.getAppDetailTaskMarkDataUrl(e), o = e.get("taskMark"), u = o.taskMarkType;
        if (o.taskStatus == Mark.ATaskMark.HANDLE_OVER) {
            var a = MarketApp.appCacheMng.allAppItemList[t].get("appDetail");
            if (_.isObject(a)) {
                console.log("cache"), r();
                return
            }
        }
        if (o.taskStatus == Mark.ATaskMark.HANDLE_DOING)return;
        i.httpService.getApkDetail(n, e, s, function (e) {
            MarketApp.appCacheMng.allAppItemList[t].set({appDetail: e}), o.taskStatus = Mark.ATaskMark.HANDLE_OVER, r()
        })
    }, t.prototype.getCommentList = function (e, t, n) {
        var r = this, i = Manager.TaskMarkHandler.getAppCommentaskMarkDataUrl(e), s = e.get("taskMark");
        if (s.taskStatus == Mark.ATaskMark.HANDLE_DOING)return;
        if (s.taskStatus == Mark.ATaskMark.HANDLE_OVER) {
            r.getCommentListCache(s.taskMarkType, t, n);
            return
        }
        s.taskStatus = Mark.ATaskMark.HANDLE_DOING, r.httpService.getAppCommentList(t, e, i, function () {
            MarketApp.appCacheMng.addcommentItemListToCache(s.taskMarkType, t), s.taskStatus = Mark.ATaskMark.HANDLE_OVER, n(t)
        })
    }, t.prototype.getCommentListCache = function (e, t, n) {
        MarketApp.log.logInfo("taskMark", e);
        var r = MarketApp.appCacheMng.commentItemTaskMap[e];
        for (var i in r) {
            var s = MarketApp.appCacheMng.allCommentItemList[r[i]];
            t.add(s)
        }
        n(t)
    }, t.prototype.getTaskWeeklyItemList = function (e, t, n) {
        var r = this, i = Manager.TaskMarkHandler.getWeeklyTaskMarkDataUrl(e), s = new Collection.WeeklyCollection, o = e.get("taskMark"), u = o.taskMarkType;
        if (o.taskStatus == Mark.ATaskMark.HANDLE_OVER) {
            r.getWeeklyItemByCache(s, t);
            return
        }
        n && r.addCallbacks(t, u);
        if (o.taskStatus == Mark.ATaskMark.HANDLE_DOING)return;
        o.taskStatus = Mark.ATaskMark.HANDLE_DOING;
        var a = function (e) {
            MarketApp.appCacheMng.addWeeklyItemListToCache(e), o.taskStatus = Mark.ATaskMark.HANDLE_OVER, n ? r.runCallbacks(u, e) : t(e)
        };
        r.httpService.getWeeklyItemList(s, e, i, a)
    }, t.prototype.getWeeklyItemByCache = function (e, t) {
        var n = this;
        for (var r in MarketApp.appCacheMng.allWeeklyItemList) {
            var i = MarketApp.appCacheMng.allWeeklyItemList[r];
            e.add(i)
        }
        t(e)
    }, t.prototype.getHotWordItemList = function (e, t, n) {
        var r = this, i = Manager.TaskMarkHandler.getAppListTaskMarkDataUrl(e), s = new Collection.HotWordCollection, o = e.get("taskMark"), u = o.taskMarkType;
        if (o.taskStatus == Mark.ATaskMark.HANDLE_OVER) {
            r.getHotWordItemByCache(u, s, t);
            return
        }
        n && r.addCallbacks(t, u);
        if (o.taskStatus == Mark.ATaskMark.HANDLE_DOING)return;
        o.taskStatus = Mark.ATaskMark.HANDLE_DOING;
        var a = function (e) {
            MarketApp.appCacheMng.addHotWordItemListToCache(u, e), o.taskStatus = Mark.ATaskMark.HANDLE_OVER, n ? r.runCallbacks(u, e) : t(e)
        };
        r.httpService.getHotWordItemList(s, e, i, a)
    }, t.prototype.getHotWordItemByCache = function (e, t, n) {
        var r = this, i = MarketApp.appCacheMng.hotWorkItemTaskMap[e];
        for (var s in i) {
            var o = MarketApp.appCacheMng.allHotWordItemList[i[s]];
            t.add(o)
        }
        n(t)
    }, t.prototype.getAppSummaryModelWhenReflush = function (e, t, n, r) {
        var i = this, s = Manager.TaskMarkHandler.getAppItemSummaryUrl(t), o = e.get("taskMark"), u = o.taskMarkType;
        if (o.taskStatus == Mark.ATaskMark.HANDLE_DOING)return;
        i.httpService.getAppSummaryModel(n, e, s, function (e) {
            MarketApp.appCacheMng.allAppItemList[e.get("id")] = e, r(e)
        })
    }, t.prototype.getHimarketInfo = function (e, t) {
        var n = this, r = e.get("taskMark");
        if (r.taskStatus == Mark.ATaskMark.HANDLE_OVER) {
            t();
            return
        }
        n.addCallbacks(t, r.taskMarkType);
        if (r.taskStatus == Mark.ATaskMark.HANDLE_DOING)return;
        r.taskStatus = Mark.ATaskMark.HANDLE_DOING;
        var i = new Model.HiMarketAppModel, s = Manager.TaskMarkHandler.getHimarketInfoUrl(), o = function () {
            n.runCallbacks(r.taskMarkType, null)
        };
        n.httpService.getHimarketInfo(i, s, e, o)
    }, Service.ServiceWraper = t
}(), define("ServiceWraper", ["HttpService", "LocalService"], function () {
});
var Mark;
Mark || (Mark = {}), function () {
    function t() {
        throw new Error("Cant't instantiate abstract classes.")
    }

    var n = {HANDLE_OVER: {value: 0, writable: !1, enumerable: !0, configurable: !1}, HANDLE_DOING: {value: 1, writable: !1, enumerable: !0, configurable: !1}, HANDLE_ERROR: {value: 2, writable: !1, enumerable: !0, configurable: !1}, HANDLE_WAIT: {value: 3, writable: !1, enumerable: !0, configurable: !1}};
    Object.defineProperties(t, n);
    var r = {taskStatus: {value: null, writable: !0, enumerable: !0, configurable: !1}, taskMarkType: {value: null, writable: !0, enumerable: !0, configurable: !1}};
    Object.defineProperties(t.prototype, r), t.prototype.isLoadEnd = function () {
        return this.taskStatus == this.HANDLE_OVER
    }, t.prototype.reinitTaskMark = function () {
        this.taskStatus = this.HANDLE_WAIT
    }, Mark.ATaskMark = t
}(), define("ATaskMark", function () {
});
var Mark;
Mark || (Mark = {}), function () {
    var t = function () {
    };
    t = Mark.ATaskMark.extend(function (t) {
        Object.defineProperties(this, {taskMarkID: {value: t, writable: !1, enumerable: !0, configurable: !1}})
    }, {}, {getTaskMarkAppDetailValue: {value: function (e) {
        return this.TASKMARK_APP_DETAIL + "_" + e
    }, writable: !1, enumerable: !0, configurable: !1}, getTaskMarkAppItemSummaryValue: {value: function (e) {
        return this.TASKMARK_APPITEM_SUMMARY + "_" + e
    }, writable: !1, enumerable: !0, configurable: !1}, getTaskMarkAppDownVaule: {value: function (e) {
        return this.TASKMARK_APP_DOWN + "_" + e
    }, writable: !1, enumerable: !0, configurable: !1}, TASKMARK_APP_DETAIL: {value: "app_detail", writable: !1, enumerable: !0, configurable: !1}, TASKMARK_APPITEM_SUMMARY: {value: "appitem_summary", writable: !1, enumerable: !0, configurable: !1}, TASKMARK_WEEKLY_DETAIL: {value: "weekly_detail", writable: !1, enumerable: !0, configurable: !1}, TASKMARK_HIMARKET_INFO: {value: "himarket_info", wirtable: !1, enumerable: !0, configurable: !1}, TASKMARK_APP_DOWN: {value: "app_down", writable: !1, enumerable: !0, configurable: !1}}), Mark.MSingleTaskMark = t
}(), define("MSingleTaskMark", ["ATaskMark"], function () {
});
var Mark;
Mark || (Mark = {}), function () {
    var t = Mark.ATaskMark.extend(function () {
        Object.defineProperties(this, {
            pageSize: {value: 20, writable: !0, enumerable: !0, configurable: !1},
            pageIndex: {value: 1, writable: !0, enumerable: !0, configurable: !1},
            recordNum: {value: null, writable: !0, enumerable: !0, configurable: !1},
            pageNum: {value: null, writable: !0, enumerable: !0, configurable: !1},
            loadItemSize: {value: 0, writable: !0, enumerable: !0, configurable: !1},
            maxItemSize: {value: 200, writable: !0, enumerable: !0, configurable: !1},
            total: {value: 0, writable: !0, enumerable: !0, configurable: !1}})
    }, {setListView: function () {}}, {
        getTaskMarkCommentListValue: {value: function (e) { return this.TASKMARK_APPCOMMENT_LIST + "_" + e }, writable: !1, enumerbale: !0, configurable: !1},
        getTaskMarkCategoryApkListValue: {value: function (e) { return this.TASKMARK_CATEGORY_APP_LIST + "_" + e }, wirtable: !1, enumerable: !0, configurable: !1},
        getTaskMarkCategoryRateApkListValue: {value: function (e) { return this.TASKMARK_CATEGORY_RATE_APP_LIST + "_" + e }, wirtable: !1, enumerable: !0, configurable: !1},
        getTaskMarkCategoryTimeApkListValue: {value: function (e) { return this.TASKMARK_CATEGORY_TIME_APP_LIST + "_" + e }, wirtable: !1, enumerable: !0, configurable: !1},
        getTaskMarkTopicAppListValue: {value: function (e) { return this.TASKMARK_TOPIC_APP_LIST + "_" + e }, wirtable: !1, enumerable: !0, configurable: !1},
        getTaskMarkSearchAllAppListValue: {value: function (e) { return this.TASKMARK_SEARCH_ALL_LIST + e }, wirtable: !1, enumerable: !0, configurable: !1},
        getTaskMarkSearchAppListValue: {value: function (e) { return this.TASKMARK_SEARCH_APP_LIST + e }, wirtable: !1, enumerable: !0, configurable: !1},
        getTaskMarkSearchGameListValue: {value: function (e) { return this.TASKMARK_SEARCH_GAME_LIST + e }, wirtable: !1, enumerable: !0, configurable: !1},
        getTaskMarkGuestLikeAppListValue: {value: function (e) { return this.TASKMARK_GUESS_LIKEAPP_LIST + "_" + e }, wirtable: !1, enumerable: !0, configurable: !1},
        getTaskMarkAuthorOtherAppListValue: {value: function (e) { return this.TASKMARK_AUTHOR_OTHERAPP_LIST + e }, wirtable: !1, enumerable: !0, configurable: !1},
        getTaskMarkGuestLikeRandomAppListValue: {value: function (e, t) { return this.TASKMARK_GUESS_LIKE_RANDOM_APP_LIST + e + "_" + t }, wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APPRANKING_LIST: {value: "app_ranking_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APP_BOUTIQUE_LIST: {value: "app_boutique_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APPRANKING_LIST_RISE: {value: "appranking_list_rise", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APPRANKING_LIST_WEEK: {value: "appranking_list_month", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APPRANKING_LIST_MONTH: {value: "appranking_list_month", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMAEK_GAMENKING_LIST_WEEK: {value: "gameranking_list_week", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMAEK_GAMENKING_LIST_MONTH: {value: "gameranking_list_month", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_CATEGORY_LIST_ROOT: {value: "category_list_root", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_CATEGORY_LIST_GAME: {value: "category_list_game", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_CATEGORY_LIST_APP: {value: "category_list_app", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_CATEGORY_LIST_TOPIC: {value: "category_list_topic", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_CATEGORY_APP_LIST: {value: "category_app_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_CATEGORY_RATE_APP_LIST: {value: "category_rate_app_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_CATEGORY_TIME_APP_LIST: {value: "category_time_app_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_TOPIC_APP_LIST: {value: "category_topic_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APPCOMMENT_LIST: {value: "appcomment_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_AUTHOR_OTHERAPP_LIST: {value: "author_otherapp_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_GUESS_LIKEAPP_LIST: {value: "guess_likeapp_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_GUESS_LIKE_RANDOM_APP_LIST: {value: "guess_like_Randoom_app_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_WEEKLY_LIST: {value: "weekly_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_SEARCH_ALL_LIST: {value: "search_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_SEARCH_APP_LIST: {value: "search_app_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_SEARCH_GAME_LIST: {value: "search_game_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_GAMETOP_LIST: {value: "gametop_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APPTOP_LIST: {value: "apptop_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APP_DOWN_LIST: {value: "app_down_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APP_RATE_LIST: {value: "app_rate_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_APP_TIME_LIST: {value: "app_time_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_GAME_DOWN_LIST: {value: "game_down_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_GAME_RATE_LIST: {value: "game_rate_list", wirtable: !1, enumerable: !0, configurable: !1},
        TASKMARK_GAME_TIME_LIST: {value: "game_time_list", wirtable: !1, enumerable: !0, configurable: !1},
        HOTWORD_LIST: {value: "hotword_list", writable: !1, enumerable: !0, configurable: !1},
        getHotWordList_VALUE: {value: function (e) { return this.HOTWORD_LIST + e }, writable: !1, enumerable: !0, configurable: !1}
    });
    Mark.MPageTaskMark = t
}(), define("MPageTaskMark", ["ATaskMark"], function () {});
var Model;
Model || (Model = {}), function () {
    var t = Backbone.Model.extend({localType: null, taskMark: null});
    Model.TaskMarkTypeModel = t
}(), define("TaskMarkTypeModel", function () {
});
var Collection;
Collection || (Collection = {}), function () {
    var t = Backbone.Collection.extend({model: Model.TaskMarkTypeModel});
    Collection.TaskMarkTypeCollection = t
}(), define("TaskMarkTypeCollection", ["TaskMarkTypeModel"], function () {
});
var Mark;
Mark || (Mark = {}), function () {
    function t() {
        var e = {taskMarkTypeCollect: {value: new Collection.TaskMarkTypeCollection, writable: !1, enumerable: !0, configurable: !1}};
        Object.defineProperties(t.prototype, e)
    }

    t.prototype.getTaskMarkModelBySingle = function (e, t) {
        var n;
        this.taskMarkTypeCollect.each(function (t) {
            if (t.get("taskMark").taskMarkType == e) {
                n = t;
                return
            }
        });
        if (Boolean(n))return n;
        var r = new Mark.MSingleTaskMark;
        r.taskMarkType = e, r.taskStatus = Mark.ATaskMark.HANDLE_WAIT;
        var i = new Model.TaskMarkTypeModel;
        return i.set("localType", t), i.set("taskMark", r), this.taskMarkTypeCollect.push(i), i
    }, t.prototype.getTaskMarkTypeModelByPage = function (e, t) {
        var n;
        this.taskMarkTypeCollect.each(function (t) {
            if (t.get("taskMark").taskMarkType == e) {
                n = t;
                return
            }
        });
        if (Boolean(n))return n;
        var r = new Mark.MPageTaskMark;
        r.taskMarkType = e, r.taskStatus = Mark.ATaskMark.HANDLE_WAIT;
        var i = new Model.TaskMarkTypeModel;
        return i.set("localType", t), i.set("taskMark", r), this.taskMarkTypeCollect.push(i), i
    }, t.prototype.resetTaskMark = function (e) {
        var t = e.get("taskMark");
        t.loadItemSize = 0, t.pageIndex = 1, t.recordNum = 0, t.taskStatus = Mark.ATaskMark.HANDLE_WAIT
    }, Mark.MTaskMarkPool = t
}(), define("MTaskMarkPool", ["MSingleTaskMark", "MPageTaskMark", "TaskMarkTypeCollection"], function () {
});
var Manager;
Manager || (Manager = {}), function () {
    function t() {
        var e = {
            allAppItemList: {value: {}, writable: !1, enumerable: !0, configurable: !1},
            allCategoryItemList: {value: {}, writable: !1, enumerable: !0, configurable: !1},
            AllCategoryItemMap: {value: [], wirtable: !1, enumerable: !0, configurable: !1},
            appItemTaskMap: {value: {}, writable: !1, enumerable: !0, configurable: !1},
            allCommentItemList: {value: {}, writable: !1, enumerable: !0, configurable: !1},
            commentItemTaskMap: {value: {}, writable: !1, enumerable: !0, configurable: !1},
            allWeeklyItemList: {value: {}, writable: !1, enumerable: !0, configurable: !1},
            allHotWordItemList: {value: {}, writable: !1, enumerable: !0, configurable: !1},
            hotWorkItemTaskMap: {value: {}, writable: !1, enumerable: !0, configurable: !1}
        };
        Object.defineProperties(this, e)
    }

    function n(e) {
        var t = MarketApp.appCacheMng.allCategoryItemList, n = new Collection.CategoryItemCollection;
        for (var r in t) {
            var i = t[r];
            i.get("categoryType") == e && i.get("isLeaf") && n.add(i)
        }
        return n.models.length > 0 ? n : null
    }

    t.prototype.addAppItemListToCache = function (e, t) {
        var n = this, r = Date.parse(new Date);
        Boolean(t) && t.models.length > 0 && t.each(function (t) {
            t.set("passTime", r), n.addAppItemToCache(e, t)
        })
    }, t.prototype.addAppItemToCache = function (e, t) {
        if (!Boolean(e) || !Boolean(t))return;
        this.appItemTaskMap[e] || (this.appItemTaskMap[e] = new Array);
        var n = this.appItemTaskMap[e], r = !1;
        for (var i in n)if (t.get("id") == n[i]) {
            r = !0;
            break
        }
        r || n.push(t.get("id"));
        var s = !1;
        for (var i in this.allAppItemList) {
            var o = this.allAppItemList[i];
            o.get("id") == t.get("id") && (this.allAppItemList[i] = t, s = !0)
        }
        s || (this.allAppItemList[t.get("id")] = t)
    }, t.prototype.addcommentItemListToCache = function (e, t) {
        var n = this;
        Boolean(t) && t.models.length > 0 && t.each(function (t) {
            n.addcommentItemToCache(e, t)
        })
    }, t.prototype.addcommentItemToCache = function (e, t) {
        if (!Boolean(e) || !Boolean(t))return;
        this.commentItemTaskMap[e] || (this.commentItemTaskMap[e] = new Array);
        var n = this.commentItemTaskMap[e];
        n.push(t.get("id"));
        var r = !1;
        for (var i in this.allCommentItemList) {
            var s = this.allCommentItemList[i];
            if (s.get("id") == t.get("id")) {
                for (var o in t.attributes)s.attributes[o] = t.attributes[o];
                this.allCommentItemList[i] = s, r = !0
            }
        }
        r || (this.allCommentItemList[t.get("id")] = t)
    }, t.prototype.addCategoryItemListToCache = function (e) {
        var t = this;
        Boolean(e) && e.models.length > 0 && e.each(function (e) {
            t.addCategoryItemToCache(e)
        })
    }, t.prototype.addCategoryItemToCache = function (e) {
        if (!Boolean(e))return;
        var t = !1;
        for (var n in this.allCategoryItemList) {
            var r = this.allCategoryItemList[n];
            if (r.get("id") == e.get("id")) {
                for (var n in e.attributes)r.attributes[n] = e.attributes[n];
                this.allCategoryItemList[n] = r, t = !0
            }
        }
        t || (this.allCategoryItemList["key" + e.get("id")] = e)
    }, t.prototype.getAppCategoryCollect = function () {
        var e = 0;
        return n(e)
    }, t.prototype.getGameCategoryCollect = function () {
        var e = 1;
        return n(e)
    }, t.prototype.getTopicCategoryCollect = function () {
        var e = 2;
        return n(e)
    }, t.prototype.addWeeklyItemListToCache = function (e) {
        var t = this;
        Boolean(e) && e.models.length > 0 && e.each(function (e) {
            t.addWeeklyItemToCache(e)
        })
    }, t.prototype.addWeeklyItemToCache = function (e) {
        if (!Boolean(e))return;
        var t = !1;
        for (var n in this.allWeeklyItemList) {
            var r = this.allWeeklyItemList[n];
            if (r.get("id") == e.get("id")) {
                for (var i in e.attributes)r.attributes[i] = e.attributes[i];
                this.allWeeklyItemList[n] = r, t = !0
            }
        }
        t || (this.allWeeklyItemList["key" + e.get("id")] = e)
    }, t.prototype.addHotWordItemListToCache = function (e, t) {
        var n = this;
        Boolean(t) && t.models.length > 0 && t.each(function (t) {
            n.addHotWordItemToCache(e, t)
        })
    }, t.prototype.addHotWordItemToCache = function (e, t) {
        if (!Boolean(e) || !Boolean(t))return;
        this.hotWorkItemTaskMap[e] || (this.hotWorkItemTaskMap[e] = new Array);
        var n = this.hotWorkItemTaskMap[e];
        n.push(t.get("word"));
        var r = !1;
        for (var i in this.allHotWordItemList) {
            var s = this.allHotWordItemList[i];
            if (s.get("word") == t.get("word")) {
                for (var o in t.attributes)s.attributes[o] = t.attributes[o];
                this.allHotWordItemList[i] = s, r = !0
            }
        }
        r || (this.allHotWordItemList[t.get("word")] = t)
    }, t.prototype.getAppMap = function (e) {
        return this.getMapList(this.appItemTaskMap, e)
    }, t.prototype.getMapList = function (e, t) {
        var n = t.taskMarkType;
        if (Boolean(e[n])) {
            var r = e[n].length, i = t.loadItemSize;
            if (i >= r)return null;
            var s = [], o = i + t.pageSize, u = 0;
            for (var a = i; a < o; a++)a < r && (u++, s.push(e[n][a]));
            return s
        }
        return null
    }, Manager.MemCacheManager = t
}(), define("MemCacheManager", function () {
});
var Router;
Router || (Router = {}), function () {
    function t() {
        sessionStorage.clear();
        var e = this;
        this.listeningUrlChange(), window.onbeforeunload = function () {
            var e = "确认退出安卓市场WAP？";
            MarketApp.downloadState && (MarketApp.downloadState = !1)
        }
    }

    var n = {
        oldUrl: {value: "", writable: !0, enumerable: !0, configurable: !1},
        newUrl: {value: "", writable: !0, enumerable: !0, configurable: !1},
        isChangeUrl: {value: !1, writable: !0, enumerable: !0, configurable: !1},
        historyState: {value: !1, writable: !0, enumerable: !0, configurable: !1},
        isHistory: {value: !1, writable: !0, enumerable: !0, configurable: !1},
        isTabHistory: {value: !1, writable: !0, enumerable: !0, configurable: !1},
        isIndexHistory: {value: !1, writable: !0, enumerable: !0, configurable: !1}
    };
    Object.defineProperties(t.prototype, n), t.prototype.listeningUrlChange = function () {
        var e = window.history.length, t = this;
        window.onhashchange = function (n) {
            t.isChangeUrl = !0, t.oldUrl = Router.MarketRouter.getHrefString(n.oldURL), t.newUrl = Router.MarketRouter.getHrefString(n.newURL);
            var r = function (e) {
                var t = !1;
                switch (e) {
                    case"category":
                        t = !0;
                        break;
                    case"ranking":
                        t = !0;
                        break;
                    case"topic":
                        t = !0;
                        break;
                    case"weekly":
                        t = !0
                }
                return t
            }, i = r(t.newUrl), s = r(t.oldUrl);
            Boolean(MarketApp.viewWraper.mTopicsPage) && Boolean(MarketApp.viewWraper.mTopicsPage.iscroll) && (MarketApp.viewWraper.mTopicsPage.iscroll.destroy(), MarketApp.viewWraper.mTopicsPage.iscroll = undefined),
                Boolean(MarketApp.viewWraper.mCategorysPage) && Boolean(MarketApp.viewWraper.mCategorysPage.iscroll) && (MarketApp.viewWraper.mCategorysPage.iscroll.destroy(), MarketApp.viewWraper.mCategorysPage.iscroll = undefined),
                Boolean(MarketApp.viewWraper.mSearhPage) && Boolean(MarketApp.viewWraper.mSearhPage.iscroll) && (MarketApp.viewWraper.mSearhPage.iscroll.destroy(), MarketApp.viewWraper.mSearhPage.iscroll = undefined),
                Boolean(MarketApp.viewWraper.mDetailIscroll) && (MarketApp.viewWraper.mDetailIscroll.destroy(), MarketApp.viewWraper.mDetailIscroll = undefined),
                t.oldUrl.indexOf("weekly/weeklydetail") != -1 && delete MarketApp.orientation.weeklyDetailIscroll,
                t.isTabHistory = !1,
                t.isIndexHistory = !1,
                    !t.historyState && (i && s || t.newUrl == "weekly/weeklydetail" && s) ? (t.isTabHistory = !0, t.isHistory = !0, --e, window.history.go(-(e - 2))) : t.oldUrl.indexOf(t.newUrl) != -1 && !t.historyState ? (t.isHistory = !0, --e, t.oldUrl == "index" ? (t.isIndexHistory = !0, window.history.go(-(e - 2))) : t.newUrl.indexOf("categorylist") != -1 && t.oldUrl.indexOf("categorylist") != -1 && t.oldUrl.indexOf("detail") == -1 && window.history.go(-1)) : t.newUrl != "index" ? !t.historyState && t.newUrl.indexOf("categorylist") != -1 && t.oldUrl.indexOf("categorylist") != -1 && t.newUrl.indexOf("detail") == -1 ? (t.isHistory = !0, --e, window.history.go(-1)) : (t.isHistory = !1, e = window.history.length) : (t.isHistory = !1, e = window.history.length)
        }
    }, Router.MarketHistory = t
}(), define("MarketHistory", function () {
});
var Model;
Model || (Model = {}), function () {
    var t = Backbone.Model.extend({defaults: {vname: null, downurl: null, id: null}, parse: function (e) {
        return e.data
    }});
    Model.HiMarketAppModel = t
}(), define("HiMarketAppModel", function () {
});
var MarketApp;
MarketApp || (MarketApp = {}), function () {
    function a() {
        var e = {
            taskMarkPool: {value: t, writable: !1, enumerable: !0, configurable: !1},
            appCacheMng: {value: n, writable: !1, enumerable: !0, configurable: !1},
            serviceWraper: {value: r, writable: !1, enumerable: !0, configurable: !1},
            routerWraper: {value: new Router.MarketRouter, writeable: !1, enumerable: !0, configurable: !1},
            log: {value: log, writeable: !1, enumerable: !0, configurable: !1},
            exception: {value: s, writeable: !1, enumerable: !0, configurable: !1},
            protocolFactory: {value: u, writeable: !1, enumerable: !0, configurable: !1},
            viewWraper: {value: new Manager.ViewWraper, writeable: !1, enumerable: !0, configurable: !1},
            buildLoading: {value: function (e, t) {
                return Util.Loading.buildLoading(e, t)
            }, writeable: !1, enumerable: !0, configurable: !1},
            removeLoading: {value: function (e) {
                Util.Loading.removeLoading(e)
            }, writeable: !1, enumerable: !0, configurable: !1},
            templateManage: {value: {}, writable: !1, enumerable: !0, configurable: !1},
            orientation: {value: {}, writable: !1, enumerable: !0, configurable: !1},
            imgCdnPreSite: {value: "http://cdn.image.market.hiapk.com/", writable: !1, enumerable: !0, configurable: !1},
            marketHistory: {value: new Router.MarketHistory, writable: !1, enumerable: !0, configurable: !1},
            downloadManage: {value: new Util.DownloadManage, writable: !1, enumerable: !0, configurable: !1},
            downloadstate: {value: !1, writable: !0, enumerable: !0, configurable: !1},
            clientWidth: {value: document.documentElement.clientWidth, writable: !0, enumerablef: !0, configurable: !1},
            clientHeight: {value: document.documentElement.clientHeight, writable: !0, enumerablef: !0, configurable: !1},
            hiMarketModel: {value: {}, writable: !0, enumerable: !0, configurable: !1},
            loadTemplate: {value: new Util.LoadTemplate, writable: !1, enumerable: !0, configurable: !1},
            Toast: {value: new Util.Toast, writable: !1, enumerable: !0, configurable: !1},
            hiMarketHeader: {value: {srcCode: "80001", clientType: "81001"}, wirtable: !1, enumerable: !0, configurable: !1},
            isDefaultMarketHeader: {value: !0, wirtable: !1, enumerable: !0, configurable: !1},
            baseUrl: {value: "", writable: !0, enumerable: !0, configurable: !1},
            webSitePath: {value: "", writable: !0, enumerable: !0, configurable: !1},
            tplUrls: {value: {}, writable: !0, enumerable: !0, configurable: !1},
            Partners: {value: new Util.Partners, writable: !1, enumerable: !0, configurable: !1}
        };
        Object.defineProperties(this, e)
    }

    var t, n, r, i, s, o, u;
    t = new Mark.MTaskMarkPool,
        n = new Manager.MemCacheManager,
        r = new Service.ServiceWraper,
        log = new Util.LogHelper,
        s = new Util.ExceptionHelper,
        u = new Manager.ProtocolFactory,
        MarketApp = new a
}(),
    define("MarketApp", ["MarketRouter", "ServiceWraper", "MTaskMarkPool", "MemCacheManager", "MarketHistory", "HiMarketAppModel"], function () {
    });
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $("body"), this.selfHref = Router.MarketRouter.getCurrentHref()
    }, templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/MainPage.html"), render: function () {
        var e = this.template;
        this.$el.append(e)
    }, initMainPage: function () {
        var e = this;
        MarketApp.marketHistory.historyState = !1, e.$el.children().childrenRemove();
        var t = MarketApp.buildLoading(e.$el, "BIG"), n = function () {
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            MarketApp.removeLoading(t), e.template = sessionStorage.getItem(e.templateUrl), e.render(), e.showMainHeader(), e.showMainNav(), e.showMainAppView(), MarketApp.viewWraper.showFooterView()
        };
        MarketApp.loadTemplate.loadTemplate(n, e.templateUrl)
    }, showMainHeader: function () {
        MarketApp.viewWraper.showMainHeaderView(this.$el.find("#mainHeaderTpl"))
    }, showMainNav: function () {
        MarketApp.viewWraper.showMainNavView(this.$el.find("#mainNavTpl"))
    }, showMainAppView: function () {
        var e = this;
        MarketApp.viewWraper.showMainAppView(e.selfHref, e.$el.find("#mainAppTpl"))
    }});
    View.MainPage = t
}(), define("MainPage", ["MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $("#header"), this.starSearch = !1, this.menuTimerId
    }, events: {"click #btn_search": "searchAppPage", "touchend .menu_item": "refreshRouter", "touchstart .menu_item": "toggleMenuClass", "click #HideSearch": "hideSearch", "click #top_home": "goMainPage", "click .top_logo": "goMainPage", "click .clear_txt_box": "clearSearchTxt", "touchmove #header": "moveHeader"}, moveHeader: function (e) {
        if (Router.MarketRouter.getCurrentHref() == "weekly/weeklydetail")return!1
    }, setLoadingPosition: function () {
        var e = $("#funPageUlFrame").height(), t = $(".loadingbox").eq(0).height(), n = (e - t) / 2;
        $("#funPageUlFrame>li>.loadingbox").css({marginTop: n + "px", marginBottom: "0px"})
    }, clearSearchTxt: function () {
        $("#search_txt").val("")
    }, goMainPage: function (e) {
        MarketApp.marketHistory.historyState = !0, window.location.href = $(e.currentTarget).attr("url")
    }, hideSearch: function () {
        var e = this;
        e.starSearch = !1, $("#search_txt").val(""), $("#top_center").toggle(), $("#top_banner .space_line").toggle(), $("#top_banner .fun_search").toggle(), $("#top_banner .top_right").css({width: "100px"})
    }, toggleMenuClass: function (e) {
        $(".menu_item.tabtouch").removeClass("tabtouch");
        var t = $(e.currentTarget);
        this.setLoadingPosition(), t.is(".on") || t.addClass("tabtouch")
    }, refreshRouter: function (e) {
        var t = this, n = $(e.currentTarget);
        if (!n.is(".on")) {
            MarketApp.marketHistory.historyState = !0, $(".menu_item.on").removeClass("on"), $(".menu_item").removeClass("tabtouch"), n.addClass("on");
            var r = "0";
            switch (n.attr("id")) {
                case"menu_ranking":
                    r = 0;
                    break;
                case"menu_category":
                    r = "-25%";
                    break;
                case"menu_topic":
                    r = "-50%";
                    break;
                case"menu_weekly":
                    r = "-75%"
            }
            $("#funPageUlFrame").removeAttr("style"), $("#funPageUlFrame").css({left: "0", "-webkit-transition": "-webkit-transform 100ms", transition: "transform 100ms", "-webkit-transform-origin": "0px 0px", "-webkit-transform": "translate(" + r + ", 0) translateZ(0px)", transform: "translate(" + r + ", 0)"}), window.location.href = n.attr("url");
            var i = $("#top_banner .fun_search");
            t.starSearch && t.hideSearch()
        }
    }, searchAppPage: function () {
        var e = this;
        if (!e.starSearch)$("#top_center").toggle(), $("#top_banner .space_line").toggle(), $("#top_banner .fun_search").toggle(), $("#top_banner .top_right").css({"-moz-box-flex": "1", "-webkit-box-flex": "1", "box-flex": "1"}), e.starSearch = !0; else {
            var t = $.trim($("#search_txt").val());
            _.isEmpty(t) || (window.location.href = "#search:" + encodeURIComponent(t))
        }
    }, render: function () {
        var e = _.template(this.template, {});
        this.$el.append(e)
    }, initFunHeader: function () {
        var e = this;
        e.template = $("#funHeaderTpl").html(), e.render(), e.setMenuToggle(), MarketApp.viewWraper.showHotWordComplete(e.$el.find(".search_txt_box"), e.$el.find("#search_txt"))
    }, setMenuToggle: function () {
        var e = Router.MarketRouter.getCurrentHref(), t = "0";
        switch (e) {
            case"ranking":
                $("#menu_ranking").addClass("on"), t = "0";
                break;
            case"category":
                $("#menu_category").addClass("on"), t = "-100%";
                break;
            case"topic":
                $("#menu_topic").addClass("on"), t = "-200%";
                break;
            case"weekly":
                $("#menu_weekly").addClass("on"), t = "-300%"
        }
        $("#funPageUlFrame").css({left: t})
    }});
    View.FunHeader = t
}(), define("FunHeader", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = $("body"), this.selfHref, this.iscroll, this.startPX, this.startPY, this.endPX, this.endPY, this.scrollState = 0, this.offsetX, this.currIndex, this.startTime, this.endTime
    }, templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/funpage.html"), events: {"touchstart #funScrollBox": "hideHotWord", "touchmove #funScrollBox": "hScrolling", "touchend #funScrollBox": "disPathEvents"}, acceleration: function () {
        var e = this, t = Math.abs(e.endPX - e.startPX), n = e.endTime - e.startTime;
        return t / n > .3 ? !0 : !1
    }, slideTab: function (e) {
        this.offsetX > 0 ? this.currIndex == 0 ? (e = 0, this.transFormCallbacks(e)) : this.currIndex == 1 ? ($(".menu_item.on").removeClass("on"), $("#menu_ranking").addClass("on"), e = "0", this.transFormCallbacks(e), setTimeout(function () {
            window.location.href = $("#menu_ranking").attr("url")
        }, 100)) : this.currIndex == 2 ? ($(".menu_item.on").removeClass("on"), $("#menu_category").addClass("on"), e = "-25%", this.transFormCallbacks(e), setTimeout(function () {
            window.location.href = $("#menu_category").attr("url")
        }, 100)) : this.currIndex == 3 && ($(".menu_item.on").removeClass("on"), $("#menu_topic").addClass("on"), e = "-50%", this.transFormCallbacks(e), setTimeout(function () {
            window.location.href = $("#menu_topic").attr("url")
        }, 100)) : this.currIndex == 0 ? ($(".menu_item.on").removeClass("on"), $("#menu_category").addClass("on"), e = "-25%", this.transFormCallbacks(e), setTimeout(function () {
            window.location.href = $("#menu_category").attr("url")
        }, 100)) : this.currIndex == 1 ? ($(".menu_item.on").removeClass("on"), $("#menu_topic").addClass("on"), e = "-50%", this.transFormCallbacks(e), setTimeout(function () {
            window.location.href = $("#menu_topic").attr("url")
        }, 100)) : this.currIndex == 2 ? ($(".menu_item.on").removeClass("on"), $("#menu_weekly").addClass("on"), e = "-75%", this.transFormCallbacks(e), setTimeout(function () {
            window.location.href = $("#menu_weekly").attr("url")
        }, 100)) : this.currIndex == 3 && (e = "-75%", this.transFormCallbacks(e))
    }, transFormCallbacks: function (e) {
        $("#funPageUlFrame").removeAttr("style"), $("#funPageUlFrame").css({left: "0", "-webkit-transition": "-webkit-transform 100ms", transition: "transform 100ms", "-webkit-transform-origin": "0px 0px", "-webkit-transform": "translate(" + e + ", 0) translateZ(0px)", transform: "translate(" + e + ", 0)"})
    }, disPathEvents: function (e) {
        var t = this;
        t.endTime = e.timeStamp;
        if (this.scrollState == 1) {
            MarketApp.marketHistory.historyState = !0;
            var n = "0%", r = Math.abs(this.offsetX) > 10 ? !0 : !1;
            return!r && !t.acceleration() ? (n = -this.currIndex / 4 * 100 + "%", t.transFormCallbacks(n), !1) : (t.slideTab(n), !1)
        }
    }, hScrolling: function (e) {
        var t = this;
        $(".menu_item").each(function (e) {
            var n = $(this);
            n.is(".on") && (t.currIndex = e)
        }), t.endPX = e.touches[0].pageX, t.endPY = e.touches[0].pageY;
        var n = t.endPX - t.startPX, r = t.endPY - t.startPY, i = Math.abs(n), s = Math.abs(r);
        if (!(i > s))return t.scrollState != 1 ? (t.scrollState = 2, !0) : !1;
        if (t.scrollState != 2) {
            t.scrollState = 1;
            var o = n / (document.documentElement.clientWidth * 4) * 100;
            return t.offsetX = o, o = o - t.currIndex / 4 * 100 + "%", $("#funPageUlFrame").css({left: "0", "-webkit-transition": "-webkit-transform 0ms", transition: "transform 0ms", "-webkit-transform-origin": "0px 0px", "-webkit-transform": "translate(" + o + ", 0) translateZ(0px)", transform: "translate(" + o + ", 0)"}), !1
        }
    }, hideHotWord: function (e) {
        var t = this;
        t.startTime = e.timeStamp, t.scrollState = 0, t.startPX = e.touches[0].pageX, t.startPY = e.touches[0].pageY, $("#search_txt").blur(), t.setLoadingPosition()
    }, render: function () {
        var e = this, t = _.template(e.template, {});
        e.$el.append(t)
    }, newIscroll: function () {
        var e = this;
        Boolean(e.iscroll) && e.iscroll.destroy(), e.iscroll = new iScroll("funScrollBox", {snap: !0, momentum: !1, hScrollbar: !1, onScrollEnd: function () {
        }})
    }, initFunPage: function (e) {
        var t = this;
        MarketApp.marketHistory.historyState = !1;
        if (MarketApp.marketHistory.isTabHistory || MarketApp.marketHistory.isIndexHistory)return;
        if (!Boolean($("#funPageContent")[0])) {
            t.selfHref = Router.MarketRouter.getCurrentHref(), t.$el.children().childrenRemove();
            var n = MarketApp.buildLoading(t.$el, "BIG");

            function r() {
                if (!Router.MarketRouter.isCurrentHref(t.selfHref))return;
                MarketApp.removeLoading(n), t.template = sessionStorage.getItem(t.templateUrl), t.render(), t.setLoadingPosition(), MarketApp.viewWraper.showFunHeader(), e(t.$el.find("#funPageContent"))
            }

            MarketApp.loadTemplate.loadTemplate(r, t.templateUrl)
        } else t.selfHref = Router.MarketRouter.getCurrentHref(), e(t.$el.find("#funPageContent"))
    }, setLoadingPosition: function () {
        var e = $("#funPageUlFrame").height(), t = $(".loadingbox").eq(0).height(), n = (e - t) / 2;
        $("#funPageUlFrame>li>.loadingbox").css({marginTop: n + "px", marginBottom: "0px"})
    }, showRankingFrame: function (e) {
        var t = this, n = function () {
            if ($("#funPageContent").isFunTabShow("rankingLiFrame"))return;
            var t = Router.MarketRouter.getCurrentHref(), n = function () {
                if (!Router.MarketRouter.isCurrentHref(t))return;
                var n = new View.RankingFrame({$el: e.find("#rankingLiFrame")});
                n.initRankingFrame()
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.RANKING_PAGE, n)
        };
        n()
    }, showCategoryFrame: function (e) {
        var t = function () {
            if ($("#funPageContent").isFunTabShow("categoryLiFrame"))return;
            var t = Router.MarketRouter.getCurrentHref(), n = function () {
                if (!Router.MarketRouter.isCurrentHref(t))return;
                var n = new View.CategoryFrame({$el: e.find("#categoryLiFrame")});
                n.initCategoryFrame()
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORY_PAGE, n)
        };
        t()
    }, showTopicFrame: function (e) {
        var t = function () {
            if ($("#funPageContent").isFunTabShow("topicLiFrame"))return;
            var t = Router.MarketRouter.getCurrentHref(), n = function () {
                if (!Router.MarketRouter.isCurrentHref(t))return;
                var n = new View.TopicFrame({$el: e.find("#topicLiFrame")});
                n.initTopicFrame()
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.TOPIC_PAGE, n)
        };
        t()
    }, showWeeklyFrame: function (e) {
        var t = function () {
            if ($("#funPageContent").isFunTabShow("weeklyLiFrame"))return;
            var t = Router.MarketRouter.getCurrentHref(), n = function () {
                if (!Router.MarketRouter.isCurrentHref(t))return;
                var n = new View.WeeklyFrame({$el: e.find("#weeklyLiFrame")});
                n.initWeeklyFrame()
            };
            Manager.ViewHandler.requrieFile(Manager.ViewHandler.WEEKLY_FRAME, n)
        };
        t()
    }});
    View.FunPage = t
}(), define("FunPage", ["FunHeader", "MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$container = e.$el, this.selfHref = Router.MarketRouter.getCurrentHref(), this.contentHeight = 0
    }, tagName: "div", id: "rankingFrame", templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/ranking/ranking.html"), render: function () {
        var e = this, t = _.template(this.template, {});
        e.$el.append(t)
    }, events: {"click #topFastTab": "showList", "click #appRankTab": "showList", "click #gameRankTab": "showList"}, showList: function (e) {
        var t = this, n = $(e.currentTarget), r = n.attr("id"), i;
        r == "topFastTab" ? i = "#topFastContainer" : r == "appRankTab" ? i = "#appRankContainer" : r == "gameRankTab" && (i = "#gameRankContainer");
        if (Boolean(i)) {
            var s = $(i);
            if (!s.is(".on")) {
                $(".item_title.on").removeClass("on"), n.addClass("on"), $(".hide_slidedown").removeClass("hide_slidedown"), $("#" + r).find(".slidedown").toggleClass("hide_slidedown");
                var o = $(".listcontainer.on");
                o.css({overflow: "hidden"}), o.css({height: "0px"}), o.removeClass("on").removeAttr("style"), s.addClass("on").show(), Boolean(t.iscroll) && t.iscroll.scrollTo(0, 0, 0), s.is("#appRankContainer") && s.find(".itemlist").children().length == 0 && t.showAppRankingWeekList(), s.is("#gameRankContainer") && s.find(".itemlist").children().length == 0 && t.showGameRankingWeekList(), setTimeout(function () {
                    t.iscroll.refresh()
                }, 200)
            }
        }
    }, newIscroll: function () {
        var e = this;
        Boolean(e.iscroll) && e.iscroll.destroy(), e.iscroll = new iScroll("rankingFrame", {bounce: !1, hideScrollbar: !0, scrollbarClass: "myScrollBar", onScrollStart: function () {
            e.isUCBrowser && $("#rankingLiFrame").height(document.documentElement.clientHeight - 104), e.contentHeight != $("#rankingHtml").height() && (e.contentHeight = $("#rangkingHtml").height(), e.iscroll.refresh())
        }}), e.isUCBrowser && (MarketApp.orientation.rankingIscroll = function () {
            $("#rankingLiFrame").length > 0 && ($("#rankingLiFrame").height(document.documentElement.clientHeight - 104), e.iscroll.refresh())
        })
    }, initRankingFrame: function () {
        function n() {
            MarketApp.removeLoading(t);
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            e.template = sessionStorage.getItem(e.templateUrl), e.render(), e.$container.html(e.$el), $("#topfast").parent().addClass("on").show();
            var n = !1;
            e.showRankingRiseList(), MarketApp.viewWraper.showFooterView(), e.newIscroll()
        }

        var e = this;
        e.isUCBrowser = $.isUcBrowse();
        var t = MarketApp.buildLoading(e.$el, "BIG");
        MarketApp.loadTemplate.loadTemplate(n, e.templateUrl)
    }, showRankingRiseList: function () {
        var e = this, t = e.$el.find("#topFastContainer"), n = e.selfHref;
        MarketApp.buildLoading(t, "LIST"), MarketApp.viewWraper.showRiseList(t, n, "rise")
    }, showAppRankingWeekList: function () {
        var e = this, t = e.$el.find("#appRankContainer"), n = e.selfHref;
        MarketApp.buildLoading(t, "LIST"), MarketApp.viewWraper.showAppRankingWeekList(t, n, "appRank")
    }, showGameRankingWeekList: function () {
        var e = this, t = e.$el.find("#gameRankContainer"), n = e.selfHref;
        MarketApp.buildLoading(t, "LIST"), MarketApp.viewWraper.showGameRankingWeekList(t, n, "gameRank")
    }});
    View.RankingFrame = t
}(), define("RankingFrame", ["MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = $("#mainHeader"), this.$tpl = e
    }, template: "", events: {"click .btn_search": "searchFun", "click #hiMarketApp": "downMarketApp"}, searchFun: function () {
        var e = $.trim($("#search_txt").val());
        _.isEmpty(e) || (window.location.href = "#search:" + encodeURIComponent(e))
    }, initMainHeader: function () {
        var e = this;
        e.$el.children().remove(), e.template = e.$tpl.html(), e.render(), MarketApp.viewWraper.showHotWordComplete(e.$el.find(".searchbox"), e.$el.find("#search_txt"));
        var t = MarketApp.taskMarkPool.getTaskMarkModelBySingle(Mark.MSingleTaskMark.TASKMARK_HIMARKET_INFO, null), n = function () {
            $("#hiMarketVersion").html(MarketApp.hiMarketModel.get("vname"))
        };
        MarketApp.serviceWraper.getHimarketInfo(t, n)
    }, downMarketApp: function () {
        if (!Boolean(MarketApp.downloadApp)) {
            MarketApp.downloadState = !0, MarketApp.downloadApp = !0;
            var e = MarketApp.taskMarkPool.getTaskMarkModelBySingle(Mark.MSingleTaskMark.TASKMARK_HIMARKET_INFO, null), t = function () {
                MarketApp.downloadManage.getHiMarketApp()
            };
            MarketApp.serviceWraper.getHimarketInfo(e, t)
        }
    }, render: function () {
        var e = _.template(this.template, {});
        this.$el.append(e)
    }});
    View.MainHeader = t
}(), define("MainHeader", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = $("#mainNav"), this.$tpl = e
    }, events: {"click #mainNav nav ul li a": "goPage"}, goPage: function (e) {
        var t = $(e.currentTarget);
        MarketApp.marketHistory.isTabHistory = !1, MarketApp.marketHistory.historyState = !0, window.location.href = t.attr("url")
    }, template: "", initMainNav: function () {
        var e = this;
        e.$el.children().remove(), e.template = e.$tpl.html(), e.$el.append(e.template)
    }});
    View.MainNav = t
}(), define("MainNav", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = $("#mainAppList"), this.selfHref = e.selfHref, this.$tpl = e.$tpl
    }, template: "", render: function () {
        var e = _.template(this.template, {});
        this.$el.append(e)
    }, initMainAppView: function () {
        var e = this;
        e.$el.children().remove(), e.template = e.$tpl.html(), e.render(), e.showMainAppItemView(!1)
    }, showMainAppItemView: function (e) {
        var t = this.$el.find(".main_itemlist");
        MarketApp.viewWraper.showMainAppItemView(t, this.selfHref, "appList")
    }});
    View.MainAppView = t
}(), define("MainAppView", function () {
});
var Model;
Model || (Model = {}), function () {
    var t = Backbone.Model.extend({defaults: {id: null, version: null, vcode: null, pkn: null, name: null, size: null, rating: null, downurl: null, dnum: null, icon: null}});
    Model.BaseApkModel = t
}(), define("BaseApkModel", function () {
});
var Model;
Model || (Model = {}), function () {
    var t = Backbone.Model.extend({description: null, cnum: null, imagesurl: null, email: null, officialsite: null, aduittime: null, crate: null, broadcast: null, secbusiness: null, parse: function (e) {
        return e.data
    }});
    Model.AppDetailModel = t
}(), define("AppDetailModel", function () {
});
var Model;
Model || (Model = {}), function () {
    var t = Backbone.Model.extend({defaults: {id: null, aid: null, content: null, nick: null, addtime: null, butt: null, stamp: null, score: null, did: null, version: null, model: null, sdk: null}});
    Model.AppCommentModel = t
}(), define("AppCommentModel", function () {
});
var Collection;
Collection || (Collection = {}), function () {
    AppCommentCollection = Backbone.Collection.extend({model: Model.AppCommentModel, parse: function (e) {
        return e.data
    }}), Collection.AppCommentCollection = AppCommentCollection
}(), define("AppCommentCollection", ["AppCommentModel"], function () {
});
var Model;
Model || (Model = {}), function () {
    var t = Model.BaseApkModel.extend({lang: null, author: null, price: null, feetype: null, ifpub: null, cmark: null, ifofficial: null, hasad: null, imprint: null, md5: null, sha1: null, signature: null, recommendReason: null, commentList: null, permissionList: null, myComment: null, appBadness: null, appDetail: null, adIcon: null, adDes: null});
    Model.AppItemModel = t
}(), define("AppItemModel", ["BaseApkModel", "AppDetailModel", "AppCommentCollection"], function () {
});
var Collection;
Collection || (Collection = {}), function () {
    AppItemCollection = Backbone.Collection.extend({model: Model.AppItemModel, parse: function (e) {
        return e.data
    }}), Collection.AppItemCollection = AppItemCollection
}(), define("AppItemCollection", ["AppItemModel"], function () {
});
var View;
View || (View = {}), function namespace() {
    var AppGridItemView = Backbone.View.extend({initialize: function () {
    }, tagName: "li", className: "top_apkbox list_item", template: "", events: {"click .top_appitem": "goDetail"}, goDetail: function (e) {
        var t = $(e.currentTarget).parent();
        t.addClass("topapp_hover");
        var n = setTimeout(function () {
            t.removeClass("topapp_hover"), clearTimeout(n), window.location.href = $(e.currentTarget).attr("url")
        }, 10)
    }, initAppGridItemView: function (e, t) {
        this.selfHref = e, e == "category" ? this.template = $(sessionStorage.getItem(t)).find("#horizAppItemTpl").html() : this.template = $(sessionStorage.getItem(t)).find("#horizAppItemTpl2").html()
    }, render: function (e) {
        var t = this, n;
        return t.selfHref == "category" ? n = t.appItemNoSizeRender(e) : n = t.appItemWithSizeRender(e), this.$el.append(n), t.loadingImg(MarketApp.imgCdnPreSite + e.get("icon")), t.$el
    }, appItemNoSizeRender: function (e) {
        var t = this, n = _.template(t.template, {id: e.get("id"), icon: e.get("icon"), imgCdnPreSite: MarketApp.imgCdnPreSite, version: e.get("version"), rating: e.get("rating"), name: $.HTMLEncode(e.get("name")), currHref: t.selfHref});
        return n
    }, appItemWithSizeRender: function (appItemModel) {
        var me = this, tplHtml = _.template(me.template, {id: appItemModel.get("id"), icon: appItemModel.get("icon"), imgCdnPreSite: MarketApp.imgCdnPreSite, size: eval(appItemModel.get("size") / 1024).toFixed(2) + "M", name: $.HTMLEncode(appItemModel.get("name")), currHref: me.selfHref});
        return tplHtml
    }, loadingImg: function (e) {
        var t = this, n = new Image;
        n.onerror = function () {
        }, n.onload = function () {
            t.$el.find('img[data_src="' + e + '"]').attr("src", e)
        }, n.src = e
    }});
    View.AppGridItemView = AppGridItemView
}(), define("AppGridItemView", ["AppItemCollection"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t, n, r) {
        this.$el = e, this.selfHref = t, this.listId = r, this.apkListTaskMarkTypeModel = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(n, null)
    }, templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/HorizAppListView.html"), template: "", initAppGridView: function () {
        var e = this;
        MarketApp.taskMarkPool.resetTaskMark(e.apkListTaskMarkTypeModel);
        var t = function () {
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            e.template = $(sessionStorage.getItem(e.templateUrl)).find("#horizAppListTpl").html(), e.render();
            var t = function () {
                e.$el.parent().remove()
            };
            e.apkListTaskMarkTypeModel.get("taskMark").errorCallbacks = t, e.apkListTaskMarkTypeModel.get("taskMark").pageSize = 5, e.tryQueryAppItems()
        };
        MarketApp.loadTemplate.loadTemplate(t, e.templateUrl)
    }, tryQueryAppItems: function () {
        var e = this, t = new Collection.AppItemCollection, n = function (t) {
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            var n = e.apkListTaskMarkTypeModel.get("taskMark");
            if (n.recordNum > 0) {
                var r = 0;
                t.each(function (t) {
                    if (r == 4)return;
                    var n = new View.AppGridItemView;
                    n.initAppGridItemView(e.selfHref, e.templateUrl);
                    var s = n.render(t);
                    $("#" + e.listId).append(s), r++
                })
            } else n.loadItemSize == 0 && e.$el.parent().remove()
        };
        MarketApp.serviceWraper.getAppList(e.apkListTaskMarkTypeModel, t, n)
    }, render: function () {
        var e = this, t = _.template(e.template, {listId: e.listId});
        e.$el.append(t)
    }});
    View.AppGridView = t
}(), define("AppGridView", ["AppGridItemView", "MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.downmove = !1
    }, tagName: "li", className: "app_item_li list_item", template: "", events: {"click .list_url": "goDetail", "touchstart .down_btn_a": "startDownload", "touchmove .app_item_li": "downmove", "click .down_btn_a": "downloadApp"}, startDownload: function (e) {
        this.downmove = !1
    }, downmove: function () {
        this.downmove = !0
    }, downloadApp: function (e) {
        if (this.downmove)return;
        var t = $(e.currentTarget);
        t.find(".down_btn").addClass("down_btn_hover"), MarketApp.downloadState = !0, MarketApp.downloadManage.downloadApp(t.attr("h_vender"), t.attr("h_app_lang"))
    }, goDetail: function (e) {
        $(e.currentTarget).parent().toggleClass("hover");
        var t = setTimeout(function () {
            $(e.currentTarget).parent().removeClass("hover"), clearTimeout(t), window.location.href = $(e.currentTarget).attr("url")
        }, 10)
    }, initAppListItemView: function (e, t) {
        this.selfHref = e, this.template = $(sessionStorage.getItem(t)).find("#appItemTpl").html()
    }, render: function (e) {
        var t = this, n = _.template(t.template, {id: e.get("id"), icon: e.get("icon"), imgCdnPreSite: MarketApp.imgCdnPreSite, dnum: $.resetNum(e.get("dnum")), version: e.get("version"), rating: e.get("rating") / 5 * 100 + "%", name: $.HTMLEncode(e.get("name")), currHref: t.selfHref, lang: e.get("lang")});
        return t.$el.html(n), t.loadingImg(MarketApp.imgCdnPreSite + e.get("icon")), t.$el
    }, loadingImg: function (e) {
        var t = this, n = new Image;
        n.onerror = function () {
        }, n.onload = function () {
            t.$el.find('img[data_src="' + e + '"]').attr("src", e)
        }, n.src = e
    }});
    View.AppListItemView = t
}(), define("AppListItemView", ["AppItemCollection"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t, n, r) {
        this.$el = e, this.selfHref = t, this.listId = r, this.apkListTaskMarkTypeModel = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(n, null)
    }, templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/AppListView.html"), template: "", events: {"click .addmore": "addMoreList"}, addMoreList: function (e) {
        var t = this;
        t.apkListTaskMarkTypeModel.get("taskMark").taskStatus = Mark.ATaskMark.HANDLE_WAIT, $(e.currentTarget).hide(), this.apkListTaskMarkTypeModel.get("taskMark").loadItemSize == 0 ? MarketApp.buildLoading(t.$el, "LIST") : MarketApp.buildLoading(t.$el, "TINY"), t.tryQueryAppItems()
    }, initAppListView: function () {
        var e = this;
        MarketApp.taskMarkPool.resetTaskMark(e.apkListTaskMarkTypeModel);
        var t = function () {
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            e.template = $(sessionStorage.getItem(e.templateUrl)).find("#appListTpl").html(), e.render();
            var t = e.$el.find(".addmore_box"), n = e.$el.find(".addmore"), r = function () {
                MarketApp.removeLoading(e.$el), e.apkListTaskMarkTypeModel.get("taskMark").loadItemSize > 0 ? n.text(lang.httperror) : (MarketApp.exception.ListErrorTip(e.$el.find("#" + e.listId), lang.httperror), n.text(lang.reload)), n.addClass("addmoreErr"), t.css({visibility: "visible"}), n.show()
            };
            e.apkListTaskMarkTypeModel.get("taskMark").errorCallbacks = r, e.tryQueryAppItems()
        };
        MarketApp.loadTemplate.loadTemplate(t, e.templateUrl)
    }, tryQueryAppItems: function () {
        var e = this, t = new Collection.AppItemCollection, n = e.$el.find(".addmore_box"), r = e.$el.find(".addmore"), i = function (t) {
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            MarketApp.removeLoading(e.$el);
            var i = e.apkListTaskMarkTypeModel.get("taskMark"), s = e.getSearchListConf(i);
            i.recordNum > 0 ? t.each(function (t) {
                e.setAppItemView(t)
            }) : i.loadItemSize == 0 && e.setNoneAppView(s, i), i.loadItemSize >= i.total || i.recordNum == 0 ? (n.hide(), e.$el.find(".add_inline").remove()) : (n.show(), r.show(), r.text(lang.addMore).removeClass("addmoreErr"), n.css({visibility: "visible"}))
        };
        MarketApp.serviceWraper.getAppList(e.apkListTaskMarkTypeModel, t, i)
    }, setAppItemView: function (e) {
        var t = this, n = new View.AppListItemView;
        n.initAppListItemView(t.selfHref, t.templateUrl);
        var r = n.render(e);
        $("#" + t.listId).append(r)
    }, setNoneAppView: function () {
    }, getSearchListConf: function (e) {
        var t = 0;
        return e.taskMarkType.indexOf(Mark.MPageTaskMark.TASKMARK_SEARCH_ALL_LIST) == 0 ? ($("#allAppCount").html(e.total), t = 0) : e.taskMarkType.indexOf(Mark.MPageTaskMark.TASKMARK_SEARCH_APP_LIST) == 0 ? ($("#appCount").html(e.total), t = 1) : e.taskMarkType.indexOf(Mark.MPageTaskMark.TASKMARK_SEARCH_GAME_LIST) == 0 && ($("#gameCount").html(e.total), t = 2), t
    }, render: function () {
        var e = this, t = _.template(e.template, {listId: e.listId});
        e.$el.append(t)
    }});
    View.AppListView = t
}(), define("AppListView", ["AppListItemView", "MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = View.AppListItemView.extend({initAppListItemView: function (e, t) {
        this.selfHref = e, this.template = $(sessionStorage.getItem(t)).find("#mainAppItemTpl").html()
    }, render: function (e) {
        var t = this, n = _.template(this.template, {id: e.get("id"), icon: e.get("icon"), imgCdnPreSite: MarketApp.imgCdnPreSite, version: e.get("version"), rating: e.get("rating") / 5 * 100 + "%", name: $.HTMLEncode(e.get("name")), currHref: t.selfHref, lang: e.get("lang")});
        return t.$el.html(n), t.loadingImg(MarketApp.imgCdnPreSite + e.get("icon")), t.$el
    }});
    View.MainAppListItemView = t
}(), define("MainAppListItemView", ["AppListItemView"], function () {
});
var View;
View || (View = {}), function () {
    var t = View.AppListView.extend({setAppItemView: function (e) {
        var t = this, n = new View.MainAppListItemView;
        n.initAppListItemView(t.selfHref, t.templateUrl);
        var r = n.render(e);
        $("#" + t.listId).append(r)
    }});
    View.MainAppListView = t
}(), define("MainAppListView", ["AppListView", "MainAppListItemView"], function () {
});
var View;
View || (View = {}), function () {
    var t = View.AppListView.extend({setNoneAppView: function (e, t) {
        var n = this, r = "search:".length, i = decodeURIComponent(n.selfHref.substring(r));
        MarketApp.viewWraper.showSearchNoneView(i, n.$el, e)
    }});
    View.searchAppListView = t
}(), define("SearchAppListView", ["AppListView"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = e
    }, templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/category/CategoryApkListPage.html"), events: {"click  li a": "goCategoryList"}, goCategoryList: function (e) {
        $(".app_game_filter").removeClass("app_game_filter"), $(".categoryshowbox").hide(), MarketApp.marketHistory.historyState = !0, window.location.href = $(e.currentTarget).attr("url")
    }, render: function (e) {
        var t = this, n = Router.MarketRouter.getCurrentHref();
        n = n.substring(0, n.indexOf(":") + 1) + e.get("id");
        var r = _.template(t.template, {name: e.get("name"), id: e.get("id"), currHref: n});
        t.$el.append(r)
    }, initCategoryPopView: function (e) {
        var t = this;
        t.template = $(sessionStorage.getItem(t.templateUrl)).find("#categoryPopTpl").html();
        var n = function (n) {
            t.$el.children().remove(), n.each(function (e) {
                t.render(e)
            });
            var r = Router.MarketRouter.getCurrentHref();
            r = r.substring(r.indexOf(":") + 1);
            var i = e == "0" ? 34 : 17, s = "<li><a id='pop" + i + "'url='#category/categorylist:" + i + "'><span>全部</span></a></li>";
            t.$el.prepend(s), $("#pop" + r).addClass("on")
        }, r = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(Mark.MPageTaskMark.TASKMARK_CATEGORY_LIST_ROOT, null);
        e == "0" ? MarketApp.serviceWraper.taskAppCategoryItemList(r, n, !0) : MarketApp.serviceWraper.taskGameCategoryItemList(r, n, !0)
    }});
    View.CategoryPopView = t
}(), define("CategoryPopView", ["MarketApp"], function () {
});
var Model;
Model || (Model = {}), function () {
    var t = Backbone.Model.extend({defaults: {id: null, pid: null, name: null, type: null, recdescription: null, icon: null, recicon: null, tname: null, isLeaf: null, categoryType: null}});
    Model.CategoryItemModel = t
}(), define("CategoryItemModel", function () {
});
var Collection;
Collection || (Collection = {}), function () {
    CategoryItemCollection = Backbone.Collection.extend({model: Model.CategoryItemModel, parse: function (e) {
        function o(e) {
            var t = new Object;
            Boolean(e.subItem) ? t.isLeaf = !1 : t.isLeaf = !0;
            if (e.id == 34 || e.pid == 34)t.categoryType = 0;
            if (e.id == 17 || e.pid == 17)t.categoryType = 1;
            if (e.id == 73 || e.pid == 73)t.categoryType = 2;
            for (var n in e)n != "subItem" && (t[n] = e[n]);
            return t
        }

        function u(e) {
            if (e.subItem != null) {
                var n = e.subItem;
                for (var r in n)u(n[r])
            }
            var i = o(e);
            t.push(i)
        }

        var t = new Array, n = e.data;
        for (var r in n)for (var i in n[r]) {
            var s = o(n[r][i]);
            t.push(s), u(n[r][i])
        }
        return t
    }}), Collection.CategoryItemCollection = CategoryItemCollection
}(), define("CategoryItemCollection", ["CategoryItemModel"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t) {
        this.$el = e, this.selfHref = t
    }, events: {"click .category_box": "goCategoryAppList"}, goCategoryAppList: function (e) {
        var t = $(e.currentTarget);
        t.addClass("category_hover");
        var n = setTimeout(function () {
            t.removeClass("category_hover"), clearTimeout(n), window.location.href = t.attr("url")
        }, 15)
    }, render: function (e) {
        var t = this, n = _.template(t.template, {icon: e.get("icon"), imgCdnPreSite: MarketApp.imgCdnPreSite, name: e.get("name"), id: e.get("id"), currHref: t.selfHref, dnum: e.get("dnum")});
        t.$el.append(n), t.loadingImg(MarketApp.imgCdnPreSite + e.get("icon"))
    }, loadingImg: function (e) {
        var t = this, n = new Image;
        n.onerror = function () {
        }, n.onload = function () {
            t.$el.find('img[data_src="' + e + '"]').attr("src", e)
        }, n.src = e
    }, initCategoryItemView: function (e) {
        var t = this, n = MarketApp.Partners.getTplUrl("template/himarketwap/ui/category/CategoryFrame.html");
        t.template = $(sessionStorage.getItem(n)).find("#categoryItemTpl").html();
        var r = function (e) {
            e.each(function (e) {
                t.render(e)
            })
        }, i = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(Mark.MPageTaskMark.TASKMARK_CATEGORY_LIST_ROOT, null);
        e == "0" ? MarketApp.serviceWraper.taskAppCategoryItemList(i, r, !0) : MarketApp.serviceWraper.taskGameCategoryItemList(i, r, !0)
    }});
    View.CategoryItemView = t
}(), define("CategoryItemView", ["CategoryItemCollection"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = e.$el, this.selfHref = Router.MarketRouter.getCurrentHref(), this.contentHeight = 0
    }, templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/category/CategoryFrame.html"), newIscroll: function () {
        var e = this;
        Boolean(e.iscroll) && e.iscroll.destroy(), e.iscroll = new iScroll("categoryFrame", {bounce: !1, hideScrollbar: !0, scrollbarClass: "myScrollBar", onScrollStart: function () {
            e.isUCBrowser && $("#categoryLiFrame").height(document.documentElement.clientHeight - 104), e.contentHeight != $("#categoryHtml").height() && (e.contentHeight = $("#categoryHtml").height(), e.iscroll.refresh())
        }}), e.isUCBrowser && (MarketApp.orientation.categoryIscroll = function () {
            $("#categoryLiFrame").length > 0 && ($("#categoryLiFrame").height(document.documentElement.clientHeight - 104), e.iscroll.refresh())
        })
    }, initCategoryFrame: function () {
        var e = this;
        e.isUCBrowser = $.isUcBrowse();
        var t = MarketApp.buildLoading(e.$el, "BIG"), n = function () {
            MarketApp.removeLoading(t);
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            e.template = sessionStorage.getItem(e.templateUrl), e.render(), e.showCategoryAppView(), e.showCategoryGameView(), MarketApp.viewWraper.showFooterView(), e.newIscroll()
        };
        MarketApp.loadTemplate.loadTemplate(n, e.templateUrl)
    }, render: function () {
        var e = this, t = e.template;
        e.$el.append(t)
    }, showCategoryAppView: function () {
        var e = this, t = e.$el.find("#appCategoryBox"), n = e.selfHref;
        MarketApp.viewWraper.showCategoryAppView(t, n)
    }, showCategoryGameView: function () {
        var e = this, t = e.$el.find("#gameCategoryBox"), n = e.selfHref;
        MarketApp.viewWraper.showCategoryGameView(t, n)
    }});
    View.CategoryFrame = t
}(), define("CategoryFrame", ["MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t) {
        this.$el = e, this.selfHref = t
    }, events: {"click #appAll": "goCategoryAppList"}, initCategoryAppView: function () {
        var e = this;
        e.$el.children().remove();
        var t = MarketApp.buildLoading(e.$el, "LIST");
        MarketApp.removeLoading(t);
        var n = MarketApp.Partners.getTplUrl("template/himarketwap/ui/category/CategoryFrame.html");
        e.template = $(sessionStorage.getItem(n)).find("#categoryAppTpl").html(), e.render(), e.showAppTopList(), e.showAppCategoryList()
    }, render: function () {
        var e = this, t = _.template(this.template, {});
        e.$el.append(t)
    }, showAppCategoryList: function () {
        var e = this, t = e.$el.find("#appUl"), n = e.selfHref;
        MarketApp.viewWraper.showCategoryAppItemView(t, n)
    }, showAppTopList: function () {
        var e = this, t = e.$el.find("#topAppView"), n = e.selfHref;
        MarketApp.viewWraper.showAppTopList(t, n)
    }, goCategoryAppList: function (e) {
        MarketApp.marketHistory.historyState = !0, window.location.href = $(e.currentTarget).attr("url")
    }});
    View.CategoryAppView = t
}(), define("CategoryAppView", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t) {
        this.$el = e, this.selfHref = t
    }, events: {"click #gameAll": "goCategoryGameList"}, goCategoryGameList: function (e) {
        MarketApp.marketHistory.historyState = !0, window.location.href = $(e.currentTarget).attr("url")
    }, initCategoryGameView: function () {
        var e = this;
        e.$el.children().remove();
        var t = MarketApp.buildLoading(e.$el, "LIST");
        MarketApp.removeLoading(t);
        var n = MarketApp.Partners.getTplUrl("template/himarketwap/ui/category/CategoryFrame.html");
        e.template = $(sessionStorage.getItem(n)).find("#categoryGameTpl").html(), e.render(), e.showGameTopList(), e.showGameCategoryList()
    }, render: function () {
        var e = this, t = _.template(this.template, {});
        e.$el.append(t)
    }, showGameCategoryList: function () {
        var e = this, t = e.$el.find("#gameUl"), n = e.selfHref;
        MarketApp.viewWraper.showCategoryGameItemView(t, n)
    }, showGameTopList: function () {
        var e = this, t = e.$el.find("#topGameView"), n = e.selfHref;
        MarketApp.viewWraper.showGameTopList(t, n)
    }});
    View.CategoryGameView = t
}(), define("CategoryGameView", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $("body"), this.selfHref = Router.MarketRouter.getCurrentHref(), this.isShowPop = !1, this.moveTimerId
    }, template: "", templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/category/CategoryApkListPage.html"), categoryId: "", events: {"click #gameIcon": "popGameCategorys", "click #appIcon": "popAppCategorys", "touchend #down_count_order": "showDloadedApp", "touchend #star_level_order": "showStarApp", "touchend #newest_order": "showNewestApp", "touchstart #categoryAppPage": "hideCategoryPop", "touchend #categoryAppPage": "preventTouch", "touchstart .categoryTopPos": "hideCategoryPop"}, preventTouch: function () {
        return this.isShowPop ? !1 : !0
    }, hideCategoryPop: function (e) {
        $appGameFilter = $(".app_game_filter"), $(e.currentTarget).is("#categoryAppPage") && ($appGameFilter.length > 0 ? this.isShowPop = !0 : this.isShowPop = !1), $appGameFilter.removeClass("app_game_filter"), $(".categoryshowbox").hide()
    }, showDloadedApp: function (e) {
        var t = $(e.currentTarget);
        t.is(".on") || ($("#categoryOrder .on").removeClass("on"), t.addClass("on"), this.iscroll.scrollTo(0, 0, 0), $("#rateAppBox").hide(), $("#timeAppBox").hide(), $("#downAppBox").show())
    }, showStarApp: function (e) {
        var t = $(e.currentTarget);
        if (!t.is(".on")) {
            $("#categoryOrder .on").removeClass("on");
            var n = $("#rateAppBox");
            t.addClass("on"), this.iscroll.scrollTo(0, 0, 0), $("#downAppBox").hide(), $("#timeAppBox").hide(), n.show(), n.find("itemlist").children().length == 0 && this.showRateApkList(this.categoryId, !1)
        }
    }, showNewestApp: function (e) {
        var t = $(e.currentTarget);
        if (!t.is(".on")) {
            $("#categoryOrder .on").removeClass("on"), t.addClass("on"), this.iscroll.scrollTo(0, 0, 0);
            var n = $("#timeAppBox");
            $("#downAppBox").hide(), $("#rateAppBox").hide(), $("#timeAppBox").show(), n.find(".itemlist").children().length == 0 && this.showTimeApkList(this.categoryId, !1)
        }
    }, popGameCategorys: function (e) {
        var t = this, n = $(e.currentTarget);
        if (!Boolean($("#gameCategoryUl li").length)) {
            var r = t.$el.find("#gameCategoryUl");
            MarketApp.viewWraper.popGameCategorys(r)
        } else this.popSetfocus();
        n.is(".app_game_filter") ? this.isShowPop || (n.removeClass("app_game_filter"), $("#gamePopBox").hide()) : ($(".app_game_filter").removeClass("app_game_filter"), $("#appPopBox").hide(), n.addClass("app_game_filter"), $("#gamePopBox").show())
    }, popAppCategorys: function (e) {
        var t = this, n = $(e.currentTarget);
        if (!Boolean($("#appCategoryUl li").length)) {
            var r = t.$el.find("#appCategoryUl");
            MarketApp.viewWraper.popAppCategorys(r)
        } else this.popSetfocus();
        n.is(".app_game_filter") ? this.isShowPop || (n.removeClass("app_game_filter"), $("#appPopBox").hide()) : ($(".app_game_filter").removeClass("app_game_filter"), $("#gamePopBox").hide(), n.addClass("app_game_filter"), $("#appPopBox").show())
    }, popSetfocus: function () {
        var e = this;
        $(".category_filter ul li a.on").removeClass("on");
        var t = e.selfHref;
        t = t.substring(t.indexOf(":") + 1), $("#pop" + t).addClass("on")
    }, newIscroll: function () {
        var e = this;
        Boolean(e.iscroll) && e.iscroll.destroy(), $(".myScrollBarV").remove(), e.iscroll = new iScroll("categoryAppPage", {bounce: !1, hideScrollbar: !0, scrollbarClass: "myScrollBar", onScrollStart: function () {
            e.isUCBrowser && $("#categoryAppPage").height(document.documentElement.clientHeight - 53), e.iscroll.refresh()
        }, onScrollMove: function () {
            Boolean(e.moveTimerId) && clearTimeout(e.moveTimerId), $("#categoryOrder").addClass("show")
        }, onScrollEnd: function () {
            e.moveTimerId = setTimeout(function () {
                $("#categoryOrder").removeClass("show")
            }, 2e3)
        }}), e.isUCBrowser && (MarketApp.orientation.categoryApkIscroll = function () {
            $("#categoryAppPage").length > 0 && ($("#categoryAppPage").height(document.documentElement.clientHeight - 53), e.iscroll.refresh())
        })
    }, initCategoryListPage: function (e) {
        var t = this;
        MarketApp.marketHistory.historyState = !1, t.isUCBrowser = $.isUcBrowse();
        if (MarketApp.marketHistory.isHistory && MarketApp.marketHistory.oldUrl.indexOf("detail") == -1)return;
        t.selfHref = Router.MarketRouter.getCurrentHref();
        var n = !1;
        if (Boolean(MarketApp.viewWraper.mCategorysPage["categorylist" + e])) {
            t.$el.children().childrenRemove(), t.$el.html(MarketApp.viewWraper.mCategorysPage["categorylist" + e]), delete MarketApp.viewWraper.mCategorysPage["categorylist" + t.categoryId], t.newIscroll();
            return
        }
        delete MarketApp.viewWraper.mCategorysPage["categorylist" + t.categoryId], t.categoryId = e;
        if (!Boolean($("#categoryHeader")[0])) {
            t.selfHref.indexOf("category") == 0 && Boolean($("#categoryFrame")[0]) && (MarketApp.viewWraper.mFunPage.categoryFrame = $("#categoryFrame")), t.$el.children().childrenRemove();
            var r = function () {
                if (!Router.MarketRouter.isCurrentHref(t.selfHref))return;
                t.template = $(sessionStorage.getItem(t.templateUrl)).find("#categoryApkPage").html();
                var r = function () {
                    var r = function () {
                        categoryModel = MarketApp.appCacheMng.allCategoryItemList["key" + e], _.isUndefined(categoryModel) || _.isNull(categoryModel) ? MarketApp.exception.RouterErrorTip($("body"), lang[404]) : (t.render(categoryModel.get("name")), $("#categoryTitle a").text(categoryModel.get("name")), $("#rateAppBox").hide(), $("#timeAppBox").hide(), $("#downAppBox").show(), t.showApkList(e, n), MarketApp.viewWraper.showFooterView(), t.newIscroll())
                    }, i = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(Mark.MPageTaskMark.TASKMARK_CATEGORY_LIST_ROOT, null);
                    MarketApp.serviceWraper.taskCategoryItemList(i, r, !1)
                };
                Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORY_ITEM_VIEW, r)
            };
            MarketApp.loadTemplate.loadTemplate(r, t.templateUrl)
        } else categoryModel = MarketApp.appCacheMng.allCategoryItemList["key" + e], $("#categoryTitle a").text(categoryModel.get("name")), $(".itemlist").children().remove(), $(".addmore_box").hide(), MarketApp.buildLoading($("#downAppBox .itemlist"), "LIST"), $("#categoryOrder .on").removeClass("on"), $("#down_count_order").addClass("on"), $("#rateAppBox").hide(), $("#timeAppBox").hide(), $("#downAppBox").show(), t.showApkList(e, n), MarketApp.viewWraper.showFooterView(), t.newIscroll(), t.iscroll.scrollTo(0, 0, 0)
    }, showApkList: function (e, t) {
        var n = this, r = n.$el.find("#downAppBox #apkList"), i = "apkul" + e, s = n.selfHref;
        r.children().remove(), MarketApp.buildLoading(r, "LIST"), MarketApp.viewWraper.showCateAppList(e, r, s, i)
    }, showRateApkList: function (e, t) {
        var n = this, r = n.$el.find("#rateAppBox #rateApkList"), i = "rateApkul" + e, s = n.selfHref;
        r.children().remove(), MarketApp.buildLoading(r, "LIST"), MarketApp.viewWraper.showCateRateAppList(e, r, s, i)
    }, showTimeApkList: function (e, t) {
        var n = this, r = n.$el.find("#timeAppBox #timeApkList"), i = "timeApkul" + e, s = n.selfHref;
        r.children().remove(), MarketApp.buildLoading(r, "LIST"), MarketApp.viewWraper.showCateTimeAppList(e, r, s, i)
    }, render: function (e) {
        var t = this, n = _.template(t.template, {cid: t.categoryId});
        t.$el.append(n)
    }});
    View.CategoryApkListPage = t
}(), define("CategoryApkListPage", ["MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = e.$el, this.selfHref = Router.MarketRouter.getCurrentHref(), this.contentHeight = 0
    }, template: "", templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/topic/topicFrame.html"), newIscroll: function () {
        var e = this;
        Boolean(e.iscroll) && e.iscroll.destroy(), e.iscroll = new iScroll("topicFrame", {bounce: !1, hideScrollbar: !0, scrollbarClass: "myScrollBar", onScrollStart: function () {
            Boolean(e.lazyTimer) && clearTimeout(e.lazyTimer), e.isUCBrowser && $("#topicLiFrame").height(document.documentElement.clientHeight - 104), e.contentHeight != $("#topicHtml").height() && (e.contentHeight = $("#topicHtml").height(), e.iscroll.refresh())
        }, onScrollEnd: function () {
            e.lazyTimer = $("#topicItemUl .topic_item_icon").imageLazyload({topHeight: 101, defaultCss: "topic_default", iscroll: e.iscroll})
        }}), e.isUCBrowser && (MarketApp.orientation.topicIscroll = function () {
            $("#topicLiFrame").length > 0 && ($("#topicLiFrame").height(document.documentElement.clientHeight - 104), e.iscroll.refresh())
        })
    }, initTopicFrame: function () {
        var e = this;
        e.isUCBrowser = $.isUcBrowse();
        var t = MarketApp.buildLoading(e.$el, "BIG"), n = function () {
            MarketApp.removeLoading(t);
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            e.template = sessionStorage.getItem(e.templateUrl), e.render(), e.showTopicItemView(), MarketApp.viewWraper.showFooterView(), e.newIscroll()
        };
        MarketApp.loadTemplate.loadTemplate(n, e.templateUrl)
    }, showTopicItemView: function () {
        var e = this, t = e.$el.find("#topicItemUl"), n = e.selfHref;
        MarketApp.viewWraper.showTopicItemView(t, n)
    }, render: function () {
        var e = this, t = e.template;
        e.$el.append(t)
    }});
    View.TopicFrame = t
}(), define("TopicFrame", ["MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t) {
        this.$el = e, this.selfHref = t
    }, template: "", events: {"click .topic_item_box": "goTopicAppView"}, goTopicAppView: function (e) {
        var t = $(e.currentTarget);
        t.addClass("topic_item_hover");
        var n = setTimeout(function () {
            t.removeClass("topic_item_hover"), clearTimeout(n), window.location.href = t.attr("url")
        }, 15)
    }, initTopicItemView: function () {
        var e = this, t = MarketApp.Partners.getTplUrl("template/himarketwap/ui/topic/topicFrame.html");
        e.template = $(sessionStorage.getItem(t)).find("#topicItemTpl").html(), e.tryQueryTopicItems()
    }, tryQueryTopicItems: function () {
        var e = this, t = MarketApp.buildLoading(e.$el, "BIG"), n = function (n) {
            MarketApp.removeLoading(t), n.each(function (t) {
                e.render(t)
            }), $("#topicItemUl .topic_item_icon").imageLazyload({topHeight: 101, delay: 1500, defaultCss: "topic_default"})
        }, r = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(Mark.MPageTaskMark.TASKMARK_CATEGORY_LIST_ROOT, null), i = r.get("taskMark"), s = function () {
            MarketApp.removeLoading(e.$el), e.loadingType || MarketApp.exception.RouterErrorTip(e.$el, "网络不给力，请尝试重新加载...")
        };
        i.errorCallbacks = s, MarketApp.serviceWraper.taskTopicCategoryItemList(r, n, !1)
    }, render: function (e) {
        var t = this, n = _.template(this.template, {recicon: e.get("recicon"), imgCdnPreSite: MarketApp.imgCdnPreSite, name: $.HTMLEncode(e.get("name")), id: e.get("id"), selfHref: t.selfHref});
        this.$el.append(n)
    }});
    View.TopicItemView = t
}(), define("TopicItemView", ["CategoryItemCollection"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.appModel = e, this.$el = $("#appHeaderFrame" + e.get("id"))
    }, template: "", events: {"click .down_load": "downloadApp", "click #goback": "historyBack", "click .top_banner_title": "historyBack"}, historyBack: function () {
        window.history.back()
    }, downloadApp: function (e) {
        var t = $(e.currentTarget);
        MarketApp.downloadState = !0, MarketApp.downloadManage.downloadApp(t.attr("h_vender"), t.attr("h_app_lang"))
    }, initAppHeaderFrame: function () {
        var e = this;
        e.template = $("#appHeaderTpl").html(), e.render(e.appModel)
    }, render: function (e) {
        var t = this, n = Router.MarketRouter.getCurrentHref();
        n = n.substring(0, n.lastIndexOf("/"));
        var r = _.template(this.template, {name: $.HTMLEncode(e.get("name")), lang: e.get("lang") == 1 ? lang.language_cn : lang.language_en, id: e.get("id"), lang_en: e.get("lang"), parentHref: n});
        t.$el.append(r)
    }});
    View.AppHeaderFrame = t
}(), define("AppHeaderFrame", ["AppItemModel"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.appModel = e.appModel, this.$el = e.$el, this.imgcount = 0, this.appId = e.appModel.get("id"), this.imgUlWidth = 0, this.startPX = 0, this.starPY = 0, this.endPX = 0, this.endPY = 0, this.scrollTo = !1, this.scrollEnd = !1
    }, template: "", events: {"touchstart ul[id^=appScreen]": "touchStarScroll", "touchmove ul[id^=appScreen]": "touchMoveScroll", "touchend ul[id^=appScreen]": "touchEndScroll", "click ul .detail_img": "showImg"}, showImg: function (e) {
        if (this.scrollEnd)return;
        var t = $(e.currentTarget).parent().parent().index();
        this.showAppPopImg(t)
    }, touchStarScroll: function (e) {
        var t = this;
        this.scrollEnd = !1, t.startPX = e.touches[0].pageX, t.startPY = e.touches[0].pageY
    }, touchMoveScroll: function (e) {
        var t = this;
        t.endPX = e.touches[0].pageX, t.endPY = e.touches[0].pageY;
        var n = Math.abs(t.startPX - t.endPX), r = Math.abs(t.startPY - t.endPY);
        return r > n ? (t.scrollTo = !1, !0) : (t.scrollTo = !0, !1)
    }, touchEndScroll: function (e) {
        var t = this;
        if (!t.scrollTo)return;
        var n = parseInt(t.$el.css("marginLeft"));
        Boolean(t.$el.css("marginLeft")) || (n = 0);
        var r = document.documentElement.clientWidth, i = t.$el.find("li");
        if (t.endPX < t.startPX) {
            if (t.endPX == 0)return;
            if (r - n >= t.imgUlWidth) {
                t.endPX = 0, t.startPX = 0, this.scrollEnd = !0;
                return
            }
            var s = t.imgUlWidth - (r - n);
            s >= 140 ? n -= 140 : n -= s
        } else if (t.endPX > t.startPX) {
            if (n == 0) {
                t.endPX = 0, t.startPX = 0, this.scrollEnd = !0;
                return
            }
            n + 140 > 0 ? n = 0 : n += 140
        }
        t.$el.animate({marginLeft: n}), this.scrollEnd = !0, t.endPX = 0, t.startPX = 0
    }, showAppPopImg: function (e) {
        var t = this, n = $("#appPopImgUl" + t.appId);
        MarketApp.viewWraper.showAppPopImg(t.appModel, n, e)
    }, initAppScreenhot: function () {
        var e = this;
        e.template = $("#appScreenHotTpl").html();
        if (Boolean(e.appModel.get("appDetail").get("thumbimgs"))) {
            var t = e.appModel.get("appDetail").get("thumbimgs").split(",");
            for (var n in t)Boolean(t[n]) && (e.imgcount += 1, e.render(t[n]));
            e.imgUlWidth = e.imgcount * 140, $("#appScreen" + e.appModel.get("id")).css({width: e.imgUlWidth})
        }
    }, render: function (e) {
        var t = this, n = _.template(this.template, {imgCdnPreSite: MarketApp.imgCdnPreSite, imgurl: e, imgclass: "detail_img"});
        t.$el.append(n), t.loadingImg(MarketApp.imgCdnPreSite + e)
    }, loadingImg: function (e) {
        var t = this, n = new Image;
        n.onerror = function () {
        }, n.onload = function () {
            t.$el.find('img[data_src="' + e + '"]').attr("src", e), t.$el.find('img[data_src="' + e + '"]').show()
        }, n.src = e
    }});
    View.AppScreenhot = t
}(), define("AppScreenhot", function () {
});
var View;
View || (View = {}), function namespace() {
    var AppIntroduceFrame = Backbone.View.extend({initialize: function (e) {
        this.appModel = e, this.$el = $("#appIntroduceFrame" + e.get("id")), this.isMoveBox = !1, this.anvaArr = ["com.anguanjia.safe", "com.anguanjia.safe.optimizer", "com.anguanjia.safe.battery", "com.ijinshan.zhuhai.k8", "com.ijinshan.duba", "com.ijinshan.browser", "com.cleanmaster.mguard_cn", "com.ijinshan.duba", "com.cleanmaster.mguard_cn", "com.ijinshan.kbatterydoctor", "com.qihoo360.mobilesafe.opti", "com.qihoo360.mobilesafe", "com.qihoo360.mobilesafe_mtk6573", "com.qihoo360.mobilesafe.opti.powerctl", "com.qihoo360.mobilesafe.strongbox", "project.rising", "com.autonavi.minimap", "com.antiy.avl", "com.tencent.qqpimsecure", "com.UCMobile", "com.uc.browser.hd", "cn.emagsoftware.flyteeth"]
    }, template: "", events: {"click header[id^=apkMsgHead] article": "showChangeBox", "click header[id^=apkMsgHead] aside": "showChangeBox", "touchend section[id^=apkinformation]": "showInformation", "touchmove section[id^=apkinformation]": "setActionState", "touchstart section[id^=apkinformation]": "resetActionState", "touchstart section[id^=upContent]": "resetActionState", "touchmove section[id^=upContent]": "setActionState", "touchend section[id^=upContent]": "showimPrint", "touchmove .app_popimg_show": "forbiddenMove", "click #hiMarketApp": "downMarketApp", "touchend section[id^=apkTip]": "showSafety", "touchmove section[id^=apkTip]": "setActionState", "touchstart section[id^=apkTip]": "resetActionState"}, setActionState: function (e) {
        this.isMoveBox = !0
    }, resetActionState: function (e) {
        this.isMoveBox = !1
    }, showSafety: function (e) {
        if (!this.isMoveBox) {
            $currItem = $(e.currentTarget);
            if ($currItem.find(".safety_line").children().length == 0)return;
            $currItem.find(".safety_line").toggle(), $currItem.find(".slidedown").toggleClass("slideup")
        }
    }, downMarketApp: function () {
        if (!Boolean(MarketApp.downloadApp)) {
            MarketApp.downloadState = !0, MarketApp.downloadApp = !0;
            var e = MarketApp.taskMarkPool.getTaskMarkModelBySingle(Mark.MSingleTaskMark.TASKMARK_HIMARKET_INFO, null), t = function () {
                MarketApp.downloadManage.getHiMarketApp()
            };
            MarketApp.serviceWraper.getHimarketInfo(e, t)
        }
    }, forbiddenMove: function () {
        return!1
    }, showimPrint: function (e) {
        if (!this.isMoveBox) {
            var t = this.appModel.get("id"), n = $("#apkinformation" + t).find(".hide_imprint");
            n.height() <= n.find("pre").height() && ($("#upContent" + t + " .hide_imprint").toggleClass("show_imprint"), $("section[id^=upContent] .slidedown").toggleClass("slideup"), $("#apkBaseTop" + t).toggleClass("appTopHeader"), MarketApp.viewWraper.mDetailIscroll.refresh())
        }
    }, showInformation: function (e) {
        if (!this.isMoveBox) {
            var t = this.appModel.get("id"), n = $("#apkinformation" + t).find(".hide_describe");
            n.height() <= n.find("pre").height() && ($("section[id^=apkinformation" + t + "] .hide_describe").toggleClass("show_describe"), $("section[id^=apkinformation" + t + "] .slidedown").toggleClass("slideup"), $("#apkBaseTop" + t).toggleClass("appTopHeader"), $("pre").css({fontSize: "14px"}), MarketApp.viewWraper.mDetailIscroll.refresh())
        }
    }, showChangeBox: function (e) {
        var t = this;
        if (!$(e.currentTarget).is(".on")) {
            var n = t.appModel.get("id"), r = $("#apkcomment" + n);
            $("#apkMsgHead" + n + " article").toggleClass("on"), $("#apkMsgHead" + n + " aside").toggleClass("on"), r.toggle(), $("#apkinformation" + n).toggle(), $(e.currentTarget).is("#appCommentAside") && r.children().length == 0 && t.showAppComment()
        }
    }, initAppIntroduceFrame: function () {
        var e = this, t = MarketApp.buildLoading(e.$el, "BIG");
        e.template = $("#appIntroduceFrameTpl").html();
        var n = new Model.AppDetailModel, r = function () {
            MarketApp.removeLoading(t), e.appModel = MarketApp.appCacheMng.allAppItemList[e.appModel.get("id")], e.render(), e.showAppScreenHot()
        }, i = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(Mark.MSingleTaskMark.getTaskMarkAppDetailValue(e.appModel.get("id")), null);
        MarketApp.serviceWraper.getApkDetail(i, e.appModel.get("id"), n, r)
    }, showAppScreenHot: function () {
        var e = this;
        MarketApp.viewWraper.showAppScreenhot({appModel: e.appModel, $el: e.$el.find("#appScreen" + e.appModel.get("id"))})
    }, showAppComment: function () {
        var e = this;
        MarketApp.viewWraper.showAppComment(e.appModel)
    }, render: function () {
        var me = this, appDetailModel = me.appModel.get("appDetail"), secbusiness = appDetailModel.get("secbusiness"), temhtml = _.template(this.template, {description: $.HTMLEncode(appDetailModel.get("description")), imprint: $.HTMLEncode(appDetailModel.get("imprint")), id: me.appModel.get("id"), icon: me.appModel.get("icon"), imgCdnPreSite: MarketApp.imgCdnPreSite, version: me.appModel.get("version"), rating: me.appModel.get("rating") / 5 * 100 + "%", lang: me.appModel.get("lang") == 1 ? lang.language_cn : lang.language_en, size: eval(me.appModel.get("size") / 1024).toFixed(2) + "M", dnum: $.resetNum(me.appModel.get("dnum")), audittime: appDetailModel.get("audittime")});
        me.$el.append(temhtml);
        if (appDetailModel.get("secbusiness") != "") {
            var safety = appDetailModel.get("secbusiness").split(","), safetyTemplate = $("#safetyTpl").html();
            for (var index in safety) {
                var safeTpl = _.template(safetyTemplate, {safetyName: safety[index]});
                me.$el.find(".safety_line").append(safeTpl)
            }
        } else $("#apkTip" + me.appModel.get("id") + " .slidedown").hide();
        appDetailModel.get("imprint") == "" ? $("#apkImprint").hide() : $("#apkImprint").show(), me.appendAnva(me.appModel.get("pkn")), me.loadingImg(MarketApp.imgCdnPreSite + me.appModel.get("icon"))
    }, appendAnva: function (e) {
        for (var t = 0; t < this.anvaArr.length; t++)if (e == this.anvaArr[t]) {
            $("#anvaIcon").show();
            break
        }
    }, loadingImg: function (e) {
        var t = this, n = new Image;
        n.onerror = function () {
        }, n.onload = function () {
            t.$el.find('img[data_src="' + e + '"]').attr("src", e)
        }, n.src = e
    }});
    View.AppIntroduceFrame = AppIntroduceFrame
}(), define("AppIntroduceFrame", ["AppScreenhot"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = $("body"), this.selfHref = Router.MarketRouter.getCurrentHref();
        if (Boolean(e))this.appModel = e, this.appId = e.get("id"), this.author = e.get("author"); else {
            var t = this.selfHref.indexOf("/Screen"), n;
            if (t > -1)var n = this.selfHref.substring(this.selfHref.lastIndexOf(":") + 1, t); else var n = this.selfHref.substring(this.selfHref.lastIndexOf(":") + 1);
            this.appModel = null, this.appId = n, this.author = ""
        }
    }, template: "", templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/appDetailPage.html"), newIscroll: function () {
        var e = this;
        Boolean(MarketApp.viewWraper.mDetailIscroll) && MarketApp.viewWraper.mDetailIscroll.destroy(), $(".myScrollBarV").remove(), MarketApp.viewWraper.mDetailIscroll = new iScroll("appDetail" + e.appId, {bounce: !1, hideScrollbar: !0, scrollbarClass: "myScrollBar", onScrollStart: function () {
            e.isUCBrowser && $("#appDetail" + e.appId).height(document.documentElement.clientHeight - 53), MarketApp.viewWraper.mDetailIscroll.refresh()
        }}), MarketApp.orientation.appDetailIscroll = function () {
            e.isUCBrowser && $("#appDetail" + e.appId).length > 0 && $("#appDetail" + e.appId).height(document.documentElement.clientHeight - 53), Router.MarketRouter.isCurrentHref(e.selfHref) && MarketApp.viewWraper.mDetailIscroll.refresh()
        }
    }, initAppDetailPage: function () {
        var e = this;
        e.isUCBrowser = $.isUcBrowse;
        if (MarketApp.marketHistory.isChangeUrl && MarketApp.marketHistory.oldUrl.indexOf("Screen") != -1) {
            var t = $(".currentPop");
            t.find(".popimgul").css({marginLeft: 0}), t.hide(), t.find("li img").removeClass("orientation_img"), t.find("li").removeClass("on"), t.find("span").removeClass("on"), delete MarketApp.orientation.appPopImgShow, e.newIscroll();
            return
        }
        e.selfHref = Router.MarketRouter.getCurrentHref();
        if (e.selfHref.lastIndexOf("Screen") != -1 && e.$el.children().length > 0)return;
        e.saveDomInMerey(e.selfHref), e.$el.children().childrenRemove();
        var n = MarketApp.buildLoading(e.$el, "BIG"), r = function () {
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            MarketApp.removeLoading(n), e.template = sessionStorage.getItem(e.templateUrl), e.render();
            if (!Boolean(e.appModel))e.getAppSummaryModelWhenReflush(); else {
                var t = Date.parse(new Date), r = (t - e.appModel.get("passTime")) / 6e4, i = MarketApp.serviceWraper.passTime;
                r > i && i > 0 ? e.getAppSummaryModelWhenReflush() : e.loadOther()
            }
        };
        MarketApp.loadTemplate.loadTemplate(r, e.templateUrl)
    }, loadOther: function () {
        var e = this;
        MarketApp.viewWraper.showFooterView(), e.newIscroll(), e.showAppHeaderFrame(), e.showIntroduceFrame();
        var t = e.selfHref.substring(0, e.selfHref.lastIndexOf("detail:"));
        t.indexOf("detail:") == -1 && (e.showGuessLikeFrame(), e.showAuthorOtherAppFrame())
    }, saveDomInMerey: function (e) {
        var t = this;
        if (MarketApp.marketHistory.isChangeUrl) {
            var n = MarketApp.marketHistory.oldUrl, r;
            switch (n) {
                case"category":
                    r = "categoryFrame";
                    break;
                case"ranking":
                    r = "rankingFrame";
                    break;
                case"topic":
                    r = "topicFrame"
            }
            Boolean(r) && (MarketApp.viewWraper.mFunPage[r] = $("#" + r));
            if (n.indexOf("detail") == -1) {
                if (n.lastIndexOf("category/categorylist") == 0) {
                    var i = MarketApp.viewWraper.mCategorysPage.categoryid;
                    MarketApp.viewWraper.mCategorysPage["categorylist" + i] = $("body").children()
                }
                if (n.lastIndexOf("topic/topiclist") == 0) {
                    var s = MarketApp.viewWraper.mTopicsPage.topicId;
                    MarketApp.viewWraper.mTopicsPage["topiclist" + s] = $("body").children()
                }
            }
        }
    }, getAppSummaryModelWhenReflush: function () {
        var e = this, t = new Model.AppItemModel;
        t.parse = function (e) {
            return e.data
        };
        var n = function (t) {
            _.isNull(t.get("id")) ? MarketApp.exception.RouterErrorTip($("body"), lang[404]) : (e.appModel = t, e.author = t.get("author"), e.loadOther())
        }, r = MarketApp.taskMarkPool.getTaskMarkModelBySingle(Mark.MSingleTaskMark.getTaskMarkAppItemSummaryValue(e.appId), null);
        MarketApp.serviceWraper.getAppSummaryModelWhenReflush(r, e.appId, t, n)
    }, showAppHeaderFrame: function () {
        var e = this;
        MarketApp.viewWraper.showAppHeaderFrame(e.appModel)
    }, showIntroduceFrame: function () {
        var e = this;
        MarketApp.viewWraper.showAppIntroduceFrame(e.appModel)
    }, showGuessLikeFrame: function () {
        var e = this;
        MarketApp.viewWraper.showGuessLikeFrame(e.appId, e.selfHref)
    }, showAuthorOtherAppFrame: function () {
        var e = this;
        MarketApp.viewWraper.showAuthorOtherAppFrame(e.author, e.appId, e.selfHref)
    }, render: function () {
        var e = this, t = this.template.replace(/<%=appId%>/g, e.appId);
        e.$el.append(t)
    }});
    View.AppDetailPage = t
}(), define("AppDetailPage", ["AppHeaderFrame", "AppIntroduceFrame", "MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.appModel = e, this.$el = $("#apkcomment" + e.get("id"))
    }, template: "", events: {"click #addMore": "showAddMoreCommentList"}, initAppComment: function () {
        var e = this;
        e.template = $("#appCommentTpl").html(), e.render();
        var t = !1;
        e.showAppCommentItem(t)
    }, showAppCommentItem: function (e) {
        var t = this;
        MarketApp.viewWraper.showAppCommentItem(t.appModel, e)
    }, showAddMoreCommentList: function () {
        var e = this, t = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(Mark.MPageTaskMark.getTaskMarkCommentListValue(e.appModel.get("id")), null);
        t.get("taskMark").taskStatus = Mark.ATaskMark.HANDLE_WAIT, $("#addMoreBox").css({visibility: "hidden"});
        var n = !0;
        e.showAppCommentItem(n)
    }, render: function () {
        var e = this, t = e.appModel.get("appDetail").get("crate").split("|"), n = "0%", r = "0%", i = "0%", s = "0%", o = "0%";
        for (index in t) {
            var u = t[index], a = u.indexOf(":");
            switch (u.substring(0, a)) {
                case"5":
                    n = u.substring(a + 1) + "%";
                case"4":
                    r = u.substring(a + 1) + "%";
                case"3":
                    i = u.substring(a + 1) + "%";
                case"2":
                    s = u.substring(a + 1) + "%";
                case"1":
                    o = u.substring(a + 1) + "%"
            }
        }
        var f = _.template(this.template, {id: e.appModel.get("id"), rating: e.appModel.get("rating") / 5 * 100 + "%", cnum: e.appModel.get("appDetail").get("cnum"), level_five: n, level_four: r, level_three: i, level_two: s, level_one: o});
        e.$el.html(f)
    }});
    View.AppComment = t
}(), define("AppComment", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t) {
        this.appModel = e, this.$el = $("#appCommentUl" + e.get("id")), this.loadingType = t
    }, template: "", initCommentItem: function () {
        var e = this, t;
        e.loadingType ? t = MarketApp.buildLoading(e.$el, "TINY") : t = MarketApp.buildLoading(e.$el, "LIST");
        var n = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(Mark.MPageTaskMark.getTaskMarkCommentListValue(e.appModel.get("id")), null), r = n.get("taskMark");
        e.template = $("#appCommentItemTpl").html();
        var i = new Collection.AppCommentCollection, s = function (t) {
            MarketApp.removeLoading(e.$el), r.loadItemSize < r.total ? $(".addmore_box").css({visibility: "visible"}) : r.loadItemSize == r.total ? $(".addmore_box").remove() : $(".addmore_box").remove(), t.models.length > 0 ? ($("#noComment").hide(), t.each(function (t) {
                e.render(t)
            })) : $("#noComment").show()
        };
        MarketApp.serviceWraper.getCommentList(n, i, s)
    }, render: function (e) {
        var t = this, n = e.get("vname");
        n == t.appModel.get("version") && (n = "当前版");
        var r = _.template(this.template, {nick: $.HTMLEncode(e.get("nick")), content: $.HTMLEncode(e.get("content")), addtime: e.get("addtime"), version: n, comefrom: e.get("did").length > 6 ? lang.fromPhone : lang.fromWeb, rating: e.get("rating") / 5 * 100 + "%"});
        t.$el.append(r)
    }});
    View.AppCommentItemView = t
}(), define("AppCommentItemView", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $("body"), this.selfHref, this.iscroll
    }, template: "", templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/topic/topicAppView.html"), topicId: "", initTopicAppView: function (e) {
        var t = this;
        t.isUCBrowser = $.isUcBrowse();
        if (Boolean(MarketApp.viewWraper.mTopicsPage["topiclist" + e])) {
            t.$el.children().childrenRemove(), t.$el.html(MarketApp.viewWraper.mTopicsPage["topiclist" + e]), delete MarketApp.viewWraper.mTopicsPage["topiclist" + t.topicId], t.newIscroll();
            return
        }
        delete MarketApp.viewWraper.mTopicsPage["topiclist" + t.topicId], t.selfHref = Router.MarketRouter.getCurrentHref(), t.selfHref.indexOf("topic") == 0 && Boolean($("#topicFrame")[0]) && (MarketApp.viewWraper.mFunPage.topicFrame = $("#topicFrame")), t.topicId = e;
        var n = function () {
            t.template = sessionStorage.getItem(t.templateUrl), t.tryQueryAppItems()
        };
        MarketApp.loadTemplate.loadTemplate(n, t.templateUrl)
    }, tryQueryAppItems: function () {
        var e = this, t = e.topicId;
        if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
        e.$el.children().childrenRemove();
        var n = function () {
            var n = function () {
                topicModel = MarketApp.appCacheMng.allCategoryItemList["key" + t];
                if (_.isUndefined(topicModel) || _.isNull(topicModel))MarketApp.exception.RouterErrorTip($("body"), lang[404]); else {
                    e.render(topicModel);
                    var n = !1;
                    e.showApkList(t, n), MarketApp.viewWraper.showFooterView(), e.newIscroll()
                }
            }, r = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(Mark.MPageTaskMark.TASKMARK_CATEGORY_LIST_ROOT, null);
            MarketApp.serviceWraper.taskCategoryItemList(r, n, !1)
        };
        Manager.ViewHandler.requrieFile(Manager.ViewHandler.CATEGORY_ITEM_VIEW, n)
    }, newIscroll: function () {
        var e = this;
        Boolean(e.iscroll) && e.iscroll.destroy(), $(".myScrollBarV").remove(), e.iscroll = new iScroll("fixe_content", {bounce: !1, hideScrollbar: !0, scrollbarClass: "myScrollBar", onScrollStart: function () {
            e.isUCBrowser && $("#fixe_content").height(document.documentElement.clientHeight - 53), e.iscroll.refresh()
        }}), e.isUCBrowser && (MarketApp.orientation.topicAppIscroll = function () {
            $("#fixe_content").length > 0 && ($("#fixe_content").height(document.documentElement.clientHeight - 104), e.iscroll.refresh())
        })
    }, showApkList: function (e, t) {
        var n = this, r = n.$el.find(".topic_app_list"), i = n.selfHref;
        MarketApp.buildLoading(r, "LIST"), MarketApp.viewWraper.showTopicAppList(e, r, i, "topicList")
    }, render: function (e) {
        var t = this, n = _.template(this.template, {name: e.get("name"), recicon: e.get("recicon"), recdescription: e.get("recdescription"), imgCdnPreSite: MarketApp.imgCdnPreSite});
        t.$el.append(n), t.loadingImg(MarketApp.imgCdnPreSite + e.get("recicon"))
    }, loadingImg: function (e) {
        var t = this, n = new Image;
        n.onerror = function () {
        }, n.onload = function () {
            var n = t.$el.find('img[data_src="' + e + '"]');
            n.attr("src", e), n.removeClass("topiclist_app_default").addClass("topic_top_img")
        }, n.src = e
    }});
    View.TopicAppView = t
}(), define("TopicAppView", ["MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $("body"), this.iscroll
    }, template: "", templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/SearchPage.html"), keyword: "", events: {"touchend #searchAll": "showAllAppResult", "touchend #searchApp": "showAppResult", "touchend #searchGame": "showGameResult"}, showAllAppResult: function () {
        var e = this, t = $("#searchAll");
        t.is(".on") || ($(".search_app_type.on").removeClass("on"), t.addClass("on"), e.iscroll.scrollTo(0, 0, 0), $("#searchAppList,#appCount").hide(), $("#searchGameList,#gameCount").hide(), $("#searchAllList,#allAppCount").show())
    }, showAppResult: function () {
        var e = this, t = $("#searchApp");
        if (!t.is(".on")) {
            $(".search_app_type.on").removeClass("on"), t.addClass("on"), e.iscroll.scrollTo(0, 0, 0), $("#searchAllList,#allAppCount").hide(), $("#searchGameList,#gameCount").hide(), $("#searchAppList,#appCount").show();
            var n = e.$el.find("#searchAppList");
            n.children().length == 0 && e.showAppSearchResult(e.keyword, n)
        }
    }, showGameResult: function () {
        var e = this, t = $("#searchGame");
        if (!t.is(".on")) {
            $(".search_app_type.on").removeClass("on"), t.addClass("on"), e.iscroll.scrollTo(0, 0, 0), $("#searchAllList,#allAppCount").hide(), $("#searchAppList,#appCount").hide(), $("#searchGameList,#gameCount").show();
            var n = e.$el.find("#searchGameList");
            n.children().length == 0 && e.showGameSearchResult(e.keyword, n)
        }
    }, newIscroll: function () {
        var e = this;
        Boolean(e.iscroll) && e.iscroll.destroy(), $(".myScrollBarV").remove(), e.iscroll = new iScroll("searchPageBody", {bounce: !1, hideScrollbar: !0, scrollbarClass: "myScrollBar", onScrollStart: function () {
            e.iscroll.refresh()
        }})
    }, initSearchPage: function (e) {
        function r() {
            if (!Router.MarketRouter.isCurrentHref(t.selfHref))return;
            MarketApp.removeLoading(n), t.template = sessionStorage.getItem(t.templateUrl);
            var r = t.render();
            t.showSearchTopHeader(e), t.showSearchFrame(e), MarketApp.viewWraper.showFooterView(), t.newIscroll()
        }

        var t = this;
        if (MarketApp.marketHistory.isIndexHistory)return;
        t.keyword = e, t.$el.children().childrenRemove(), this.selfHref = Router.MarketRouter.getCurrentHref();
        var n = MarketApp.buildLoading(t.$el, "BIG");
        MarketApp.loadTemplate.loadTemplate(r, t.templateUrl)
    }, showSearchTopHeader: function (e) {
        MarketApp.viewWraper.showSearchTopHeader(e)
    }, showSearchFrame: function (e) {
        MarketApp.viewWraper.showSearchFrameView(e)
    }, showAppSearchResult: function (e, t) {
        MarketApp.viewWraper.showSearchAppItemView(decodeURIComponent(e), t, "appList", this.selfHref)
    }, showGameSearchResult: function (e, t) {
        MarketApp.viewWraper.showSearchGameItemView(decodeURIComponent(e), t, "gameList", this.selfHref)
    }, render: function () {
        var e = this.template;
        this.$el.html(e)
    }});
    View.SearchPage = t
}(), define("SearchPage", ["MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $("#searchContent"), this.selfHref = Router.MarketRouter.getCurrentHref()
    }, template: "", keyword: "", initSearchFrame: function (e) {
        var t = this, n = !1;
        t.keyword = e, t.$el.children().remove();
        var r = MarketApp.buildLoading(t.$el, "BIG");
        if (!Router.MarketRouter.isCurrentHref(t.selfHref))return;
        MarketApp.removeLoading(r), t.template = $("#searchFrameTpl").html();
        var i = t.render(e);
        $("#searchAppList").hide(), $("#searchGameList").hide(), $("#searchAllList").show();
        var s = t.$el.children().find("#searchAllList");
        t.showAllSearchResult(e, s, n)
    }, showAllSearchResult: function (e, t, n) {
        MarketApp.viewWraper.showSearchAllAppItemView(decodeURIComponent(e), t, "allList", this.selfHref)
    }, render: function (e) {
        var t = _.template(this.template, {searchTxt: decodeURIComponent(e)});
        this.$el.html(t)
    }});
    View.SearchFrame = t
}(), define("SearchFrame", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t) {
        this.$el = e, this.type = t, this.searchStr = ""
    }, template: "", events: {"click #hiMarketApp": "downMarketApp"}, downMarketApp: function () {
        if (!Boolean(MarketApp.downloadApp)) {
            MarketApp.downloadState = !0, MarketApp.downloadApp = !0;
            var e = MarketApp.taskMarkPool.getTaskMarkModelBySingle(Mark.MSingleTaskMark.TASKMARK_HIMARKET_INFO, null), t = function () {
                MarketApp.downloadManage.getHiMarketApp()
            };
            MarketApp.serviceWraper.getHimarketInfo(e, t)
        }
    }, initSearchNoneFrame: function (e) {
        var t = this;
        t.searchStr = e, t.$el.children().remove();
        var n = Router.MarketRouter.getCurrentHref(), r = MarketApp.buildLoading(t.$el, "BIG");
        if (!Router.MarketRouter.isCurrentHref(n))return;
        t.$el.show(), MarketApp.removeLoading(r), t.template = $("#searchNoneFrameTpl").html();
        var i = t.render(e, t.type);
        t.showGuessLikeAppView(n)
    }, showGuessLikeAppView: function (e) {
        var t = this, n = "", r = t.$el.find("#appOther" + t.type);
        t.type == 0 ? n = "allAppGuessLikeUl" : t.type == 1 ? n = "appGuessLikeUl" : t.type == 2 && (n = "gameGuessLikeUl"), MarketApp.viewWraper.showGuessLikeByRandomAppView(r, t.searchStr, t.type, e, n)
    }, render: function (e, t) {
        var n = "";
        t == 0 ? n = lang.search_all : t == 1 ? n = lang.search_app : n = lang.search_game;
        var r = _.template(this.template, {searchTxt: decodeURIComponent(e), gameOrApp: n, type: t});
        this.$el.html(r)
    }});
    View.SearchNoneFrame = t
}(), define("SearchNoneFrame", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $("#searchHeader")
    }, template: "", keyword: "", events: {"click .clear_txt_box": "clearSearchTxt", "click #btn_search": "searchAppList"}, searchAppList: function () {
        var e = $.trim($("#search_txt").val());
        _.isEmpty(e) || this.keyword != $.trim(e) && (window.location.href = "#search:" + encodeURIComponent(e))
    }, clearSearchTxt: function () {
        $("#search_txt").val("")
    }, initSearchTopHeader: function (e) {
        var t = this;
        t.keyword = e, t.template = $("#searchTopHeaderTpl").html();
        var n = t.render(e);
        MarketApp.viewWraper.showHotWordComplete(t.$el.find(".search_txt_box"), t.$el.find("#search_txt"))
    }, render: function (e) {
        var t = _.template(this.template, {searchTxt: decodeURIComponent(e)});
        this.$el.html(t)
    }});
    View.SearchTopHeader = t
}(), define("SearchTopHeader", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $("#guessLike")
    }, template: "", initGuessLikeFrame: function (e, t) {
        var n = this;
        n.template = $("#guessLikeTpl").html(), n.render(), n.showGuessLikeAppView(e, t)
    }, showGuessLikeAppView: function (e, t) {
        var n = this, r = n.$el.find("#appGuessView");
        MarketApp.viewWraper.showGuessLikeAppView(e, r, t)
    }, render: function () {
        var e = this, t = _.template(e.template, {});
        e.$el.html(t)
    }});
    View.GuessLikeFrame = t
}(), define("GuessLikeFrame", function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $("#authorOtherApp")
    }, template: "", initAuthorOtherAppFrame: function (e, t, n) {
        var r = this;
        r.template = $("#authorOtherAppTpl").html(), r.render(), r.showAuthorOtherAppView(e, t, n)
    }, showAuthorOtherAppView: function (e, t, n) {
        var r = this, i = r.$el.find("#appOtherView"), s = e + "_" + t;
        MarketApp.viewWraper.showAuthorOtherAppView(s, i, n)
    }, render: function () {
        var e = this, t = _.template(e.template, {});
        e.$el.html(t)
    }});
    View.AuthorOtherAppFrame = t
}(), define("AuthorOtherAppFrame", function () {
});
var Model;
Model || (Model = {}), function () {
    var t = Backbone.Model.extend({defaults: {id: null, name: null, dnum: null, icon: null}});
    Model.WeeklyModel = t
}(), define("WeeklyModel", function () {
});
var Collection;
Collection || (Collection = {}), function () {
    WeeklyCollection = Backbone.Collection.extend({model: Model.WeeklyModel, parse: function (e) {
        return e.data
    }}), Collection.WeeklyCollection = WeeklyCollection
}(), define("WeeklyCollection", ["WeeklyModel"], function () {
}), View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = e.$el, this.selfHref = Router.MarketRouter.getCurrentHref(), this.contentHeight = 0
    }, className: "weekly_Box", templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/weekly/WeeklyFrame.html"), newIscroll: function () {
        var e = this;
        Boolean(e.iscroll) && e.iscroll.destroy(), e.iscroll = new iScroll("weeklyFrame", {bounce: !1, hideScrollbar: !0, scrollbarClass: "myScrollBar", onScrollStart: function () {
            Boolean(e.lazyTimer) && clearTimeout(e.lazyTimer), e.isUCBrowser && $("#weeklyLiFrame").height(document.documentElement.clientHeight - 104), e.contentHeight != $("#weeklyHtml").height() && (e.contentHeight = $("#weeklyHtml").height(), e.iscroll.refresh())
        }, onScrollEnd: function () {
            e.lazyTimer = $(".weekly_item .weekly_img_box").imageLazyload({topHeight: 101, defaultCss: "weekly_default_img", iscroll: e.iscroll})
        }}), e.isUCBrowser && (MarketApp.orientation.weeklyIscroll = function () {
            $("#weeklyLiFrame").length > 0 && ($("#weeklyLiFrame").height(document.documentElement.clientHeight - 104), e.iscroll.refresh())
        })
    }, initWeeklyFrame: function () {
        var e = this;
        e.isUCBrowser = $.isUcBrowse();
        var t = MarketApp.buildLoading(e.$el, "BIG"), n = function () {
            MarketApp.removeLoading(t);
            if (!Router.MarketRouter.isCurrentHref(e.selfHref))return;
            e.template = sessionStorage.getItem(e.templateUrl), e.render(), e.showWeeklyItemView(), MarketApp.viewWraper.showFooterView(), e.newIscroll()
        };
        MarketApp.loadTemplate.loadTemplate(n, e.templateUrl)
    }, showWeeklyItemView: function () {
        var e = this, t = e.$el.find("#weeklyFrameBox"), n = e.selfHref;
        MarketApp.viewWraper.showWeeklyItemView(t, n)
    }, render: function () {
        var e = this, t = e.template;
        e.$el.append(t)
    }});
    View.WeeklyFrame = t
}(), define("WeeklyFrame", ["WeeklyCollection", "AppCommentCollection", "MarketApp"], function () {
}), View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t) {
        this.$el = e, this.selfHref = t
    }, events: {"click .weekly_right_data": "goIframe"}, goIframe: function (e) {
        MarketApp.marketHistory.historyState = !0, window.location.href = "#weekly/weeklydetail:" + $(e.currentTarget).attr("url")
    }, initWeeklyItem: function () {
        var e = this, t = MarketApp.buildLoading(e.$el, "BIG"), n = MarketApp.Partners.getTplUrl("template/himarketwap/ui/weekly/WeeklyFrame.html");
        e.template = $(sessionStorage.getItem(n)).find("#weeklyItemTpl").html();
        var r = function (n) {
            MarketApp.removeLoading(t), n.each(function (t) {
                e.render(t)
            }), $(".weekly_item .weekly_img_box").imageLazyload({topHeight: 101, delay: 1500, defaultCss: "weekly_default_img"})
        }, i = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(Mark.MPageTaskMark.TASKMARK_WEEKLY_LIST, null);
        i.get("taskMark").pageSize = 30, MarketApp.serviceWraper.getTaskWeeklyItemList(i, r, !1)
    }, render: function (e) {
        var t = this, n = new Date(parseInt(e.get("time")) * 1e3);
        n = n.getMonth() + 1 + "-" + n.getDate();
        var r = _.template(t.template, {weekdate: n, icon: MarketApp.imgCdnPreSite + e.get("icon"), name: $.HTMLEncode(e.get("name")), dnum: e.get("dnum"), id: e.get("id")});
        t.$el.append(r)
    }});
    View.WeeklyItemView = t
}(), define("WeeklyItemView", function () {
}), View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.$el = $("body"), this.selfHref = Router.MarketRouter.getCurrentHref(), this.startPX, this.startPY, this.endPX, this.endPY, this.isUCBrowser = !1, this.offsetY = 0, this.scrollY = 0
    }, templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/weekly/WeeklyDetail.html"), events: {}, stopMove: function () {
        return!1
    }, endScrollWeekly: function (e) {
        this.scrollY = this.offsetY
    }, startTouchWeekly: function (e) {
        var t = this;
        t.isUCBrowser && (t.startPX = e.touches[0].pageX, t.startPY = e.touches[0].pageY)
    }, scrollWeekly: function (e) {
        var t = this;
        if (t.isUCBrowser) {
            t.endPX = e.touches[0].pageX, t.endPY = e.touches[0].pageY;
            var n = t.endPX - t.startPX, r = t.endPY - t.startPY, i = Math.abs(n), s = Math.abs(r);
            return s > i && (r += t.scrollY, t.offsetY = r, t.offsetY > 0 ? (t.offsetY = 0, r = 0) : Math.abs(r) + (document.documentElement.clientHeight - 104) >= $("#weeklyDetailH5").height() && (r = document.documentElement.clientHeight - 104 - $("#weeklyDetailH5").height(), t.offsetY = r), $("#weeklyDetailH5").css({"-webkit-transition": "-webkit-transform 0ms", transition: "-webkit-transform 0ms", "-webkit-transform-origin": "0px 0px", "-webkit-transform": "translate(0, " + r + "px) translateZ(0px)"})), !1
        }
    }, newIscroll: function () {
        var e = this;
        Boolean(e.iscroll) && e.iscroll.destroy(), e.iscroll = new iScroll("weeklyDetailFrame", {bounce: !1, hideScrollbar: !0, scrollbarClass: "myScrollBar", onScrollStart: function () {
            e.iscroll.refresh()
        }})
    }, initWeeklyDetail: function (e) {
        MarketApp.marketHistory.historyState = !1;
        var t = this, n = function () {
            if (!Router.MarketRouter.isCurrentHref(t.selfHref))return;
            t.selfHref.indexOf("weekly") == 0 && Boolean($("#weeklyFrame")[0]) && (MarketApp.viewWraper.mFunPage.weeklyFrame = $("#weeklyFrame")), t.template = sessionStorage.getItem(t.templateUrl), t.$el.children().childrenRemove(), t.render(e)
        };
        MarketApp.loadTemplate.loadTemplate(n, t.templateUrl)
    }, render: function (e) {
        var t = this, n = Manager.TaskMarkHandler.getWeeklyDetailTaskMarkDataUrl(e);
        $.ajax({url: n, type: "POST", dataType: "json", error: function (e, t, n) {
            MarketApp.exception.RouterErrorTip($("body"), lang[404])
        }, success: function (e) {
            if (e.success) {
                var n = _.template(t.template, {name: e.data.name, url: e.data.browseurl});
                t.$el.append(n)
            } else MarketApp.exception.RouterErrorTip($("body"), lang[404])
        }})
    }});
    View.WeeklyDetail = t
}(), define("WeeklyDetail", ["MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e) {
        this.appModel = e.appModel, this.$el = e.$el, this.appId = e.appModel.get("id"), this.index = e.index, this.imgcount = 0, this.startPX = 0, this.starPY = 0, this.endPX = 0, this.endPY = 0, this.scrollTo = !1, this.scrolling = !1, this.hidePop = !1
    }, template: "", events: {"touchstart ul[id^=appPopImgUl]": "touchStarScroll", "touchmove ul[id^=appPopImgUl]": "forbiddenMove", "touchend ul[id^=appPopImgUl]": "toucheEndScroll", "click ul li": "hidePopBox", "touchstart ul li": "setHidePop"}, setHidePop: function () {
        this.hidePop = !0
    }, hidePopBox: function () {
        var e = this;
        if (!e.hidePop)return;
        this.hidePop = !1, $(".currentPop").hide(), e.$el.css({marginLeft: 0}), e.$el.find("li img").removeClass("orientation_img"), e.$el.find("li").removeClass("on"), $("#pop_page" + e.appModel.get("id")).find("span").removeClass("on"), delete MarketApp.orientation.appPopImgShow, window.history.back()
    }, touchStarScroll: function (e) {
        var t = this;
        if (t.scrolling)return;
        t.startPX = e.touches[0].pageX, t.startPY = e.touches[0].pageY
    }, forbiddenMove: function (e) {
        var t = this;
        if (t.scrolling)return!1;
        t.endPX = e.touches[0].pageX, t.endPY = e.touches[0].pageY;
        var n = Math.abs(t.startPX - t.endPX), r = Math.abs(t.startPY - t.endPY);
        return r > n ? t.scrollTo = !1 : t.scrollTo = !0, !1
    }, toucheEndScroll: function (e) {
        var t = this;
        if (t.scrolling)return;
        if (!t.scrollTo)return;
        var n = 0, r = document.documentElement.clientWidth, i = t.$el.find("li"), s = t.$el.find(".on"), o = $("#pop_page" + t.appModel.get("id")).find("span"), u = s.index();
        if (t.endPX < t.startPX) {
            if (t.endPX == 0)return;
            if (u + 1 >= t.imgcount)return;
            n -= (u + 1) * r, u += 1
        } else if (t.endPX > t.startPX) {
            if (u == 0)return;
            n -= (u - 1) * r, u -= 1
        }
        t.scrolling = !1, t.$el.animate({marginLeft: n}, 350, "ease-out", function () {
            o.removeClass("on"), s.removeClass("on"), i.eq(u).addClass("on"), o.eq(u).addClass("on"), t.scrolling = !1
        }), t.endPX = 0, t.startPX = 0
    }, initAppPopImg: function () {
        var e = this;
        if (e.$el.children().length == 0) {
            e.template = $("#popShowImgTpl").html();
            if (Boolean(e.appModel.get("appDetail").get("syimgs"))) {
                var t = e.appModel.get("appDetail").get("syimgs").split(",");
                for (var n in t)Boolean(t[n]) && (e.render(t[n]), $("#pop_page" + e.appModel.get("id")).append("<span></span>"), e.imgcount += 1);
                e.imgcount > 0 && e.showImg()
            }
        } else e.imgcount = e.$el.find("li").length, e.showImg()
    }, showImg: function () {
        var e = this;
        e.popImg = !0, $(".currentPop").hide();
        var t = "#" + Router.MarketRouter.getCurrentHref(), n = document.documentElement.clientWidth, r = document.documentElement.clientHeight, i = $("#appPopImgShow" + e.appId), s = $("#appPopImgUl" + e.appId), o = s.find("li"), u = o.find("img"), a = $("#pop_page" + e.appId).find("span"), f = $(window).scrollTop(), l = e.index, c = -(l * n), h = e.imgcount * n;
        o.eq(l).addClass("on"), a.eq(l).addClass("on"), i.css({height: r}), s.css({height: r, width: h}), o.css({height: r, width: n}), $.orientationPopImg(u, r, n), MarketApp.orientation.appPopImgShow = e.supportsOrientationChange, t.indexOf("Screen") == -1 && (t += "/Screen", window.location.href = t), i.addClass("currentPop"), i.show(), s.css({marginLeft: c})
    }, supportsOrientationChange: function () {
        var e = document.documentElement.clientWidth, t = document.documentElement.clientHeight, n = $(".currentPop");
        n.css({height: t});
        var r = n.find(".popimgul"), i = r.find("li"), s = r.find(".on"), o = i.find("img"), u = s.index(), a = -(u * e), f = i.length;
        $.orientationPopImg(o, t, e), r.css({height: t, width: f * e, marginLeft: a}), i.css({height: t, width: e})
    }, render: function (e) {
        var t = this, n = _.template(this.template, {imgurl: e, imgCdnPreSite: MarketApp.imgCdnPreSite, imgclass: "pop_img"});
        t.$el.append(n)
    }});
    View.AppPopImg = t
}(), define("AppPopImg", function () {
});
var Model;
Model || (Model = {}), function () {
    var t = Backbone.Model.extend({defaults: {mark: null, sequence: null, word: null}});
    Model.HotWordModel = t
}(), define("HotWordModel", function () {
});
var Collection;
Collection || (Collection = {}), function () {
    HotWordCollection = Backbone.Collection.extend({model: Model.HotWordModel, parse: function (e) {
        return e.data
    }}), Collection.HotWordCollection = HotWordCollection
}(), define("HotWordCollection", ["HotWordModel"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function (e, t) {
        this.$container = e, this.$searchBox = t, this.currentTaskMarkType, this.timerId, this.autoMove = !1, this.iscroll, this.elHeight = 0, this.clientHeight = MarketApp.clientHeight, this.iscrollBox = $(Zepto("<div/>")), this.searchtxt = "", this.spanClass = "num"
    }, tagName: "div", id: "AutoCompleteBox", template: "", events: {"touchstart .auto_item": "setScrollfun", "click .auto_item": "goSearch", "touchmove .auto_item": "setMovefun", "mouseleave #AutoCompleteBox": "hideAutoComplete"}, hideAutoComplete: function () {
        this.$el.hide(), delete MarketApp.orientation.autoCompleteResize
    }, setMovefun: function () {
        this.autoMove = !0
    }, setScrollfun: function () {
        this.autoMove = !1
    }, goSearch: function (e) {
        if (this.autoMove)return;
        this.$searchBox.val($(e.currentTarget).find(".result_txt").text()), this.$el.remove(), $("#search_txt").blur(), $("#btn_search").click(), delete MarketApp.orientation.autoCompleteResize
    }, templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/search/AutoComplete.html"), initAutoComplate: function () {
        var e = this;
        e.iscrollBox.addClass("scrollbg");
        var t = function () {
            e.template = sessionStorage.getItem(e.templateUrl), e.$searchBox.bind("focus.autocomplete", function () {
                e.tryQueryHotWordItems(e)
            }).bind("blur.autocomplete", function () {
                e.closeStorage(e)
            }).bind("input", function () {
                e.tryQueryHotWordItems(e)
            }).bind("keypress", function (e) {
                var t = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
                t == 13 && $("#btn_search").click()
            })
        };
        MarketApp.loadTemplate.loadTemplate(t, e.templateUrl)
    }, closeStorage: function (e) {
        e.$el.hide(), delete MarketApp.orientation.autoCompleteResize
    }, tryQueryHotWordItems: function (e) {
        Boolean(e.timerId) && clearTimeout(e.timerId), e.$el.show();
        var t = function () {
            e.searchtxt = $.trim(e.$searchBox.val()), _.isEmpty(e.searchtxt) ? e.spanClass = "num" : e.spanClass = "none";
            var t = Mark.MPageTaskMark.getHotWordList_VALUE(e.searchtxt), n = MarketApp.taskMarkPool.getTaskMarkTypeModelByPage(t, null), r = function () {
                var t = e.$searchBox.position().top + e.$searchBox.height() + 2, n = MarketApp.clientHeight - t - 20;
                n < e.elHeight ? n = parseInt(n / 35) * 35 : n = e.elHeight, $("#AutoCompleteBox").css({height: n}), Boolean(e.iscroll) && e.iscroll.refresh()
            };
            if (e.currentTaskMarkType == t)MarketApp.orientation.autoCompleteResize = r; else {
                e.currentTaskMarkType = t;
                var i = function (t) {
                    e.$el.html(""), e.iscrollBox.html(""), e.elHeight = 0, t.models.length > 8 ? e.elHeight = 280 : e.elHeight = 35 * t.models.length, t.each(function (t) {
                        e.render(t)
                    }), MarketApp.orientation.autoCompleteResize = r;
                    var n = e.$searchBox.position().top + e.$searchBox.height() + 2, i = MarketApp.clientHeight - n - 20;
                    i < e.elHeight ? i = parseInt(i / 35) * 35 : i = e.elHeight, e.$el.css({width: e.$searchBox.width(), top: n, height: i}), e.$el.append(e.iscrollBox), e.$container.append(e.$el), !Boolean(e.iscroll) && t.models.length > 0 ? e.iscroll = new iScroll("AutoCompleteBox", {hideScrollbar: !0}) : Boolean(e.iscroll) ? t.models.length > 0 ? e.iscroll.refresh() : (e.$el.remove(), $("#AutoCompleteBox").hide()) : t.models.length == 0 && (e.$el.remove(), $("#AutoCompleteBox").hide())
                };
                MarketApp.serviceWraper.getHotWordItemList(n, i, !1)
            }
        };
        e.timerId = setTimeout(t, 1e3)
    }, render: function (e) {
        var t = _.template(this.template, {word: this.highlight($.HTMLEncode(e.get("word")), this.searchtxt), index: this.iscrollBox.children().length + 1, classname: this.spanClass});
        this.iscrollBox.append(t)
    }, highlight: function (e, t) {
        if (_.isEmpty($.trim(t)))return e;
        t = t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1");
        var n = new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t + ")(?![^<>]*>)(?![^&;]+;)", "gi");
        return e.replace(n, "<strong>$1</strong>")
    }});
    View.AutoComplete = t
}(), define("AutoComplete", ["HotWordCollection", "MarketApp"], function () {
});
var View;
View || (View = {}), function () {
    var t = Backbone.View.extend({initialize: function () {
        this.$el = $(".footer"), this.starSearch = !1, this.menuTimerId
    }, template: "", templateUrl: MarketApp.Partners.getTplUrl("template/himarketwap/ui/footer.html"), initFooterView: function () {
        var e = this, t = function () {
            e.template = sessionStorage.getItem(e.templateUrl), e.render()
        };
        MarketApp.loadTemplate.loadTemplate(t, e.templateUrl)
    }, render: function () {
        var e = "";
        $.os.android && (e = "&nbsp;" + $.os.version);
        var t = _.template(this.template, {appVersion: e});
        this.$el.html(t), e == "" && ($(".sys").remove(), $(".icp").css({paddingLeft: 0, textAlign: "center"}))
    }});
    View.FooterView = t
}(), define("FooterView", ["MarketApp"], function () {
}), requirejs.onError = function (e) {
    if (e.requireType == "timeout") {
        var t = new Util.Exception;
        t.requireErrorTip("请求超时，请重试!!!")
    }
}, requirejs.config({waitSeconds: 0, urlArgs: Date.parse(new Date), paths: {ClassUtil: "util/ClassUtil", ATaskMark: "himarketwap/task/mark/ATaskMark", MSingleTaskMark: "himarketwap/task/mark/MSingleTaskMark", MPageTaskMark: "himarketwap/task/mark/MPageTaskMark", MTaskMarkPool: "himarketwap/task/MTaskMarkPool", HttpService: "himarketwap/service/HttpService", LocalService: "himarketwap/service/LocalService", ServiceWraper: "himarketwap/service/ServiceWraper", MarketHistory: "himarketwap/router/MarketHistory", BaseApkModel: "himarketwap/model/BaseApkModel", AppItemModel: "himarketwap/model/AppItemModel", AppDetailModel: "himarketwap/model/AppDetailModel", AppCommentModel: "himarketwap/model/AppCommentModel", AppCommentCollection: "himarketwap/collection/AppCommentCollection", AppCommentItemView: "himarketwap/view/ui/detail/AppCommentItemView", AppComment: "himarketwap/view/ui/detail/AppComment", AppPopImg: "himarketwap/view/ui/detail/AppPopImg", SearchAppListView: "himarketwap/view/ui/appview/list/SearchAppListView", MainAppListView: "himarketwap/view/ui/appview/list/MainAppListView", AppListView: "himarketwap/view/ui/appview/list/AppListView", AppGridView: "himarketwap/view/ui/appview/grid/AppGridView", AppListItemView: "himarketwap/view/ui/appview/list/AppListItemView", MainAppListItemView: "himarketwap/view/ui/appview/list/MainAppListItemView", AppGridItemView: "himarketwap/view/ui/appview/grid/AppGridItemView", AppItemCollection: "himarketwap/collection/AppItemCollection", CategoryItemModel: "himarketwap/model/CategoryItemModel", CategoryItemCollection: "himarketwap/collection/CategoryItemCollection", CategoryAppView: "himarketwap/view/ui/category/CategoryAppView", CategoryGameView: "himarketwap/view/ui/category/CategoryGameView", CategoryItemView: "himarketwap/view/ui/category/CategoryItemView", CategoryPopView: "himarketwap/view/ui/category/CategoryPopView", TopicAppView: "himarketwap/view/ui/topic/TopicAppView", TopicItemView: "himarketwap/view/ui/topic/TopicItemView", AppHeaderFrame: "himarketwap/view/ui/detail/AppHeaderFrame", AppIntroduceFrame: "himarketwap/view/ui/detail/AppIntroduceFrame", AppScreenhot: "himarketwap/view/ui/detail/AppScreenhot", WeeklyModel: "himarketwap/model/WeeklyModel", WeeklyCollection: "himarketwap/collection/WeeklyCollection", WeeklyItemView: "himarketwap/view/ui/weekly/WeeklyItemView", WeeklyFrame: "himarketwap/view/ui/weekly/WeeklyFrame", WeeklyDetail: "himarketwap/view/ui/weekly/WeeklyDetail", HotWordModel: "himarketwap/model/HotWordModel", HotWordCollection: "himarketwap/collection/HotWordCollection", AutoComplete: "himarketwap/view/ui/search/AutoComplete", MemCacheManager: "himarketwap/manager/MemCacheManager", TaskMarkTypeModel: "himarketwap/model/TaskMarkTypeModel", TaskMarkTypeCollection: "himarketwap/collection/TaskMarkTypeCollection", MarketApp: "himarketwap/MarketApp", ViewHandler: "himarketwap/manager/ViewHandler", ProtocolFactory: "himarketwap/manager/ProtocolFactory", TaskMarkHandler: "himarketwap/manager/TaskMarkHandler", MarketRouter: "himarketwap/router/MarketRouter", ViewWraper: "himarketwap/manager/ViewWraper", FunPage: "himarketwap/view/FunPage", FunHeader: "himarketwap/view/ui/FunHeader", MainPage: "himarketwap/view/MainPage", RankingFrame: "himarketwap/view/ui/ranking/RankingFrame", CategoryFrame: "himarketwap/view/ui/category/CategoryFrame", CategoryApkListPage: "himarketwap/view/ui/category/CategoryApkListPage", TopicFrame: "himarketwap/view/ui/topic/TopicFrame", AppDetailPage: "himarketwap/view/AppDetailPage", MainAppView: "himarketwap/view/ui/main/MainAppView", MainHeader: "himarketwap/view/ui/main/MainHeader", MainNav: "himarketwap/view/ui/main/MainNav", RankingAppView: "himarketwap/view/ui/ranking/RankingAppView", SearchPage: "himarketwap/view/SearchPage", SearchFrame: "himarketwap/view/ui/search/SearchFrame", SearchTopHeader: "himarketwap/view/ui/search/SearchTopHeader", FooterView: "himarketwap/view/ui/FooterView", GuessLikeFrame: "himarketwap/view/ui/detail/GuessLikeFrame", AuthorOtherAppFrame: "himarketwap/view/ui/detail/AuthorOtherAppFrame", SearchNoneFrame: "himarketwap/view/ui/search/SearchNoneFrame", HiMarketAppModel: "himarketwap/model/HiMarketAppModel"}, shim: {MSingleTaskMark: {deps: ["ATaskMark"]}, MPageTaskMark: {deps: ["ATaskMark"]}, MTaskMarkPool: {deps: ["MSingleTaskMark", "MPageTaskMark", "TaskMarkTypeCollection"]}, ServiceWraper: {deps: ["HttpService", "LocalService"]}, AppCommentCollection: {deps: ["AppCommentModel"]}, AppItemModel: {deps: ["BaseApkModel", "AppDetailModel", "AppCommentCollection"]}, AppItemCollection: {deps: ["AppItemModel"]}, SearchAppListView: {deps: ["AppListView"]}, MainAppListView: {deps: ["AppListView", "MainAppListItemView"]}, MainAppListItemView: {deps: ["AppListItemView"]}, AppListView: {deps: ["AppListItemView", "MarketApp"]}, AppListItemView: {deps: ["AppItemCollection"]}, AppGridView: {deps: ["AppGridItemView", "MarketApp"]}, AppGridItemView: {deps: ["AppItemCollection"]}, AppTopItemView: {deps: ["AppItemCollection"]}, GuessOtherApp: {deps: ["AppItemCollection"]}, AppHeaderFrame: {deps: ["AppItemModel"]}, CategoryItemCollection: {deps: ["CategoryItemModel"]}, CategoryItemView: {deps: ["CategoryItemCollection"]}, TopicItemView: {deps: ["CategoryItemCollection"]}, TaskMarkTypeCollection: {deps: ["TaskMarkTypeModel"]}, ViewWraper: {deps: ["ViewHandler", "ProtocolFactory", "TaskMarkHandler"]}, MarketRouter: {deps: ["ViewWraper"]}, MarketApp: {deps: ["MarketRouter", "ServiceWraper", "MTaskMarkPool", "MemCacheManager", "MarketHistory", "HiMarketAppModel"]}, FunPage: {deps: ["FunHeader", "MarketApp"]}, AppIntroduceFrame: {deps: ["AppScreenhot"]}, AppDetailPage: {deps: ["AppHeaderFrame", "AppIntroduceFrame", "MarketApp"]}, WeeklyCollection: {deps: ["WeeklyModel"]}, WeeklyFrame: {deps: ["WeeklyCollection", "AppCommentCollection", "MarketApp"]}, HotWordCollection: {deps: ["HotWordModel"]}, AutoComplete: {deps: ["HotWordCollection", "MarketApp"]}, MainPage: {deps: ["MarketApp"]}, RankingFrame: {deps: ["MarketApp"]}, CategoryPopView: {deps: ["MarketApp"]}, CategoryFrame: {deps: ["MarketApp"]}, TopicFrame: {deps: ["MarketApp"]}, CategoryApkListPage: {deps: ["MarketApp"]}, TopicAppView: {deps: ["MarketApp"]}, SearchPage: {deps: ["MarketApp"]}, WeeklyDetail: {deps: ["MarketApp"]}, FooterView: {deps: ["MarketApp"]}}}), define("util/RequireConfig", function () {
});