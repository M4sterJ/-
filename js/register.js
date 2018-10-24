define(["jquery", "jquery-cookie"], function($){
	function main(){
		$().extend({
			size: function(){
				return this.elements.length;
			}
		})
		
		$(function(){
			$("#textcode").html(textcodestr(9));
			$("#textcode").html(textcodestr(9));
			$("#textcode").click(function(){
				$("#textcode").html(textcodestr(9));
			})
			$("#refresh").click(function(){
				$("#textcode").html(textcodestr(9));
			})	
			$("#mail").focus(function(){
				$(".mail-label").animate({'font-size':'14px','margin-top':'-10px'},200);
			})
			$("#mail").blur(function(){
				if (!($("#mail").val())) {
					$(".mail-label").animate({'font-size':'18px','margin-top':'0px'},200);
					$(".mail-label").css('color','red');
					$(".mail-label").html('请输入用户名或邮箱');
				}else if($("#mail").val().length > 18 || $("#mail").val().length < 6){
						$(".mail-label").css('color','red');
						$(".mail-label").html("长度应为6~18个字符");
				}else if(/^\d/.test($("#mail").val())){
						$(".mail-label").css('color','red');
						$(".mail-label").html('邮箱地址首位需为英文');
				}else{
						if(/\W/.test($("#mail").val())){
							$(".mail-label").css('color','red');
							$(".mail-label").html('邮件地址需由字母、数字或下划线组成');
						}else{
							$(".mail-label").css('color','green');
							$(".mail-label").html('邮箱地址OK');
						}
				}
			})
			$("#password").focus(function(){
				$(".password-label").animate({'font-size':'14px','margin-top':'-10px'},200);
			})
			$("#password").blur(function(){
				if (!($("#password").val())) {
					$(".password-label").css('color','red');
					$(".password-label").html('请输入密码');
					$(".password-label").animate({'font-size':'18px','margin-top':'0px'},200);
				}else if(this.value.length<6||this.value.length>16){
					$(".password-label").css('color','red');
					 $(".password-label").html('长度应为6-16个字符');
				}else{
					$(".password-label").css('color','green');
					 $(".password-label").html('密码OK');
				}
			})
			$("#confirm-password").focus(function(){
				$(".confirm-password-label").animate({'font-size':'14px','margin-top':'-10px'},200);
			})
			$("#confirm-password").blur(function(){
				if ($("#confirm-password").val() == $("#password").val()) {
					$(".confirm-password-label").css('color','green');
					$(".confirm-password-label").html("密码验证OK");
					$(".confirm-password-label").animate({'font-size':'14px','margin-top':'-10px'},200);
				}else{
					$(".confirm-password-label").css('color','red');
					$(".confirm-password-label").html("密码不一致");
					$(".confirm-password-label").animate({'font-size':'14px','margin-top':'-10px'},200);
				}
			})
			$("#name").focus(function(){
				$(".name-label").animate({'font-size':'14px','margin-top':'-10px'},200);
			})
			$("#name").blur(function(){
				if (!($("#name").val())){
					$(".name-label").css('color','red');
					$(".name-label").animate({'font-size':'18px','margin-top':'0px'},200);
					$(".name-label").html('用户名不符合规范');
				}else{
					$(".name-label").css('color','green');
					$(".name-label").animate({'font-size':'14px','margin-top':'-10px'},200);
					$(".name-label").html('用户名OK')
				}
			})
			$("#year").focus(function(){
				$(".year-label").animate({'font-size':'14px','margin-top':'-10px'},200);
			})
			$("#year").blur(function(){
				if (parseInt($("#year").val(), 10) > 2050 || parseInt($("#year").val(), 10) < 1500) {
						$(".year-label").animate({'font-size':'14px','margin-top':'-10px'},200);
						$(".year-label").css('color','red');
						$(".year-label").html('年份错误');  
				}else{
					$(".year-label").css('color','green');
					$(".year-label").html('年份OK');
				}
				if (!($("#year").val())) {
					$(".year-label").css('color','red');
					$(".year-label").html('年份错误');
				}
				// if ($("#year").val().length == 4) {
				// 	$(".year-label").css('color','green');
				// 	$(".year-label").html('年份OK');
				// }else{
				// 	$(".year-label").css('color','red');
				// 	$(".year-label").html('年份错误');
				// }
			})
			$("#month").focus(function(){
				$(".month-label").animate({'font-size':'14px','margin-top':'-10px'},200);
				$(".month-label").css('color','green');

			})
			
			$("#day").focus(function(){
				$(".day-label").animate({'font-size':'14px','margin-top':'-10px'},200);
			})
			$("#day").blur(function(){
				if (parseInt($("#day").val(), 10) > 31 || parseInt($("#day").val(), 10) <= 0) {
						$(".day-label").animate({'font-size':'14px','margin-top':'-10px'},200);
						$(".day-label").css('color','red');
						$(".day-label").html('日期错误');  
				}else{
					$(".day-label").css('color','green');
					$(".day-label").html('日期OK');
				}
				if (!($("#day").val())) {
					$(".day-label").css('color','red');
					$(".day-label").html('日期错误');
				}
			})
			$("#textcodes").focus(function(){
				$(".textcodes-label").animate({'font-size':'14px','margin-top':'-10px'},200);
			})
			$("#textcodes").blur(function(){
				if ($("#textcodes").val().toLowerCase() == $("#textcode").html().toLowerCase()) {
					$(".textcodes-label").animate({'font-size':'14px','margin-top':'-10px'},200);
					$(".textcodes-label").css('color','green');
					$(".textcodes-label").html('验证代码OK');
					$("#btn1").css('opacity','1');
				}else{
					$(".textcodes-label").animate({'font-size':'14px','margin-top':'-10px'},200);
					$(".textcodes-label").css('color','red');
					$(".textcodes-label").html('验证代码不一致');
					$("#btn1").css('opacity','0.3');
				}
			})
			
		})
		function textcodestr(n){
			var arr = [];
			for(var i = 0;i < n;i++){
				var num = parseInt(Math.random() * 100);
				if (num >= 0 && num <= 9) {
					arr.push(num);
				}else if (num <= 90 && num >=65) {
					var str = String.fromCharCode(num);
					arr.push(str);
				}else if (num >= 17 && num <= 42) {
					var str = String.fromCharCode(num + 80);
					arr.push(str);
				}else{
					i--;
				}
			}
			return arr.join('');
		}
			$("#btn1").click(function(){
				var str = `mail=${$("#mail").val()}&password=${$("#password").val()}`;
				alert(str);
				$.ajax({
					url:'register.php',
					type:'post',
					data:str,
					success:function(data){
						alert(data);
						window.location.href="LoginRegister.html";
					},
					error:function(mag){
						alert(msg);
					}
				})
			})
			
		
		// var str = 'z'
		// alert(str.charCodeAt(0));
	}
	return{
		main:main 
	}
})
