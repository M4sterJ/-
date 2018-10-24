<?php 
		//设置编码格式
	header("Content-type:text/html;charset=utf-8");
	/*
		$_POST 接受通过post请求所有的数据
	*/


	//链接数据库
	//1、链接数据库
	$link = mysql_connect("localhost", 'root', '123456');
	// var_dump($link)
	//2、判断链接是否成功
	if(!$link){
		echo "链接数据库失败";
		exit; //退出当前程序。
	}

	//3、设置字符集
	mysql_set_charset("utf8");

	//4、选择数据库
	mysql_select_db("LoginRegister");


	//区分是登陆还是注册
		//登陆	
		$mail = $_POST['mail'];
		$password = $_POST['password'];


		//5、准备sql语句
		$sql = "select * from users where mail='{$mail}' AND password='{$password}'";
		//6、发送sql语句
		$res = mysql_query($sql);

		//7、处理结果集
		$row = mysql_fetch_assoc($res);
		if($row){
			echo "登陆成功";
			exit;
		}else{
			echo "登陆失败";
			exit;
		}

	

	//8、关闭数据库
	mysql_close($link);
		
 ?>