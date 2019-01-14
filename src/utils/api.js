import $http from 'axios'
import constant from './constant'
import qs from 'qs'
import vue from 'vue'
import router from '../routes'

$http.defaults.baseURL = constant.SERVER_BASE_URL
$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

$http.defaults.headers.scfcc = window.localStorage.getItem('scfcc')
$http.defaults.headers.scfcu = window.localStorage.getItem('scfcu')

function get() {
}

function post() {
}

export default {
  get,
  post
}