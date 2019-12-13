//TODO: header组件
<template>
    <div class="header">
        {{mes}}
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            mes: "(头部)待完善内容..."

        };
    },
    mounted() {},
    methods: {}
};
</script>
<!-- lang="less" -->
<style  scoped>
.header {
    position: relative;
    background: #5c5c5c;
}
</style>