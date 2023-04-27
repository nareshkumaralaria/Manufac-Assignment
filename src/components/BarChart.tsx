import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

import WINE_DATA from '../data/Wine-Data.json';

const BarChart: React.FC = () => {

    // Define a type for the grouped data
    type GroupedData = { [key: string]: number[] };

    // Group the data by alcohol content and get the minimum magnesium value for each group
    const groupedData = WINE_DATA.reduce((acc: GroupedData, d) => {
        const alcohol = d.Alcohol;
        const magnesium = Number(d.Magnesium);
        if (!acc[alcohol]) {
            acc[alcohol] = [magnesium];
        }
        else {
            acc[alcohol].push(magnesium);
        }
        return acc;
    }, {});

    const minMagnesiumData = Object.entries(groupedData).map(([alcohol, magnesiumList]) => [
        alcohol,
        Math.min(...magnesiumList),
    ]);

    // Define the options for the chart
    const option = {
        title: {
            text: "Minimum“Magnesium”value",
            left: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: minMagnesiumData.map((d) => d[0]), // X-axis data
            name: 'Alcohol',
            nameLocation: 'middle',
            nameGap: 30,
        },
        yAxis: {
            type: 'value',
            name: 'Magnesium',
            position: "left",
            nameLocation: 'middle',
            nameGap: 30,
        },
        series: [
            {
                data: minMagnesiumData.map((d) => d[1]), // Y-axis data
                type: 'bar',
            },
        ],
    };

    // Render the chart
    return (
        <>
            <div className="chart">
                <ReactECharts className='bar-chart' option={option} echarts={echarts} />
            </div>
        </>
    )

};

export default BarChart;