import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import RegisterSeller from '@/components/RegisterSeller'
import SellerListing from '@/components/SellerListings'
import SellerStore from '@/components/SellerStore'
import ManageEscrow from '@/components/ManageEscrow'

Vue.use(VueRouter)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'SellerListing',
        component: SellerListing
      },
      {
        path: '/register',
        name: 'RegisterSeller',
        component: RegisterSeller
      },
      {
        path: '/app/store/:seller',
        name: 'SellerStore',
        component: SellerStore,
        props: {
          header: true,
          content: true
       },
      },
      {
        path: '/app/escrow',
        name: 'ManageEscrow',
        component: ManageEscrow
      },
    ]
  })