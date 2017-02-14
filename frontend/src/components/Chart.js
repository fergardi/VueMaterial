import { Doughnut } from 'vue-chartjs'

export default Doughnut.extend({
  mounted () {
    this.renderChart({
      labels: [
        'Cine',
        'Televisión',
        'Juegos',
        'Libros',
        'Dibujos',
        'Puzzles',
        'Viajes',
        'Juguetes'
      ],
      datasets: [
        {
          backgroundColor: [
            '#3F51B5',
            '#2196F3',
            '#9C27B0',
            '#FF9800',
            '#F06292',
            '#009688',
            '#D32F2F',
            '#8BC34A'
          ],
          data: [30, 22, 18, 10, 9, 4, 4, 3]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: true,
      cutoutPercentage: 33,
      defaultFontColor: '#ff0000',
      defaultFontFamily: 'Roboto',
      defaultFontSize: 16,
      defaultFontStyle: 'normal'
    })
  }
})
