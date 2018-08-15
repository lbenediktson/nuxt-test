import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#048BA8',
    accent: '#022F40',
    secondary: '#034C5C', // a color that is not in the material colors palette
    info: '#5BC0EB',
    warning: '#FFC857',
    error: '#C5283D',
    success: '#5FAD56'
  }
})
