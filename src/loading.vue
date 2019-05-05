<template>
    <transition name="loading">
        <div class="loading" v-show="visible">
            <div class="loading-wrapper">
                <div class="spinner-icon"></div>
                <span class="loading-text" v-show="title">{{title}}</span>
            </div>
            <div v-if="mask" class="loading-mask" @touchmove.stop.prevent></div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            mask: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
.loading{
    transition: opacity .2s linear;
}
.loading-wrapper{
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background: rgba(17, 17, 17, 0.7);
    color: white;
    box-sizing: border-box;
    text-align: center;
    padding: 20px;
    z-index: 3000;
}
.loading-text{
    display: block;
    max-width: 122px;
    color: #fff;
    line-height: 22px;
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
}
.loading-spin{
    display: inline-block;
    text-align: center;
}
.loading-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: transparent;
    z-index: 3000;
}
.spinner-icon{
    width: 100%;
    height: 50px;
    background-image: url('./loading.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px 40px;
    transform-origin: 50% 50%;
}
.loading-enter, .loading-leave-active {
    opacity: 0;
}
</style>