## 重写alert事件

### 调用示例
```javascript
<script type="text/javascript" src="jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="alert.js"></script>
<script type="text/javascript">
	(function() {
		alert('循环显示', 1000, 'err');
		var i = 0;
		setInterval(function() {
			alert("循环显示"+ i, 1000, 'ok');
			i++;
		}, 5000)
	})()
</script>
```


### 插件参数

|  参数名称   |   类型   | 是否必须 |  示例  |                 参数说明                 |         默认                 |
| :-----: | :----: | :--: | :--: | :----------------------------------: |:----------------------------------: |
| str | string |  否   | "登录失败"  | alert显示的字符串 | 空 |
| time | number |  否   | 2000  | alert显示的时间 | 2000|
| type  | string |  否   | "ok"  | 显示成功(绿色)失败(蓝色)的alert弹框  | 蓝色 |

