const HyperHTMLElement=(e=>class extends HTMLElement{static define(t){const i=this,a=i.prototype;(i.observedAttributes||[]).forEach(t=>{t in a||e(a,t.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),{configurable:!0,get(){return this.getAttribute(t)},set(e){this.setAttribute(t,e)}})});const n=a.attributeChangedCallback,r=!!n;if("created"in a){const t=a.created;e(a,"__init",{writable:!0,value:!0}),e(a,"attributeChangedCallback",{configurable:!0,value(e,i,a){this.__init&&(this.__init=!1,t.call(this)),r&&i!==a&&n.apply(this,arguments)}});const i=a.connectedCallback,l=!!i;e(a,"connectedCallback",{configurable:!0,value(){this.__init&&(this.__init=!1,this.created()),l&&i.apply(this,arguments)}})}else r&&e(a,"attributeChangedCallback",{configurable:!0,value(e,t,i){t!==i&&n.apply(this,arguments)}});return"handleEvent"in a||e(a,"handleEvent",{configurable:!0,value(e){this["on"+e.type](e)}}),customElements.define(t,i),i}get html(){return this.__hyperHTML||e(this,"__hyperHTML",{configurable:!0,value:hyperHTML.bind(this.shadowRoot||this._shadowRoot||this)}).__hyperHTML}})(Object.defineProperty);try{module.exports=HyperHTMLElement;var hyperHTML=hyperHTML||require("hyperhtml")}catch(e){}