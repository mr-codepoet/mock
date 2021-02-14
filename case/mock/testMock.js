var Mock = require('mockjs')

var obj = Mock.mock({
    id:"@id()",
    username:"@cname()",
    date:"@date()",
    ip:"@ip()"
})
// 输出结果
console.log(obj)