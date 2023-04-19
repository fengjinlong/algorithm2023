Function.prototype.bind2 = function (context, ...arg) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  let fn = this;
  const bound = function () {
    let con = fn instanceof bound ? fn : context;
    let args = [...arg, ...arguments];
    return fn.apply(con, args);
  };
  // 原型
  if (this.prototype) {
    Object.setPrototypeOf(bound, this.prototype);
  }
  return bound;
};

Function.prototype.bind3=funcion(context,...arg){
  if(typeof this!== 'function'){
    throw new Error('error')
  }
  let fn = this
  const bound = function(){
    const con = fn instanceof bound?fn:context
    return fn.apply(con,[...arg,...arguments])
  }
  if(this.prototype){
    Object.setPrototypeOf(bound,this.prototype)
  }

  return bound
}

const o1 = {
  name: "o1",
  getName: function () {
    return this.name;
  },
};
console.log("o1.getName", o1.getName());
const fn = o1.getName;
// console.log("fn", fn()); error
console.log("fn bind", fn.bind2(o1)());

const o2 = {
  name: "o2",
};
// console.log("o2.getName()", o2.getName()); error
console.log("o2.getName()", o1.getName.bind2(o2)());


Function.prototype.mybind = function (context, ...args1) {
  if(typeof this !== 'function'){
    throw new Error('error')
  }
  context = context || window
  const fn = this
  // const bound = function(){
  //   return fn.apply(this instanceof bound?this:context,[...args,...arguments])
  // }
  // if(this.prototype){
  //   Object.setPrototypeOf(bound,this.prototype)
  // }
  // return bound

  return function (...args2){
    if(new.target){
      return new fn(...args1,...args2)
    }
    return fn.apply(context,[...args1,...args2])
  }
}

Function.prototype.bind3 = function(context, ...args1) {
  if(typeof this !== 'function'){
    throw new Error('error')
  }
  context = context || window
  const fn = this
  return function (...args2){
    if(new.target){
      return new fn(...args1,...args2)
    } else {
      return fn.apply(context, [...args1,...args2])
    }
  }
}

Function.prototype.bind5=function(context, ...args){
  if(typeof this !== 'function'){
    throw new Error('error')
  }
  context = context || window
  const fn = this
  return function(...args2){
    if(new.target){
      return new fn(...args,...args2)
    } else {
      return fn.apply(context,[...args,...args2])
    }
  }
}

Function.prototype.bind6=function(context,...args){
  if(typeof this !== 'function'){
    throw new Error('error')
  }
  context = context || window
  const fn = this

  return (...args2)=>{
    if(new.target){
      return new fn(...args,...args2)
    } else {
      return fn.apply(context,[...args,...args2])
    }
  }
}