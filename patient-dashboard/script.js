fetch('https://api.coalitiontechnologies.com/patient-data')
  .then(response => response.json())
  .then(data => {
    const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');
    document.getElementById('patientName').textContent = `Name: ${jessicaData.name}`;
    document.getElementById('patientAge').textContent = `Age: ${jessicaData.age}`;
  })
  .catch(error => console.error('Error fetching data:', error));

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2019', '2020', '2021', '2022'], // Example years
    datasets: [{
      label: 'Blood Pressure',
      data: [120, 130, 140, 135], // Replace with actual data from API
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false
    }]
  }
});
