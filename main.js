// const div3 = dom.create('<div>newDiv</div>');
// dom.wrap(div2, div3);
// console.log(dom.empty(div1));
// dom.attr(div3, 'title', '哈啊哈哈');
// console.log(dom.attr(div3, 'title'));
// dom.text(div2, '我想大声高度你');
// console.log(dom.text(div2));
// dom.html(div2, '<p>我想大声告诉你</p>');
// console.log(dom.html(div2))
// dom.style(div2,{border:'1px solid red', color: 'tomato'})
// console.log(dom.style(div2, 'color'));
// dom.class.add(div2, 'red');
// dom.class.remove(test, 'tmp');
// console.log(dom.class.has(div2, 'red'))
// const fn = () =>{
//     console.log('我想大声告诉你！！！')
// }
// dom.on(div2, 'click', fn);
// dom.off(div2, 'click', fn);
// console.log(dom.find('#div2')[0]);
// console.log(demo.querySelectorAll('.red'));
console.log(dom.find('#demo>.red'));
console.log(dom.style(div2, 'color', 'red'));
const divList = dom.find('.red');
console.log(divList);
dom.each(divList, (n)=> console.log(n));