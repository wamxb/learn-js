/**
 * 2013-04-09<br>
 * 是所有类的入口，相当于main方法<br>
 * 全局唯一实例
 * 
 * @author LL
 * 
 */
//
// 建立命名空间
var MarketApp;
if (!MarketApp) {
	MarketApp = {};
};
(function namespace() {

	// 全局任务池
	var taskMarkPool;

	// 全局缓存管理类
	var appCacheMng;

	// 全局服务类包装类
	var serviceWraper;

	// 全局日志管理类
	var logHelper;

	// 全局异常处理类
	var exception;

	// 视图组装者
	var viewWraper;

	// 接口地址处理类
	var protocolFactory;

	taskMarkPool = new Mark.MTaskMarkPool();
	appCacheMng = new Manager.MemCacheManager();
	serviceWraper = new Service.ServiceWraper();
	log = new Util.LogHelper();
	exception = new Util.ExceptionHelper();
	protocolFactory = new Manager.ProtocolFactory();

	// 实例化
	MarketApp = new MainApp();

	/**
	 * 类构造函数
	 */
	function MainApp() {

		// 这个类的属性
		var attributeProps = {
			taskMarkPool : {
				value : taskMarkPool,
				writable : false,
				enumerable : true,
				configurable : false
			},

			appCacheMng : {
				value : appCacheMng,
				writable : false,
				enumerable : true,
				configurable : false
			},

			serviceWraper : {
				value : serviceWraper,
				writable : false,
				enumerable : true,
				configurable : false
			},
			routerWraper : {
				value : new Router.MarketRouter(),
				writeable : false,
				enumerable : true,
				configurable : false
			},
			log : {
				value : log,
				writeable : false,
				enumerable : true,
				configurable : false
			},
			exception : {
				value : exception,
				writeable : false,
				enumerable : true,
				configurable : false

			},
			protocolFactory : {
				value : protocolFactory,
				writeable : false,
				enumerable : true,
				configurable : false

			},
			viewWraper : {
				value : new Manager.ViewWraper(),
				writeable : false,
				enumerable : true,
				configurable : false

			},

			buildLoading : {
				value : function($container, loadtype) {
					return Util.Loading.buildLoading($container, loadtype);
				},
				writeable : false,
				enumerable : true,
				configurable : false
			},
			removeLoading : {
				value : function($container) {
					Util.Loading.removeLoading($container);
				},
				writeable : false,
				enumerable : true,
				configurable : false
			},

			// 已加载的模板html存放位置
			templateManage : {
				value : {},
				writable : false,
				enumerable : true,
				configurable : false
			},

			// 横竖屏转换事件集合
			orientation : {
				value : {},
				writable : false,
				enumerable : true,
				configurable : false

			},

			// 图片CDN的地址
			imgCdnPreSite : {
				value : "http://cdn.image.market.hiapk.com/",
				writable : false,
				enumerable : true,
				configurable : false

			},

			// new
			marketHistory : {
				value : new Router.MarketHistory(),
				writable : false,
				enumerable : true,
				configurable : false
			},
			// 下载类
			downloadManage : {
				value : new Util.DownloadManage(),
				writable : false,
				enumerable : true,
				configurable : false
			},
			downloadstate : {
				value : false,
				writable : true,
				enumerable : true,
				configurable : false
			},
			// 实际宽度，横竖屏切换用
			clientWidth : {
				value : document.documentElement.clientWidth,
				writable : true,
				enumerablef : true,
				configurable : false
			},
			// 实际高度，横竖屏切换用
			clientHeight : {
				value : document.documentElement.clientHeight,
				writable : true,
				enumerablef : true,
				configurable : false
			},
			// 安卓市场最新下载地址和信息 TODO
			hiMarketModel : {
				value : {},
				writable : true,
				enumerable : true,
				configurable : false
			},
			// loadtemplate
			loadTemplate : {
				value : new Util.LoadTemplate(),
				writable : false,
				enumerable : true,
				configurable : false

			},

			Toast : {
				value : new Util.Toast(),
				writable : false,
				enumerable : true,
				configurable : false
			},

			hiMarketHeader : {
				value : {
					srcCode : "80001",
					clientType : "81001"
				},
				wirtable : false,
				enumerable : true,
				configurable : false
			},
			isDefaultMarketHeader : {
				value : true,
				wirtable : false,
				enumerable : true,
				configurable : false
			},
			baseUrl : {
				value : "",
				writable : true,
				enumerable : true,
				configurable : false
			},
			webSitePath : {
				value : "",
				writable : true,
				enumerable : true,
				configurable : false
			},
			tplUrls : {
				value : {},
				writable : true,
				enumerable : true,
				configurable : false
			},
			Partners : {
				value : new Util.Partners(),
				writable : false,
				enumerable : true,
				configurable : false
			}			
		};
		// 添加静态属性
		Object.defineProperties(this, attributeProps);

	};

}());