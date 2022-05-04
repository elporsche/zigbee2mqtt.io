"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10701],{35011:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-3371f1b0",path:"/devices/HC-SLM-1.html",title:"Home Control AS HC-SLM-1 control via MQTT",lang:"en-US",frontmatter:{title:"Home Control AS HC-SLM-1 control via MQTT",description:"Integrate your Home Control AS HC-SLM-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-07-01T19:41:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HC-SLM-1.md",git:{updatedTime:1651687233e3}}},65374:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const d=(0,o(66252).uE)('<h1 id="home-control-as-hc-slm-1" tabindex="-1"><a class="header-anchor" href="#home-control-as-hc-slm-1" aria-hidden="true">#</a> Home Control AS HC-SLM-1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HC-SLM-1</td></tr><tr><td>Vendor</td><td>Home Control AS</td></tr><tr><td>Description</td><td>Heimgard (Wattle) door lock pro</td></tr><tr><td>Exposes</td><td>lock (state, lock_state), battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HC-SLM-1.jpg" alt="Home Control AS HC-SLM-1"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),a={},i=(0,o(83744).Z)(a,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);