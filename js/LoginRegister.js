define(["jquery", "jquery-cookie"], function($){
	function main(){
		$().extend({
			size: function(){
				return this.elements.length;
			}
		})
		$(function(){
			$("#ID").focus(function(){
				$("#username").animate({'font-size':'14px','margin-top':'-10px'},200);
			});
			$("#ID").blur(function(){
				$("#username").animate({'font-size':'18px','margin-top':'0'},200);
				if (!($("#ID").val())) {
					$("#username").css('color','red');
					$("#username").html('请输入用户名或邮箱');
				}else if($("#ID").val().length > 18 || $("#ID").val().length < 6){
						$("#username").css('color','red');
						$("#username").html("长度应为6~18个字符");
				}else if(/^\d/.test($("#ID").val())){
						$("#username").css('color','red');
						$("#username").html('邮箱地址首位需为英文');
				}else{
						if(/\W/.test($("#ID").val())){
							$("#username").css('color','red');
							$("#username").html('邮件地址需由字母、数字或下划线组成');
						}else{
							$("#username").css('color','green');
							$("#username").html('输入正确√');
						}
				}
			});
			$("#password").focus(function(){
				$(".password").animate({'font-size':'14px','margin-top':'-10px'},200);
			});
			$("#password").blur(function(){
				$(".password").animate({'font-size':'18px','margin-top':'0px'},200);
			})
			$("#btn").click(function(){
				$.ajax({
					url:'LoginRegister.php',
					type:'post',
					data:`mail=${$("#mail").val()}&password=${$("#password").val()}`,
					success:function(data){
						alert(data);
						window.location.href='index.html';
					},
					error:function(msg){
						alert(msg);
					}

				})
			})
		})
	}
	return{
		main:main 
	}
})