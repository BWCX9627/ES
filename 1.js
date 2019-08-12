// 解构赋值
// let arr = [1, 2, 3, 4, 5];
// var [d] = arr;
// console.log(d);

// const obj = {
//     data: {
//         status: 1,
//         msg: [0, 1, 2, 3, 4]
//     }
// };

// var {
//     data: {
//         status: ccc,
//         msg: bbbb
//     }
// } = obj;
// console.log(bbbb);

// rest 扩展运算符
// function show(...rest) {
//     var sum = 0;
//     rest.forEach(function (ele) {
//         sum += ele;
//     })
//     console.log(sum);
// }
// var arr = [1, 2, 3, 4, 5];
// console.log(...arr);
// show(...arr);

//includes 查询字符串是否存在
// var arr = [
//     {
//         id:0,
//         name:"宝马"
//     },
//     {
//         id:1,
//         name:"宝军"
//     },
//     {
//         id:2,
//         name:"鹏驰"
//     }
// ]
// function show(str){
//     var kong = [];
//     arr.forEach(function(ele){
//         if (ele.name.includes(str)) kong.push(ele);
//         else{
//             console.log(111);
//         }
//     })
//     return kong
// };
// console.log(show("宝"));


// var show = ele => ele*2
//     console.log(show(2));

// var obj = {
//     name:"周杰伦",
//     show:function(){
//         setInterval(()=>{
//             console.log(this.name);
//             console.log(111);
//         },1000)
//     }
// }

// obj.show()

// for ofa

// let arr = [1,2,3,4,5,6];
// const obj = {
//     name:123,
//     age:12
// };
// for (const [key,value] of Object.entries(arr)) {
//     console.log(key,value);
// };

// var obj = {name:123};
// var obj1= Object.assign({},obj);
// obj.name = 234;
// console.log(obj1);

// var obj = {
//     name:"fly",
//     time:"2018"
// }
// var proxy =new Proxy(obj,{
//     get(target,key){
//         // console.log(target);
//         return target[name]=2019;
//     },
//     set(target,key){
//         if (key==="name") {
//             return target[key]=value
//         }else{
//             return target[key];
//         }
//     }

// })
// console.log(proxy.name);
// var obj= {
//     start:[1,2,3,4,5],
//     end:[6,7,8,9,0]
// }
// var arr = obj.start.concat(obj.end);
// for(const [key,value] of Object.entries(arr)) {
//     console.log(value);
// }

// var obj ={
//     start:[1,2,3,4,5],
//     end:[5,6,7,8,9],
//     [Symbol.iterator]:function(){
//         let seft = this;
//         let arr = seft.start.concat(seft.end);
//         let index = 0;
//         let len = arr.length;
//         return {
//             next(){
//                 if (index<len) {
//                     return{
//                         value:arr[index++],
//                         done:false
//                     }
//                 }else{
//                     return{
//                         value:arr[index++],
//                         done:true
//                     }
//                 }
//             }
//         }
//     }
// }
// for (const key of obj) {
//     console.log(key);
// }

// 继承
// 1. 继承属性

// 2.继承函数

function Person(name,age){
    this.name=name;
}
// es5继承
function Person(name,age){
    this.name=name
    this.age=age
};
Person.prototype.say=function(){
    console.log(this.name,this.age);
}

function zhouhui(name,age){
    Person.call(this,name,age);
}
zhouhui.prototype=new Person();
const abc = new zhouhui("周晖",20);
// console.log(abc.age);
abc.say()
// es6 继承
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     };
//     say(){
//         console.log(this.name,this.age);
//     };
// }
// class zhouhui extends Person{
//     constructor(name,age,job){
//         super(name,age);
//         this.job = job;
//     }
// }

// const abc = new zhouhui("周晖",20,"web前端");
// console.log(abc.job);
// abc.say()




