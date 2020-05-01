$(function() {

     /* ===================================================
      =============NVD3 Charts===========================
      =======================================================*/
      
      //===============Line chart=========================
      if($("#lineChartNvd3").length) {
        function sinAndCos() {
            var sin = [],
                cos = [];
          
            for (var i = 0; i < 100; i++) {
              sin.push({x: i, y: Math.sin(i/10)});
              cos.push({x: i, y: .5 * Math.cos(i/10)});
            }
          
            return [
              {
                values: sin,
                key: 'Sine Wave',
                color: '#ff7f0e'
              },
              {
                values: cos,
                key: 'Cosine Wave',
                color: '#2ca02c'
              }
            ];
          }      
    
          nv.addGraph(function() {
            var chart = nv.models.lineChart()
              .useInteractiveGuideline(true)
              ;
          
            chart.xAxis
              .axisLabel('Time (ms)')
              .tickFormat(d3.format(',r'))
              ;
          
            chart.yAxis
              .axisLabel('Voltage (v)')
              .tickFormat(d3.format('.02f'))
              ;
          
            d3.select('#lineChartNvd3 svg')
              .datum(sinAndCos())
              .transition().duration(500)
              .call(chart)
              ;
          
            nv.utils.windowResize(chart.update);
          
            return chart;
          });
      }

      //========Scatter/Bubble chart========================
      if($("#scatterChartNvd3").length) {
        
        function scatterData(groups, points) {
            var data = [],
                shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
                random = d3.random.normal();
          
            for (i = 0; i < groups; i++) {
              data.push({
                key: 'Group ' + i,
                values: []
              });
          
              for (j = 0; j < points; j++) {
                data[i].values.push({
                  x: random()
                , y: random()
                , size: Math.random()
                //, shape: shapes[j % 6]
                });
              }
            }
          
            return data;
        }
          
        
        nv.addGraph(function() {
            var chart = nv.models.scatterChart()
                          .showDistX(true)
                          .showDistY(true)
                          .color(d3.scale.category10().range());
          
            chart.xAxis.tickFormat(d3.format('.02f'));
            chart.yAxis.tickFormat(d3.format('.02f'));
          
            d3.select('#scatterChartNvd3 svg')
                .datum(scatterData(4,40))
              .transition().duration(500)
                .call(chart);
          
            nv.utils.windowResize(chart.update);
          
            return chart;
        });
          
      }

      //==============Discrete bar chart===============
      if($("#barChartNvd3").length) {
        var discretebardata = [
            {
              key: "Cumulative Return",
              values: [
                { 
                  "label" : "A" ,
                  "value" : -29.765957771107
                } , 
                { 
                  "label" : "B" , 
                  "value" : 0
                } , 
                { 
                  "label" : "C" , 
                  "value" : 32.807804682612
                } , 
                { 
                  "label" : "D" , 
                  "value" : 196.45946739256
                } , 
                { 
                  "label" : "E" ,
                  "value" : 0.19434030906893
                } , 
                { 
                  "label" : "F" , 
                  "value" : -98.079782601442
                } , 
                { 
                  "label" : "G" , 
                  "value" : -13.925743130903
                } , 
                { 
                  "label" : "H" , 
                  "value" : -5.1387322875705
                }
              ]
            }
        ]          
        
        nv.addGraph(function() {
            var chart = nv.models.discreteBarChart()
              .x(function(d) { return d.label })
              .y(function(d) { return d.value })
              .staggerLabels(true)
              .tooltips(false)
              .showValues(true)
          
            d3.select('#barChartNvd3 svg')
              .datum(discretebardata)
              .transition().duration(500)
              .call(chart)
              ;
          
            nv.utils.windowResize(chart.update);
          
            return chart;
        });
          
      }

      //==========Pie Chart=========================
      if($("#pieChartNvd3").length) {
        var piedatanvd3 = [
            {
            "label": "One",
            "value" : 29.765957771107
            } ,
            {
            "label": "Two",
            "value" : 0
            } ,
            {
            "label": "Three",
            "value" : 32.807804682612
            } ,
            {
            "label": "Four",
            "value" : 196.45946739256
            } ,
            {
            "label": "Five",
            "value" : 0.19434030906893
            } ,
            {
            "label": "Six",
            "value" : 98.079782601442
            } ,
            {
            "label": "Seven",
            "value" : 13.925743130903
            } ,
            {
            "label": "Eight",
            "value" : 5.1387322875705
            }
        ]

        nv.addGraph(function() {
            var chart = nv.models.pieChart()
                .x(function(d) { return d.label })
                .y(function(d) { return d.value })
                .showLabels(false);
          
              d3.select("#pieChartNvd3 svg")
                .datum(piedatanvd3)
                .transition().duration(1200)
                .call(chart);
          
            return chart;
        });
      }

      // ============= Grouped / Stacked bar chart ================= 
      if($("#stackedChartNvd3").length) {
        let stackedNvd3Data = function() {
            return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
              return {
                key: 'Stream' + i,
                values: data
              };
            });
        }
          
        /* Inspired by Lee Byron's test data generator. */
        function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;
        function bump(a) {
            var x = 1 / (.1 + Math.random()),
                y = 2 * Math.random() - .5,
                z = 10 / (.1 + Math.random());
            for (var i = 0; i < m; i++) {
            var w = (i / m - y) * z;
            a[i] += x * Math.exp(-w * w);
            }
        }
        return d3.range(n).map(function() {
            var a = [], i;
            for (i = 0; i < m; i++) a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++) bump(a);
            return a.map(stream_index);
            });
        }
        
        /* Another layer generator using gamma distributions. */
        function stream_waves(n, m) {
        return d3.range(n).map(function(i) {
            return d3.range(m).map(function(j) {
                var x = 20 * j / m - i / 3;
                return 2 * x * Math.exp(-.5 * x);
            }).map(stream_index);
            });
        }
        
        function stream_index(d, i) {
        return {x: i, y: Math.max(0, d)};
        }

        nv.addGraph(function() {
            var chart = nv.models.multiBarChart();
        
            chart.xAxis
                .tickFormat(d3.format(',f'));
        
            chart.yAxis
                .tickFormat(d3.format(',.1f'));
        
            d3.select('#stackedChartNvd3 svg')
                .datum(stackedNvd3Data)
                .transition().duration(500)
                .call(chart)
                ;
        
            nv.utils.windowResize(chart.update);
        
            return chart;
        });
      }

      
      /* ===================================================
      =============NVD3 Charts===========================
      =======================================================*/

});