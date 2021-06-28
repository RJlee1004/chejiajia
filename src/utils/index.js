import Vue from "vue";
import "./vant";
import api from "../api";
import * as util from "../utils/util";
import "./func";
import "lib-flexible";
import FastClick from "fastclick";

FastClick.attach(document.body);

Vue.prototype.$api = api; // 全局serve
Vue.prototype.$util = util; // 全局方法

// TODO 上线删除
import VConsole from "vconsole/dist/vconsole.min.js";
const vConsole = new VConsole();
Vue.use(vConsole);
