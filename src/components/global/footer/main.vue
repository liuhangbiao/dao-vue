//TODO: footer组件
<template>
    <div class="footer">
        {{mes}}
    </div>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            mes: "（尾部）待完善内容..."

        };
    },
    mounted() {},
    methods: {}
};
</script>
<style lang="less" scoped>
.footer {
    position: relative;
    background: #5c5c5c;
}
</style>