//使用require.config()方法，我们可以对模块的加载行为进行自定义。
//require.config()就写在主模块（main.js）的头部。
//require.config用来配置一些参数，它将影响到requirejs库的一些行为。
//参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。
requirejs.config({
	
	//所有模块的查找根路径。模块的加载路径（不要加.js后缀，因为默认就是加载js，加了会报错）
    //路径是相对于上面的baseUrl
	baseUrl: './js',
	
    //paths ：path映射那些不直接放置于baseUrl下的模块名。设置path时起始位置是相对于baseUrl的，
    paths: {
        jquery: './lib/jquery-1.11.0.min',
        DD_belatedPNG:'./lib/DD_belatedPNG_0.0.8a',
        tween:'.lib/tween'
    }
    
    //shim: 为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置
    //还有一个shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义
    //（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。
    //jQuery的插件可以这样定义：
    /*shim: {
　　　　'jquery.scroll': {
　　　　　　deps: ['jquery'], // 依赖项
　　　　　　exports: 'jQuery.fn.scroll'//（输出的变量名）,表明这个模块外部调用时的名称;
　　　　}
　　}*/
    
});

//require()函数接受两个参数。
//第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
//第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
//加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。

//require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；
//它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。
requirejs(['jquery'],function($){
	$('body').css('background-color','red')
});