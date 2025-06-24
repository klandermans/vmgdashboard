const form = document.getElementById('campaign-form');
const out = document.getElementById('output');

function save(data) {
  const stored = JSON.parse(localStorage.getItem('extraCampaigns') || '[]');
  stored.push(data);
  localStorage.setItem('extraCampaigns', JSON.stringify(stored));
}

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(form).entries());
    const record = {
      id: Date.now(),
      dsp: raw.dsp,
      campaignName: raw.name,
      type: raw.type,
      campaignState: raw.state,
      numberOfPo: 0,
      impressionsYesterday: 0,
      grossRevenueYesterday: 0,
      impression: 0,
      grossRevenue: 0,
      startDate: raw.start,
      endDate: raw.end,
      budget: Number(raw.budget)
    };
    save(record);
    out.textContent = 'Campaign saved';
    form.reset();
  });
}
