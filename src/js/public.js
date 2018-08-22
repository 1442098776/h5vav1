$(function(){

	var h=$('.header>.navBtn').height()-$('.header .navBtn1').height(),
	    h1=h/2,
	    h3=$('.header').innerHeight(),//头部的高度
	    h4=$('.textHeader>.img').height()-$('.textHeader>.img>img').height();
	$('.textHeader>.img>img').css('marginTop',h4/2);
	$('.navBtn1>img').css('marginTop',h1);
	// 设置头部一个空div的高度
	$('.headerFill').css('height',h3);
	// 遮罩层的位置
	$('.popup').css('top',h3);
	// 导航的显隐
	$('.header>.navBtn,.popup').click(function(e) {
		if ($(this).hasClass('navBtn')) {
			$('.popup').stop().slideToggle();
		}
		if ($(this).hasClass('popup')) {
			if (e.target!=this) {
				return;
			}else{

				$(this).stop().slideUp('slow');
			}
		}
	});
	// 底部
	var index=$('.index').hasClass('index'),
	    gallery=$('.gallery').hasClass('gallery'),
	    about=$('.about').hasClass('about'),
	    customer=$('.customer').hasClass('customer'),
	    contact=$('.contact').hasClass('contact');
	if (index || gallery || about || customer || contact) {
		if (index) {
			footer(0);
		}
		if (gallery) {
			footer(1);
		}
		if (about) {
			footer(2);
		}
		if (customer) {
			footer(3);
		}
		if (contact) {
			footer(4);
		}
	}else{
		$('.footer>a').removeClass('active');
	}
	function footer(n){
		$('.footer>a').eq(n).addClass('active').siblings('a').removeClass('active');
		var att=$('.footer>a').eq(n).find('img').attr('src');
		var src1=att.substring(0,att.length-4);
		$('.footer>a').eq(n).find('img').attr('src',src1+'1.png');
	}
	
	
	
});