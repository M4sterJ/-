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
				        //获得文本框对象
					var t = $("#text_box");
					//初始化数量为1,并失效减
					$('#min').attr('disabled',true);
					 //数量增加操作
					 $(".content ul").on("click", "#add", function(){
					 	var num = parseInt($(this).prev().val());
					 	num++;
					 	$(this).prev().val(num);
					 	var price = parseInt($(this).parent().prev().html());
					 	var total = price * num;
					 	$(this).parent().next().html("￥：" + total);
					 	var arr = eval($.cookie("goods"));
					 	var arr = eval($.cookie("goods"));
					 	for(var i = 0; i < arr.length; i++){
					 		if($(this).parent().parent().attr("id") == arr[i].id){
					 			arr[i].num = num;
					 			break;
					 		}
					 	}
					 	var str = JSON.stringify(arr);
					 	$.cookie("goods", str, {
					 		expires: 7,
					 		raw: true
					 	});
					 	var yigong_str = $(".shopcost .shop-sum").find("#costs").html();
					 	var yigong = parseInt(yigong_str.substring(1));
					 	$(".shopcost .shop-sum").find("#costs").html("￥" + (yigong + price));

					 })

					 //数量减少操作
					 $(".content ul").on("click", "#min", function(){
					 	var num = parseInt($(this).next().val());
					 	num--;
					 	if(num == 0){
					 		num = 1;
					 		$(this).next().val(num);
						 	var price = parseInt($(this).parent().prev().html());
						 	var total = price * num;
						 	$(this).parent().next().html("￥：" + total);
						 	// var arr = eval($.cookie("goods"));
						 	var arr = eval($.cookie("goods"));
						 	for(var i = 0; i < arr.length; i++){
						 		if($(this).parent().parent().attr("id") == arr[i].id){
						 			arr[i].num = num;
						 			break;
						 		}
						 	}
						 	var str = JSON.stringify(arr);
						 	$.cookie("goods", str, {
						 		expires: 7,
						 		raw: true
						 	});
						 	var yigong_str = $(".shopcost .shop-sum").find("#costs").html();
						 	var yigong = yigong_str.substring(1);
					 	}else{
					 		$(this).next().val(num);
						 	var price = parseInt($(this).parent().prev().html());
						 	var total = price * num;
						 	$(this).parent().next().html("￥：" + total);
						 	// var arr = eval($.cookie("goods"));
						 	var arr = eval($.cookie("goods"));
						 	for(var i = 0; i < arr.length; i++){
						 		if($(this).parent().parent().attr("id") == arr[i].id){
						 			arr[i].num = num;
						 			break;
						 		}
						 	}
						 	var str = JSON.stringify(arr);
						 	$.cookie("goods", str, {
						 		expires: 7,
						 		raw: true
						 	});
						 	var yigong_str = $(".shopcost .shop-sum").find("#costs").html();
						 	var yigong = yigong_str.substring(1);
						 	$(".shopcost .shop-sum").find("#costs").html("￥" + (yigong - price));
					 	}
					 })
					 //全选
					 $('input[name="checkall"]').click(function(){
						if($('input[name="checkall"]').is(':checked')){
							$('input[name="checkbox"]').prop("checked", true);
						}else{
							$('input[name="checkbox"]').prop("checked", false);
						}
					})
					 $("#btn").mouseover(function(){
					 	$("#btn").css('background',"skyblue");
					 })
					 $("#btn").mouseout(function(){
					 	$("#btn").css('background',"#1428a0");
					 })

					 $.ajax({
					 	method: "get",
					 	url: "json/goods.json",
					 	success: function(res){
					 		(function(){
					 			var arr = eval($.cookie("goods"));
					 			for(var i = 0; i < arr.length; i++){
					 				for(var j = 0; j < res[4].length; j++){
					 					if(arr[i].id == res[4][j].id){
					 						var id = arr[i].id;
					 						var num = parseInt(arr[i].num);
					 						var price = parseInt(res[4][j].integral);
					 						var total = "￥：" + (num * price);
					 						$(".content ul").append(`<li id="${id}" class="goods-list">
					<input type="checkbox" name="checkbox">
					<div class="goods">
						<img src="${res[4][j].img}" alt="">
						<div class="descript">
							<a href="">${res[4][j].name}</a>
							<p>丹青黑 6GB RAM<br>128GB ROM 公开版</p>
						</div>	
						
					</div>
					<div class="price">${res[4][j].price}</div>
					<div class="integral">${res[4][j].integral}</div>
					<div class="nums">
						<input id="min" name="" type="button" value="-" /> 
						<input id="text_box" name="" type="text" value="${arr[i].num}" style="width:30px;height:16px;text-align: center"/> 
						<input id="add" name="" type="button" value="+" /> 
					</div>
					<div class="total">${total}</div>
					<p class="remove"><a>删除</a></p>
				</li>`);
					 					}
					 				}
					 			}
					 		})();

					 		(function(){
					 			var arr = eval($.cookie("goods"));
					 			var total = 0
					 			for(var i = 0; i < arr.length; i++){
					 				for(var j = 0; j < res[4].length; j++){
					 					if(arr[i].id == res[4][j].id){
					 						var price = parseInt(res[4][j].integral);
					 						var num = parseInt(arr[i].num);
					 						 total += price * num;

					 					}
					 				}
					 			}
					 			$(".shopcost .shop-sum").find("#costs").html("￥" + total);
					 		})();
					 	},
					 	error: function(msg){
					 		alert(0);
					 	}
					 })
					 // 删除按钮
					 $(".content ul").on("click", ".remove", function(){
					 	$(this).parent().remove();
					 	var arr = eval($.cookie("goods"));
					 	for(var i = 0; i < arr.length; i++){
					 		if($(this).parent().attr("id") == arr[i].id){
					 			arr.splice(i, i + 1);
					 			break;
					 		}
					 	}
					 	var str = JSON.stringify(arr);
					 	$.cookie("goods", str, {
					 		expires: 7,
					 		raw: true
					 	});
					 	// console.log($(this).parent().attr("id"));
					 })


		})
	}
	return{
		main:main
	}
})