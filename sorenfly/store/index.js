import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      showDrawer: false,
      navigations: {
        home: {
          title: 'Home',
          icon: 'home',
          link: '/'
        },
        pricing: {
          title: 'Pricing',
          icon: 'attach_money',
          link: '/pricing'
        },
        about: {
          title: 'About us',
          icon: 'supervisor_account',
          link: '/about'
        },
        contact: {
          title: 'Contact',
          icon: 'chat',
          link: 'contact'
        }
      }
    }
  })
}

export default store
