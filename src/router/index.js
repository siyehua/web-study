import CssBase from "@/components/css/CssBase";
import {createRouter, createWebHistory} from 'vue-router'
import HtmlBase from "@/components/html/HtmlBase";
import CssText from "@/components/css/CssText";
import CssLayout from "@/components/css/CssLayout";
import CssBfc from "@/components/css/CssBfc";
import MarginSome from "@/components/css/MarginSome";
import ImageElement from "@/components/html/ImageElement";
import CssPosition from "@/components/css/CssPosition";
import CssViewPager from "@/components/css/CssViewPager";
import HtmlSpace from "@/components/html/HtmlSpace";
import ToolsBase from "@/components/tools/ToolsBase";
import CssIconfont from "@/components/css/CssIconfont";
import CssJdTopMenu from "@/components/css/CssJdTopMenu";
import PuBuLayout from "@/components/css/PuBuLayout";
import HtmlTable from "@/components/html/HtmlTable";
import HtmlForm from "@/components/html/HtmlForm";
import MiPage from "@/components/example/MiPage";
import FlexLayout from "@/components/css/FlexLayout";
import TransitionSetting from "@/components/css/TransitionSetting";
import TransformPosition from "@/components/css/TransformPosition";
import LessBase from "@/components/less/LessBase";
import JsBase from "@/components/js/JsBase";
import StringUse from "@/components/js/StringUse";
import DateUse from "@/components/js/DateUse";
import ArrayUse from "@/components/js/ArrayUse";
import ObjectUse from "@/components/js/ObjectUse";
import FunctionUse from "@/components/js/FunctionUse";
import ClassUse from "@/components/js/ClassUse";
import AsyncUse from "@/components/js/AsyncUse";
// import App from "@/App";

const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL), routes: [// {
        //     path: "/home", component: CssBase, meta: {
        //         //这里携带额外的参数给 to
        //     }, beforeEnter: (to, from, next) => {
        //         //给 home 单独的拦截器
        //         console.log("接到了跳转", to, from, next)
        //         next()  // 维持跳转
        //     }, children: [{
        //         path: "phone", component: ListView
        //     }, {
        //         path: "computer", component: ListView
        //     },],
        // },
        // {
        //     path:"/",component: App,
        // },
        {
            path: "/css/cssbase", component: CssBase,
        }, {
            path: "/css/csstext", component: CssText,
        }, {
            path: "/css/csslayout", component: CssLayout,
        }, {
            path: "/css/cssposition", component: CssPosition,
        }, {
            path: "/css/flexlayout", component: FlexLayout,
        }, {
            path: "/css/cssviewpager", component: CssViewPager,
        }, {
            path: "/css/cssbfc", component: CssBfc,
        }, {
            path: "/css/marginsome", component: MarginSome,
        }, {
            path: "/css/cssiconfont", component: CssIconfont,
        }, {
            path: "/css/cssjdtopmenu", component: CssJdTopMenu,
        }, {
            path: "/css/transitionsetting", component: TransitionSetting,
        }, {
            path: "/css/transformposition", component: TransformPosition,
        }, {
            path: "/css/pubulayout", component: PuBuLayout,
        }, {
            path: "/less/lessbase", component: LessBase,
        }, {
            path: "/html/htmlbase", component: HtmlBase,
        }, {
            path: "/html/htmlspace", component: HtmlSpace,
        }, {
            path: "/html/imageelement", component: ImageElement,
        }, {
            path: "/html/htmltable", component: HtmlTable,
        }, {
            path: "/html/htmlform", component: HtmlForm,
        }, {
            path: "/example/mipage", component: MiPage,
        }, {
            path: "/tools/toolsbase", component: ToolsBase,
        }, {
            path: "/js/jsbase", component: JsBase,
        }, {
            path: "/js/stinguse", component: StringUse,
        }, {
            path: "/js/dateuse", component: DateUse,
        }, {
            path: "/js/arrayuse", component: ArrayUse,
        }, {
            path: "/js/objectuse", component: ObjectUse,
        }, {
            path: "/js/functionuse", component: FunctionUse,
        }, {
            path: "/js/classuse", component: ClassUse,
        }, {
            path: "/js/asyncuse", component: AsyncUse,
        },

    ]
})

// 路由全局拦截器
// router.beforeEach((to, from, next) => {
//     if (to.meta.isAuth) {
//         //需要校验
//         console.log(from, next)
//         next()
//     }
//     next()
// })
//https://www.baidu.com/#fefef # 后面的都是 hash 值
//https://www.baidu.com/#fefef # 后面的都是 hash 值

export default router