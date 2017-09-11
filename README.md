## 重写alert事件

### 调用示例
```javascript
<button id="ok">成功</button>
	<button id="err">失败</button>
	<script type="text/javascript" src="jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="show.js"></script>
	<script type="text/javascript">
	(function() {
		$('#ok').click(function() {
			show("成功", 1000, 'ok');
		});
		$('#err').click(function() {
			show("失败", 1000, 'err');
		})
	})()
	</script>
</script>
```


### 插件参数

|  参数名称   |   类型   | 是否必须 |  示例  |                 参数说明                 |         默认                 |
| :-----: | :----: | :--: | :--: | :----------------------------------: |:----------------------------------: |
| str | string |  否   | "登录失败"  | alert显示的字符串 | 空 |
| time | number |  否   | 2000  | alert显示的时间 | 2000|
| type  | string |  否   | "ok"  | 显示成功(绿色)失败(蓝色)的alert弹框  | 绿色 |

