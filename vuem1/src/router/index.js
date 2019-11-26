import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)  // vue 프로젝트에서 vue-router 사용 정의

//page import
import home from "../pages/home"
import one from "../pages/one"
import two from "../pages/two"
import three from "../pages/three"
import tempone from "../pages/tempone"
import temptwo from "../pages/temptwo"

export default new VueRouter({
    mode: "history",    // page 이동 기록 저장 모드
    // 라우터로 사용할 페이지 정의
    routes: [
        {path: "*", redirect: "/" },    // 존재하지 않는 페이지 접근 시 메인p로 이동
        {path: "/", name: "home", component:home},
        {path: "/one", name: "one", component:one},
        {path: "/two", name: "two", component:two},
        {path: "/three", name: "three", component:three},
        // 파라미터 전달, 파라미터 없다면 없는 p
        {path: "/one/tempone/:one_param", name: "tempone", component: tempone},
        {path: "/two/temptwo", name: "temptwo", component: temptwo}
    ],
    // 페이지 이동 시 화면이 좌측 상단으로 이동
    scrollBehavior: (to, from, savedPosition) =>{
        if(savedPosition) return savedPosition
        else{
            return {
                x: 0, y: 0
            }
        }
    }
})