fetch('chart-data.json')
  .then(r => r.json())
  .then(data => {
    const ctx1 = document.getElementById('graph1');
    const ctx2 = document.getElementById('graph2');

    const graph1 = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: data.range,
        datasets: [{
          label: 'Impressions',
          data: data.impressions,
          yAxisID: 'y1',
          backgroundColor: '#4e80e5'
        }, {
          type: 'line',
          label: 'Revenue',
          data: data.revenue,
          yAxisID: 'y2',
          borderColor: '#ff9800',
          backgroundColor: 'rgba(0,0,0,0)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y1: {
            position: 'left',
            beginAtZero: true,
            title: { display: true, text: 'Impressions' }
          },
          y2: {
            position: 'right',
            beginAtZero: true,
            grid: { drawOnChartArea: false },
            title: { display: true, text: 'Revenue' }
          }
        }
      }
    });

    const graph2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: data.range,
        datasets: [{
          label: 'VTR %',
          data: data.vtr,
          borderColor: '#4e80e5',
          backgroundColor: 'rgba(78,128,229,0.2)'
        }, {
          label: 'CTR %',
          data: data.ctr,
          borderColor: '#ff9800',
          backgroundColor: 'rgba(255,152,0,0.2)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Percentage' }
          }
        }
      }
    });
  })
  .catch(e => console.error('Failed to load chart data', e));
