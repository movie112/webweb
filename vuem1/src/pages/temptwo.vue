<template>
    <div id="temptwo">
        <hi>여기는 temptwo입니다.</hi>
        <p>전달받은 쿼리: {{two_query}}</p>
    </div>
</template>

<script>
export default {
    name: "temptwo",

    mouted(){   // 페이지가 마운트돨 떄 실행되는 것 정의 영역
        this.two_query -this.$route.query.temp_query;
    },

    data:() => ({
        two_query:"쿼리를 전달받을 변수"   // 변수 선언
    })
};
</script>