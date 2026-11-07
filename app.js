'use strict';
const appUrl='https://script.google.com/macros/s/AKfycbz4eKe-0qHsF_6L_9BsyV6SWvpuJbtTMbNnLL_FP62EOTBgn4H0UrXKqy59Sj8yCcqyfw/exec';
document.getElementById('enter').href=appUrl;
document.getElementById('embedded').addEventListener('click',()=>{document.getElementById('welcome').hidden=true;const frame=document.getElementById('app');frame.hidden=false;frame.src=appUrl;});
document.getElementById('open').href=appUrl;
const install=document.getElementById('install'),help=document.getElementById('help');
let promptEvent;
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();promptEvent=event;install.hidden=false;help.hidden=true;});
install.addEventListener('click',async()=>{if(!promptEvent)return;await promptEvent.prompt();await promptEvent.userChoice;promptEvent=null;install.hidden=true;help.hidden=false;});
window.addEventListener('appinstalled',()=>{install.hidden=true;help.hidden=true;});
help.addEventListener('click',()=>document.getElementById('instructions').showModal());
if(matchMedia('(display-mode: standalone)').matches||navigator.standalone)help.hidden=true;
function connection(){document.querySelector('.offline').style.display=navigator.onLine?'none':'block';}
window.addEventListener('online',connection);window.addEventListener('offline',connection);connection();
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(console.error);
