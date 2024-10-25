
      // Show loading spinner
      const loadingText = document.querySelector('.loading-text');
      const spinner = document.querySelector('.spinner');
      spinner.style.display = 'block';

      // Wait for 2 seconds to simulate data fetching
      setTimeout(() => {
        // Hide spinner after loading
        spinner.style.display = 'none';
        loadingText.textContent = 'Page Loaded!';

        // Set up the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['html', 'css', 'js', 'npm', 'api', 'database'],
            datasets: [{
              label: 'SYSTEM LOADED',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
              borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
              borderWidth: 1
                    }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              }
            }
          }
        });
      }, 2000); // Simulate loading time (2 seconds)
    