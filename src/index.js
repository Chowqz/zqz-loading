import Vue from 'vue';
import loading from './loading.vue'

const Loading = Vue.extend(loading);

let instance;

export default {
    show(options = {}) {
        if(!instance) {
            instance = new Loading({
                el: document.createElement('div')
            });
        }
        if(instance.visible) return;
        instance.title = options.title || '';
        instance.mask = options.mask || false;
        document.body.appendChild(instance.$el);
        Vue.nextTick(() => {
            instance.visible = true;
        })
    },
    hide(callback) {
        if(instance) {
            instance.visible = false
        }
    }
}