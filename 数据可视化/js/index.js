// 监控区域模块制作
(function () {
    $(".monitor .tabs").on("click", "a", function () {
        $(this)
            .addClass("active")
            .siblings("a")
            .removeClass("active");

        // console.log($(this).index());
        //   选取对应索引号的content
        $(".monitor .content")
            .eq($(this).index())
            .show()
            .siblings(".content")
            .hide();
    });
    // 1. 先克隆marquee里面所有的行（row）
    $(".marquee-view .marquee").each(function () {
        // console.log($(this));
        var rows = $(this)
            .children()
            .clone();
        $(this).append(rows);
    });
})();
// 点位分布统计模块
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2. 指定配置项和数据
    var option = {
        color: [
            "rgb(193,230,235)",
            "rgb(44,195,236)",
            "rgb(110,190,68)",
            "rgb(234,232,77)",
            "rgb(246,147,49)",
            "rgb(238,42,41)"
        ],
        tooltip: {
            trigger: 'item'
        },

        series: [
            {
                name: '全国地表水',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 6.9, name: "I类" },
                    { value: 49.2, name: "II类" },
                    { value: 28.8, name: "III类" },
                    { value: 11.8, name: "IV类" },
                    { value: 2.2, name: "V类" },
                    { value: 1.2, name: "劣V类" },

                ],
            }
        ]
    };

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 柱形图模块
(function () {
    var item = {
        name: "",
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
            color: "#254065"
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: "opacity: 0"
        }
    };
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
    // 2. 指定配置和数据
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0,
            0,
            0,
            1,
            [
                { offset: 0, color: "#00fffb" }, // 0 起始颜色
                { offset: 1, color: "#0061ce" } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: "item"
        },
        grid: {
            left: "0%",
            right: "3%",
            bottom: "3%",
            top: "3%",
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        xAxis: [
            {
                type: "category",
                data: [
                    "阜阳",
                    "汕尾",
                    "南宁",
                    "贵阳",
                    "海口",
                    "郑州",
                    "哈尔滨",
                    "武汉",
                    "济南",
                    "太原"
                ],
                axisTick: {
                    alignWithLabel: false,
                    // 把x轴的刻度隐藏起来
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                // x轴这条线的颜色样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                    }
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisTick: {
                    alignWithLabel: false,
                    // 把y轴的刻度隐藏起来
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                // y轴这条线的颜色样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                    }
                },
                // y轴分割线的颜色样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "60%",
                data: [
                    1181.1,
                    1862.7,
                    1291.3,
                    1257.1,
                    2135.3,
                    609.5,
                    651.3,
                    1110.6,
                    880,
                    365
                ]
            }
        ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
// 销售统计模块
(function () {
    // (1)准备数据
    var data = {
        year: [
            [26.659, 25.94, 26.13, 25.65, 25.64, 25.66, 26.1934, 26.1459, 26.673, 26.18, 26.77, 26.47], [11.94, 11.96, 10.24, 9.52, 10.52, 9.77, 9.31, 10.93, 11.15, 10.23, 10.7, 10.73]
        ],
    };
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line"));
    // 2. 指定配置和数据
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [

                "07年",
                "08年",
                "09年",
                "10年",
                "11年",
                "12年",
                "13年",
                "14年",
                "15年",
                "16年",
                "17年",
                "18年",
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "汕尾",
                type: "line",
                stack: "总量",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "南宁",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);



    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

