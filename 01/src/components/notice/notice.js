import Message from './message.js';

let instance;
// 单例模式
function notice({ duration = 1.5, content = '' }) {
    // 如果没有实例，新建一个
    // 如果有实例 复用
    instance = instance || Message.newInstance();
    instance.add({
        content: content,
        duration: duration
    });
}

export default {
    info (options) {
        return notice(options);
    }
}