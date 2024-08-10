import React from 'react';
import * as echarts from 'echarts';
import data1 from './data1.json'; // 导入本地 JSON 文件

const Relationship = () => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    data1.nodes.forEach((node: any) => {
      node.label = {
        show: node.symbolSize > 30,
      };
    });

    const option: any = {
      title: {
        text: 'Les Miserables',
        subtext: 'Default layout',
        top: 'bottom',
        left: 'right',
      },
      tooltip: {},
      legend: [
        {
          // selectedMode: 'single',
          data: data1.categories.map((a) => a.name),
        },
      ],
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          legendHoverLink: false,
          layout: 'none',
          data: data1.nodes,
          links: data1.links,
          categories: data1.categories,
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 10,
            },
          },
        },
      ],
    };

    myChart.setOption(option);

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

export default Relationship;
