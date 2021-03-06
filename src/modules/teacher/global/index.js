import Vue from 'vue'

/* -------------------------初始化多语言----------------------------- */
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import locales from '../locales'
Vue.use(VueI18n)

/* inject i18n 5.0版本才有Vue.locale(lang, locales[lang]) 否则报错*/
const browserLanguage = (window.navigator.language || window.navigator.browserLanguage).split('-')[0]
const lang = Cookies.get('lang') || (browserLanguage in locales ? browserLanguage : 'en')
Vue.config.lang = lang

Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang])
})


/* ------------------------挂载到vue实例------------------------------ */
import { $apis, $utils, $document, $auth, $lodash } from '@helper'

Vue.prototype.$_ = $lodash
Vue.prototype.$apis = $apis
Vue.prototype.$utils = $utils
Vue.prototype.$auth = $auth
Vue.prototype.$document = $document

import Filters from '../filters'
for (let key in Filters) {
  Vue.filter(key, Filters[key])
}

/* ------------------------Vue Global Components------------------------------ */

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Icon from '@components/Icon/index.js'
Vue.component('icon', Icon)

