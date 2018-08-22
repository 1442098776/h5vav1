var time;
$(function(){
	   	// 点击视频图片全屏播放视频
	
	//点击视频进入全屏播放
	$('.videoPlay').click(function(){
		$('.videoPopup').trigger('play');
		fun();
		showTime();
		
		// 判断退出全屏时视频隐藏
	});

    function showTime(){
    	time=setInterval(function(){
    		var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
    		if (isFull) {
    			return;    		   
    		}else{
    			$('.videoPopup').trigger('pause');
    		}
    	},100)
    }
});
function fun(){
	 var elem = document.getElementById('video');
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen();
		}

		elem.addEventListener('webkitfullscreenchange', function() {
		    var el = elem.webkitFullscreenElement; //获取全屏元素
		    if(el) {
		        document.addEventListener("plusready",plus,false);
		    } else {
		        document.addEventListener("plusready",plus1,false);
		    }
		});

		// 监听的事件与Android平台有很大区别
		elem.addEventListener('webkitbeginfullscreen', function() {
		    plus.screen.lockOrientation('landscape'); //锁死屏幕方向为横屏
		});
		elem.addEventListener('webkitendfullscreen', function() {
		//  plus.screen.unlockOrientation(); //解除屏幕方向的锁定，但是不一定是竖屏；
		    plus.screen.lockOrientation('portrait'); //锁死屏幕方向为竖屏
		});
}
function plus(){
	plus.screen.lockOrientation('landscape'); //锁死屏幕方向为横屏
}
function plus1(){
	plus.screen.unlockOrientation(); //解除屏幕方向的锁定
}