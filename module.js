 var name = 'foo module'

 function test() {
     console.log('1222')
 }
 class A {

 }

 export {
     name,
     test,
     A as a
 }
 export default name

 setTimeout(function() {
     name = 'ban'
 }, 1000)