var util = require('util');
// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
var eventEmitter = require('events').EventEmitter;
//新建方法
var EventCenter = function() {
    // 继承父类方法
    eventEmitter.call(this);
};
// 继承
util.inherits(EventCenter, eventEmitter);
module.exports = new EventCenter;
