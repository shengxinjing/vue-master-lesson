import Notice from './Notice.vue';
import Vue from 'vue';

Notice.newInstance = properties => {
    const props = properties || {};

    const Instance = new Vue({
        data: props,
        render :h=> <Notice props={props} />
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const notice = Instance.$children[0];

    return {
        add (noticeProps) {
            notice.add(noticeProps);
        },
        remove (name) {
            notice.remove(name);
        }
    }
};

export default Notice;