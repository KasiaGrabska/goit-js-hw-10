const e=document.querySelector(".btn"),n=document.querySelector(".breed-select");e.addEventListener("click",(()=>{try{e().then((e=>function(e){const t=e.map((({id:e,name:n})=>`<option value="${e}"></option>`)).join("");n.insertAdjacentHTML("beforeend",t)}(e)))}catch(e){console.log(e)}})),n.addEventListener("change",(e=>{console.log(e.target.value)}));
//# sourceMappingURL=index.08325da3.js.map
