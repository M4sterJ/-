define(["jquery", "jquery-cookie"], function($){
	function main(){
		$().extend({
			size: function(){
				return this.elements.length;
			}
		})
		$(function(){
				//鼠标移入移出事件
						$("#nav").find("li").mouseenter(function(){
						$("#nav").find("li").attr("class", "");
						$("#nav").find(".menu").css("display", 'none').eq($(this).index()).css("display",'block').stop().animate({height:"230px"},300);
						
						$(this).attr("class", 'active');
						})
						$("nav").find("li").mouseleave(function(){
						$("#nav").find("li").attr("class", "");
						$("#nav").find(".menu").stop().animate({height:'-230px'},300);
						})
				//NAV滚动置顶
				var banOffTop=$(".bignav").offset().top;//获取到距离顶部的垂直距离
				        var scTop=0;//初始化垂直滚动的距离
				        $(document).scroll(function(){
				            scTop=$(this).scrollTop();//获取到滚动条拉动的距离
				          //  console.log(scTop);//查看滚动时，垂直方向上，滚动条滚动的距离
				            //console.log(banOffTop);
				            if(scTop>=banOffTop){
				            //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
				                $(".bignav").addClass("fixDiv");
				            }else{
				                $(".bignav").removeClass("fixDiv");
				            }

				        })
				        //放大镜
				         // 绑定鼠标移入原图窗口事件
        
        $('.pic').mouseover(function(e){
                $('.fd').css('display','block');
                $('.blocks').css('display','block');

        })
        //绑定鼠标在原图窗口移动的事件
        $('.pic').mousemove(function(e){

                // 获取鼠标当前的位置
                var x=e.pageX;
                var y=e.pageY;
                // 获取原图窗口距离文档的偏移位置
                var sX=$('.pic').offset().left;
                var sY=$('.pic').offset().top;

                // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
                var mx=x-sX;
                var my=y-sY;

                // 获取小框框的宽高
                var mw=$('.blocks').width()/2;
                var mh=$('.blocks').height()/2;

                // 鼠标移动后小框框的坐标
                $('.blocks').css({'left':mx-mw+'px','top':my-mh+'px'});

                // 获取小框框的偏移位置
                    var lw=$('.blocks').position().left;
                    var lh=$('.blocks').position().top;


                // 判断边界（小框框只能在原图窗口范围内移动）
                    var maxW=$('.pic').width()-$('.blocks').width()
                    var maxH=$('.pic').height()-$('.blocks').height()
                    // 左边界
                    if(lw<=0){$('.blocks').css('left','0px');}
                    // 右边界
                    if(lw>=maxW){
                        $('.blocks').css('left',maxW+'px');
                    }
                    // 上边界
                    if(lh<=0){$('.blocks').css('top','0px');}
                    // 下边界
                    if(lh>=maxH){
                        $('.blocks').css('top',maxH+'px');
                    }

                    // 获取小框框的偏移位置
                    var lw=$('.blocks').position().left;
                    var lh=$('.blocks').position().top;
                // 计算鼠标在小图里的位置*2.1计算大图移动的比例
                    var newX=lw*2.1;
                    var newY=lh*2.1;



                $('.fd img').css({left:-newX+'px',top:-newY+'px'});
        })
        //绑定鼠标离开原图窗口事件
        $('.pic').mouseout(function(){
                $('.fd').css('display','none');
                $('.blocks').css('display','none');
        })
				        //ajax加载数据
			$.ajax({
				url:'json/data.json',
				success:function(res){
					var html1 = '';
					for(var i = 0;i < res[1].length;i++){
						html1 += `<dl>
							<dt><a href=""><img src="${res[1][i].src}" alt=""></a></dt><br>
							<dd>${res[1][i].title}</dd>
						</dl>`
					}
					$('#menuleft-a').html(html1);
					var html2 = '';
					for(var i = 0;i < res[2].length;i++){
						html2 += `<li>${res[2][i].title}</li><br>`
					}
					$('#menuright-a ul').html(html2);
					var html3 = '';
					for(var i = 0;i < res[3].length;i++){
						html3 += `<dl>
							<dt><a href=""><img src="${res[3][i].src}" alt=""></a></dt><br>
							<dd>${res[3][i].title}</dd>
						</dl>`
					}
					$('#menuleft-b').html(html3);
					var html4 = '';
					for(var i = 0;i < res[4].length;i++){
						html4 += `<dl>
							<dt><a href=""><img src="${res[4][i].src}" alt=""></a></dt><br>
							<dd>${res[4][i].title}</dd>
						</dl>`
					}
					$('#menuleft-c').html(html4);
					var html5 = '';
					for(var i = 0;i < res[5].length;i++){
						html5 += `<li>${res[5][i]}</li><br>`
					}
					$('#menuright-c #ul1').html(html5);
					var html6 = '';
					for(var i = 0;i < res[6].length;i++){
						html6 += `<li>${res[6][i]}</li><br>`
					}
					$('#menuright-c #ul2').html(html6);
					var html7 = '';
					for(var i = 0;i < res[7].length;i++){
						html7 += `<dl>
							<dt><a href=""><img src="${res[7][i].src}" alt=""></a></dt><br>
							<dd>${res[7][i].title}</dd>
						</dl>`
					}
					$('#menuleft-d').html(html7);
					var html8 = '';
					for(var i = 0;i < res[8].length;i++){
						html8 += `<li>${res[8][i]}</li><br>`
					}
					$('#menuright-d').html(html8);
					var html9 = '';
					for(var i = 0;i < res[9].length;i++){
						html9 += `<dl>
							<dt><a href=""><img src="${res[9][i].src}" alt=""></a></dt><br>
							<dd>${res[9][i].title}</dd>
						</dl>`
					}
					$('#menuleft-e').html(html9);
					var html10 = '';
					for(var i = 0;i < res[10].length;i++){
						html10 += `<li>${res[10][i]}</li><br>`
					}
					$('#menuright-e').html(html10);
				}
			})
			//
			//
				$.ajax({
					url:'json/details.json',
					success:function(res){
							for(var j = 0;j < res[3].length;j++){
								$(`<img class="bigimg" src="${res[3][j]}" alt="">`).appendTo($(".detail .detail-left .pic"))
							}
							for(var j = 0;j < res[2].length;j++){
								$(`<img src="${res[2][j]}" alt="" style='display: absolute;'>`).appendTo($(".detail .fd"))
							}
						
						
													

					},
					error:function(msg){
						alert(msg);
					}
				})
				//fd
				


			$("#btn1").mouseover(function(){
				$("#btn1").css('background','black').css("color",'#fff');
			})
			$("#btn1").mouseout(function(){
				$("#btn1").css('background','#fff').css("color",'black');
			})
			$("#btn2").mouseover(function(){
				$("#btn2").css('background','#fff').css("color",'#2f0d9b');
			})
			$("#btn2").mouseout(function(){
				$("#btn2").css('background','#2f0d9b').css("color",'#fff');
			})
			//滚动小图片
			$(".icon-left").click(function(){
				var X = parseInt($(".minPic ul").css('left'));
				if (X == 0) {
						$(".icon-left ul").css("left",0);
					}else{
						$(".minPic ul").animate({"left":X+110},500);
					}				
			})
			
			$(".icon-right").click(function(){
				var X = parseInt($(".minPic ul").css('left'));
				if (X == -330) {
					$(".icon-right ul").css('left',-330);
				}else{
					$(".minPic ul").animate({"left":X-110},500);
				}
				
			})
			//给小图片添加点击事件
			$(".minPic .window").on("click", "a", function(){
				console.log($(this).parent().index());
				$(".minPic").find("a").attr("class", "");
				$(".detail .detail-left .pic .bigimg").css("display", 'none');
				$(".detail .detail-left .pic .bigimg").eq($(this).parent().index()).css("display", 'block');
				$(".detail .detail-left .fd img").css("display", 'none');
				$(".detail .detail-left .fd img").eq($(this).parent().index()).css("display", 'block');
				$(this).attr("class", 'active');
					
			})
		})
	}
	return{
		main:main
	}
})