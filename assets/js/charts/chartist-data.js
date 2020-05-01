$(function() {

    /*/=======================================================
    ====================Chartist Charts=======================
    ==========================================================*/

    //======Line Chart====================//
    if($("#lineChartChartist").length) {
        new Chartist.Line('.ct-chart', {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
              {
                  labels: 'Working week days',
                  data: [12, 9, 7, 8, 5],
              },
              {
                  labels: 'Working week days',
                  data: [12, 7, 8, 5],
              },
            ]
          }, {
            fullWidth: true,
            chartPadding: {
              right: 40
            }
        });
    }

    //==============Area Chart==============================//
    if($("#areaChartChartist").length) {
        new Chartist.Line("#areaChartChartist", {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
              [5, 9, 7, 8, 5, 3, 5, 4]
            ]
          }, {
            low: 0,
            showArea: true
        });
    }


    //===========Overlapping Bars===========================//
    if($("#overlapBarchartChartist").length) {
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
              [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        };
          
        var options = {
            seriesBarDistance: 10
        };
        
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
                }
            }]
        ];
          
         new Chartist.Bar('#overlapBarchartChartist', data, options, responsiveOptions);
          
    }
    
    //===================Stacked bar chart======================/
    if($("#stackedBarchartChartist").length) {
        new Chartist.Bar("#stackedBarchartChartist", {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            series: [
              [800000, 1200000, 1400000, 1300000],
              [200000, 400000, 500000, 300000],
              [100000, 200000, 400000, 600000]
            ]
          }, {
            stackBars: true,
            axisY: {
              labelInterpolationFnc: function(value) {
                return (value / 1000) + 'k';
              }
            }
          }).on('draw', function(data) {
            if(data.type === 'bar') {
              data.element.attr({
                style: 'stroke-width: 30px'
              });
            }
        });
    }

    //============PIe Chart===================//
    if($("#pieChartChartist").length) {
        var data = {
            series: [5, 3, 4]
          };
          
          var sum = function(a, b) { return a + b };
          
          new Chartist.Pie("#pieChartChartist", data, {
            labelInterpolationFnc: function(value) {
              return Math.round(value / data.series.reduce(sum) * 100) + '%';
            }
        });
    }

    //===========Donut Chart ========================//
    if($("#donutChartChartist").length) {
        new Chartist.Pie("#donutChartChartist", {
            series: [20, 10, 30, 40]
          }, {
            donut: true,
            donutWidth: 60,
            donutSolid: true,
            startAngle: 270,
            showLabel: true
        });
          
    }
    

    //Dashboard revenue vs cost
    if($("#costRevenue").length) {
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
              [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        };
          
        var options = {
            seriesBarDistance: 10
        };
        
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
                }
            }]
        ];
          
         new Chartist.Bar('#costRevenue', data, options, responsiveOptions);
    }

    //Dashboard facebook users chat
    if($("#areaChartFb").length) {
        new Chartist.Line('#areaChartFb', {
            labels: [1, 2, 3, 4, 5, 6, 7],
            series: [
              [2, 3, 2, 3, 3, 2, 1]
            ]
          }, {
            low: 0,
            showArea: false
        });
    }


     /*===================== Chartist JS ================== */

    /*============ Site Traffic ==================*/
    if($('.chartContainer').length) {
        var chart = new Chartist.Line('.chartContainer', {
          labels: [2008,2009,2010,2011,2012,2013,2014,2015, 2016],
          series: [
            /*[1, 5, 2, 5, 4, 3],
            [2, 3, 4, 8, 1, 2],*/
            [0, 205, 75, 150, 100, 150, 50, 100, 0],            
            [0, 100, 160, 100, 180, 75, 200, 50, 0],
          ]
        }, {
          low: 0,
          showArea: true,
          showPoint: false,
          fullWidth: true
        });
      }      
  
      /*====== Stacked Bar Chart widget================*/
      
      if($('#myChart').length) {
        new Chartist.Bar('#myChart', {
          labels: ['Sales', 'Orders', 'Users', 'Reviews'],
          series: [
            [5, 4, 3, 7],
            [3, 2, 9, 5],
            [1, 5, 8, 4],
            [2, 3, 4, 6],
            [4, 1, 2, 1]
          ]
        }, {
          // Default mobile configuration
          stackBars: true,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value.split(/\s+/).map(function(word) {
                return word[0];
              }).join('');
            }
          },
          axisY: {
            offset: 20
          }
        }, [
          // Options override for media > 400px
          ['screen and (min-width: 400px)', {
            reverseData: true,
            horizontalBars: true,
            axisX: {
              labelInterpolationFnc: Chartist.noop
            },
            axisY: {
              offset: 60
            }
          }],
          // Options override for media > 800px
          ['screen and (min-width: 800px)', {
            stackBars: false,
            seriesBarDistance: 20
          }],
          // Options override for media > 1000px
          ['screen and (min-width: 1000px)', {
            reverseData: false,
            horizontalBars: false,
            seriesBarDistance: 15
          }]
        ]);
      }
  
      /*====== Stacked Bar Chart widget================*/
  

    /*/=======================================================
    ====================Chartist Charts=======================
    ==========================================================*/

});