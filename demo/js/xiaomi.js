
/*购物车*/
function car(){
	$("#car").bind({
		mouseenter:function(){
			$("#carShop").slideDown("fast"),
			$("#car span a").css("color","#f00"),
			$("#car").css("background-color","#fff")
		},
		mouseleave:function(){
			$("#carShop").slideUp("fast"),
			$("#car a").css("color","#b0b0b0"),
			$("#car").css("background-color","#424242")
		}
	})
}

//横向菜单栏

function topMenu(){
	var _display=true;
	var _container=document.getElementById("container");
	$("#logo .top_menu .first").each(function(){
		$(this).mouseenter(function(){
			$(this).find(".container").show();
		})
		$(this).mouseleave(function(){
			$(this).find(".container").slideUp("fast");
		})
	})
	
}

//搜索框
function search(){
	$("#btn").click(function(){
		$("#search .mix").css("display","none");
		$("#search").children().not("a").css({"border":"none","border":"1px solid #ff6700"});
		$("#search").children().find("span").css({"border":"none","border":"1px solid #ff6700","border-left":"none"});
	});
		$("#btn").focusout(function(){
		$("#search .mix").css("display","block");
		$("#search").children().not("a").css({"border":"1px solid #ddd"});
		$("#search").children().find("span").css({"border":"1px solid #ddd","border-left":"none"});
	})
}

//左侧菜单栏
function leftMenu(){
	$("#left_menu .left_main .left_main_li").each(function(){
		$(this).mouseenter(function(){
			$(this).css("background","#ff6700 url(images/2000.png) no-repeat 200px center");
			$(this).find(".div_main").css("display","block");
		})
		$(this).mouseleave(function(){
			$(this).css("background","#525b58 url(images/1000.png) no-repeat 200px center");
			$(this).find(".div_main").css("display","none");
		})
	})
}
//banner轮播
function bannerMove(){
	var length=0; 
	var currentIndex = 0 ;
	var interval=null;
	var t=3000;
	var hasStarted = false; //是否已经开始轮播 
	length=$(".img1").length; //图片的长度
	//将除了第一张图片隐藏
	$(".img1:not(:first)").hide(); 
	$(".point_col:first").addClass("point_col1"); 
	//隐藏向前、向后翻按钮 
	$(".page").hide();
	//鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
	$(".img1, .left, .right").hover(function() { 
		stop(); 
		$(".page").show();
	}, function(){ 
		$(".page").hide();
		start(); 
	}); 

	$(".point_col").hover(function() { 
		stop(); 
		var preIndex = $(".point_col").filter(".point_col1").index(); 
		currentIndex = $(this).index(); 
		play(preIndex, currentIndex); 
	}, function() { 
		start(); 
	}); 

	$(".left").unbind("click"); 
	$(".left").bind("click", function() { 
		pre(); 
	}); 
	$(".right").unbind("click"); 
	$(".right").bind("click", function() { 
		next(); 
	}); 
	/** 
	* 向前翻页 
	*/
	function pre() { 
		var preIndex = currentIndex; 
		currentIndex = (--currentIndex + length) % length; 
		play(preIndex, currentIndex);
	} 
	/** 
	* 向后翻页 
	*/
	function next() { 
		var preIndex = currentIndex; 
		currentIndex = ++currentIndex % length; 
		play(preIndex, currentIndex);
	} 
	/** 
	* 从preIndex页翻到currentIndex页 
	* preIndex 整数，翻页的起始页 
	* currentIndex 整数，翻到的那页 
	*/
	function play(preIndex, currentIndex) { 
	   $(".img1").eq(preIndex).fadeOut(500).parent().children().eq(currentIndex).fadeIn(1000); 
	   $(".point_col").removeClass("point_col1"); 
	   $(".point_col").eq(currentIndex).addClass("point_col1"); 
	} 
	/** 
	* 开始轮播 
	*/
	function start() { 
		if(!hasStarted) { 
		hasStarted = true; 
		interval = setInterval(next,t); 
		} 
	} 
	/** 
	* 停止轮播 
	*/
	function stop() { 
		clearInterval(interval); 
		hasStarted = false; 
	} 
	//开始轮播 
	start(); 
}

//小米明星单品
function star(){
	function loop(){
		$(".star_page").animate({left:"-1227px"},500).delay(5000);
		$(".star_page").animate({left:"0px"},500,loop).delay(5000);
	}
	loop();
	$(".star_top .span_right").click(function(){
		$(".star_page").stop();
		$(".star_page").animate({left:"-1227px"},500);
		$(".span_right").css("color","#ddd");
		$(".span_left").css("color","#000");
	})
	$(".star_top .span_left").click(function(){
		$(".star_page").stop();
		$(".star_page").animate({left:"0"},500);
		$(".span_right").css("color","#000");
		$(".span_left").css("color","#e0e0e0");
	})
	// $(".star_top").find("span").bind({
	// 	mouseenter:function(){$(this).addClass("color")},
	// 	mouseleave:function(){$(this).removeClass("color");}
	// })
}
//搭配match的选项卡部分
function match(){
	$(".match_top .match_right .match_nav").each(function(){
		$(this).mouseenter(function(){
			$(this).find(".nav_box").addClass("nav_box1").parent().siblings().children().removeClass("nav_box1");
		})
	})
}
//为您推荐 recommonforyou
function recom(){
	$(".recom_page1").each(function(n){
		function loop(){
			$(".recom_box").animate({"left":-1227*n},2000,function(){
				loop()
			}).delay(2000);	
			// $(".recom_box").animate({"left":0},0,function(){
			// 	loop()
			// }).delay(2000);
		}
		loop();
		$("#recom_left").click(function(){
			$(".recom_box").stop(),
			$(".recom_box").animate({"left":-1227*n})
		})
		$("#recom_right").click(function(){
			$(".recom_box").stop(),
			$(".recom_box").animate({"right":1227*n})
		});
	})
}




$(document).ready(function(){
	car();
	topMenu();
	leftMenu();
	search();
	bannerMove();
	star();
	match();
	recom();
})