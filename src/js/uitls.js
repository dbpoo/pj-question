/**
 * 获取地址参数(百度)
 *
 * @returns
 */
function getUrlPar(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

export { getUrlPar };
