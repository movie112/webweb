<template>  
    <div id="tempcom">
        <!-- <hi>여기는 component1 입니다.</hi> -->
        <hi>이제부터 여기는 HEADER입니다.</hi>
        <router-link to="/">HOME</router-link>
        <router-link to="/one">ONE</router-link>
        <router-link to="/two">TWO</router-link>
        <router-link to="/three">THREE</router-link>
    </div>
</template>

<script>
export default {
    name: "tempcom", 
    data() {
        return {};
    }
};
</script>