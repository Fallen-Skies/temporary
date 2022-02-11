$(function(){
	var wo=["关于我","-ABOUT ME-"];
	$(".gyw>div>h1").append(wo[0])
	$(".gyw>div>p").append(wo[1])
	var jineng=["前端技能","-WEB SKILL-"];
	$(".qdjn>div>h1").append(jineng[0]);
	$(".qdjn>div>p").append(jineng[1]);
	var html=[
	{'html':'深刻理解Web标准'},
	{'html':'熟练运用html标签'},
	{'html':'掌握html5如canvas,localStorage等新特性'}
	]
	var htm='';
	for (var i=0;i<html.length;i++) {
		htm+="<li>"+html[i].html+"</li>";
	}
	$(".html").html(htm);
	
	var csss=[
	{'csss':'熟练运用css及css3新属性'},
	{'csss':'注重浏览器兼容性，熟悉常见的css hack（兼容至IE8）'},
	{'csss':'掌握@keyframes制作动画效果'}
	]
	var cs='';
	for (var i=0;i<csss.length;i++) {
		cs+="<li>"+csss[i].csss+"</li>";
	}
	$(".css").html(cs);
	
	var javascript=[
	{"javascript":"掌握原生JS的编程"},
	{"javascript":"注重JavaScript性能优化"},
	{"javascript":"熟练运用jQuery.js"}
	]
	var javas='';
	for (var i=0;i<javascript.length;i++) {
		javas+="<li>"+javascript[i].javascript+"</li>";
	}
	$(".js").html(javas);
	
	var ajax=[
	{"ajax":"脱离jqery自己封装ajax函数"},
	{"ajax":"掌握瀑布流和留言板功能的实现"},
	{"ajax":"掌握ajax跨域解决方案JSONP"}
	]
    var aj='';
    for (var i=0;i<ajax.length;i++) {
    	aj+="<li>"+ajax[i].ajax+"</li>";
    }
	$(".ajax").html(aj);
	
	var bootstrap=[
	{"bootstrap":"熟悉Bootstrap样式和组件的书写"},
	{"bootstrap":"熟练运用其处理响应式页面"},
	{"bootstrap":"明白媒体查询的原理并灵活运用"}
	]
	var boot='';
	for (var i=0;i<bootstrap.length;i++) {
		boot+="<li>"+bootstrap[i].bootstrap+"</li>";
	}
	$(".bootstrap").html(boot);
	
	var vue=[
	{"vue":"熟悉Vue.js处理移动端的模块开发"},
	{"vue":"模块组件化"},
	{"vue":"掌握如vue-cli,vue-router,webpack,git等的使用"}
	]
	var vj='';
	for (var i=0;i<vue.length;i++) {
		vj+="<li>"+vue[i].vue+"</li>";
	}
	$(".vue").html(vj);
	var zuopin=["个人作品","-DEMO-"];
	$(".four>div>.grzp>div>h1").append(zuopin[0])
	$(".four>div>.grzp>div>p").append(zuopin[1])
	var jingyan=["工作经验","-EXPERIENCE-"];
	$(".five>div>.gzjy>div>h1").append(jingyan[0])
	$(".five>div>.gzjy>div>p").append(jingyan[1])
	var jy1=["1.承担WEB前端核心模块的设计、开发工作，对代码质量及进度负责","2.对公司的产品提出用户界面和用户体验方面的合理建议","3.与UI设计师和后台程序配合，高效高质地完成页面的实现工作","4.实现网站页面特效、JS效果，维护及优化前端页面性能","5.解决主流浏览器的兼容性问题，页面制作符合seo规范"];
	var j1ul="";
	for (var i=0;i<jy1.length;i++) {
		j1ul+="<li>"+jy1[i]+"</li>";
	}
	$(".jy-1>div>ul").html(j1ul);
	var jy2=["1.负责公司web端和移动端应用的前端开发","2.参与讨论、定义整体产品体验和技术方案","3.根据UI提供的设计稿，高效、高质地完成代码编写，还原设计稿，并做好业务逻辑","4.负责相关产品的需求以及前端程序的实现，提供合理的前端架构","5.根据需求不断修改完善项目功能，参与核心代码的编写","6.负责公司现有项目和新项目的前端修改调试和开发工作","7.与后端开发团队紧密配合，确保代码有效对接，优化网站前端性能"];
	var j2ul="";
	for (var i=0;i<jy2.length;i++) {
		j2ul+="<li>"+jy2[i]+"</li>";
	}
	$(".jy-2>div>ul").html(j2ul);
	var lianxiwo=["联系我","-CONTACT ME-"];
	$(".six>div>.lxw>div>h1").append(lianxiwo[0])
	$(".six>div>.lxw>div>p").append(lianxiwo[1])
})
