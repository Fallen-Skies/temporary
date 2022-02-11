$(function() {
	// var jja=setInterval(function(){
	// 		var jia=$(".jia").text();
	// 		var jj=parseInt(jia);
	// 		jj++;
	// 		$(".jia").html(jj);
	// 		setTimeout(function(){
	// 			clearInterval(jja);
	// 			$(".jia").html(100)
	// 		},6000)
	// 	},60);
	// function kaichang(){
	// 	$(".kc>.kc-x").stop().animate({width: "100%"}, 6000);
	// 	var x_width=$(".kc>.kc-x").width();
	// 	setTimeout(function() {
	// 		$(".kc>.kc-x").remove();
	// 		$(".kc>.kc-t").stop().animate({top: "-50%"}, 1000);
	// 		$(".kc>.kc-b").stop().animate({bottom: "-50%"}, 1000);
	// 		setTimeout(function() {$(".kc").remove();}, 1000)
	// 	}, 6100)
	// }
	// kaichang();
	$(".nav-img").hover(function() {
		document.getElementById("img").src = "img/icomaill.png";
		$(this).children("img").css("box-shadow", "0 0 20px skyblue, 0 0 20px #fff");
	}, function() {
		document.getElementById("img").src = "img/icoBig.png";
		$(this).children("img").css("box-shadow", " 0 0 20px #fff, 0 0 20px #FA709A")
	})
	$(".two-2").hover(function() {
		$(".two-2>p").html("F2E");
		$(".two-2>div").html("个人简历");
	}, function() {
		$(".two-2>p").html("resume");
		$(".two-2>div").html("前端工程师");
	})
	/*音乐*/
	$(".b-1").hide();
	$(".i-1").hide();
	$(".music>i").click(function() {
		$(this).hide().siblings('i').show();
		$(".music>b").toggle();
	})
	$(".music>b").click(function() {
		$(this).hide().siblings('b').show();
		$(".music>i").toggle();
	})
	$(".two-3>ul>li").hover(function() {
		$(this).children("a").children("span").stop().animate({
			"margin-top": "-55px"
		}, 600);
	}, function() {
		$(this).children("a").children("span").stop().animate({
			"margin-top": "0px"
		}, 600);
	})
	$(".five>div>.jingli>div>span").click(function(){
		$(this).parent("div").addClass("f-width").siblings("div").removeClass("f-width");
		$(this).siblings("div").css("opacity",1);
	})
	//字体变色
	function ztbs(){
		span1 = document.getElementById('span1');
		span2 = document.getElementById('span2');
		span3 = document.getElementById('span3');
		span4 = document.getElementById('span4');
		setInterval(function() {
			span1.style.color = "RGB(" + Math.floor(Math.random() * 256) + " , " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
			span2.style.color = "RGB(" + Math.floor(Math.random() * 256) + " , " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
			span3.style.color = "RGB(" + Math.floor(Math.random() * 256) + " , " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
			span4.style.color = "RGB(" + Math.floor(Math.random() * 256) + " , " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
			
			span1.style.fontSize = (Math.floor(Math.random() * 30) + 100) + "%";
			span2.style.fontSize = (Math.floor(Math.random() * 30) + 100) + "%";
			span3.style.fontSize = (Math.floor(Math.random() * 30) + 100) + "%";
			span4.style.fontSize = (Math.floor(Math.random() * 30) + 100) + "%";
		}, 1200);
	}
	ztbs();
	$(".lianxiwo").hover(function(){
		$(this).stop().animate({"left":"200px"},500);
	},function(){
		$(this).stop().animate({"left":"0px"},500);
	})
})