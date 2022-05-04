"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[61011],{5265:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-a45629b8",path:"/devices/TS0601_motion_sensor.html",title:"TuYa TS0601_motion_sensor control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_motion_sensor control via MQTT",description:"Integrate your TuYa TS0601_motion_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"O_sensitivity (enum)",slug:"o-sensitivity-enum",children:[]},{level:3,title:"V_sensitivity (enum)",slug:"v-sensitivity-enum",children:[]},{level:3,title:"Led_status (enum)",slug:"led-status-enum",children:[]},{level:3,title:"Vacancy_delay (numeric)",slug:"vacancy-delay-numeric",children:[]},{level:3,title:"Light_on_luminance_prefer (numeric)",slug:"light-on-luminance-prefer-numeric",children:[]},{level:3,title:"Light_off_luminance_prefer (numeric)",slug:"light-off-luminance-prefer-numeric",children:[]},{level:3,title:"Mode (enum)",slug:"mode-enum",children:[]},{level:3,title:"Luminance_level (numeric)",slug:"luminance-level-numeric",children:[]},{level:3,title:"Reference_luminance (numeric)",slug:"reference-luminance-numeric",children:[]},{level:3,title:"Vacant_confirm_time (numeric)",slug:"vacant-confirm-time-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_motion_sensor.md",git:{updatedTime:1651687233e3}}},97111:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const o=(0,i(66252).uE)('<h1 id="tuya-ts0601-motion-sensor" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-motion-sensor" aria-hidden="true">#</a> TuYa TS0601_motion_sensor</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_motion_sensor</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Human presence sensor AIR</td></tr><tr><td>Exposes</td><td>occupancy, o_sensitivity, v_sensitivity, led_status, vacancy_delay, light_on_luminance_prefer, light_off_luminance_prefer, mode, luminance_level, reference_luminance, vacant_confirm_time, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0601_motion_sensor.jpg" alt="TuYa TS0601_motion_sensor"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="o-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#o-sensitivity-enum" aria-hidden="true">#</a> O_sensitivity (enum)</h3><p>O-Sensitivity mode. Value can be found in the published state on the <code>o_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;o_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>sensitive</code>, <code>normal</code>, <code>cautious</code>.</p><h3 id="v-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#v-sensitivity-enum" aria-hidden="true">#</a> V_sensitivity (enum)</h3><p>V-Sensitivity mode. Value can be found in the published state on the <code>v_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;v_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>speed_priority</code>, <code>normal_priority</code>, <code>accuracy_priority</code>.</p><h3 id="led-status-enum" tabindex="-1"><a class="header-anchor" href="#led-status-enum" aria-hidden="true">#</a> Led_status (enum)</h3><p>Led status switch. Value can be found in the published state on the <code>led_status</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_status&quot;: NEW_VALUE}</code>. The possible values are: <code>ON</code>, <code>OFF</code>.</p><h3 id="vacancy-delay-numeric" tabindex="-1"><a class="header-anchor" href="#vacancy-delay-numeric" aria-hidden="true">#</a> Vacancy_delay (numeric)</h3><p>Vacancy delay. Value can be found in the published state on the <code>vacancy_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;vacancy_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>sec</code>.</p><h3 id="light-on-luminance-prefer-numeric" tabindex="-1"><a class="header-anchor" href="#light-on-luminance-prefer-numeric" aria-hidden="true">#</a> Light_on_luminance_prefer (numeric)</h3><p>Light-On luminance prefer. Value can be found in the published state on the <code>light_on_luminance_prefer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_on_luminance_prefer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>.</p><h3 id="light-off-luminance-prefer-numeric" tabindex="-1"><a class="header-anchor" href="#light-off-luminance-prefer-numeric" aria-hidden="true">#</a> Light_off_luminance_prefer (numeric)</h3><p>Light-Off luminance prefer. Value can be found in the published state on the <code>light_off_luminance_prefer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_off_luminance_prefer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum" aria-hidden="true">#</a> Mode (enum)</h3><p>Working mode. Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>general_model</code>, <code>temporaty_stay</code>, <code>basic_detection</code>, <code>sensor_test</code>.</p><h3 id="luminance-level-numeric" tabindex="-1"><a class="header-anchor" href="#luminance-level-numeric" aria-hidden="true">#</a> Luminance_level (numeric)</h3><p>Luminance level. Value can be found in the published state on the <code>luminance_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="reference-luminance-numeric" tabindex="-1"><a class="header-anchor" href="#reference-luminance-numeric" aria-hidden="true">#</a> Reference_luminance (numeric)</h3><p>Reference luminance. Value can be found in the published state on the <code>reference_luminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="vacant-confirm-time-numeric" tabindex="-1"><a class="header-anchor" href="#vacant-confirm-time-numeric" aria-hidden="true">#</a> Vacant_confirm_time (numeric)</h3><p>Vacant confirm time. Value can be found in the published state on the <code>vacant_confirm_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',27),a={},n=(0,i(83744).Z)(a,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);