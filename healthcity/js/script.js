$(function(){
	//飘浮的云彩
	cloud('.cloudBox');

	//菜单
	$('.menuList li').not('.cur').hover(function(){
		$($(this).find('span').fadeIn(300));
	},function(){$($(this).find('span').fadeOut(300))})

	$('.smallPicBox li a').hover(function(){
		$('.smallPicBox li a').find('img').removeClass('cur');
		$(this).find('img').addClass('cur');
		$('.bigPicBox').find('img').attr('src', $(this).find('img').attr('src'));
		$('.bigPicBox').find(".detailTit").html($(this).attr('description'));
	},function(){
	})

	//联系我们hover淡入淡出效果
	$('.connectUs').hover(function(){
		$(this).fadeOut(100);
		$('.conectDetail').fadeIn(400);
	},function(){
		
	})
	$('.conectDetail').hover(function(){
	},function(){
		$(this).fadeOut(100);
		$('.connectUs').fadeIn(400);
	})

	//分页的hover
	$('.pages').find('span').hover(function(){
		$(this).toggleClass('cur');
	})
	$('.pages').find('a').not('.cur').hover(function(){
		$(this).toggleClass('on');
	})

	//影像档案里鼠标hover图片
	$('.detail').hover(function(){
		$(this).find('.comVote').slideDown(100).show();
	},function(){
		$(this).find('.comVote').slideUp(100).hide();
	})
	$('.serachResult li').hover(function(){
		$(this).find('img').addClass('cur');
	},function(){
		$(this).find('img').removeClass('cur');
	})

	//点击分类查找
	$('.searchTypeList dl dd').click(function(){
		$(this).parents('dl').find('dd').removeClass('cur');
		$(this).addClass('cur');
	})

	//单个下载、多个下载
	$('input[name="file"]').change(function(){
		var len = $('input[name="file"]:checked').length;
		$('.selected_num').text(len);
	})

	//弹出登录框
	$('#submitBtn,.itcodeBtn').click(function(){
		$('.greyBox').removeClass('dsn');
	})

	//关闭登录框
	$('.close').click(function(){
		$('.greyBox').addClass('dsn');
	})

	//鼠标移到相关列表
	$('.relativeVideo li').click(function(){
		$('.relativeVideo li').removeClass('cur');
		$(this).addClass('cur');
	})

	//inuput\textarea焦点清空事件
	focusBlur('input[name="itcode"]','ITCODE');
	focusBlur('input[name="password"]','PASSWORD');
	focusBlur(".commentWrap","请在此输入评论文字");
	focusBlur(".txt","亲爱的用户，您的意见对我们非常重要，是我们前进的动力（500字以内）。");

	//表格hover事件
	$('.tab_01 tr').hover(function(){
		$(this).addClass('cur');
		$(this).find('.mark').show();
	},function(){
		$(this).removeClass('cur');
		$(this).find('.mark').hide();
	})

	//删除一行表格
	$('.del').click(function(){
		$(this).parents('tr').remove();
	})

	//全选
	$('input[name="selAll"]').change(function(){
		if($(this).prop('checked')){
			$('input[name="file"]').prop('checked',true);
			
		}else{
			$('input[name="file"]').prop('checked',false);
		}
		var len = $('input[name="file"]:checked').length;
		$('.selected_num').text(len);
	})

	//左侧菜单hover
	$('.sideList li').not('.cur').hover(function(){
		$(this).addClass('cur');
	},function(){
		$(this).removeClass('cur');
	})
	
	//解决ie不兼容placeholder
	jQuery('[placeholder]').focus(function() {
	  var input = jQuery(this);
	  if (input.val() == input.attr('placeholder')) {
	    input.val('');
	    input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = jQuery(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
	    input.addClass('placeholder');
	    input.val(input.attr('placeholder'));
	  }
	}).blur().parents('form').submit(function() {
	  jQuery(this).find('[placeholder]').each(function() {
	    var input = jQuery(this);
	    if (input.val() == input.attr('placeholder')) {
	      input.val('');
	    }
	  })
	});
});

//白云移动效果
function cloud(obj){
	var w = $(window).width();
	$(obj).css({'margin-left':-4*w+'px'});
	setInterval(function(){
		$(obj).animate({'margin-left':'+=2px'},10,function(){
			if(parseInt($(obj).css('margin-left'))>=0){
				$(obj).css('margin-left',-4*w+'px');
			}
		})
	},100);
}

//url参数获取
function getUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg);  
	if (r!=null) return (r[2]); return null; 
}

//input\textarea焦点清空
function focusBlur(obj,txt){
	$(obj).focus(function(){
		if($(obj).val()==txt){
			$(obj).val("");
		}
	})
	$(obj).blur(function(){
		if($(obj).val()==""){
			$(obj).val(txt);
		}
	})
}

//字数限制
function checkLen(obj){ 
    var maxChars = 500;//最多字符数 
    if (obj.value.length > maxChars) {
	    obj.value = obj.value.substring(0,maxChars);
		
		return false;
	}
    var curr = maxChars - obj.value.length;
}
