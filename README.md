# nav-nuderline
nav-nuderline.js 导航栏下划线鼠标跟随效果插件，原生Javascript，不依赖任何三方库

### 效果:
![image](https://github.com/wwlsky/nav-nuderline/raw/master/example.gif)

### 使用方法:
```
<ul class="nav">
    <li><a href="javascript:;">首页</a></li>
    <li><a href="javascript:;">产品中心</a></li>
    <li><a href="javascript:;">关于我们</a></li>
    <li><a href="javascript:;">联系我们</a></li>
</ul>
```
### Script
```
new NavUnderline('.nav');
// or
NavUnderline('.nav');
```
### Options
```
new NavUnderline('.nav', {
   duration:  '.5s',      // 过渡时间
   timing:    'ease',     // 速度曲线 linear,ease,ease-in,ease-out,ease-in-out
   textColor: '#333',     // 导航栏文字颜色
   lineColor: '#333'      // 下划线颜色
});
```
