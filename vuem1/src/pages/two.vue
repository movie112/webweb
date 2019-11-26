<template>
    <div id="two">
        <hi>여기는 페이지2입니다.</hi>
        <router-link to="/two/temptwo?temp_query=1">temptwo로 쿼리 보내기</router-link>
    </div>
</template>

<script>
export default {
    name: "two"
};
</script>