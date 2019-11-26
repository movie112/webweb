<template>
    <div id="tempone">
        <hi>여기는 tempone입니다.</hi>
        <p>전달된 파라미터: {{tempParam}}</p>   <!-- 저장위함 -->
    </div>
</template>

<script>
export default {
    name: "tempone",

    computed:{
        tempParam(){
            return this.$route.params.one_param;
        }
    }
};
</script>