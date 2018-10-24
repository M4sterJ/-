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
			$.ajax({
				url:'json/goods.json',
				success:function(res){
					var html1 = '';
					for(var i = 0;i < res[0].length;i++){
						html1 += `<li><a href="">${res[0][i]}</a></li>`
					}
					$(".phone ul").html(html1);
					
					for(var i = 0;i < res[1].length;i++){
						$(`<li><a href=""><input type="checkbox"> ${res[1][i]}</a></li>`).appendTo($(".cost ul"))
					}
					for(var i = 0; i < res[2].length;i++){
						$(`<span style="background-color:${res[2][i]};"><a href=""></a></span>`).appendTo($(".sort-color div"))
					}
					for(var i = 0;i < res[3].length;i++){
						$(`<li><a href=""><input type="checkbox">${res[3][i]}</a></li>`).appendTo($(".pay ul"))
					}
					for(var i = 0;i < res[4].length;i++){
						$(`<div class="list-box">
								<label for="" class="label1">
									<span class="tag1">以旧<br>换新</span>
								</label>
								<label for="" class="label2">
									<span class="tag2">买赠</span>
								</label>
								<label for="" class="label3">
									<span class="tag3">免息</span>
								</label>
								<a href="#" class="aimg"><img src="${res[4][i].img}" alt=""></a>
								<ul class="list-color">
									<li style="background:black;"><a href=""></a></li>
									<li style="background:blue;"><a href=""></a></li>
									<li style="background:brown;"><a href=""></a></li>
								</ul>
									<a href="#">${res[4][i].name}</a>
									<p>${res[4][i].price}</p>
								
							</div>`).appendTo($(".list-content"))
					}

					$(".list-section-right .list-content").on("click", ".list-box", function(){
						var index = $(this).index();
						location.assign(res[4][index].link);
						var id1 = res[4][index].id;
						// alert(id1);
						$.cookie("product", id1);
						// alert(1);
						return false;
					})
				}
			})
		
			
		})
	}
	return{
		main:main
	}
})