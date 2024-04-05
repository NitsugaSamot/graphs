import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const EBARChartIntereses = ({ interesesData }) => {
  useEffect(() => {
    const chartDom = document.getElementById('bar-chart');
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: Object.keys(interesesData), // Usar las claves de intereses como datos del eje X
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Intereses',
          type: 'bar',
          barWidth: '60%',
          data: Object.values(interesesData), // Usar los valores de intereses como datos de la serie
          itemStyle: {
            color: function(params) {
              // Aquí puedes definir una función para asignar colores personalizados
              const colors = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', '#FC8452', '#9A60B4', '#FF9E4A'];
              return colors[params.dataIndex];
            }
          }
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [interesesData]);

  return <div id="bar-chart" style={{ width: '600px', height: '400px' }} />;
};

export default EBARChartIntereses;


// import React, { useEffect } from 'react';
// import * as echarts from 'echarts';

// const EBARChartIntereses = () => {
//   useEffect(() => {
//     const chartDom = document.getElementById('bar-chart');
//     const myChart = echarts.init(chartDom);

//     const option = {
//       tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//           type: 'shadow'
//         }
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//       },
//       xAxis: [
//         {
//           type: 'category',
//           data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//           axisTick: {
//             alignWithLabel: true
//           }
//         }
//       ],
//       yAxis: [
//         {
//           type: 'value'
//         }
//       ],
//       series: [
//         {
//           name: 'Direct',
//           type: 'bar',
//           barWidth: '60%',
//           data: [10, 52, 200, 334, 390, 330, 220],
//           itemStyle: {
//             color: function(params) {
//               // Aquí puedes definir una función para asignar colores personalizados
//               const colors = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE', '#3BA272', '#FC8452'];
//               return colors[params.dataIndex];
//             }
//           }
//         }
//       ]
//     };

//     myChart.setOption(option);

//     return () => {
//       myChart.dispose();
//     };
//   }, []);

//   return <div id="bar-chart" style={{ width: '600px', height: '400px' }} />;
// };

// export default EBARChartIntereses;
