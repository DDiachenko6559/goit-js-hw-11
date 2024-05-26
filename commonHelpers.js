import{S as u,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=o=>{const r="44070082-fd53ee46a47d37a3fc9d7b56d",s="https://pixabay.com/api/",i=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(response.statusText);return t.json()})},f=o=>o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:l,downloads:c})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${i}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${e}</span></li>
              <li class="item-info">Views <span>${t}</span></li>
              <li class="item-info">Comments <span>${l}</span></li>
              <li class="item-info">Downloads <span>${c}</span></li>
            </ul>
          </a>
        </li>
    `).join(""),n={galleryEl:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),searchForm:document.querySelector(".form")},p=new u(".gallery-link",{captionsData:"alt",captionDelay:250});n.searchForm.addEventListener("submit",o=>{o.preventDefault(),n.loader.style.display="inline-block";const r=o.target.elements.search.value.trim();if(r===""){n.galleryElement.innerHTML="",o.target.reset(),a.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight"});return}n.galleryEl.innerHTML="",m(r).then(s=>{s.total||a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.galleryEl.innerHTML=f(s.hits),p.refresh()}).catch(s=>console.log(s)).finally(()=>{n.loader.style.display="none",o.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
