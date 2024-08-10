import React from 'react';
import * as echarts from 'echarts';
import data from './data.json'; // 导入本地 JSON 文件

const TreeChart = () => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    data.children.forEach((datum: any, index) => {
      index % 2 === 0 && (datum.collapsed = true);
    });
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'tree',
          data: [data],
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',
          symbolSize: 7,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9,
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
            },
          },
          emphasis: {
            focus: 'descendant',
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    });

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        width: '100%',
        height: '400px',
        border: '2px solid #ccc',
        marginBottom: '8px',
      }}
    />
  );
};

export default TreeChart;
