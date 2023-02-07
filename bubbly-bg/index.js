document.addEventListener("DOMContentLoaded", function () { // 这个表示在html加载完成后执行
    bubbly({
        colorStart: '#fff4e6',
        colorStop: '#ffe9e4',
        blur:1,
        compose: 'source-over',
        bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
      });
})