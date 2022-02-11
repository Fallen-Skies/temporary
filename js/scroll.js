$(function() {
	var flag = true;
	var index = 0;
	var stepList = [];
	$(".Channel").hide();
	function bwidth(){
		var b_width=$("body").width();
		if (b_width>768) {
			$(".zhengping").addClass("z-height").removeClass("z-minheight");
		}else{
			$(".zhengping").addClass("z-minheight").removeClass("z-height");
		}
	}
	bwidth();
	
	function beijing() {
		var index = 0;
		$(".beijing>ul>li").eq(0).show().siblings().hide();
		$(".beijing>ul>li").eq(0).addClass("show").siblings().removeClass("show");
		var move = function() {
			index = index > 4 ? 0 : index;
			$(".beijing>ul>li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
			$(".beijing>ul>li").eq(index).addClass("show").siblings().removeClass("show");
			if(index > 1) {
				$(".beijing").css("z-index", "-3");
			}
		}
		var time = setInterval(function() {
			index++;
			move();
		}, 5000);
	}
	
	function typing() {
		var j = 0;
		var jj = 0;
		var str = "I am a web front-end development engineer。";
		var str1 = "我是一名web前端开发工程师";
		var jie = document.getElementById('jieshao');
		var jie1 = document.getElementById('jieshao1');
		
		function typewrite(){
			if(j <= str.length) {
				jie.innerHTML = str.slice(0, j++) + '_';
				// console.log(j);
				setTimeout(()=>{
					typewrite();
				}, 150);
			} else {
				jie.innerHTML = str; //结束打字,移除 _ 光标
				if(jj <= str1.length) {
					jie1.innerHTML = str1.slice(0, jj++) + '_';
					setTimeout(()=>{
						typewrite();
					}, 150);
				} else {
					jie1.innerHTML = str1; //结束打字,移除 _ 光标
				}
			}
			stepList.push('one');
		}
		if (stepList.indexOf('one') == -1) typewrite();
	}
	
	let Interval = setInterval(() =>{
		if (sessionStorage.getItem('step') == 1) {
			$(".Channel").show();
			$(".Countdown").hide();
			sessionStorage.removeItem('step');
			setTimeout(()=>{
				beijing();
				typing();
				document.addEventListener("mousewheel", scroll);
				$(".Channel").hide();
			},8000)
			clearInterval(Interval);
		}
	},2000);
	setTimeout(Interval,10000);
	
	function scroll(event) {
		var h = $("body").height();
		var w = $("body").width();
		//		event.preventDefault();
		if(w>768){
			if(flag) {
				flag = false;
				if(event.deltaY > 0) {
					index++;
					index = index > 5 ? 5 : index;
					$(".yuan").stop().animate({top:index * 30},600);
					$("html,body").stop().animate({scrollTop: index * h + "px"}, 600, function() {
						flag = true;
					})
					judge();
				} else {
					flag = false;
					index--;
					index = index < 0 ? 0 : index;
					$(".yuan").stop().animate({top:index * 30},600);
					$("html,body").stop().animate({scrollTop: index * h + "px"}, 600, function() {
						flag = true;
					})
					judge();
				}
			}
		}
	}
	
	function two() {
		var i = 0;
		var str = "20xx年毕业于河南农业职业学院" + "\n" + "热爱互联网开发，代码强迫症患者" + "\n" + "具有高效的自主学习能力和问题解析能力" + "\n" + "大老板快把我收到碗里吧";
		var li = document.getElementById('li');
		function dz() {
			if(i <= str.length) {
				li.innerHTML = str.slice(0, i++) + '_';
				setTimeout(()=>{
					dz();
				}, 150);
			} else {
				li.innerHTML = str; //结束打字,移除 _ 光标
			}
			stepList.push('two');
		}
		if (stepList.indexOf('two') == -1) dz();
	}
	
	function three() {
		setTimeout(function(){
			$(".t-zy").addClass("t-shang");
		},600);
		setTimeout(function(){
			var x=0;
			var move=null
		    move=function(){
		    	$(".jineng").eq(x).addClass("t-xuan");
		    }
		   	var time=setInterval(function(){
		   		move();
				x++;
			},660)
		},1100)
	}
	
	function four(){
		setTimeout(function(){
			var f=0;
			var move=null
		    move=function(){
		    	$(".zuopin>div").eq(f).css("opacity",1);
		    }
		   	var time=setInterval(function(){
		   		move();
				f++;
			},660)
		},300)
	}
	
	function six(){
		var s=0;
		var str = "前端开发是一个反馈周期较短的工作" + "\n" + "它的喜怒哀乐全部表现在端口" + "\n" + "正因为如此才会带给我不断的成就感和不满足的上进心" + "\n" + "带上我吧，一起去发现更大的世界";
		var li = document.getElementById('s-js');
		function dz() {
			if(s <= str.length) {
				li.innerHTML = str.slice(0, s++) + '_';
				setTimeout(()=>{
					dz();
				}, 150);
			} else {
				li.innerHTML = str; //结束打字,移除 _ 光标
			}
			stepList.push('six');
		}
		if (stepList.indexOf('six') == -1) setTimeout(dz(),1000);
	}
	
	function judge(){
		if(index == 1) {
			two();
		} else if(index == 2) {
			three();
		} else if(index == 3) {
			four();
		} else if(index == 4) {

		} else if(index == 5){
			six();
		}
		if(index > 0){
			$(".two>nav").css("visibility","visible");
			$(".lianxiwo").show();
		}else{
			$(".two>nav").css("visibility","hidden");
			$(".lianxiwo").hide();
		}
	}

	$(".shu>ul>li").click(function(){
            var h=$("body").height();
			index=$(this).index();
			$("html,body").stop().animate({scrollTop:index*h+"px"},600,function(){
			flag=true;
		}) 
		judge();
		$(".yuan").stop().animate({top:index * 30},600);
	})
	//手机端的判断
	// window.onscroll=function(){
	// 	var on=$(".one").offset().top;
	// 	var tw=$(".two").offset().top;
	// 	var thre=$(".three").offset().top;
	// 	var fou=$(".four").offset().top;
	// 	var fiv=$(".five").offset().top;
	// 	var si=$(".six").offset().top;
	// 	var body=$("html,body").scrollTop();
	// 	if (body>=on&&body<tw) {
	// 		one();
	// 	}else if (body>=tw&&body<thre){
	// 		two();
	// 	}else if (body>=thre&&body<fou) {
	// 		three();
	// 	}else if (body>=fou&&body<fiv) {
	// 		four();
	// 	}else if (body>=fiv&&body<si) {
			
	// 	}else if (body>=si) {
	// 		six();
	// 	}
 //    }
	$(".xiaye").click(function(){
		index++;
		var h=$("body").height();
		$('html,body').stop().animate({scrollTop:h*index+'px'},500);
		two();
	})
	$('body,html').animate({scrollTop:0},600);
	//当浏览器窗口发生变化的时候触发的事件
	window.onresize = function() {
		var h = $("body").height();
		$('html,body').stop().animate({scrollTop: h * index + 'px'},200);
		var b_width=$("body").width();
		if(b_width>768){
			$(".five>div>.jingli>div").css("width","50px");
		}else if(b_width<=768){
			$(".five>div>.jingli>div").css("width","30px");
		}
		bwidth();
	}
	$('.dingbu').click(function(){
		$('html,body').stop().animate({scrollTop:0},600);
		index=0;
		$(".yuan").stop().animate({top:index * 30},600);
		one();
	});
	// document.oncontextmenu = function(e){return false;}   
	// document.onkeydown=function(e){var e=window.event||e;if(e.keyCode==123){e.keyCode = 0;e.returnValue = false;return false;};};
})