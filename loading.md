记录-swebsite
===
>学习使我快乐
### 2019年11月25日


- [x] 学习GitHub organise、team 分支管理
- [x] 完成项目创建
- [x] 学习markdown [markdown参考](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/markdown-basics)
- [x] 完成readme更新
- [x] 引入redux

    ```
    npm install --save prop-types
    npm install --save react-redux
    npm install --save redux
    ```
- [x] 引入react-loadable 实现异步加载组件 [简书参考](https://www.jianshu.com/p/186a9605e93e) **服务端渲染*太难了***

- [x] redux理解（store 中间件）
        
  
- 从index.js入手,从store.js创建了store
    - redux 数据问题<br>

        - [x] Provider(react组件的context属性) 
        
 它接受store作为props，然后通过context往下传，这样react中任何组件都可以通过context获取store。
 
     - [ ] Connect [react-redux 中connect详解](https://blog.csdn.net/denghuizi/article/details/85006960) ***暂时没看到留个坑***


   - Hot reloading（热加载）//在index.js 和 store.js 判断moudle.hot
       ```
        // Hot reloading
        if (module.hot) {
          // Reload components
          module.hot.accept('./App', () => {
         render() //注意render() 需要重写以节省代码
          })
        }       
     ```
### 2019年11月25日
-[x] combineReducer [拆分reducer](https://www.cnblogs.com/wanghao123/p/11156194.html)
-[x] react-loadable [改变组件的引入方式懒加载](https://www.jianshu.com/p/871de188adf6)


