import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

import WINE_DATA from '../data/Wine-Data.json';

const LineChart: React.FC = () => {

    // Define the options for the chart
    const option: echarts.EChartsOption = {
        title: {
            text: "Flavanoids vs Ash",
            left: 'center',
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            name: 'Flavanoids',
            nameLocation: 'middle',
            nameGap: 30,
            data: WINE_DATA.map((d) => d.Flavanoids), // X-axis data
        },
        yAxis: {
            type: 'value',
            name: 'Ash',
            nameLocation: 'middle',
            nameGap: 30,
        },
        series: [
            {
                data: WINE_DATA.map((d) => d.Ash), // Y-axis data
                type: 'line',
            },
        ],
    };

    // Render the chart
    return (
        <>
            <div className="chart">
                <ReactECharts className='line-chart' option={option} echarts={echarts} />
            </div>
        </>
    )

};

export default LineChart;
