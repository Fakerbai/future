$(function(){
    var imag_box=$('.image');
    var banner=$('.banner-left');
    var b=$('.image-list');
    var t=setInterval(move,3000);
    var i=0;
    function move(){
        var x=$('.image-list').width();
    	i++;
    	if (i==b.length) {
    		i=0;
    	}
    	imag_box.animate({left:x*-i},500)
    }
    var btn=$('.banner-btn');
    btn.eq(0).addClass('hot');
    btn.click(function(){
        clearInterval(t);
        i=b_btn.index(this);
        var x=$('.image-list').width();
        btn.removeClass('hot').eq(i).addClass('hot');
        imag_box.animate({left:x*-i},500,function(){
            var t=setInterval(move,3000);
        });
    })
    var left=$('.btn-left');
    var right=$('.btn-right');
    right.click(function(){
        var x=$('.image-list').width();
        clearInterval(t)
            i++
            if (i==b.length) {
                i=0;
            };
            imag_box.animate({left:x*-i},500)
            btn.removeClass('hot').eq(i).addClass('hot');
            t=setInterval(move,3000)
    })
    left.click(function(){
        var x=$('.image-list').width();
        clearInterval(t)
            i--
            if (i==-1) {
                i=b.length-1;
            };
            imag_box.animate({left:x*-i},500)
            btn.removeClass('hot').eq(i).addClass('hot');
            t=setInterval(move,3000)
    })
    //返回顶部
    var top=$('.back-top');
    top.click(function(){
        $('html,body').animate({scrollTop:0},1000)
        return false;
    })
})