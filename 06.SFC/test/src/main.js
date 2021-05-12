//エントリーファイル

import Vue from 'vue'
import App from './App.vue'

//developmentモードの切り替え
Vue.config.productionTip = false


//el:"#app"と同じ
new Vue({
  render: h => h(App),
}).$mount('#app')
