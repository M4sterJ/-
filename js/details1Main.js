console.log("加载成功");

/*
	管理我们index.html引入的所有模块
*/
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		//抛物线函数，不遵从AMD
		//"parabola": "parabola",
		"index": "details1",
		//"slide": "slide"
	},
	//设置模块之间的依赖关系
	shim: {
		"jquery-cookie": ["jquery"],
		/*
			定义不遵从AMD规范的js文件
		*/
		//"parabola": {
			//exports: "_"
		//}
	}
})


require(['index'], function(details1){
	details1.main();
})