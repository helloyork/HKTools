(() => {
  let download = (src) => {
    if (typeof src == "string") { fetch(src).then(response => response.blob()).then(blob => { const a = document.createElement('a'); a.href = window.URL.createObjectURL(blob); a.download = 'video.mp4'; document.body.appendChild(a); a.click(); a.remove(); }) }
    else { return false };
  };
  const lib = {
    "www.aliexpress.us": () => {
      return document.querySelector('.video-wrap').firstChild.src;
    },
    "detail.tmall.com": () => { return document.querySelectorAll('.lib-video')[1].src },
    "item.taobao.com": () => { return document.querySelectorAll('.lib-video')[1].childNodes[0].src }
  };
  let target = Object.keys(lib).filter(v => (new URL(location.href)).host.includes(v));
  if (target.length) {
    if (typeof lib[target[0]]() == "string") { try { download(lib[target[0]]()) } catch (err) { alert(`尝试获取资源时出错,报错内容:${err}`); } }
    else alert('当前网页不存在相关爬取工具');
  } else alert('当前网页不存在相关爬取工具');
})()
