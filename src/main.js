// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// import require function
import './style';

import vuex from 'vuex';
import vueStore from './store';
import backend from './api';

import bootstrapVue from 'bootstrap-vue';

import lodash from 'lodash';
import vueLodash from 'vue-lodash';

import vueBreadcrumbs from 'vue2-breadcrumbs';
import vuejsDialog from 'vuejs-dialog';

import elementUI from 'element-ui';
import localeLang from 'element-ui/lib/locale/lang/en';

import numeral from 'numeral';
import vueModal from 'vue-js-modal';

import vueCookies from 'vue-cookies';

import vueMasonry from 'vue-masonry-css';
import moment from 'moment';

import vueHighcharts from 'vue-highcharts';
import highcharts from 'highcharts';
import loadStock from 'highcharts/modules/stock';
import loadMap from 'highcharts/modules/map';
import loadDrilldown from 'highcharts/modules/drilldown';
import loadHighchartsMore from 'highcharts/highcharts-more';
import loadSolidGauge from 'highcharts/modules/solid-gauge';
import loadWordcloud from 'highcharts/modules/wordcloud';

Vue.use(vuex);
Vue.use(bootstrapVue);
Vue.use(vueLodash, lodash);
Vue.use(vueBreadcrumbs, vuejsDialog);
Vue.use(elementUI, localeLang);
Vue.use(vueModal, {
    dynamic: true
});
Vue.use(vueCookies);
Vue.use(vueMasonry);
Vue.use(moment);

loadStock(highcharts);
loadMap(highcharts);
loadDrilldown(highcharts);
loadHighchartsMore(highcharts);
loadWordcloud(highcharts);
loadSolidGauge(highcharts);
Vue.use(vueHighcharts, {
    highcharts
});
// import require function

// prototype function define

Vue.set(Vue.prototype, '_', _);

Vue.prototype.$numeral = numeral;

Vue.prototype.$api = function(val) {
    return _.get(backend, val);
};

Vue.prototype.$nl2br = function(val) {
    return val.replace(/\n/g, '<br />');
};

Vue.prototype.$icon = function(val, valclass) {
    return `<i class='fa fa-${val} ${valclass}' aria-hidden='true'></i>`;
};

Vue.prototype.$closeicon = function(valclass) {
    return `<i class='el-message-box__close el-icon-close ${valclass}'></i>`;
};

Vue.prototype.$dropTips = function(msg, type) {
    let self = this;
    if (type === 'success' || type === 'warning') {
        self.$message({
            message: msg,
            type: type
        });
    };
    if (type === 'error') {
        self.$message.error({
            message: msg
        });
    };
    if (type === 'normal') {
        self.$message({
            message: msg
        });
    };
};

Vue.prototype.$popModal = function(name) {
    let self = this;
    self.$modal.show(name);
};

Vue.prototype.$closeModal = function(name) {
    let self = this;
    self.$modal.hide(name);
};

Vue.prototype.$notifyTips = function(topic, msg, type) {
    let self = this;
    if (type === 'success' || type === 'warning') {
        self.$notify({
            title: topic,
            message: msg,
            type: type
        });
    };
    if (type === 'info') {
        self.$notify.info({
            title: topic,
            message: msg
        });
    };
    if (type === 'error') {
        self.$notify.error({
            title: topic,
            message: msg
        });
    };
};

Vue.prototype.$returnDateTime = function(days = 0, dateFormat = 'YYYY-MM-DD') {
    return moment().add(days, 'days').format(dateFormat);
};

Vue.prototype.$countDateRange = function(val) {
    let start = this.$callDate(String(_.dropRight(val)));
    let end = this.$callDate(String(_.drop(val)));
    let a = moment(start * 1000).format('MM/DD/YYYY');
    let b = moment(end * 1000).format('MM/DD/YYYY');
    var date1 = new Date(a);
    var date2 = new Date(b);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return (diffDays + 1);
};

// prototype function define

// highchart define
highcharts.setOptions({
    credits: {
        enabled: false
    }
});
// highchart define

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: vueStore,
    components: {
        App
    },
    template: '<App/>'
});
