import Vue from 'vue'
import App from './App.vue'
import VueVideoPlayer from './components/video-player'

// require videojs style
import 'video.js/dist/video-js.css'
import './components/video-player/custom-theme.css'

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
