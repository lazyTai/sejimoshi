/*var createMask=function () {
    return document.body.appendChild(document.createElement("div"))
}*/

/*var createMask=function () {
    var mask;
    return function () {
        return mask||(mask=document.body.appendChild(document.createElement('div')))
    }
}()*/
// singleton包装器.
var singleton = function (fn) {
    var result
    return function () {
        return result || (result =fn.apply(this,arguments))
    }
}
var createMask = singleton(function () {
    return document.body.appendChild(document.createElement('div'))
})

$('button').click(function () {
    var mask=createMask();
    // mask.show();
})

