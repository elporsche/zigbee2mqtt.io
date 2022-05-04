"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81616],{91809:(e,t,i)=>{i.r(t),i.d(t,{data:()=>d});const d={key:"v-8221dfdc",path:"/devices/HG06337.html",title:"Lidl HG06337 control via MQTT",lang:"en-US",frontmatter:{title:"Lidl HG06337 control via MQTT",description:"Integrate your Lidl HG06337 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-12-01T19:02:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HG06337.md",git:{updatedTime:1651687233e3}}},71633:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const d=(0,i(66252).uE)('<h1 id="lidl-hg06337" tabindex="-1"><a class="header-anchor" href="#lidl-hg06337" aria-hidden="true">#</a> Lidl HG06337</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HG06337</td></tr><tr><td>Vendor</td><td>Lidl</td></tr><tr><td>Description</td><td>Silvercrest smart plug (EU, CH, FR, BS, DK)</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HG06337.jpg" alt="Lidl HG06337"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Perform a factory reset by holding down the switch on the plug continuously for 5 seconds. The LED will start blinking and the device will enter pairing mode.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),a={},o=(0,i(83744).Z)(a,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,d]of t)e[i]=d;return e}}}]);