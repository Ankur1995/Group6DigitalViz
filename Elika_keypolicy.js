var chartDom1 = document.getElementById('main1');
    var myChart1 = echarts.init(chartDom1);
    var option1;

        option1 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: ''
            }
            }
        },
        legend: {
            data: ['clean conditional', 'clean unconditional', 'fossil conditional', 'fossil unconditional', 'other energy']
        },
        toolbox: {
            feature: {
            
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
            boundaryGap: false,
            data: ['2020', '2021', '2022']
            }
        ],
        yAxis: [
            { 
            type: 'value'
            }
        ],
        series: [
            {
            name: 'clean conditional',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            color: 'mediumaquamarine',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            }, 
            data: [8768.6,
                    480.8,
                    0]
            },
            {
            name: 'clean unconditional',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            color: 'mediumslateblue',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            }, 
            data: [825.5,
                    48.3,
                    183]
            },
            {
            name: 'fossil conditional',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            color: 'orange',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            }, 
            data: [505,
                    31.2,
                    0]
            },
            {
            name: 'fossil unconditional',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            color: 'salmon',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            }, 
            data: [103180,
                    2139.6,
                    0,]
            },
            {
            name: 'other energy',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            color: 'lightskyblue',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            }, 
            data: [2265.2,
                    3100.8,
                    9.1]
            }
        ]
        };

        option1 && myChart1.setOption(option1);