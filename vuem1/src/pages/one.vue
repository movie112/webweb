<template>
    <div id="one">
        <hi>여기는 페이지1입니다.</hi>
        <button @click="pass_param()">파라미터 전달하기</button> <!-- 클릭하면 함수 실행 -->
    </div>
</template>

<script>
export default {
    name: "one",
    methods: {  //함수 정의 영역
        pass_param(){
            this.$route.push({  //name의 p로 이동하기 위함
                name: "tempone",
                params: {one_param: "one에서 tempone으로 파라미터 전달"}
            });
        }
    }
};
</script>