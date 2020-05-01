$(function() {

    /*/=======================================================
    ====================Chartist Charts=======================
    ==========================================================*/

    //======Line Chart====================//
    if($("#lineChartEcharts").length) {
        var lineChart = echarts.init(document.getElementById('lineChartEcharts'));

        var lineOption = {
            xAxis: {
                type: 'category',
                data: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [0, 0, 1, 2, 15, 5, 12, 10, 55, 13, 25, 10, 12, 6, 2, 0, 0],
                type: 'line',
                itemStyle: {
                    color: '#3A5276',
                },
                lineStyle: {
                    width: 3,
                },
                smooth: true,
            }]
        };

        lineChart.setOption(lineOption);
        
    }


    //======Area Chart====================//
    if($("#areaChartEcharts").length) {
        var areaChart = echarts.init(document.getElementById('areaChartEcharts'));

        var areaOption = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [0, 0, 1, 2, 15, 5, 12, 10, 55, 13, 25, 10, 12, 6, 2, 0, 0],
                type: 'line',
                itemStyle: {
                    color: '#00acc1',
                },
                lineStyle: {
                    width: 3,
                },
                areaStyle: {},
                smooth: true,
            }]
        };

        areaChart.setOption(areaOption);
        
    }

    //Stacked area chart
    if($("#areaChartStackedEcharts").length) {
        var stackedAreaChart = echarts.init(document.getElementById('areaChartStackedEcharts'));

        var stackedAreaOption = {
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['Google','Facebook','Twitter','Pininterest','Linkedin']
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        title: 'Save as image',
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Google',
                    type:'line',
                    stack: true,
                    areaStyle: {},
                    data:[120, 132, 101, 134, 90, 230, 210],
                },
                {
                    name:'Facebook',
                    type:'line',
                    stack: true,
                    areaStyle: {},
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Twitter',
                    type:'line',
                    stack: true,
                    areaStyle: {},
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Pininterest',
                    type:'line',
                    stack: true,
                    areaStyle: {normal: {}},
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Linkedin',
                    type:'line',
                    stack: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[820, 932, 901, 934, 1290, 1330, 1320],
                    itemStyle: {
                        color: '#0D47A1',
                    }
                }
            ]
        };

        stackedAreaChart.setOption(stackedAreaOption);
        
    }

    //Bar chart
    if($("#barChartEcharts").length) {
        var barChart = echarts.init(document.getElementById('barChartEcharts'));
        
        barOption = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                itemStyle: {
                    color: "#65B5C2",
                }
            }]
        };

        barChart.setOption(barOption);
    }

    //Wheather statistics chart
    if($("#wheatherChartEcharts").length) {
        var wChart = echarts.init(document.getElementById('wheatherChartEcharts'));

                
        var weatherIcons = {
            'Sunny': '././assets/img/weather/sunny_128.png',
            'Cloudy': '././assets/img/weather/cloudy_128.png',
            'Showers': '././assets/img/weather/showers_128.png',
        };

        var seriesLabel = {
            normal: {
                show: true,
                textBorderColor: '#333',
                textBorderWidth: 2
            }
        }

        var wOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['City Alpha', 'City Beta', 'City Gamma']
            },
            grid: {
                left: 100
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {
                        title: 'Save'
                    }
                }
            },
            xAxis: {
                type: 'value',
                name: 'Days',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                data: ['Sunny', 'Cloudy', 'Showers'],
                axisLabel: {
                    formatter: function (value) {
                        return '{' + value + '| }\n{value|' + value + '}';
                    },
                    margin: 20,
                    rich: {
                        value: {
                            lineHeight: 30,
                            align: 'center'
                        },
                        Sunny: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.Sunny
                            }
                        },
                        Cloudy: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.Cloudy
                            }
                        },
                        Showers: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: weatherIcons.Showers
                            }
                        }
                    }
                }
            },
            series: [
                {
                    name: 'City Alpha',
                    type: 'bar',
                    data: [165, 170, 30],
                    label: seriesLabel,
                    markPoint: {
                        symbolSize: 1,
                        symbolOffset: [0, '50%'],
                        label: {
                        normal: {
                                formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                                backgroundColor: 'rgb(242,242,242)',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                padding: [4, 10],
                                lineHeight: 26,
                                // shadowBlur: 5,
                                // shadowColor: '#000',
                                // shadowOffsetX: 0,
                                // shadowOffsetY: 1,
                                position: 'right',
                                distance: 20,
                                rich: {
                                    a: {
                                        align: 'center',
                                        color: '#fff',
                                        fontSize: 18,
                                        textShadowBlur: 2,
                                        textShadowColor: '#000',
                                        textShadowOffsetX: 0,
                                        textShadowOffsetY: 1,
                                        textBorderColor: '#333',
                                        textBorderWidth: 2
                                    },
                                    b: {
                                        color: '#333'
                                    },
                                    c: {
                                        color: '#ff8811',
                                        textBorderColor: '#000',
                                        textBorderWidth: 1,
                                        fontSize: 22
                                    }
                                }
                        }
                        },
                        data: [
                            {type: 'max', name: 'max days: '},
                            {type: 'min', name: 'min days: '}
                        ]
                    }
                },
                {
                    name: 'City Beta',
                    type: 'bar',
                    label: seriesLabel,
                    data: [150, 105, 110]
                },
                {
                    name: 'City Gamma',
                    type: 'bar',
                    label: seriesLabel,
                    data: [220, 82, 63]
                }
            ]
        };


        wChart.setOption(wOption);

    }

    // Donut Chart
    if($("#donutChartEcharts").length) {
        var donutChart = echarts.init(document.getElementById('donutChartEcharts'));

        var donutOption = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['Sales','Orders','Returned']
            },
            series: [
                {
                    name:'Store',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:234, name:'Sales'},
                        {value:135, name:'Orders'},
                        {value:1548, name:'Returned'}
                    ]
                },
            ],

            markArea: {
                itemStyle: {
                    color: 'green',
                }
            }
            
        };

        donutChart.setOption(donutOption);
        
    }

    //Pie chart
    if($("#pieChartEcharts").length) {
        var pChart = echarts.init(document.getElementById('pieChartEcharts'));

        var pOption = {
            backgroundColor: '#2c343c',
        
            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },
        
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
        
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'Store',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'Products'},
                        {value:310, name:'Stock'},
                        {value:274, name:'Sales'},
                        {value:235, name:'Orders'},
                        {value:400, name:'Returned'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00ccff',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
        
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };

        pChart.setOption(pOption)
    }

    //Radar chart
    if($("#radarChartEcharts").length) {
        var radarChart = echarts.init(document.getElementById('radarChartEcharts'));

        var radarOption = {
            tooltip: {
                trigger: 'item',
                backgroundColor : 'rgba(0,0,0,0.8)'
            },
            legend: {
                type: 'scroll',
                bottom: 10,
                data: (function (){
                    var list = [];
                    for (var i = 1; i <=28; i++) {
                        list.push(i + 2000 + '');
                    }
                    return list;
                })()
            },
            visualMap: {
                top: 'middle',
                right: 10,
                color: ['#3A5276', '#3DC9B0'],
                calculable: true
            },
            radar: {
               indicator : [
                   { text: 'IE8-', max: 400},
                   { text: 'IE9+', max: 400},
                   { text: 'Safari', max: 400},
                   { text: 'Firefox', max: 400},
                   { text: 'Chrome', max: 400}
                ]
            },
            series : (function (){
                var series = [];
                for (var i = 1; i <= 28; i++) {
                    series.push({
                        name:'Browser',
                        type: 'radar',
                        symbol: 'none',
                        lineStyle: {
                            width: 1
                        },
                        emphasis: {
                            areaStyle: {
                                color: 'rgba(0,250,0,0.3)'
                            }
                        },
                        data:[
                          {
                            value:[
                                (40 - i) * 10,
                                (38 - i) * 4 + 60,
                                i * 5 + 10,
                                i * 9,
                                i * i /2
                            ],
                            name: i + 2000 + ''
                          }
                        ]
                    });
                }
                return series;
            })()
        };

        radarChart.setOption(radarOption)
    }

    if($("#salesEcharts").length) {
        var salesEchart = echarts.init(document.getElementById('salesEcharts'));
        
        /*var chartdata = [
            {
              name: 'orders',
              type: 'line',
              smooth:true,
              data: [0, 16, 22, 28, 14, 0],
              symbolSize:20,
              lineStyle: {
                normal: { width: 5 }
              },
            },
            {
              name: 'sold',
              type: 'line',
              smooth:true,
              data: [5, 20, 10, 15, 8, 5, 0],
              symbolSize:20,
              lineStyle: {
                    normal: { width: 5 }
                },
              
            },
          ];
        
          var salesOption = {
            grid: {
              top: '6',
              right: '0',
              bottom: '17',
              left: '25',
            },
            xAxis: {
              data: [  '2013', '2014', '2015', '2016', '2017', '2018'],
              axisLine: {
                lineStyle: {
                  color: '#eaeaea'
                }
              },
              axisLabel: {
                fontSize: 10,
                color: '#000'
              }
            },
            tooltip: {
                show: true,
                showContent: true,
                alwaysShowContent: true,
                triggerOn: 'mousemove',
                trigger: 'axis',
                axisPointer:
                {
                    label: {
                        show: false,
                    },
                }
            },
            yAxis: {
              splitLine: {
                lineStyle: {
                  color: '#efefef'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#eaeaea'
                }
              },
              axisLabel: {
                fontSize: 10,
                color: '#000'
              }
            },
            series: chartdata,
            color:[ '#23649E', '#DC3545']
          };*/

            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            for (var i = 0; i < 100; i++) {
                xAxisData.push('Week' + i);
                data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
            }

            salesOption = {
                grid: {
                    top: '6',
                    right: '0',
                    bottom: '17',
                    left: '25',
                  },
                legend: {
                    data: ['bar', 'bar2'],
                    align: 'left'
                },
                tooltip: {
                    show: true,
                    showContent: true,
                    alwaysShowContent: true,
                    triggerOn: 'mousemove',
                    trigger: 'axis',
                    axisPointer:
                    {
                        label: {
                            show: false,
                        },
                    }
                },
                xAxis: {
                    data: xAxisData,
                    silent: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                        color: '#eaeaea'
                        }
                    },
                    axisLabel: {
                        fontSize: 10,
                        color: '#000'
                    }
                },
                yAxis: {
                    splitLine: {
                        lineStyle: {
                        color: '#efefef'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                        color: '#eaeaea'
                        }
                    },
                    axisLabel: {
                        fontSize: 10,
                        color: '#000'
                    }
                },
                series: [{
                    name: 'bar',
                    type: 'bar',
                    data: data1,
                    animationDelay: function (idx) {
                        return idx * 10;
                    }
                }, {
                    name: 'bar2',
                    type: 'bar',
                    data: data2,
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    }
                }],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                },
                color:[ '#0D47A1', '#3DC9B0']
            };

        
          
        salesEchart.setOption(salesOption);
    }

});