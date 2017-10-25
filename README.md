1. yarn
2. yarn run dev
3. visit http://localhost:3000/dist/

## 代码结构

1. js文件都放在`</body>`上面
2. 图片懒加载
``` js
  1. 页面中引入lazyload中的lazysizes.min.js
  2. <img src="./img/common/placeholder.svg" data-src="./img/goAndGet/fz.png" alt="" class="lazyload"> src为占位图地址，data-src为原图地址，并为之设置类名为lazyload，就可以工作了，并不需要配置js
```