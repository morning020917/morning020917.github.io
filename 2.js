// 定义一个函数/方法，去验证登录功能
var sjk = [{
		username: "admin",
		password: "password"
	},
	{
		username: "zhangsan",
		password: "123"
	}, {
		username: "lisi",
		password: "111"
	}
]

function checkLog() {
	// 获取用户名，密码输入框的内容 需要dom操作
	// 通过id抓取的节点 只能有一个 所以 getElement 是单数（不加s）
	// 通过class类名，标签名 name属性 抓取的的节点，不止一个，所以getElements是复数(加s)
	var status = false;
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	// 通过class类名，标签名 name属性 抓取的的节点，会生成一个伪数组（因为不具备数组的添加 删除方法）
	// 想要拿出里面的某一个节点，需要循环遍历
	// 判断用户名，密码是否正确
	// 若正确 跳转页面 bom操作 	window.locaation.herf()
	for (var i = 0; i < sjk.length; i++) {
		if (user == sjk[i].username && pass == sjk[i].password) {
			// 若正确 跳转页面 bom操作
			status = true;
		}
	}
	if (status) {
		window.event.returnValue = false;
		window.location.href = "index.html"
	} else {
		alert("用户名/密码错误");
	}

}
