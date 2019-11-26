<template>
    <div id="app">
        <tempcom></tempcom>  <!-- 불러냄 -->
        <router-view></router-view>
    </div>
</template>

<script>
import tempcom from "./components/tempcom";
 // import를 통해 파일 불러오기
export default {
    name:"app",
    
    components: {    //컴포넌트 사용 알림
        tempcom
    }, 
    data(){
        return {};
    }
};
</script>
