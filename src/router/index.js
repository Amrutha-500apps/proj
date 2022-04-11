import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import question6 from '../components/question6'
//import question7 from '../components/question7'
//import question4 from '../components/question4'
//import question3 from '../components/question3'
//import questioN5 from '../components/questioN5'


 Vue.use(Router)
const routes = [
    {
        path:'/',
        name:'Home',
        component:HelloWorld,
    },
   {
   path:'/question6',
   name:'Hom',
   component:question6
    },
 //{
  // path:'/question7',
   //name:'Homl',
  //component:question7
  //},
  //* {
  //  path:'/question4',
  // name:'Homm',
   // component:question4
  // },
  // {
   //path:'/question3',
   // name:'sample',
    //component:question3
 // },
    /*{
   path:'/questioN5',
    name:'Homy',
    component:questioN5
    },*/

]
let router = new Router({routes})
export default router