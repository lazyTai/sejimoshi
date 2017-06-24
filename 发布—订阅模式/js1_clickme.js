var a = (function () {
    document.querySelector('.count').onclick = function () {
        Event.trigger('showJson', {msg: "你别点了，把这句话显示出来"})
    }
})()