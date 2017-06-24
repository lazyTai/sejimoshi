var b = (function () {
    Event.listen('showJson', function (json) {
        document.querySelector('.show').innerHTML = JSON.stringify(json)
    })
})()