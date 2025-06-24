const params = new URLSearchParams(location.search);
const id = Number(params.get('id'));
const tbody = document.querySelector('#campaign-detail tbody');
const nameEl = document.getElementById('campaign-name');

function loadExtra(){
  try{ return JSON.parse(localStorage.getItem('extraCampaigns')) || []; }catch(e){ return []; }
}

fetch('data.json')
  .then(r=>r.json())
  .then(data=>{
    const campaigns = data.concat(loadExtra());
    const c = campaigns.find(c=>c.id===id);
    if(!c){ nameEl.textContent='Not found'; return; }
    nameEl.textContent = c.campaignName;
    Object.entries(c).forEach(([k,v])=>{
      const tr=document.createElement('tr');
      tr.innerHTML=`<th>${k}</th><td>${v}</td>`;
      tbody.appendChild(tr);
    });
  })
  .catch(e=>console.error(e));
