(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t){e.exports={pickRandom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.length;return e[Math.floor(Math.random()*t)]}}},,,,,,function(e,t,a){e.exports=a.p+"static/media/snail.8bef9566.svg"},,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),s=a.n(r),l=(a(20),a(1)),i=(a(21),a(4));var u=function(e){var t=String(e).match(/(\d+|-|\+|\*|\/)/gi);if(3!==t.length)throw new Error("Unexpected Stimulus: ".concat(e));var a=Object(l.a)(t,3),n=a[0],c=a[1],r=a[2];switch(c){case"+":return 1*n+1*r;case"-":return n-r;case"*":return n*r;case"/":return n/r;default:throw new Error("Unexpected Stimulus operation: ".concat(e))}},o=["5+2","7+2","8+2","9+2","2+3","3+3","4+3","5+3","6+3","7+3","8+3","9+3","2+4","3+4","4+4","5+4","6+4","7+4","8+4","9+4","2+5","3+5","4+5","5+5","6+5","7+5","8+5","9+5","2+6","3+6","4+6","6+6","7+6","8+6","9+6"],m=[{name:"\u0412\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435 4 \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 13",type:"COUNT20",getTasks:function(){return o.map(function(e){return{taskId:e,taskType:"COUNT20"}})},getTask:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(i.pickRandom)(o),a=0;a<10&&t===e.stimulus;a++)t=Object(i.pickRandom)(o);return{question:t,expectedAnswer:String(u(t))}}}],d=a(7),h=a(8),E=a(13),f=a(9),p=a(14);var v={};v[0]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.031,0,0,64.04,0,143.027c0,78.996,64.031,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M143.018,80.578c-33.987,0-44.58,34.818-44.58,62.494s10.602,62.494,44.58,62.494s44.58-34.818,44.58-62.494S177.005,80.578,143.018,80.578zM143.018,182.476c-17.163,0-18.343-27.345-18.343-39.395c0-12.899,1.18-39.395,18.343-39.395s18.343,26.496,18.343,39.395C161.361,155.131,160.181,182.476,143.018,182.476z"}))),v[1]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.031,0,0,64.04,0,143.027c0,78.996,64.031,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z"}),c.a.createElement("path",{d:"M150.026,80.39h-22.84c-6.91,0-10.933,7.044-10.933,13.158c0,5.936,3.209,13.158,10.933,13.158h7.259v85.36c0,8.734,6.257,13.605,13.176,13.605s13.185-4.881,13.185-13.605V92.771C160.798,85.789,156.945,80.39,150.026,80.39z"}))),v[2]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.031,0,0,64.04,0,143.027c0,78.996,64.031,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M173.232,180.205h-32.038c15.661-18.459,40.852-39.753,40.852-63.736c0-21.91-16.564-35.882-39.216-35.882c-22.661,0-43.847,17.977-43.847,39.717c0,6.731,4.604,12.586,13.445,12.586c17.691,0,8.108-28.498,29.294-28.498c7.554,0,13.266,6.204,13.266,13.284c0,6.204-3.138,11.558-6.454,16.046c-13.999,18.969-30.581,34.496-45.867,51.579c-1.841,2.065-4.246,5.176-4.246,8.796c0,7.938,6.266,11.38,14.365,11.38h61.528c6.999,0,13.266-4.568,13.266-12.497C187.58,185.05,181.331,180.205,173.232,180.205z"}))),v[3]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209 S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M167.717,137.637 c8.966-5.936,13.364-15.277,13.364-25.977c0-13.239-11.254-31.082-34.729-31.082c-18.093,0-35.542,14.276-35.542,27.515 c0,6.284,3.915,12.56,10.602,12.56c11.085,0,8.966-16.636,24.449-16.636c7.339,0,11.737,4.925,11.737,11.371 c0,18.853-23.152,6.794-23.152,24.627c0,20.033,27.72,2.548,27.72,26.317c0,9.002-6.856,15.796-15.331,15.796 c-18.424,0-15.813-19.872-26.898-19.872c-5.873,0-12.551,4.756-12.551,11.38c0,13.418,15,31.922,39.127,31.922 c23.152,0,41.084-17.154,41.084-37.527C187.598,154.621,179.445,143.25,167.717,137.637z"}))),v[4]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209 S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M175.065,155.122h-5.042v-52.607 c0-15.59-8.394-21.937-18.933-21.937c-9.449,0-14.535,3.093-18.531,9.94l-40.7,69.565c-1.091,1.707-2.548,3.772-2.548,7.545 c0,4.452,3.817,10.11,12.72,10.11h43.793V192.3c0,9.091,1.85,13.364,11.12,13.364s13.078-4.282,13.078-13.364v-14.562h5.042 c7.089,0,12.72-4.452,12.72-11.317C187.785,159.573,182.154,155.122,175.065,155.122z M146.379,155.122h-24.896l24.529-47.816 h0.367V155.122z"}))),v[5]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M149.678,120.849c-4.613,0-9.395,0.867-13.811,1.716l2.762-18.325h34.63c3.316,0,12.89-1.037,12.89-12.971c0-6.222-4.979-10.888-13.445-10.888h-44.401c-8.832,0-12.712,2.941-14.365,16.43l-4.604,36.481c-0.188,1.895-0.554,3.629-0.554,5.873c0,2.941,3.683,8.126,10.861,8.126c9.395,0,11.049-5.703,21.74-5.703c11.424,0,17.691,7.08,17.691,17.458c0,10.897-6.633,22.643-19.523,22.643c-12.345,0-21.195-11.058-28.561-11.058c-6.812,0-12.515,5.364-12.515,11.755c0,15.214,27.443,23.17,40.521,23.17c31.859,0,48.817-19.023,48.817-47.896C187.812,137.44,171.972,120.849,149.678,120.849z"}))),v[6]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M150.5,125.417c-3.915,0-8.01,0.679-11.228,2.047l-0.349-0.349c5.873-7.983,17.458-18.844,24.583-27.166c2.136-2.548,3.737-4.586,3.737-6.955c0-6.123-7.652-12.408-12.64-12.408c-1.43,0-3.388,0-5.346,1.198c-2.145,1.35-4.282,2.718-5.712,4.076c-17.995,15.956-45.25,51.955-45.25,77.61c0,22.58,17.288,42.112,44.723,42.112c26.371,0,44.723-20.042,44.723-42.112C187.741,143.411,171.892,125.417,150.5,125.417z M143.018,181.117c-10.691,0-16.931-8.153-16.931-17.664c0-10.021,6.776-17.673,16.931-17.673c11.228,0,16.931,8.671,16.931,17.673C159.949,173.304,153.173,181.117,143.018,181.117z"}))),v[7]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M175.047,80.39h-63.674c-9.672,0-13.007,5.927-13.007,12.041c0,5.936,3.522,12.041,13.007,12.041H156.4l-43.963,82.714c-1.243,2.431-1.761,4.005-1.761,6.105c0,5.06,4.925,12.39,14.598,12.39c7.92,0,9.851-3.486,14.768-13.257l43.614-87.944c2.11-4.362,4.049-8.018,4.049-11.514C187.705,88.409,184.013,80.39,175.047,80.39z"}))),v[8]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027c78.996,0,143.027-64.031,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M168.289,137.467c8.85-5.265,13.909-14.768,13.909-24.279c0-20.042-18.236-32.61-39.18-32.61c-21.481,0-38.993,12.747-38.993,32.61c0,10.691,5.238,18.504,13.722,24.279c-11.371,5.775-19.318,15.796-19.318,29.383c0,22.759,19.675,38.716,44.589,38.716c24.189,0,44.589-15.107,44.589-38.716C187.607,153.781,180.571,143.25,168.289,137.467zM143.018,102.997c8.483,0,13.185,5.605,13.185,12.908c0,7.634-4.881,12.899-13.185,12.899c-8.305,0-12.998-5.265-12.998-12.899C130.02,108.602,134.535,102.997,143.018,102.997z M143.018,182.127c-11.013,0-16.43-8.322-16.43-16.976c0-9.502,5.953-16.976,16.43-16.976c9.922,0,16.43,6.284,16.43,16.976C159.448,173.813,153.307,182.127,143.018,182.127z"}))),v[9]=c.a.createElement("svg",{style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{d:"M143.027,0C64.031,0,0,64.04,0,143.027c0,78.996,64.031,143.027,143.027,143.027s143.027-64.031,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M143.018,80.578c-26.371,0-44.723,20.042-44.723,42.121c0,20.033,15.858,38.036,37.241,38.036c3.915,0,8.01-0.679,11.228-2.038l0.349,0.34c-5.873,7.983-17.458,18.844-24.583,27.166c-2.136,2.548-3.746,4.595-3.746,6.964c0,6.114,7.661,12.399,12.649,12.399c1.43,0,3.388,0,5.355-1.189c2.136-1.359,4.273-2.726,5.703-4.076c17.995-15.965,45.25-51.963,45.25-77.61C187.741,100.119,170.452,80.578,143.018,80.578z M143.018,140.363c-11.228,0-16.931-8.662-16.931-17.664c0-9.86,6.776-17.664,16.931-17.664c10.691,0,16.931,8.153,16.931,17.664C159.949,132.711,153.173,140.363,143.018,140.363z"}))),v[99]=c.a.createElement("svg",{className:"numpad-button-error",style:{width:"100%"},viewBox:"0 0 286.054 286.054"},c.a.createElement("g",null,c.a.createElement("path",{style:{fill:"#E2574C"},d:"M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236 c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209 S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972 c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723 c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843 C160.878,195.732,152.878,187.723,143.036,187.723z"})));var g=function(e){var t=e.digit,a=void 0===t?99:t,r=e.digitHandler,s=Object(n.useState)(!1),i=Object(l.a)(s,2),u=i[0],o=i[1],m=v[a]||v[99];return c.a.createElement("button",{className:"numpad-button"+(u?" active":""),onTouchStart:function(){return o(!0)},onTouchEnd:function(e){e.preventDefault(),o(!1),r(a)},onTouchCancel:function(){return o(!1)},onClick:function(){return r(a)}},m)};a(22);var C=function(e){var t=e.digitHandler,a=function(e){return c.a.createElement(g,{digit:e,digitHandler:t})};return c.a.createElement("section",{className:"numpad"},c.a.createElement("div",{className:"numpad-row"},a(1),a(2),a(3)),c.a.createElement("div",{className:"numpad-row"},a(4),a(5),a(6)),c.a.createElement("div",{className:"numpad-row"},a(7),a(8),a(9)),c.a.createElement("div",{className:"numpad-row"},a(0)))};var w=function(e){var t=e.question,a=e.answer;return c.a.createElement("div",{className:"task flex-column pixeled font-huge"},c.a.createElement("div",null,t),c.a.createElement("span",{className:a?"":"transparent"},a||"?"))};a(23);var S=function(e){var t=e.stimulus,a=e.answer,n=e.handleClose;return c.a.createElement("section",{className:"explainer"},c.a.createElement("h2",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442:"),c.a.createElement("p",{className:"explainer-answer pixeled font-huge"},t," = ",a),c.a.createElement("button",{className:"explainer-close",onClick:n},"OK"))};var b=function(e){var t=e.val,a=e.maxVal;return c.a.createElement("div",null,"...",Math.round(t/a*100),"%")},O="simple-math",y=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).timeoutId=null,a.handleTimeout=function(){a.state.punched||a.setState({isTimeout:!0})},a.isFailure=function(){return a.state.isFinished&&!a.isSuccess()},a.isSuccess=function(){return a.state.punched===a.props.expectedAnswer},a.shouldExplain=function(){return a.isFailure()&&!a.state.explained},a.handleExplained=function(){a.setState({explained:!0})},a.handleInput=function(e){a.saveKeystrokeTimestamp(),console.log("handle char:",e);if(!("0123456789".indexOf(e)<0)){var t=a.state.punched+e;a.setState({punched:t}),console.log(t,a.props.expectedAnswer),console.log(t.length,a.props.expectedAnswer.length),console.log(t.length>=a.props.expectedAnswer.length),t.length>=a.props.expectedAnswer.length&&(console.warn("FINISH!"),a.setState({isFinished:!0}))}},a.persistResult=function(){a.setState({isPersisting:!0});var e=a.state,t=e.revealedAt,n=e.firstCharAt,c=e.lastCharAt,r={createdAt:new Date,session:a.props.sessionId,task:O,stimulus:a.props.question,expected:a.props.expectedAnswer,success:a.isSuccess(),delayA:n&&t&&n-t,delayZ:c&&t&&c-t,isTimeout:a.state.isTimeout};return console.log(r),a.props.db.table("reviews").add(r).then(function(e){console.log("Review result saved:"+e),a.setState({isPersisting:!1,saved:!0})})},console.warn("CONSTRUCTOR IS CALLED WITH",e.question),a.state={punched:"",isFinished:!1,explained:!1,saved:!1,isPersisting:!1,revealedAt:Date.now(),firstCharAt:null,lastCharAt:null,isTimeout:!1,timeoutMs:e.maxTime||2500},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"handleTimeChange",value:function(){}},{key:"componentDidMount",value:function(){console.log("Will set timeout to:",this.state.timeoutMs),this.timeoutId=setTimeout(this.handleTimeout,this.state.timeoutMs)}},{key:"componentDidUpdate",value:function(){this.state.saved&&this.props.handleComlete(),this.persistResultIfNeeded()}},{key:"persistResultIfNeeded",value:function(){this.state.isFinished&&(this.isSuccess()||this.state.explained)&&(this.state.isPersisting||this.state.saved||this.persistResult())}},{key:"saveKeystrokeTimestamp",value:function(){null===this.state.firstCharAt?this.setState({firstCharAt:Date.now(),lastCharAt:Date.now()}):this.setState({lastCharAt:Date.now()})}},{key:"render",value:function(){return this.shouldExplain()?c.a.createElement(S,{stimulus:this.props.question,answer:this.props.expectedAnswer,handleClose:this.handleExplained}):this.state.isFinished?c.a.createElement("div",{className:"waiting"}):c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{val:20,maxVal:this.state.timeoutMs}),c.a.createElement(w,{question:this.props.question,answer:this.state.punched}),c.a.createElement(C,{digitHandler:this.handleInput}))}}]),t}(c.a.Component),N=a(3),M=(a(24),a(10)),x=a.n(M);a(25);var k=function(e){var t=e.val,a=e.max,n=void 0===a?30:a,r=e.steps,s=void 0===r?3:r,l=e.guageWidth,i=void 0===l?90:l,u=i/s,o={width:i,height:u},m={width:i,height:u,backgroundImage:"url(".concat(x.a,")")},d=Object(N.a)({},m,{width:t>=n?i:i/n*t});return c.a.createElement("span",{className:"task-guage-wrapper",style:o},c.a.createElement("span",{className:"task-guage-background",style:m}),c.a.createElement("span",{className:"task-guage-bar",style:d}))};var A=function(e){var t=e.db,a=e.sessionId,r=e.doneHandler,s=Object(n.useState)("LOADING"),i=Object(l.a)(s,2),u=i[0],o=i[1],m=Object(n.useState)(""),d=Object(l.a)(m,2),h=d[0],E=d[1],f=Object(n.useState)([]),p=Object(l.a)(f,2),v=p[0],g=p[1],C=Object(n.useState)(""),w=Object(l.a)(C,2),S=w[0],b=w[1];function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.round(6e4/e)}function y(e){var t=e.stimulus.replace("!+ 0","");return Object(N.a)({},e,{formattedStimulus:t})}Object(n.useEffect)(function(){t.table("reviews").where({session:a}).toArray().then(x).catch(function(e){console.log(e),o("ERROR"),E(e)})},[]);var M=function(e){return"1 + 1"!==e.stimulus};function x(e){var t=e.filter(M).map(y).map(function(e){return c.a.createElement("tr",{key:e.createdAt,onClick:function(){return b(e.stimulus)},className:S===e.stimulus?"active":""},!1,c.a.createElement("td",{className:"fanfares-stimulus"},e.formattedStimulus),c.a.createElement("td",{className:"fanfares-guage"},e.success?c.a.createElement(k,{val:O(e.delayA)}):"\ud83e\udd4a"),c.a.createElement("td",{className:"fanfares-speed"},e.delayA&&O(e.delayA)))});g(t),o("SHOW")}return"LOADING"===u?c.a.createElement("div",{onClick:r},"Loading..."):"ERROR"===u?c.a.createElement("pre",{style:{display:"block"}},JSON.stringify(h)):"SHOW"===u?c.a.createElement("section",{className:"fanfares"},c.a.createElement("h2",{className:"fanfares-heading"},"\u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f"),c.a.createElement("table",{className:"fanfares-table"},c.a.createElement("tbody",null,v)),c.a.createElement("button",{className:"fanfares-close",onClick:r},"Close")):c.a.createElement("div",{style:{display:"block"}},"OOPS...",u)},z={HOME:"HOME",EXCERCISE:"EXCERCISE",EASE:"EASE"},T=20,j="@math::default-user",I=[{id:"test",name:"Test"},{id:"kate",name:"Kate"},{id:"sergey",name:"Sergey"},{id:"lera",name:"Lerchik"}],R={question:"1 + 1",expectedAnswer:"2"};var B=function(e){var t=e.db,a=e.user,r=e.goToPage,s=Object(n.useState)(R),i=Object(l.a)(s,2),u=i[0],o=i[1],d=Object(n.useState)(0),h=Object(l.a)(d,2),E=h[0],f=h[1],p=Object(n.useState)("TO_BE_STARTED"),v=Object(l.a)(p,2),g=v[0],C=v[1],w=Object(n.useState)(Date.now()),S=Object(l.a)(w,2),b=S[0],O=S[1];function N(){E<T?(f(E+1),function(){var e=m[0].getTask({},u);o(e)}()):C("FANFARES")}function M(){f(0),o(R),O(Date.now()),C("RUNNING")}var x=function(){return c.a.createElement("button",{className:"exercise-button-start",onClick:M},"START")};return c.a.createElement(c.a.Fragment,null,"RUNNING"===g?c.a.createElement("progress",{value:E,max:T+1}):c.a.createElement("header",{className:"header-nav"},c.a.createElement("span",{className:"header-nav-item",onClick:function(){return r("HOME")}},a.name)),c.a.createElement("main",{className:"main-exercise"},"TO_BE_STARTED"===g&&x(),"RUNNING"===g&&c.a.createElement(y,{question:u.question,expectedAnswer:u.expectedAnswer,handleComlete:N,key:u.question,db:t,sessionId:b}),"FANFARES"===g&&c.a.createElement(A,{db:t,sessionId:b,doneHandler:function(){return C("DONE")}}),"DONE"===g&&x()))},D=(a(26),function(e){return parseInt(String(e).slice(-1),10)}),F=function(e,t){return D(e)+D(t)<=10},H=function(e,t,a){return e===a||t===a},U=function(e,t){return 0===D(e)||0===D(t)},q=function(e,t){return e>10&&t>10&&F(e,t)},P=function(e,t){return function(e,t){return H(e,t,0)}(e,t)?"E0":function(e,t){return H(e,t,1)}(e,t)?"E1":function(e,t){return e+t<=10&&(2===e||2===t)}(e,t)?"A1":function(e,t){return e+t<=10}(e,t)?"A2":function(e,t){return 0===D(e)||0===D(t)}(e,t)?"B0":function(e,t){return!U(e,t)&&!q(e,t)&&F(e,t)}(e,t)?"B1":function(e,t){return e<10||t<10}(e,t)?"B2":U(e,t)?"C0":q(e,t)?"C1":function(e,t){return e>10&&t>10&&!F(e,t)}(e,t)?"C2":"UNKNOWN"},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array(e).fill(void 0).map(function(e,a){return a+t})},L=W(99,0),X=W(99,0),G={};L.forEach(function(e){X.forEach(function(t){var a=P(e,t),n=G[a]||0;G[a]=n+1})}),console.log(G);var V=function(e){return c.a.createElement("tr",{key:e},c.a.createElement("th",{scope:"row",key:"0"},e),X.map(function(t){return function(e,t){if(!(e+t>=100)){var a=P(e,t);return c.a.createElement("td",{className:a,key:"".concat(e,",").concat(t),title:a},e+t)}}(e,t)}))},K=function(){return c.a.createElement("tr",{key:"0"},c.a.createElement("th",{scope:"col",key:"0"}),X.map(function(e){return c.a.createElement("th",{scope:"col",key:e},e)}))};var _=function(){return c.a.createElement("table",{className:"difficulties-table"},c.a.createElement("tbody",null,K(),L.map(function(e){return V(e)})))};function J(e){var t=e.userId,a=e.updateUser,n=e.goToPage;return c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"user-select"},"Change user:"),c.a.createElement("select",{id:"user-select",onChange:function(e){var t=e.target.value,n=I.filter(function(e){return e.id===t})[0];n&&a(n.id)},value:t},I.map(function(e){var t=e.id,a=e.name;return c.a.createElement("option",{key:t,value:t},a)})),c.a.createElement("button",{style:{marginLeft:20},onClick:function(){return n("EXCERCISE")}},"\u0425"))}var Z=a(11);var Q={},$=function(e){return Q[e]||(Q[e]=function(e){var t=new Z.a(e);return t.version(1).stores({reviews:"&createdAt, session, stimulus, success, delayA, delayZ"}),t}(e)),Q[e]},Y=a(12),ee=a.n(Y);var te=function(){var e=Object(n.useState)(z.EXCERCISE),t=Object(l.a)(e,2),a=t[0],r=t[1],s=ee()(j),i=Object(l.a)(s,2),u=i[0],o=i[1],m=Object(n.useState)(u||I[0]),d=Object(l.a)(m,2),h=d[0],E=d[1],f=Object(n.useState)(h?$(h.id):null),p=Object(l.a)(f,2),v=p[0],g=p[1],C=h&&h.id||null;switch(a){case z.HOME:return c.a.createElement(J,{key:C,userId:C,updateUser:function(e){if(e!==h.id){var t=I.filter(function(t){return t.id===e})[0];o(t),E(t);var a=$(t.id);g(a),r(z.EXCERCISE)}},goToPage:r});case z.EXCERCISE:return c.a.createElement(B,{db:v,user:h,goToPage:r});case z.EASE:return c.a.createElement(_,null);default:return c.a.createElement("div",null,"UNEXPECTED PAGE REQUEST: ",a)}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);