
/* 
*  computed_rem 计算rem
*  @params picture_width: 设计图的宽度 number ( 750 )
*  @params rem_width    : 使用的rem宽度 number ( 100 ) 
*  return void
*/
const computed_rem = ( picture_width = 750, rem_width = 100 ) => {
  let html = document.documentElement
  html.style.fontSize = html.clientWidth / ( picture_width / ( 2 * rem_width ) ) + 'px'

  window.onresize = () => {
      let html = document.documentElement
      html.style.fontSize = html.clientWidth / ( picture_width / ( 2 * rem_width ) ) + 'px'    
  }
}

export default computed_rem

//获取html元素
// var html = document.getElementsByTagName('html')[0]; 
// //屏幕的宽度（兼容处理）
// var w = document.documentElement.clientWidth || document.body.clientWidth;
// //750这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
// html.style.fontSize = w / 750 + "px";