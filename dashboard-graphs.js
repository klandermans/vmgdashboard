fetch('chart-data.json')
  .then(r => r.json())
  .then(data => {
    new Chart(document.getElementById('dash-graph'), {
      type: 'line',
      data: {
        labels: data.range,
        datasets: [{
          label: 'Revenue',
          data: data.revenue,
          borderColor: '#4e80e5',
          backgroundColor: 'rgba(78,128,229,0.2)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  })
  .catch(e => console.error('Failed to load chart data', e));
