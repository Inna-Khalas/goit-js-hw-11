import{i as c,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const h="46878404-43e11e495eedf0f56c253a7d9",g="https://pixabay.com/api/";function y(i){const r=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${g}?${r.toString()}`;return fetch(n).then(t=>{if(!t.ok)throw new Error("...UPS");return t.json()}).then(t=>(console.log(t),t.hits.length===0?(c.error({title:"Помилка",message:"Вибачте, не знайдено зображень за вашим запитом. Спробуйте ще раз!",position:"topCenter"}),[]):t.hits)).catch(t=>{console.log(t),c.error({title:"Помилка",message:"Сталася помилка при отриманні даних. Спробуйте ще раз.",position:"topCenter"})})}const a=document.querySelector(".list");function b(i){const r=i.map(({webformatURL:n,largeImageURL:t,tags:e,likes:o,views:s,comments:p,downloads:d})=>`
        <div class="gallery-item">
            <a href="${t}">
                <img src="${n}" alt="${e}" />
            </a>
            <div class="info">
                <p><b>Likes:</b> ${o}</p>
                <p><b>Views:</b> ${s}</p>
                <p><b>Comments:</b> ${p}</p>
                <p><b>Downloads:</b> ${d}</p>
            </div>
        </div>
    `).join("");a.innerHTML="",a.insertAdjacentHTML("beforeend",r)}const u=document.querySelector(".search-form"),L=document.querySelector(".search-form input"),f=document.querySelector(".loader");let l;u.addEventListener("submit",S);function S(i){i.preventDefault(),console.log("Працює чи нє");const r=L.value.trim();if(console.log(r),r==="")return c.info({position:"topRight",title:"Помилка",message:"Заповніть поле запиту"});v(),y(r).then(n=>{n&&n.length>0&&(b(n),l?l.refresh():l=new m(".gallery-item a",{captionsData:"alt",captionDelay:250}))}).catch(n=>{console.log(n),c.error({position:"topRight",title:"Помилка",message:"Сталася помилка при отриманні зображень. Спробуйте ще раз!"})}).finally(()=>{P(),u.reset()})}function v(){f.style.display="block"}function P(){f.style.display="none"}
//# sourceMappingURL=index.js.map
