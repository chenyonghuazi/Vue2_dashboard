import * as echarts from 'echarts';

//制作home页面的折线图line chart
export const lineChart = (dom, chartTableData) => {

    let data = chartTableData;

    const order = data.orderData;


    const keyArray = Object.keys(order.data[0]) //这里取0只是取个样本而已，关键是拿到字典的keys
    const series = []
    keyArray.forEach(key => {
        series.push({
            name: key,
            data: order.data.map(item => item[key]), //给每个品牌返回一个数据数组
            type: 'line'
        })
    })
    const xData = order.date;

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(dom);

    // 指定图表的配置项和数据
    var option = {
        xAxis: {
            data: xData
        },
        yAxis: {},
        legend: {
            data: keyArray
        },
        series
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


export const Histogram = (dom, chartTableData) => {
    let option = {
        legend:{
            //图例文字颜色
            textStyle:{
                color:'#333'
            },
            data:['新用户', '活跃用户']
        },

        // grid:{
        //     left:'10%'
        // },

        //提示框
        // tooltip: {
        //     trigger: "axis"
        // },
        xAxis: {
            type:"category",
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine:{
                lineStyle:{
                    color:'#17b33'
                }
            },
            axisLabel:{
                interval: 0,
                color:'#333'
            }
        },
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#17b3a3'
                    }
                }
            }
        ],
        color:['#2ec7c9','#b6a2de'],
        series: [
            {
                name: '新用户',
                data: chartTableData.userData.map(item => item.new),
                type:'bar'
            },
            {
                name: '活跃用户',
                data: chartTableData.userData.map(item => item.active),
                type:'bar'
            },
        ]
    }

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(dom);

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

export const pieChart = (dom, chartTableData)=>{
    let option = {
        tooltip:{
            trigger:"item",
        },
        color:[
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
        ],
        series: [
            {
                data:chartTableData.videoData,
                type:'pie'
            }
        ]
    }

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(dom);

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}