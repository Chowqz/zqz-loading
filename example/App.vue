<template>
    <div id="app">
        <button @click="showLoading">loading</button>
    </div>
</template>

<script>
import Loading from '../src/index.js'

export default {
    name: 'app',
    data() {
        return {
            
        }
    },
    methods: {
        showLoading() {
            Loading.show({
                title: '数据加载中',
                mask: true
            });
            setTimeout(this.hideLoading, 3000)
        },
        hideLoading() {
            Loading.hide();
        }
    }
}

</script>
<style scoped>
</style>
