define(["jquery", "jquery-cookie"], function($){
	function main(){
		$().extend({
			size: function(){
				return this.elements.length;
			}
		})


		$(function(){
			//按钮
			var oBtns = $("#play").find("ol").find("li");
			var oUl = $("#play").find("ul");
			var aLi = oUl.find("li");

			//导航滚动
			var iNow = 0; //记录当前是第几张
			var timer = null; //设计记录定时器的标识


			timer = setInterval(timerInner, 3000);

			function timerInner(){
				iNow++;
				tab();
			}

			function tab(){
				if(iNow == oBtns.size()){
					oBtns.attr("class", "");
					oBtns.eq(0).attr("class", "active");
				}else{
					oBtns.attr("class", "");
					oBtns.eq(iNow).attr("class", "active");
				}
				
				oUl.animate({left: iNow * -1263}, function(){
					if(iNow == oBtns.size()){
						iNow = 0;
						oUl.css("left", "0px");
					}
				});
			}


			oBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			$("#play").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 3000);
			})
		

		//加载数据
			$.ajax({
				url:'json/data.json',
				success:function(res){
					var html = '';
					for(var i= 0;i < res[0].length;i++){
						html += `<div><a href=""><img src="${res[0][i].src}" alt=""></a></div>`;
					}
					$('.banner').html(html);
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
					var html11 = '';
					for(var i = 0;i < res[11].length;i++){
						$(`<div class="section-bottom-list">
				<img src="${res[11][i].src}" alt="">
				<h4>${res[11][i].title}</h4>
				<p>${res[11][i].cost}</p>
			</div>`).appendTo('.section-bottom #section-bottom-a')
					}
					var html10 = '';
					for(var i = 0;i < res[10].length;i++){
						html10 += `<li>${res[10][i]}</li><br>`
					}
					$('#menuright-e').html(html10);
					var html12 = '';
					for(var i = 0;i < res[12].length;i++){
						$(`<div class="section-bottom-list">
				<img src="${res[12][i].src}" alt="">
				<h4>${res[12][i].title}</h4>
				<p>${res[12][i].cost}</p>
			</div>`).appendTo('.section-bottom #section-bottom-b')
					}
					var html13 = '';
					for(var i = 0;i < res[13].length;i++){
						$(`<div class="section-bottom-list">
				<img src="${res[13][i].src}" alt="">
				<h4>${res[13][i].title}</h4>
				<p>${res[13][i].cost}</p>
			</div>`).appendTo('.section-bottom #section-bottom-c')
					}
					var html14 = '';
					for(var i = 0;i < res[14].length;i++){
						html14 += `<img src="${res[14][i].src}" alt="">`
					}
						$('.img').html(html14);
					var html15 = '';
					for(var i = 0;i < res[11].length;i++){
						$(`<div class="section-bottom-list">
				<img src="${res[11][i].src}" alt="">
				<h4>${res[11][i].title}</h4>
				<p>${res[11][i].cost}</p>
			</div>`).appendTo('.article-bottom #article-bottom-a')
					}
					var html16 = '';
					for(var i = 0;i < res[12].length;i++){
						$(`<div class="section-bottom-list">
				<img src="${res[12][i].src}" alt="">
				<h4>${res[12][i].title}</h4>
				<p>${res[12][i].cost}</p>
			</div>`).appendTo('.article-bottom #article-bottom-b')
					}
					var html17 = '';
					for(var i = 0;i < res[13].length;i++){
						$(`<div class="section-bottom-list">
				<img src="${res[13][i].src}" alt="">
				<h4>${res[13][i].title}</h4>
				<p>${res[13][i].cost}</p>
			</div>`).appendTo('.article-bottom #article-bottom-c')
					}
					var html18 = '';
					for(var i = 0;i < res[15].length;i++){
						$(`<div class="section-bottom-list">
				<img src="${res[15][i].src}" alt="">
				<h4>${res[15][i].title}</h4>
				<p>${res[15][i].cost}</p>
			</div>`).appendTo('.article-bottom #article-bottom-d')
					}
				},
				error:function(msg){
					alert(msg);
				}
			})
			
			
			
			
			
			
			
			//给MENU添加鼠标移入移出事件
				$("#nav").find("li").mouseenter(function(){
					$("#nav").find("li").attr("class", "");
					$("#nav").find(".menu").css("display", 'none').eq($(this).index()).css("display",'block').stop().animate({height:"230px"},300);
					
					$(this).attr("class", 'active');
				})
					$("nav").find("li").mouseleave(function(){
					$("#nav").find("li").attr("class", "");
					$("#nav").find(".menu").stop().animate({height:'-230px'},300);
				})
				// $('#li1').mouseenter(function(){
				// 		$('.menu').stop().animate({height: 230})
				// 		// alert(1);
				// 	})
				// $('#li1').mouseleave(function(){
				// 		$('.menu').stop().animate({height: 0})
				// 	})
				
				// if (document.onscroll == '36px') {
				// 	$('.nav').css(top) = 0;
				// }
				// window.onscroll = function(){
				// 	var otop = document.body.scrolltop;
				// 	if (otop >= 36) {
				// 		$('.nav').css("position","fixed").css('top',0);
				// 	}
				// 	else{
				// 		$('.nav').css("top",'0');
				// 	}
				// }
				
			    // window.onscroll=function(){
			    	
       //          var topScroll =document.body.scrollTop;//滚动的距离,距离顶部的距离
	      //           if(topScroll ==36){   //当滚动距离大于36px时执行下面的东西
	      //              	 $('.bignav').css('top','0');
	      //              	 alert('1');
	      //           }else{//当滚动距离小于36的时候执行下面的内容，也就是让导航栏恢复原状
	      //               $('.bignav').css('position','fixed');
	      //               $('.bignav').css('top','0');
	      //               $('.bignav').css('zIndex','9999');
	      //           }
       //      }
       //      NAV滚动置顶
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
			    //商品切换
			var iNum = 0;
			var timer1 = setInterval(function(){
				$('.section-bottom .bottom-div').eq(iNum).stop().animate({opacity: 0}, function(){
					if(iNum == 3){
						$('.section-bottom .bottom-div').css({opacity: 1});
						iNum = 0;
						$('.section-top li').eq(0).attr('class', 'active1');
					}
				});
				iNum++;
				$('.section-top li').attr('class', '');

				$('.section-top li').eq(iNum).attr('class', 'active1');
			}, 4000)
			$('.section-top').on("click","li",function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
				iNum = $(this).index();

				if(iNum == $('.section-top li').size()){
					$('.section-top li').attr("class", "");
					$('.section-top li').eq(0).attr("class", "active1");
				}else{
					$('.section-top li').attr("class", "");
					$('.section-top li').eq(iNum).attr("class", "active1");
				}
				
				$('.section-bottom .bottom-div').animate({opacity:1},500);
				for(var i = 0; i < iNum; i++){
					$('.section-bottom .bottom-div').eq(i).stop().animate({opacity: 0}, 300)
				}
				
			})
			 // $('.section-bottom .ico1').click(function(){
    //             $('.section-top ul li').attr('class','').eq(iNum - 1).attr('class','active1');
    //             $('.section-bottom .bottom-div').stop().animate({
    //                 opacity : 0
    //             },1000)
    //             $('.section-bottom bottom-div').eq(iNum - 1).stop().animate({
    //                 opacity : 1
    //             },1000)
    //             iNum--;
    //             console.log(iNum);
    //             if(iNum == 0){
    //                 iNum = 3;
    //             }
    //         })
    //         //鼠标移入 取消滚动
				$('.section-bottom').hover(function(){
					clearInterval(timer1);
				},function(){
					timer1 = setInterval(function(){
					$('.section-bottom .bottom-div').eq(iNum).stop().animate({opacity: 0}, function(){
						if(iNum == 3){
							$('.section-bottom .bottom-div').css({opacity: 1});
							iNum = 0;
							$('.section-top li').eq(0).attr('class', 'active1');
						}
					});
					iNum++;
					$('.section-top li').attr('class', '');

					$('.section-top li').eq(iNum).attr('class', 'active1');
				}, 3000)
				})
			// 	$('.section-top').on("mouseenter","li",function(){
			// 		clearInterval(timer1);
			// 	})
			// 	$('.section-top').on("mouseleave","li",function(){
			// 		var timer1 = setInterval(function(){
			// 		$('.section-bottom .bottom-div').eq(iNum).stop().animate({opacity: 0}, function(){
			// 			if(iNum == 3){
			// 				$('.section-bottom .bottom-div').css({opacity: 1});
			// 				iNum = 0;
			// 				$('.section-top li').eq(0).attr('class', 'active1');
			// 			}
			// 		});
			// 		iNum++;
			// 		$('.section-top li').attr('class', '');

			// 		$('.section-top li').eq(iNum).attr('class', 'active1');

			// }, 1000)
			// 	})
			
			/*var oBtns1 = $(".section-top").find("ul").find("li");
			var aDiv = $(".section-bottom").find('div');
			//导航滚动
			var iNow1 = 0; //记录当前是第几张
			var timer1 = null; //设计记录定时器的标识


			timer1 = setInterval(timer1Inner, 2000);

			function timer1Inner(){
				iNow1++;
				tab1();
			}

			function tab1(){
				oBtns1.attr('class','').eq(iNow1).attr('class','active1');
				aDiv.eq(iNow1).stop().animate({
					opacity:0
				},500,function(){
					if (iNow1 == aDiv.size()) {
						iNow1 = 0;
						aDiv.stop().animate({
							opacity:1
						},500)
					}
				})

				if(iNow1 == oBtns1.size()){
					oBtns1.attr("class", "");
					oBtns1.eq(0).attr("class", "active1");
				}else{
					oBtns1.attr("class", "");
					oBtns1.eq(iNow1).attr("class", "active1");
				}
				
				aDiv.eq(iNow).stop().animate({
					opacity:1
				},3000, function(){
					if(iNow1 == oBtns1.size()){
						iNow1 = 0;
						aDiv.eq(iNow1).stop().animate({
							opacity:0
						},3000)
					}
				});
			}


			oBtns1.click(function(){
				iNow1 = $(this).index();
				tab1();
			})

			$(".section-bottom").hover(function(){
				clearInter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   val(timer1);
			}, function(){
				timer1 = setInterval(timer1Inner, 2000);
			})
			*/
		
		//event gundong
		var oBtnsEvent = $(".event").find("ol").find("li");
			var oUlEvent = $(".event").find("ul");
			var aLiEvent = oUlEvent.find("li");

			//导航滚动
			var iNowEvent = 0; //记录当前是第几张
			var timerEvent = null; //设计记录定时器的标识


			timerEvent = setInterval(timerEventInner, 3000);

			function timerEventInner(){
				iNowEvent++;
				tabEvent();
			}

			function tabEvent(){
				if(iNowEvent == oBtnsEvent.size()){
					oBtnsEvent.attr("class", "");
					oBtnsEvent.eq(0).attr("class", "active");
				}else{
					oBtnsEvent.attr("class", "");
					oBtnsEvent.eq(iNowEvent).attr("class", "active");
				}
				
				oUlEvent.animate({left: iNowEvent * -1263}, function(){
					if(iNowEvent == oBtnsEvent.size()){
						iNowEvent = 0;
						oUlEvent.css("left", "0px");
					}
				});
			}


			oBtnsEvent.click(function(){
				iNowEvent = $(this).index();
				tabEvent();
			})

			$(".event").hover(function(){
				clearInterval(timerEvent);
			}, function(){
				timerEvent = setInterval(timerEventInner, 3000);
			})


			//商品滚动2
			var iNum2 = 0;
			var timer2 = setInterval(function(){
				$('.article-bottom .article-div').eq(iNum2).stop().animate({opacity: 0}, function(){
					if(iNum2 == 4){
						$('.article-bottom .article-div').css({opacity: 1});
						iNum2 = 0;
						$('.article-top li').eq(0).attr('class', 'active1');
					}
				});
				iNum2++;
				$('.article-top li').attr('class', '');

				$('.article-top li').eq(iNum2).attr('class', 'active1');
			}, 4000)
			$('.article-top').on("click","li",function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
				iNum2 = $(this).index();

				if(iNum2 == $('.article-top li').size()){
					$('.article-top li').attr("class", "");
					$('.article-top li').eq(0).attr("class", "active1");
				}else{
					$('.article-top li').attr("class", "");
					$('.article-top li').eq(iNum2).attr("class", "active1");
				}
				
				$('.article-bottom .article-div').animate({opacity:1},500);
				for(var i = 0; i < iNum2; i++){
					$('.article-bottom .article-div').eq(i).stop().animate({opacity: 0}, 300)
				}
				
			});
			//鼠标移入 取消滚动
				$('.article-bottom').hover(function(){
					clearInterval(timer2);
				},function(){
					timer2 = setInterval(function(){
					$('.article-bottom .article-div').eq(iNum2).stop().animate({opacity: 0}, function(){
						if(iNum2 == 4){
							$('.article-bottom .article-div').css({opacity: 1});
							iNum2 = 0;
							$('.article-top li').eq(0).attr('class', 'active1');
						}
					});
					iNum2++;
					$('.article-top li').attr('class', '');

					$('.article-top li').eq(iNum2).attr('class', 'active1');
				}, 3000)
				})
		})
			//chat盖乐世旗舰店专卖
			$(".chat").hover(function(){
				$(".chat .left-small").css("display","block");
			},function(){
				$(".chat .left-small").css("display","none");
			})
			//置顶
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
			        $(".toTop").click(function(){
			        	$("html,body").animate({'scrollTop':0},500);
			        })
	}
	return{
		main:main 
	}

})

		


		