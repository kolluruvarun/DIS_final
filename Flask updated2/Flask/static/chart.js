const ctx = document.getElementById("myChart");
const ctx_2 = document.getElementById("myChart2");
$(document).ready(function () {
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Credit Score", "Credit Limit"],
      datasets: [
        {
          data: [18, 12],
          borderWidth: 1,
          borderColor: "#36A2EB",
          backgroundColor: ["red", "#D3D3D3"],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      circumference: 180,
      rotation: 270,
      cutout: "80%",
      responsive: true,
      tooltip: {
        filter: (tooltipItem) => {
          return tooltipItem.dataIndex === 0;
        },
      },
    },
  });
  new Chart(ctx_2, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          data: [28,6,44,13,17,35,16,31,4,46,26,3,34,37,32,49,22,8,41,30,48,33,19,38],
         borderWidth: 1,
          borderColor: "#36A2EB",
          backgroundColor: ["green", "#D3D3D3"],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
});
