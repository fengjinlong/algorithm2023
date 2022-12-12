- partial<T>`将`T的所有属性变成可选的

- pick 选择属性，得到 对象类型

- `Exclude<T, U>`提取存在于`T`，但不存在于`U`的类型组成的联合类型

- `Extract<T, U>`提取联合类型T和联合类型U的所有交集

- `Omit<T, K>`从类型`T`中剔除`K`中的所有属性。

  ```ts
  type Om<T, K exteds keyof any> = {
    [key in Exclude<keyof T, K>]: T[key]
  }
  ```

- ReturnType 获取函数的返回值

- Parameters 获取函数的参数类型
- `ConstructorParameters`可以获取类的构造函数的参数类型，存在一个元组中。







# react

####  函数组件的 useRef()

1. 获取 dom 对象时候使用

   ```js
   const u = useRef()
   u.current；
   // 如果 定义一个对象 带有 current，也可以用来获取 dom，不同点是 下面的 2
   const u1 = {current:null}
   u1.current;
   ```

2. u 只创建一次，而 u1随着组件更新会不断创建

3. 用 useState 双向绑定

   ```jsx
   const F = () => {
     const [val, setVal] = useState()
     const c = (e) ={
       setVal(e.target.value)
       // 清空
       setVal('')
     }
       return (
       	<input onChange={c} value={val} />
       )
   }
   ```

4. Portal 传送门

   ```jsx
   const pos = document.getElementById('xxx')
   const F = (props) => {
     return ReactDOM.createPortal(<p>去哪里</P>, pos)
   }
   ```

   

#### 类组件的 setState

1. 类组件 使用 this.setState(newState) 修改 state，只会修改设置的属性

2. 获取 dom

   

   ```jsx
   class A {
     state = {
       a: 1,
       b: 2,
       c: {d:3}
     }
     // 类组件 获取 dom
     divRef = React.creatRef()
     // 方法为了防止 this 捣乱，尽量使用 箭头函数
     clickHandler = () => {
       this.setState({a: 2}) 
       // b 不会改变。这里仅限于 state 的浅属性，也就是 c.d 没了
     }
     render() {
       return (
       	<p ref={devRef}></p>
         <button onClick={this.clickHandler}></button>
       )
     }
   }
   ```

   #### context
   
   
   
   1. 将多个组件的共享数据存储到里面
   2. 无需 props
   
   ```jsx
   const  = React.createContext({a:''})
   ```
   
   3. 父组件生成数据
   
   ```jsx
   <Con.Provider value={a:100}>
   	<div></div>
   </Con.Provider>
   ```
   
   4. 使用者
   
   ```
   const C = useContext(Con)
   
   C.a
   ```

#### setState 函数组件

```tsx
const A = () => {
  const [count, setCount] = useState(0)
  setCount(1)
  return <p>123</p>
}
// 即使是 1，内存溢出
```

`setCount() --->  dispatchSetDate()  ---> 会先判断，组件当前出于什么状态`

1. 渲染阶段，不会判断 state 是否相同
2. 不是渲染阶段，检查 state 值是否相同
   1. 不同，对组件重新渲染
   2. 相同，则不同组件进行重新渲染，但是这个值不会触发子组件的重新渲染，这次渲染不会产生变化，这种情况通常发生在值第一次相同时候















123456

















1. BTC 比特币

1. 开仓
   - 也叫建仓，如果看这涨，做多，买入开多
   - 如果看跌，卖出开空一定数量的标准合约，持有空仓（空头）

2. 平仓
   1. 投资者清仓或者减少仓位，如果投资者持多仓，看跌行情，可以卖出平多，减少其所持有的合约仓位；如若空仓，看张行情，可买入平空，减少所 持有合约仓位。
3. 做市商   币安撮合交易
   1. 依附在平台的二道贩子
4. 自动做市商
   1. 全靠算法
5. 对冲
   1. 同时投入两份，减少另一份的带来的风险
6. LP(Liquidity Provider), 给平台提供 btc，平台去运行交易，然后给我分成
7. 流动性挖矿
   1. 分给我 token B 就叫 挖矿
   2. 就是成为 LP
8. 滑点
   1. 看到的价格，点交易后，并不是实际看到的价格，这个价格差。可以设置
9. 无偿损失
10. 砸盘
    1. 一直卖到你跟着卖
11. 插针
    1. 交易所帮助某一个 B
12. DeFi
    1. 去中心化金融，都在以太坊的区块链上进行
13. Delta （&），也叫对冲值，衡量标的资产价格变时，期权价格的变化幅度，公式表示：Delta = 期权变化 / 标的资产的价格变化
14. 空投
    1. 给你点币
15. 机枪池

![image-20221211184312297](/Users/fjl/Library/Application Support/typora-user-images/image-20221211184312297.png)



17. https://coinmarketcap.com/
    1. 读懂前十个，不懂别进圈
18. https://coinlist.co/
    1. 要发的币
19. https://www.dapp.com/
    1. 各链有名的 Dapp（去中心化 app）
20. 期限费率
    1. 大多数人喜欢看多，都看多那就没人交易了
    2. 交易所让看多的人给补手续费