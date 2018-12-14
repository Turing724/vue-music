import Vue from 'vue';
import Router from 'vue-router';
import Recommend from 'components/Recommend';
import Singer from 'components/Singer';
import Rank from 'components/Rank';
import Search from 'components/Search';
import SingerDetail from 'components/SingerDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Recommend
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
});
