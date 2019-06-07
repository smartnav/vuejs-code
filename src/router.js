import Login from '@/layout/login.vue'
import Basiclayout from '@/layout/Basiclayout.vue'
import PageNotDefine from './layout/PageNotDefine.vue'

function Auth (to,from,next){
  if(window.localStorage.getItem('token'))
		return next()
	else
		return next({ path: '/login' })
}

const routes = [
  { path: '/login', component: Login},
  { path: '/', component: Basiclayout , beforeEnter: (to,from,next) => Auth(to,from,next),
    children: [
      {
        path: '',
        component: ()=>import('./template/dashboad.vue'),
        meta: {pathname:'Dashboard'},
        beforeEnter: (to,from,next) => Auth(to,from,next),
      },
      {
        path: 'hello',
        component: ()=>import('@/template/HelloWorld.vue'),
        meta: {pathname:'Hello'},
        beforeEnter: (to,from,next) => Auth(to,from,next)
      },
      {
        path: 'chart',
        component: ()=>import('@/template/chart.vue'),
        meta: {pathname:'Chart'},
        beforeEnter: (to,from,next) => Auth(to,from,next)
      },
      {
        path: 'setting',
        component: ()=>import('@/template/setting.vue'),
        meta: {pathname:'Setting'},
        beforeEnter: (to,from,next) => Auth(to,from,next)
      },
      
      { path: '*', component: PageNotDefine ,},
    ]
  },
]

export default routes