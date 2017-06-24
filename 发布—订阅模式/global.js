var Event=(function () {
    return {
        lisenList: {},
        listen: function (key, fn) {
            var self = this;
            if (!self.lisenList[key]) {
                self.lisenList[key] = []
            }
            self.lisenList[key].push(fn)
        },
        trigger: function () {
            var self = this;
            var key = Array.prototype.shift.call(arguments);
            for (var i = 0, fnItem = null; fnItem = self.lisenList[key][i]; i++) {
                fnItem.call(self, arguments[0])
            }
        },
        remove: function (key, fn) {/*fn代表函数之间也能判断是否相等  ===  */
            var self = this;
            var fns = self.lisenList[key];
            if (!fns) {
                return false
            }
            /*倒叙查询的关键是 ====self.lisenList[key].length-1====*/
            for (var i = self.lisenList[key].length-1, itemFn = null;
                 itemFn = self.lisenList[key][i];
                 i--) {
                if (itemFn === fn) {
                    /*删除*/
                    self.lisenList[key].splice(i, 1)
                }
            }
        }
    }
})()