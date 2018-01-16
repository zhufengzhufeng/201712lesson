## redux里包含的东西
- 1.createStore创建容器用来存放状态的
- 2.createStore中有一个state属性,不能直接访问状态
- 3.在组件中想要获取这个状态可以通过产生的容器中的getState方法来获取
- 4.createStore中的subscribe目的是用来订阅事件的(当用户派发新动作时会将订阅的函数进行执行)
- 5.派发函数dispatch,提供派发动作的方法，在内部会调用reducer,通过reducer触发状态的更新
- 6.action 动作，动作有一个type属性用来描述会干什么事情