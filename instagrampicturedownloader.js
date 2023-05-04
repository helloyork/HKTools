  (async () => {
    let download = (src) => {
      if (typeof src == "string") { fetch(src).then(response => response.blob()).then(blob => { const a = document.createElement('a'); a.href = window.URL.createObjectURL(blob); a.download = 'image.jpg'; document.body.appendChild(a); a.click(); a.remove(); }) }
      else { return false };
    };
    let output = (() => {
      let output = [];
      document.querySelectorAll('a[href*="/p/"]').forEach(v=>output.push(`${v}media?size=l`))
      return Array.from(new Set(output));;
    })()
    try {
      for (let i = 0; i < output.length; i++) {
        download(output[i]);
      }
    } catch (err) { alert(`尝试获取资源时出错,报错内容:${err}`); }
  }
  )()
