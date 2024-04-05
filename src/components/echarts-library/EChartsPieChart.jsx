import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import candidatosData from '../../helpers/db.json';

const EChartsPieChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('echarts-pie-chart');
    const myChart = echarts.init(chartDom);

    const data = candidatosData.candidatos.map(candidato => ({
      name: `${candidato.Personal.Nombre} ${candidato.Personal.Apellido}`,
      value: candidato.Personal.ExpLaboral
    }));

    const option = {
      title: {
        text: 'Experiencia Laboral por Candidato',
        subtext: 'Candidatos',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Experiencia Laboral',
          type: 'pie',
          radius: '50%',
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="echarts-pie-chart" style={{ width: '600px', height: '400px' }} />;
};

export default EChartsPieChart;


