import Mock from 'mockjs';

let list = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            list.push(
                //Mock.Random.float 产生随机数100到8000之间，保留小数，最小0位最大0位
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }

        return {
            code: 200,
            data: {
                //块图
                videoData: [
                    {
                        name: '小米',
                        value: 2999
                    },
                    {
                        name: '苹果',
                        value: 2999
                    },
                    {
                        name: 'vivo',
                        value: 1500
                    },
                    {
                        name: 'oppo',
                        value: 1999
                    },
                    {
                        name: '魅族',
                        value: 2200
                    },
                    {
                        name: '三星',
                        value: 4500
                    },

                ],
                //柱状图
                userData: [
                    {
                        data: '周一',
                        new: 10,
                        active: 200
                    },
                    {
                        data: '周二',
                        new: 15,
                        active: 500
                    },
                    {
                        data: '周三',
                        new: 30,
                        active: 560
                    },
                    {
                        data: '周四',
                        new: 60,
                        active: 800
                    },
                    {
                        data: '周五',
                        new: 80,
                        active: 400
                    },
                    {
                        data: '周六',
                        new: 60,
                        active: 300
                    },
                    {
                        data: '周日',
                        new: 20,
                        active: 180
                    },
                ],
                //折线图
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: list
                },
                // 左侧数据图表
                tableData: [
                    {
                        name: "oppo",
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22000,
                    },
                    {
                        name: "vivo",
                        todayBuy: 300,
                        monthBuy: 2200,
                        totalBuy: 24000,
                    },
                    {
                        name: "苹果",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800,
                    },
                    {
                        name: "小米",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800,
                    },
                    {
                        name: "三星",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800,
                    },
                    {
                        name: "魅族",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800,
                    },
                ],
            }
        }
    }
}