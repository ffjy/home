1. yarn
2. yarn run dev
3. visit http://localhost:3000/dist/

``` js

- index.html 首页
- signUp.html 预约页
- goAndGet.html 领取列表页
- receive.html 领取页
- 二级页面
  - militaryExploits.html 非凡战绩
  - optional.html 选考冲刺
  - students.html 优秀学员列表页
    - studentDetails.html 学员页
  - teachers.html 名师列表页
    - masterDetails.html 名师页
  - topArticles.html 头条列表页
    - topArticleDetails.html 头条页
  - campus.html 校区介绍
  - about.html 关于非凡
```


## 代码结构

1. js文件都放在`</body>`上面
2. 图片懒加载
``` js
  1. 页面中引入lazyload中的lazysizes.min.js
  2. <img src="./img/common/placeholder.svg" data-src="./img/goAndGet/fz.png" alt="" class="lazyload"> src为占位图地址，data-src为原图地址，并为之设置类名为lazyload，就可以工作了，并不需要配置js
```