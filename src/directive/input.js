const inputField =  {
  isFn: true, // important!
  bind: function (el, binding, vnode) {
    //console.log(el, binding, vnode)
    var s = JSON.stringify
    el.innerHTML = '<input type="'+s(binding.arg)+'" />'
  },
}
export default inputField