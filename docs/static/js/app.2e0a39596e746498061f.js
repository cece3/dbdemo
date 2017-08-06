webpackJsonp([1],{231:function(e,s,t){function a(e){t(331)}var n=t(57)(t(256),t(478),a,"data-v-2332dc5e",null);e.exports=n.exports},234:function(e,s,t){"use strict";var a=t(4),n=t(481),r=t(231),i=t.n(r);a.default.use(n.a),s.a=new n.a({routes:[{path:"/",name:"BitCoinCurrencyTable",component:i.a}]})},235:function(e,s,t){function a(e){t(332)}var n=t(57)(t(255),t(480),a,null,null);e.exports=n.exports},253:function(e,s,t){"use strict";var a=t(472);t.n(a);s.a=a.Line.extend({data:function(){return{datacollection:{labels:[],datasets:[{label:"Transactions",backgroundColor:"#f87979",data:[]}]}}},mounted:function(){var e={responsive:!0,scales:{xAxes:[{ticks:{autoSkip:!0,maxTicksLimit:6},scaleLabel:{display:!0}}],yAxes:[{scaleLabel:{display:!0},ticks:{min:15e4,max:4e5}}]}};this.gettransactions(),this.renderChart(this.datacollection,e)},methods:{gettransactions:function(){var e=this,s=void 0;return s="https://api.blockchain.info/charts/n-transactions?cors=true",console.log("gettransactions begin"),fetch(""+s).then(function(s){if(200!==s.status)return console.log("gettransactions() bad response"+s.status),void console.log(s);var t=s.json();console.log(t),t.then(function(s){e.transactiondata=s.values;for(var t=[],a=0;a<s.values.length;a++){var n=s.values[a].x,r=s.values[a].y;console.log("adding "+a+" of "+r),e.datacollection.labels.push(n),e.datacollection.datasets[0].data.push(r)}e._chart.update(),console.log(t+" and existing transactions "+e.datacollection.datasets.data)})}).catch(function(e){console.log("gettransactions caught error"),console.log(e.data)}),0}}})},254:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(4),n=t(233),r=t.n(n),i=t(235),o=t.n(i),l=t(234);a.default.config.productionTip=!1,new a.default({el:"#app",router:l.a,axios:r.a,template:"<App/>",components:{App:o.a}})},255:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(231),n=t.n(a),r=t(253);s.default={name:"app",components:{BitCoinCurrencyTable:n.a,"app-chart":r.a}}},256:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(477),n=t.n(a);s.default={name:"bitcoincurrencytable",components:{CurrencyTableRow:n.a},data:function(){return{show:!0,datacolor:"datacolor-initial",msg:"bitcoincurrency table",refreshedtime:"",lastupdated:"",currencydata:{USD:{"15m":2540,last:2540,buy:2540,sell:2539.42,symbol:"$"},AUD:{"15m":3197.69,last:3197.69,buy:3197.69,sell:3196.96,symbol:"$"}},newcurrencydata:{USD:{"15m":2540,last:2544,buy:2540,sell:2539.42,symbol:"$"},AUD:{"15m":3197.69,last:314447.69,buy:3197.69,sell:3196.96,symbol:"$"}}}},mounted:function(){this.getcurrencydata()},methods:{getcurrencydata:function(){var e=this,s=void 0;return s="https://blockchain.info/ticker",fetch(""+s).then(function(s){if(200!==s.status)return void console.log("getcurrencydata() bad response");var t=s.json();console.log(t),t.then(function(s){console.log("currency data success"+s.USD.buy),e.currencydata=s;var t=new Date;e.refreshedtime=(t.getHours()<10?"0":"")+t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes()+":"+(t.getSeconds()<10?"0":"")+t.getSeconds(),e.show=!0,e.datacolor="datacolor"})}).catch(function(){console.log("caught error")}),0},refreshcurrencydata:function(){this.datacolor="datacolor-initial",this.getcurrencydata()}}}},257:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"currencytablerow",props:["index","last","currency","sell","buy"],data:function(){return{msg:"test"}}}},331:function(e,s){},332:function(e,s){},461:function(e,s,t){function a(e){return t(n(e))}function n(e){var s=r[e];if(!(s+1))throw new Error("Cannot find module '"+e+"'.");return s}var r={"./af":116,"./af.js":116,"./ar":123,"./ar-dz":117,"./ar-dz.js":117,"./ar-kw":118,"./ar-kw.js":118,"./ar-ly":119,"./ar-ly.js":119,"./ar-ma":120,"./ar-ma.js":120,"./ar-sa":121,"./ar-sa.js":121,"./ar-tn":122,"./ar-tn.js":122,"./ar.js":123,"./az":124,"./az.js":124,"./be":125,"./be.js":125,"./bg":126,"./bg.js":126,"./bn":127,"./bn.js":127,"./bo":128,"./bo.js":128,"./br":129,"./br.js":129,"./bs":130,"./bs.js":130,"./ca":131,"./ca.js":131,"./cs":132,"./cs.js":132,"./cv":133,"./cv.js":133,"./cy":134,"./cy.js":134,"./da":135,"./da.js":135,"./de":138,"./de-at":136,"./de-at.js":136,"./de-ch":137,"./de-ch.js":137,"./de.js":138,"./dv":139,"./dv.js":139,"./el":140,"./el.js":140,"./en-au":141,"./en-au.js":141,"./en-ca":142,"./en-ca.js":142,"./en-gb":143,"./en-gb.js":143,"./en-ie":144,"./en-ie.js":144,"./en-nz":145,"./en-nz.js":145,"./eo":146,"./eo.js":146,"./es":148,"./es-do":147,"./es-do.js":147,"./es.js":148,"./et":149,"./et.js":149,"./eu":150,"./eu.js":150,"./fa":151,"./fa.js":151,"./fi":152,"./fi.js":152,"./fo":153,"./fo.js":153,"./fr":156,"./fr-ca":154,"./fr-ca.js":154,"./fr-ch":155,"./fr-ch.js":155,"./fr.js":156,"./fy":157,"./fy.js":157,"./gd":158,"./gd.js":158,"./gl":159,"./gl.js":159,"./gom-latn":160,"./gom-latn.js":160,"./he":161,"./he.js":161,"./hi":162,"./hi.js":162,"./hr":163,"./hr.js":163,"./hu":164,"./hu.js":164,"./hy-am":165,"./hy-am.js":165,"./id":166,"./id.js":166,"./is":167,"./is.js":167,"./it":168,"./it.js":168,"./ja":169,"./ja.js":169,"./jv":170,"./jv.js":170,"./ka":171,"./ka.js":171,"./kk":172,"./kk.js":172,"./km":173,"./km.js":173,"./kn":174,"./kn.js":174,"./ko":175,"./ko.js":175,"./ky":176,"./ky.js":176,"./lb":177,"./lb.js":177,"./lo":178,"./lo.js":178,"./lt":179,"./lt.js":179,"./lv":180,"./lv.js":180,"./me":181,"./me.js":181,"./mi":182,"./mi.js":182,"./mk":183,"./mk.js":183,"./ml":184,"./ml.js":184,"./mr":185,"./mr.js":185,"./ms":187,"./ms-my":186,"./ms-my.js":186,"./ms.js":187,"./my":188,"./my.js":188,"./nb":189,"./nb.js":189,"./ne":190,"./ne.js":190,"./nl":192,"./nl-be":191,"./nl-be.js":191,"./nl.js":192,"./nn":193,"./nn.js":193,"./pa-in":194,"./pa-in.js":194,"./pl":195,"./pl.js":195,"./pt":197,"./pt-br":196,"./pt-br.js":196,"./pt.js":197,"./ro":198,"./ro.js":198,"./ru":199,"./ru.js":199,"./sd":200,"./sd.js":200,"./se":201,"./se.js":201,"./si":202,"./si.js":202,"./sk":203,"./sk.js":203,"./sl":204,"./sl.js":204,"./sq":205,"./sq.js":205,"./sr":207,"./sr-cyrl":206,"./sr-cyrl.js":206,"./sr.js":207,"./ss":208,"./ss.js":208,"./sv":209,"./sv.js":209,"./sw":210,"./sw.js":210,"./ta":211,"./ta.js":211,"./te":212,"./te.js":212,"./tet":213,"./tet.js":213,"./th":214,"./th.js":214,"./tl-ph":215,"./tl-ph.js":215,"./tlh":216,"./tlh.js":216,"./tr":217,"./tr.js":217,"./tzl":218,"./tzl.js":218,"./tzm":220,"./tzm-latn":219,"./tzm-latn.js":219,"./tzm.js":220,"./uk":221,"./uk.js":221,"./ur":222,"./ur.js":222,"./uz":224,"./uz-latn":223,"./uz-latn.js":223,"./uz.js":224,"./vi":225,"./vi.js":225,"./x-pseudo":226,"./x-pseudo.js":226,"./yo":227,"./yo.js":227,"./zh-cn":228,"./zh-cn.js":228,"./zh-hk":229,"./zh-hk.js":229,"./zh-tw":230,"./zh-tw.js":230};a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id=461},476:function(e,s){e.exports={_from:"vue-chartjs",_id:"vue-chartjs@2.7.2",_inBundle:!1,_integrity:"sha512-jo1QIez0+iNxIp9wfByRJwVlWy4uS25RV3PisFIulgbUT8rkwIX0kwdT0YXCTFqq7UjR2UMc1tMHbUYq6I7rQA==",_location:"/vue-chartjs",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"vue-chartjs",name:"vue-chartjs",escapedName:"vue-chartjs",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-2.7.2.tgz",_shasum:"b81e5386fb270c84b0db6f02e0b077f40a57ff6a",_spec:"vue-chartjs",_where:"/Users/christina/Documents/workspace/bitcoin",author:{name:"Jakub Juszczak",email:"jakub@posteo.de"},babel:{presets:["es2015"]},browserify:{transform:["babelify"]},bugs:{url:"https://github.com/apertureless/vue-chartjs/issues"},bundleDependencies:!1,contributors:[{name:"Thorsten Lünborg",url:"https://github.com/LinusBorg"},{name:"Juan Carlos Alonso",url:"https://github.com/jcalonso"}],dependencies:{lodash:"^4.17.4"},deprecated:!1,description:"vue.js wrapper for chart.js",devDependencies:{"babel-cli":"^6.24.1","babel-core":"^6.25.0","babel-loader":"^7.0.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.24.1","babel-runtime":"^6.23.0",chai:"^3.5.0","chart.js":"^2.6.0",chromedriver:"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0",eslint:"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.15.2","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.10.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0","isparta-loader":"^2.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4",karma:"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"1.8.1",lolex:"^1.6.0",mocha:"^3.1.0",nightwatch:"^0.9.14",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.13","selenium-server":"^3.3.1",shelljs:"^0.7.7",sinon:"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8",vue:"^2.4.2","vue-hot-reload-api":"^2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^12.2.2","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.4.2",webpack:"^1.13.2","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"1.1.1"},engines:{node:">=6.9.0"},files:["src","dist","es"],greenkeeper:{ignore:["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},homepage:"http://vue-chartjs.org","jsnext:main":"es/index.js",keywords:["ChartJs","Vue","Visualisation","Wrapper","Charts"],license:"MIT",main:"dist/vue-chartjs.js",maintainers:[{name:"Jakub Juszczak",email:"jakub@posteo.de",url:"http://www.jakubjuszczak.de"}],module:"es/index.js",name:"vue-chartjs",peerDependencies:{"chart.js":"^2.6.0",vue:"^2.4.2"},repository:{type:"git",url:"git+ssh://git@github.com/apertureless/vue-chartjs.git"},scripts:{build:"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es",dev:"node build/dev-server.js",e2e:"node test/e2e/runner.js",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs",prepublish:"yarn run lint && yarn run test && yarn run build",release:"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js && webpack --progress --hide-modules --config  ./build/webpack.release.full.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.full.min.js",test:"npm run unit",unit:"karma start test/unit/karma.conf.js --single-run"},unpkg:"dist/vue-chartjs.full.min.js",version:"2.7.2"}},477:function(e,s,t){var a=t(57)(t(257),t(479),null,null,null);e.exports=a.exports},478:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"col-xs-12 col-md-4"},[t("div",{staticClass:"panel panel-table"},[t("div",{staticClass:"panel-heading"},[t("h3",{staticClass:"panel-title"},[e._v("BitCoin Currency Table  \n")]),e._v(" "),t("div",{staticStyle:{"padding-left":"15px"}},[e._v("Last Updated:"),t("transition",{attrs:{name:"fade"}},[e.show?t("span",{staticStyle:{"margin-left":"9px"}},[e._v(e._s(e.refreshedtime))]):e._e()])],1),t("button",{staticClass:"btn-primary",staticStyle:{margin:"15px"},on:{click:[function(s){e.show=!1},e.refreshcurrencydata]}},[e._v("Refresh")])]),e._v(" "),t("div",{staticClass:"panel-body"},[t("div",{staticClass:"dataTables_wrapper form-inline no-footer",attrs:{id:"exampleTable1_wrapper"}},[t("table",{staticClass:"table dataTable no-footer",attrs:{id:"exampleTable1",role:"grid"}},[e._m(0),t("transition-group",{class:e.datacolor,attrs:{name:"currencydata",duration:3e3,tag:"tbody"}},e._l(e.currencydata,function(e,s){return t("currency-table-row",{key:s,attrs:{index:s,last:e.last,buy:e.buy,sell:e.sell}})}))],1)])])])])])},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("thead",[t("tr",{attrs:{role:"row"}},[t("th",{staticClass:"sorting",staticStyle:{width:"256px"},attrs:{tabindex:"0","aria-controls":"exampleTable1",rowspan:"1",colspan:"1","aria-label":"Industry: activate to sort column ascending"}},[e._v("Currency")]),t("th",{staticClass:"numeric sorting_asc",staticStyle:{width:"135px"},attrs:{tabindex:"0","aria-controls":"exampleTable1",rowspan:"1",colspan:"1","aria-sort":"ascending","aria-label":"Rank: activate to sort column descending"}},[e._v("Buy")]),t("th",{staticClass:"numeric sorting_asc",staticStyle:{width:"135px"},attrs:{tabindex:"0","aria-controls":"exampleTable1",rowspan:"1",colspan:"1","aria-sort":"ascending","aria-label":"Rank: activate to sort column descending"}},[e._v("Sell")]),t("th",{staticClass:"numeric sorting_asc",staticStyle:{width:"135px"},attrs:{tabindex:"0","aria-controls":"exampleTable1",rowspan:"1",colspan:"1","aria-sort":"ascending","aria-label":"Rank: activate to sort column descending"}},[e._v("Last")])])])}]}},479:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("tr",{staticClass:"even",attrs:{role:"row"}},[t("td",[e._v(e._s(e.index))]),e._v(" "),t("td",{staticClass:"numeric sorting_1"},[e._v("\n\t    "+e._s(e.buy))]),e._v(" "),t("td",{staticClass:"numeric sorting_1"},[e._v(e._s(e.sell))]),e._v(" "),t("td",{staticClass:"numeric sorting_1"},[e._v(e._s(e.last))])])},staticRenderFns:[]}},480:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"col-xs-12"},[t("div",{staticClass:"row"},[t("div",{attrs:{id:"app"}},[t("router-view")],1),e._v(" "),t("div",{staticClass:"col-xs-12 col-md-8",attrs:{id:""}},[t("div",{staticClass:"panel"},[e._m(0),e._v(" "),t("div",{staticClass:"panel-body"},[t("app-chart")],1)])])])])},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"panel-heading"},[t("h3",{staticClass:"panel-title"},[e._v("Important information")])])}]}}},[254]);
//# sourceMappingURL=app.2e0a39596e746498061f.js.map