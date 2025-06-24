const params = new URLSearchParams(location.search);
const id = Number(params.get('id'));
let publishers=[]; let websites=[];
const nameEl=document.getElementById('publisher-name');
const tbody=document.querySelector('#website-table tbody');

function loadExtra(){
  try{return JSON.parse(localStorage.getItem('extraPublishers'))||[];}catch(e){return[];}
}

Promise.all([
  fetch('publishers.json').then(r=>r.json()),
  fetch('websites.json').then(r=>r.json())
]).then(([pData,wData])=>{
  publishers=pData.concat(loadExtra());
  websites=wData;
  const pub=publishers.find(p=>p.id===id);
  if(!pub){nameEl.textContent='Not found';return;}
  nameEl.textContent=pub.name;
  websites.filter(w=>w.publisherId===id).forEach(w=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${w.domain}</td>`;
    tbody.appendChild(tr);
  });
}).catch(e=>console.error(e));
