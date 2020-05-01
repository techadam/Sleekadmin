 $(function() {   
      /* ===================================================
      =============Chartjs Charts===========================*
      =======================================================*/

        'use strict';
        var data = {
          labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
          datasets: [{
            label: '# of Projects',
            data: [10, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            pointRadius: 3,
            borderWidth: 1,
            fill: false
          }]
        };
        var multiLineData = {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: 'Dataset 1',
              data: [12, 19, 3, 5, 2, 3],
              borderColor: [
                '#587ce4'
              ],
              borderWidth: 2,
              fill: false
            },
            {
              label: 'Dataset 2',
              data: [5, 23, 7, 12, 42, 23],
              borderColor: [
                '#ede190'
              ],
              borderWidth: 2,
              fill: false
            },
            {
              label: 'Dataset 3',
              data: [15, 10, 21, 32, 12, 33],
              borderColor: [
                '#f44252'
              ],
              borderWidth: 2,
              fill: false
            }
          ]
        };

        var options = {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
      
        };
        var doughnutPieData = {
          datasets: [{
            data: [30, 40, 30],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
          }],
      
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            'Pink',
            'Blue',
            'Yellow',
          ]
        };
        var doughnutPieOptions = {
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          }
        };
        var areaData = {
          labels: ["2013", "2014", "2015", "2016", "2017"],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: true, // 3: no fill
          }]
        };
      
        var areaOptions = {
          plugins: {
            filler: {
              propagate: true
            }
          }
        }
      
        var multiAreaData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
              label: 'Facebook',
              data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
              borderColor: ['rgba(255, 99, 132, 0.5)'],
              backgroundColor: ['rgba(255, 99, 132, 0.5)'],
              borderWidth: 1,
              fill: true
            },
            {
              label: 'Twitter',
              data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
              borderColor: ['rgba(54, 162, 235, 0.5)'],
              backgroundColor: ['rgba(54, 162, 235, 0.5)'],
              borderWidth: 1,
              fill: true
            },
            {
              label: 'Linkedin',
              data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
              borderColor: ['rgba(255, 206, 86, 0.5)'],
              backgroundColor: ['rgba(255, 206, 86, 0.5)'],
              borderWidth: 1,
              fill: true
            }
          ]
        };
      
        var multiAreaOptions = {
          plugins: {
            filler: {
              propagate: true
            }
          },
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      
        
        var radarChartData = {
          labels: ["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],
          datasets: [
            {
                "label":"My First Dataset",
                "data":[65,59,90,81,56,55,40],
                "fill":true,
                "backgroundColor":"rgba(255, 99, 132, 0.2)","borderColor":"rgb(239, 83, 80)","pointBackgroundColor":"rgb(239, 83, 80)","pointBorderColor":"#fff","pointHoverBackgroundColor":"#fff","pointHoverBorderColor":"rgb(239, 83, 80)"
            },{
                "label":"My Second Dataset",
                "data":[28,48,40,19,96,27,100],
                "fill":true,
                "backgroundColor":"rgba(54, 162, 235, 0.2)","borderColor":"rgb(57, 139, 247)","pointBackgroundColor":"rgb(57, 139, 247)","pointBorderColor":"#fff","pointHoverBackgroundColor":"#fff","pointHoverBorderColor":"rgb(57, 139, 247)"
            }
          ]
        }

        var radarChartOptions = {
            elements:{
                line:{
                    tension:0,
                    borderWidth:3
                }
            }
        }
      
        // Get reference to the canvas element with jQuery.
        if ($("#barChart").length) {
          var barChartCanvas = $("#barChart").get(0).getContext("2d");
          var barChart = new Chart(barChartCanvas, {
            type: 'bar',
            data: data,
            options: options
          });
        }
      
        if ($("#lineChart").length) {
          var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
          var lineChart = new Chart(lineChartCanvas, {
            type: 'line',
            data: data,
            options: options
          });
        }
      
        if ($("#linechart-multi").length) {
          var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
          var lineChart = new Chart(multiLineCanvas, {
            type: 'line',
            data: multiLineData,
            options: options
          });
        }
      
        if ($("#areachart-multi").length) {
          var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
          var multiAreaChart = new Chart(multiAreaCanvas, {
            type: 'line',
            data: multiAreaData,
            options: multiAreaOptions
          });
        }
      
        if ($("#doughnutChart").length) {
          var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
          var doughnutChart = new Chart(doughnutChartCanvas, {
            type: 'doughnut',
            data: doughnutPieData,
            options: doughnutPieOptions
          });
        }
      
        if ($("#pieChart").length) {
          var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
          var pieChart = new Chart(pieChartCanvas, {
            type: 'pie',
            data: doughnutPieData,
            options: doughnutPieOptions
          });
        }
      
        if ($("#areaChart").length) {
          var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
          var areaChart = new Chart(areaChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
          });
        }
      
        if($("#radarChart").length) {
          var radarChartCanvas = $("#radarChart").get(0).getContext("2d");
          var radarChart = new Chart(radarChartCanvas, {
            type: 'radar',
            data: radarChartData,
            options: radarChartOptions
          });
        }

        //Index2 Order VS Revenue Graph
        if($("#orderRevenue").length) {
            var ctx = document.getElementById( "orderRevenue" );

            var revChart = new Chart( ctx, {
              type: 'line',
              data: {
                  labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                  datasets: [
                      {
                          label: "Profit",
                          borderColor: "rgb(13, 71, 161)",
                          borderWidth: "3",
                          backgroundColor: "rgb(13, 71, 161, 0.8)",
                          data: [17, 74, 6, 39, 20, 85, 7]
                                  },
                      {
                          label: "Sales",
                          borderColor: "rgb(101, 181, 194)",
                          borderWidth: "3",
                          backgroundColor: "rgba(101, 181, 194, 0.8)",
                          data: [82, 23, 66, 9, 119, 6, 9],
                                  }
                              ]
              },
              options: {
                  responsive: true,
                  tooltips: {
                      
                  },
                  legend: {
                    display: false,
                  },
                  hover: {
                      mode: 'nearest',
                      intersect: true
                  }
      
              }
          } );
        }

        //Index 4 Dashboard Chart
        if($("#revenueChart").length) {
          var ctx = document.getElementById( "revenueChart" );
          ctx.height = 150;
        
          var revChart = new Chart( ctx, {
              type: 'line',
              data: {
                  labels: [ "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                  datasets: [
                      {
                          label: "Profit",
                          borderColor: "rgb(13, 71, 161)",
                          borderWidth: "3",
                          backgroundColor: "rgb(13, 71, 161, 0.5)",
                          data: [0, 30, 60, 25, 60, 25, 50, 10, 50, 90, 120]
                                  },
                      {
                          label: "Sales",
                          borderColor: "rgb(101, 181, 194)",
                          borderWidth: "3",
                          backgroundColor: "rgba(101, 181, 194, 0.5)",
                          data: [0, 60, 25, 100, 20, 75, 30, 55, 20, 60, 20],
                                  }
                              ]
              },
              options: {
                  responsive: true,
                  tooltips: {
                      mode: 'index',
                      intersect: false,
              
                  },
                  hover: {
                      mode: 'nearest',
                      intersect: true
                  }
      
              }
          } );
        }

      /* ===================================================
      =============Chartjs Charts===========================
      =======================================================*/




      /* ===================================================
      =============MorrisJs Charts===========================
      =======================================================*/

      if($("#lineChartMorris").length) {
        new Morris.Line({
          // ID of the element in which to draw the chart.
          element: 'lineChartMorris',
          // Chart data records -- each entry in this array corresponds to a point on
          // the chart.
          data: [
            { year: '2008', value: 20, orders: 30 },
            { year: '2009', value: 10, orders: 15 },
            { year: '2010', value: 5, orders: 5 },
            { year: '2011', value: 5, orders: 7 },
            { year: '2012', value: 20, orders: 25 }
          ],
          // The name of the data record attribute that contains x-values.
          xkey: 'year',
          // A list of names of data record attributes that contain y-values.
          ykeys: ['value', 'orders'],
          // Labels for the ykeys -- will be displayed when you hover over the
          // chart.
          labels: ['Sales', 'Orders'],
          lineColors: ['#23649E', '#515151'],
          //pointSize: ['20px', '10px'],
          //pointFillColors: ['#fff'],
          //pointStrokeColors: ['#eee'],
          //hideHover: 'always',
          resize: true,
        });
      }

      if($("#areaChartMorris").length) {
        new Morris.Area({
          // ID of the element in which to draw the chart.
          element: 'areaChartMorris',
          // Chart data records -- each entry in this array corresponds to a point on
          // the chart.
          data: [
            { year: '2008', value: 20, orders: 30 },
            { year: '2009', value: 10, orders: 15 },
            { year: '2010', value: 5, orders: 5 },
            { year: '2011', value: 5, orders: 7 },
            { year: '2012', value: 20, orders: 25 }
            /*{ year: '2008', value: 0, orders: 0},
            { year: '2009', value: 205, orders: 100},
            { year: '2010', value: 75, orders: 160},
            { year: '2011', value: 150, orders: 100},
            { year: '2012', value: 100, orders: 180},
            { year: '2013', value: 150, orders: 75},
            { year: '2014', value: 50, orders: 200},
            { year: '2015', value: 100, orders: 50}*/
          ],
          // The name of the data record attribute that contains x-values.
          xkey: 'year',
          // A list of names of data record attributes that contain y-values.
          ykeys: ['value', 'orders'],
          // Labels for the ykeys -- will be displayed when you hover over the
          // chart.
          labels: ['Sales', 'Orders'],
          lineColors: ['#65B5C2', '#23649E'],
          resize: true,
        });
      }


      if($("#barChartMorris").length) {
        Morris.Bar({
          element: 'barChartMorris',
          data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
          ],
          xkey: 'y',
          ykeys: ['a', 'b'],
          labels: ['Series A', 'Series B'],
          barColors: ['#23649E', '#65B5C2'],
          resize: true,
        });
      }

      if($("#doughnutChartMorris").length) {
        Morris.Donut({
          element: 'doughnutChartMorris',
          data: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
          ],
          colors: ['#D17905', '#3A5276', '#3DC9B0'],
          resize: true,
        });
      }

      if($("#fbFollowChart").length) {
        Morris.Donut({
          element: 'fbFollowChart',
          data: [
            {label: "Orders", value: 1558},
            {label: "Sales", value: 1442},
          ],
          colors: ['#0D47A1', '#EA5941'],
          resize: true,
        });
      }

      /* ===================================================
      =============Morris js Charts===========================
      =======================================================*/



      /* ===================================================
      =============Flot js Charts===========================
      =======================================================*/

      //Line chart
      if($("#lineChartFlot").length) {
        var sin = [],
          cos = [];

        for (var i = 0; i < 14; i += 0.5) {
          sin.push([i, Math.sin(i)]);
          cos.push([i, Math.cos(i)]);
        }

        var plot = $.plot("#lineChartFlot", [
          { data: sin, label: "sin(x)"},
          { data: cos, label: "cos(x)"}
        ], {
          series: {
            lines: {
              show: true,
            },
            points: {
              show: true
            }
          },
          grid: {
            color: '#afafaf',
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            backgroundColor: '#FFF'
          },
          yaxis: {
            min: -1.2,
            max: 1.2
          },
          colors: ["#23649E", "#65B5C2"],
        });
      }

      if($("#pieChartFlot").length) {
        //Pie chart
        var piedata = [
          { label: "Series1",  data: 10},
          { label: "Series2",  data: 30},
          { label: "Series3",  data: 90},
          { label: "Series4",  data: 70},
        ];

        $.plot("#pieChartFlot", piedata, {
          series: {
            pie: { 
              show: true,
              innerRadius: 0.5,
            }
          },
          colors: ["#009efb", "#BAB0F7", "#55ce63", "#5c5c5c"],
        });
      }

      //Bar Chart
      if($("#barChartFlot").length) {
        var bardata = {color: "#23649E", data:[ ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9] ] };
        
        $.plot("#barChartFlot", [ bardata ], {
          series: {
            bars: {
              show: true,
              barWidth: 0.5,
              align: "center",
              barColor: "#00ccff",
              fill: 1,
            }
          },
          grid: {
            borderWidth: 0,
          },
          xaxis: {
            mode: "categories",
            tickLength: 0,
          }
        });
      }

      //Real time chart
      if($("#realTimeChartFlot").length) {
        var data = [],
        totalPoints = 300;

        function getRandomData() {

          if (data.length > 0)
            data = data.slice(1);

          // Do a random walk

          while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
              y = prev + Math.random() * 10 - 5;

            if (y < 0) {
              y = 0;
            } else if (y > 100) {
              y = 100;
            }

            data.push(y);
          }

          // Zip the generated y values with the x values

          var res = [];
          for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
          }

          return res;
        }

        var plot = $.plot("#realTimeChartFlot", [ getRandomData() ], {
          series: {
            shadowSize: 0,	// Drawing is faster without shadows
            /*lines: {
              fill: 1,
            }*/
          },
          grid: {
            borderWidth: 0,
            backgroundColor: '#fff',
          },
          yaxis: {
            min: 0,
            max: 100,
          },
          xaxis: {
            show: true,
          },
          colors: ["#0D47A1"],
        });
    
        function update() {
    
          plot.setData([getRandomData()]);
    
          // Since the axes don't change, we don't need to call plot.setupGrid()
    
          plot.draw();
          setTimeout(update, 30);
        }
    
        update();
      }
      
      //Stacked bar chart
      if($("#stackedBarChartFlot").length) {
        var d1 = [];
        for (var i = 0; i <= 10; i += 1) {
          d1.push([i, parseInt(Math.random() * 30)]);
        }

        var d2 = [];
        for (var i = 0; i <= 10; i += 1) {
          d2.push([i, parseInt(Math.random() * 30)]);
        }

        var d3 = [];
        for (var i = 0; i <= 10; i += 1) {
          d3.push([i, parseInt(Math.random() * 30)]);
        }

        var stack = 0,
          bars = true,
          lines = false,
          steps = false;

        function plotWithOptions() {
          $.plot("#stackedBarChartFlot", [ d1, d2, d3 ], {
            series: {
              stack: stack,
              lines: {
                show: lines,
                fill: true,
                steps: steps,
              },
              bars: {
                show: bars,
                barWidth: 0.6,
                fill: 1,
              }
            },
      
           grid: {
              borderWidth: 0,
              color: "#afafaf",
            },
            colors: ["#009efb", "#55ce63", "#333"],
          });
        }

        plotWithOptions();

      }

      //Area chart
      if($("#areaChartFlot").length) {
        var areaFlotData = [];
        for (var i = 0; i <= 10; i += 1) {
          areaFlotData.push([i, parseInt(Math.random() * 30)]);
        }

        $.plot("#areaChartFlot", [areaFlotData], {
          series: {
            lines: {
              show: true,
              fill: 1,
            },
            points: {
              show: true
            }
          },
    
          grid: {
            borderWidth: 0,
            color: "#afafaf",
          },
          colors: ["#23649E"],
        });
      }


      //Real time chart Dashboard 2
      if($("#realtimeDashboard").length) {
        var data = [],
        totalPoints = 300;

        function getRandomData() {

          if (data.length > 0)
            data = data.slice(1);

          // Do a random walk

          while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
              y = prev + Math.random() * 10 - 5;

            if (y < 0) {
              y = 0;
            } else if (y > 100) {
              y = 100;
            }

            data.push(y);
          }

          // Zip the generated y values with the x values

          var res = [];
          for (var i = 30; i < data.length; ++i) {
            res.push([i, data[i]])
          }

          return res;
        }

        var plot = $.plot("#realtimeDashboard", [ getRandomData() ], {
          series: {
            shadowSize: 0,	// Drawing is faster without shadows
            lines: {
              fill: 1,
            }
          },
          grid: {
            borderWidth: 0,
            color: '#fff',
            backgroundColor: '#fff',
          },
          yaxis: {
            min: 0,
            max: 100,
            show: false,
          },
          xaxis: {
            show: false,
          },
          colors: ["#65B5C2"],
        });
    
        function updateDashboard() {
    
          plot.setData([getRandomData()]);
    
          // Since the axes don't change, we don't need to call plot.setupGrid()
    
          plot.draw();
          setTimeout(updateDashboard, 300);
        }
    
        updateDashboard();
      }


      
      /* ===================================================
      =============Flot js Charts===========================
      =======================================================*/



      /* ===================================================
      =============Sparkline js Charts===========================
      =======================================================*/

      var myvalues = [10,8,5,7,6,5,4,4,5,2];
      
      //Line chart
      if($("#lineChartSparkline").length) {
        $('#lineChartSparkline').sparkline(myvalues, {
          type: 'line',
          width: '100%',
          height: '100%',
          spotRadius: '3',
          lineColor: '#23649E',
        });
      }

      //Bar chart
      if($("#barChartSparkline").length) {
        //var sbardata = [ [1,4], [2, 3], [3, 2], [4, 1] ];
        
        $('#barChartSparkline').sparkline(myvalues, {
           type: 'bar',
           width: '100%',
           height: '100%',
           barColor: '#23649E',
           barWidth: '37px',
           barSpacing: '7px',
        });
      }

      //Tristate chart
      if($("#tristateChartSparkline").length) {
        var mytrivalues = [1,1,-1,-1,1,1,1,-1,1,1];

        $('#tristateChartSparkline').sparkline(mytrivalues, {
           type: 'tristate',
           width: '100%',
           height: '100%',
           barWidth: '37px',
           barSpacing: '7px',
           posBarColor: '#65B5C2',
        });
      }

      //Pie chart
      if($("#pieChartSparkline").length) {
        var mypievalues = ['10', '20', '35', '50']

        $('#pieChartSparkline').sparkline(mypievalues, {
           type: 'pie',
           width: '100%',
           height: '100%',
           sliceColors: ["#23649E", "#65B5C2", "#00ccff", "#3A5276"],
        });
      }

      //Bullet chart
      if($("#bulletChartSparkline").length) {
        
        $('#bulletChartSparkline').sparkline(myvalues, {
           type: 'bullet',
           width: '100%',
           height: '100%',
           performanceColor: '#23649E',
           rangeColors: ["#23649E", "#4CD4B0", "#E33244", "#23649E"],
        });
      }

      //Dicrete chart
      if($("#boxChartSparkline").length) {
        
        $('#boxChartSparkline').sparkline(myvalues, {
           type: 'box',
           width: '100%',
           height: '100%',
        });
      }


      //Income bar chart dashboard widget
      if($("#incomeBar").length) {
        $('#incomeBar').sparkline([0,50,60,70,50,60,70,50,60,80,90,170,185,140,130,120,90,70,50,60,70,50,60,70,50,60,70], { 
          type: 'bar',
          barColor: ['#23649E'],
          barWidth: '10px',
          height: '60px',
          disableTooltips: true,
        });
      }

      //Income bar chart dashboard widget
      if($("#incomeBarCol").length) {
        $('#incomeBarCol').sparkline([0,50,60,70,50,60,70,50,60,80,90,170,185,140,130,120,90,70,50,60,70,50,60,70,50,60,70], { 
          type: 'bar',
          barColor: ['#efefef'],
          barWidth: '10px',
          height: '60px',
          disableTooltips: true,
        });
      }

      //Expenses bar chart dashboard widget
      if($("#expensesBar").length) {
        $('#expensesBar').sparkline([0,20,30,40,40,50,40,50,40,40,60,50,50,130,100,120,90,70,50,60,70,50,60,70,130,60,70], { 
          type: 'bar',
          barColor: ['#EA5941'],
          barWidth: '10px',
          height: '60px',
          disableTooltips: true,
        });
      }

      //Expenses bar chart dashboard widget
      if($("#expensesBarCol").length) {
        $('#expensesBarCol').sparkline([0,20,30,40,40,50,40,50,40,40,60,50,50,130,100,120,90,70,50,60,70,50,60,70,130,60,70], { 
          type: 'bar',
          barColor: ['#efefef'],
          barWidth: '10px',
          height: '60px',
          disableTooltips: true,
        });
      }

      //Net Profit bar chart dashboard widget
      if($("#profitBar").length) {
        $('#profitBar').sparkline([0,50,60,70,50,60,70,50,60,80,90,170,185,140,130,120,90,70,50,60,70,50,60,70,50,60,70], { 
          type: 'bar',
          barColor: ['rgb(29, 145, 93)'],
          barWidth: '10px',
          height: '60px',
          disableTooltips: true,
        });
      }

      //Net Profit bar chart dashboard widget
      if($("#profitBarCol").length) {
        $('#profitBarCol').sparkline([0,50,60,70,50,60,70,50,60,80,90,170,185,140,130,120,90,70,50,60,70,50,60,70,50,60,70], { 
          type: 'bar',
          barColor: ['#efefef'],
          barWidth: '10px',
          height: '60px',
          disableTooltips: true,
        });
      }

      $(window).resize(function() {
        $('#incomeBar canvas').css("width","100%");
        $('#expensesBar canvas').css("width","100%");
        $('#profitBar canvas').css("width","100%");

        $('#incomeBarCol canvas').css("width","100%");
        $('#expensesBarCol canvas').css("width","100%");
        $('#profitBarCol canvas').css("width","100%");
      });

      /* ===================================================
      =============Sparkline js Charts===========================
      =======================================================*/

      


});