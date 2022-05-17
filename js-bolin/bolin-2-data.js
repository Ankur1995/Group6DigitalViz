
      function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      function formatNumWithThousands(number) {
        var reg = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
        return (number + "").replace(reg, "$1,");
      }

      //startOption
var option ={
  "extraSetting": {
    "isVerticalLine": false,
    "isAreaChart": false,
    "stackType": "none",
    "areaOpacity": 0.5,
    "isMultiAxiesLabel": false,
    "axisLabelStr": "",
    "isShowGradientColor": false,
    "isGradientColorUpToDown": true,
    "sencondColor": "#ffffff",
    "hasMarkPoint": false,
    "hasMarkLine": false,
    "hasMarkArea": false
  },
  "chartWidth": 1280.0,
  "chartHeigth": 770.0,
  "isFullScreen": false,
  "isSvgRender": false,
  "backgroundColor": "transparent",
  "color": [
    "#008b8b",
    "#FFA500",
    "#4682b4",
    "#DA70D6",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#b54d4d",
    "#2d0707"
  ],
  "title": {
    "text": "Energy use per person(kWh) - Folding Line Chart"
  },
  "legend": {
    "show": true,
    "selectedMode": "multiple",
    "type": "scroll",
    "top": "5%",
    "left": "5%",
    "orient": "horizontal",
    "selector": false,
    "textStyle": {
      "color": "#333",
      "fontSize": 14
    }
  },
  "tooltip": {
    "show": true,
    "trigger": "axis",
    "axisPointer": {
      "type": "cross"
    }
  },
  "grid": {
    "left": "10%",
    "top": "10%",
    "right": "10%",
    "bottom": "15%"
  },
  "xAxis": {
    "type": "category",
    "offset": 13,
    "inverse": false,
    "boundaryGap": true,
    "axisLabel": {
      "color": "#000000",
      "fontSize": 13
    }
  },
  "yAxis": {
    "type": "value",
    "offset": 19,
    "nameLocation": "middle",
    "nameGap": 29,
    "name": "Energy use per person (kWh)",
    "nameTextStyle": {
      "color": "#000000",
      "fontSize": 17
    },
    "isSettingMinAuto": true,
    "scale": true,
    "splitNumber": 10,
    "minManual": 0,
    "isSettingMaxAuto": true,
    "maxManual": 100,
    "axisLabel": {
      "show": false,
      "color": "#000000",
      "fontSize": 12
    },
    "splitLine": {
      "show": false
    }
  },
  "dataZoom": [
    {
      "type": "inside",
      "disabled": false,
      "startValueStr": "",
      "endValueStr": ""
    },
    {
      "type": "slider",
      "show": true
    }
  ],
  "dataset": {
    "source": [
      [
        "Time",
        "USA",
        "India",
        "UK",
        "China"
      ],
      [
        1990.0,
        89240.475,
        2620.471,
        43814.255,
        6774.268
      ],
      [
        1992.0,
        88734.546,
        2793.082,
        44204.742,
        7309.308
      ],
      [
        1994.0,
        90417.619,
        2900.015,
        43919.54,
        8195.953
      ],
      [
        1996.0,
        93295.646,
        3123.361,
        45930.687,
        8734.274
      ],
      [
        1998.0,
        92268.789,
        3367.489,
        45292.167,
        8656.417
      ],
      [
        2000.0,
        93804.323,
        3513.986,
        45129.218,
        9137.606
      ],
      [
        2002.0,
        91114.972,
        3522.445,
        44299.865,
        10379.148
      ],
      [
        2004.0,
        91575.442,
        3829.811,
        44754.768,
        13971.352
      ],
      [
        2006.0,
        89218.479,
        4140.191,
        43976.792,
        17202.431
      ],
      [
        2008.0,
        86567.053,
        4616.208,
        40989.33,
        19176.831
      ],
      [
        2010.0,
        83520.978,
        5058.587,
        39023.203,
        21163.989
      ],
      [
        2011.0,
        82062.207,
        5288.312,
        36558.65,
        22711.221
      ],
      [
        2012.0,
        79270.187,
        5494.03,
        36700.442,
        23488.989
      ],
      [
        2013.0,
        80806.045,
        5642.266,
        36256.395,
        24224.686
      ],
      [
        2014.0,
        81054.894,
        5957.459,
        33927.374,
        24776.264
      ],
      [
        2015.0,
        79717.092,
        6081.375,
        34084.63,
        24983.73
      ],
      [
        2016.0,
        79080.9,
        6281.97,
        33484.556,
        25268.551
      ],
      [
        2017.0,
        78831.384,
        6461.587,
        33125.697,
        25960.286
      ],
      [
        2018.0,
        81218.395,
        6805.087,
        32878.001,
        26768.309
      ],
      [
        2019.0,
        80105.754,
        6889.742,
        31784.327,
        27516.3
      ],
      [
        2020.0,
        73677.319,
        6437.936,
        28211.222,
        28071.824
      ]
    ]
  },
  "series": [
    {
      "name": "数值2",
      "type": "line",
      "symbol": "emptyCircle",
      "symbolSize": 4,
      "showSymbol": true,
      "isStep": false,
      "smooth": true,
      "label": {
        "show": true,
        "color": "inherit",
        "textBorderWidth": 0,
        "fontSize": 12,
        "position": "top",
        "unit": "无",
        "precision": 0,
        "isPercent": false
      },
      "emphasis": {
        "focus": "series"
      },
      "endLabel": {
        "show": true,
        "color": "inherit",
        "textBorderWidth": 0,
        "fontSize": 14,
        "distance": 10,
        "formatter": "{a}"
      },
      "labelLayout": {
        "hideOverlap": true
      },
      "itemStyle": {
        "color": "#1f77b4"
      },
      "lineStyle": {
        "width": 3
      },
      "encode": {
        "x": 0,
        "y": 2
      },
      "markPoint": {
        "data": [
          {
            "name": "最大值",
            "type": "max",
            "symbol": "circle",
            "symbolSize": 8,
            "label": {
              "show": true,
              "position": "top",
              "distance": 5,
              "color": "inherit",
              "textBorderWidth": 0,
              "fontSize": 12,
              "formatter": "{b}:{c}"
            }
          },
          {
            "name": "最小值",
            "type": "min",
            "symbol": "circle",
            "symbolSize": 8,
            "label": {
              "show": true,
              "position": "bottom",
              "distance": 5,
              "color": "inherit",
              "textBorderWidth": 0,
              "fontSize": 12,
              "formatter": "{b}:{c}"
            }
          },
          {
            "name": "平均值",
            "type": "average",
            "symbol": "circle",
            "symbolSize": 8,
            "label": {
              "show": true,
              "position": "right",
              "distance": 5,
              "color": "inherit",
              "textBorderWidth": 0,
              "fontSize": 12,
              "formatter": "{b}:{c}"
            }
          }
        ]
      },
      "markLine": {
        "symbol": [
          "none",
          "none"
        ],
        "symbolSize": 10,
        "data": [
          {
            "name": "平均值",
            "isType": true,
            "type": "average",
            "yAxis": 100,
            "precision": 2,
            "label": {
              "show": true,
              "position": "end",
              "distance": 5,
              "color": "inherit",
              "textBorderWidth": 0,
              "fontSize": 12,
              "formatter": "{b}:{c}"
            },
            "lineStyle": {
              "width": 1,
              "type": "dashed",
              "color": "inherit",
              "opacity": "1"
            }
          }
        ]
      },
      "markArea": {
        "data": [
          {
            "0": {
              "xAxisStartValue": 0,
              "yAxisStartValue": 0,
              "itemStyle": {
                "color": "red",
                "borderWidth": 0,
                "opacity": 0.5
              },
              "label": {
                "show": true,
                "fontSize": 20,
                "color": "blue",
                "textBorderWidth": 0,
                "position": "inside",
                "distance": 5,
                "formatter": "涨得很猛"
              }
            },
            "1": {
              "xAxisEndValue": 0,
              "yAxisEndValue": 0
            },
            "isxAxis": true
          }
        ]
      }
    }
  ]
};
//endOption

      let unitValue;
      switch (option.series[0].label.unit) {
        case "千":
          unitValue = 1000;
          break;
        case "万":
          unitValue = 10000;
          break;
        case "百万":
          unitValue = 1000000;
          break;
        case "百万":
          unitValue = 1000000;
          break;
        case "亿":
          unitValue = 100000000;
          break;
        case "十亿":
          unitValue = 1000000000;
          break;
        default:
          unitValue = 1;
          break;
      }

      //当单位不是1时，要做转换数据源
      if (unitValue != 1) {
        let dstSource = [];
        let srcHeaders = option.dataset.source[0];
        let srcSourceData = _.tail(option.dataset.source);

        dstSource.push(srcHeaders);

        for (let index = 0; index < srcSourceData.length; index++) {
          const row = srcSourceData[index];
          //第2列开始
          let dstRow = [];
          dstRow.push(row[0]);
          for (let icol = 1; icol < row.length; icol++) {
            const cell = row[icol];
            dstRow.push(cell / unitValue);
          }

          dstSource.push(dstRow);
        }
        //重新赋值新的单位处理过的数据
        option.dataset.source = dstSource;
      }

      let headers = option.dataset.source[0];
      let srcData = _.tail(option.dataset.source);

      //设置下数据标签小数点和百分比格式
      option.series[0].label.formatter = function (params) {
        let value;
        if (option.extraSetting.isVerticalLine) {
          value = params.value[0];
        } else {
          value = params.value[1];
        }

        if (option.series[0].label.isPercent) {
          value = value * 100;
          return formatNumWithThousands(value.toFixed(option.series[0].label.precision)) + "%";
        } else {
          return formatNumWithThousands(value.toFixed(option.series[0].label.precision));
        }
      };

      //设置下辅助点、线、面
      if (!option.extraSetting.hasMarkPoint) {
        _.omit(option, "series[0].markPoint");
      } else {
        for (let index = 0; index < option.series[0].markLine.data.length; index++) {
          const element = option.series[0].markLine.data[index];
          //formatter的换行处理一下
          element.label.formatter = element.label.formatter.replace(/\\n/g, "\n");
        }
      }

      if (!option.extraSetting.hasMarkLine) {
        _.omit(option, "series[0].markLine");
      } else {
        //删除一下手工指定还是内置type
        for (let index = 0; index < option.series[0].markLine.data.length; index++) {
          const element = option.series[0].markLine.data[index];
          if (element.isType) {
            _.omit(option, `series[0].markLine.data[${index}].yAxis`);
          } else {
            _.omit(option, `series[0].markLine.data[${index}].type`);
          }
          //formatter的换行处理一下
          element.label.formatter = element.label.formatter.replace(/\\n/g, "\n");
        }
      }

      if (!option.extraSetting.hasMarkArea) {
        _.omit(option, "series[0].markArea");
      } else {
        //重新设置下纵坐标或横坐标，并将label和itemstyle属性放到0对象里
        for (let index = 0; index < option.series[0].markArea.data.length; index++) {
          const element = option.series[0].markArea.data[index];
          if (element.isxAxis) {
            let startValueStr = element["0"].xAxisStartValue;
            let endValueStr = element["1"].xAxisEndValue;

            let axisStart;
            let axisEnd;

            if (startValueStr != "") {
              if (isNaN(startValueStr)) {
                if (dayjs(startValueStr).isValid()) {
                  let dateValues = srcData.map((s) => dayjs(s[0]).valueOf());
                  dateValues.sort();
                  axisStart = _.sortedIndex(dateValues, dayjs(startValueStr).valueOf());
                } else {
                  axisStart = srcData.map((s) => s[0]).indexOf(startValueStr);
                }
              } else {

                axisStart = Number(startValueStr);

                // if (option.xAxis.type == "value") {
                //   //补充一个逻辑，当为数字类型坐标轴时，仍然需要算排序
                //   let dateValues = srcData.map((s) => s[0]);
                //   dateValues.sort();
                //   axisStart = _.sortedIndex(dateValues, Number(startValueStr));
                // } else {
                //   axisStart = Number(startValueStr);
                // }
              }
            }

            if (endValueStr != "") {
              if (isNaN(endValueStr)) {
                if (dayjs(endValueStr).isValid()) {
                  let dateValues = srcData.map((s) => dayjs(s[0]).valueOf());
                  let valueIndex = dateValues.indexOf(dayjs(endValueStr).valueOf());
                  if (dateValues.indexOf(dayjs(endValueStr).valueOf()) == -1) {
                    //如果它是比最大值还大，它的位置是最大值的下一位，这里减1处理
                    //同样地当比最大值要小时，也需要将它的位置减1，引用到比它小的值作为下界
                    axisEnd = _.sortedIndex(dateValues, dayjs(endValueStr).valueOf()) - 1;
                  } else {
                    axisEnd = valueIndex;
                  }
                } else {
                  axisEnd = srcData.map((s) => s[0]).indexOf(endValueStr);
                }
              } else {
                axisEnd = Number(endValueStr);
                // if (option.xAxis.type == "value") {
                //   //补充一个逻辑，当为数字类型坐标轴时，仍然需要算排序
                //   let dateValues = srcData.map((s) => s[0]);
                //   dateValues.sort();
                //   axisEnd = _.sortedIndex(dateValues, Number(endValueStr)) - 1;
                // } else {
                //   axisEnd = Number(endValueStr);
                // }
              }
            }

            if (option.extraSetting.isVerticalLine) {
              element["0"].yAxis = axisStart;
              element["1"].yAxis = axisEnd;
            } else {
              element["0"].xAxis = axisStart;
              element["1"].xAxis = axisEnd;
            }
          } else {
            if (option.extraSetting.isVerticalLine) {
              element["0"].xAxis = element["0"].xAxisStartValue;
              element["1"].xAxis = element["1"].xAxisEndValue;
            } else {
              element["0"].yAxis = element["0"].yAxisStartValue;
              element["1"].yAxis = element["1"].yAxisEndValue;
            }
          }
          //formatter的换行处理一下
          element["0"].label.formatter = element["0"].label.formatter.replace(/\\n/g, "\n");
        }
      }

      //是否面积图
      if (option.extraSetting.isAreaChart) {
        option.series[0].areaStyle = {
          opacity: option.extraSetting.areaOpacity
        };
      }

      //设置下阶梯属性
      if (!option.extraSetting.isAreaChart && option.series[0].isStep) {
        option.series[0].step = "middle";
      } else {
        option.series[0].step = false;
      }

      //坐标轴标签设置，只有为文本时才会进行格式化
      if (option.xAxis.type == "category") {
        if (option.extraSetting.axisLabelStr != null && option.extraSetting.axisLabelStr != "") {
          let axisLabelFunc = function (value, index) {
            try {
              return dayjs(value).format(option.extraSetting.axisLabelStr);
            } catch (error) {
              return value;
            }
          };
          option.xAxis.axisLabel.formatter = axisLabelFunc;
        } else if (srcData.every((s) => typeof s[0] != "number") && srcData.every((s) => dayjs(s[0]).isValid())) {
          let axisLabelFunc = function (value, index) {
            try {
              return dayjs(value).format("MM-DD");
            } catch (error) {
              return value;
            }
          };
          option.xAxis.axisLabel.formatter = axisLabelFunc;
        }
      }

      //设置下dataZoom的坐标轴引用引用
      if (option.extraSetting.isVerticalLine) {
        option.dataZoom[0].yAxisIndex = 0;
        option.dataZoom[1].yAxisIndex = 0;
      } else {
        option.dataZoom[0].xAxisIndex = 0;
        option.dataZoom[1].xAxisIndex = 0;
      }

      //设置下dataZoom的显示属性
      if (option.dataZoom[1].show) {
        option.dataZoom[0].disabled = false;
      } else {
        option.dataZoom[0].disabled = true;
      }

      //坐标最大最小值
      if (!option.yAxis.isSettingMinAuto) {
        option.yAxis.min = option.yAxis.minManual;
      }

      if (!option.yAxis.isSettingMaxAuto) {
        option.yAxis.max = option.yAxis.maxManual;
      }

      //处理下dataZoom的初始值结束值
      let startValueStr = option.dataZoom[0].startValueStr;
      let endValueStr = option.dataZoom[0].endValueStr;
      let axisStart;
      let axisEnd;
      if (startValueStr != "") {
        if (isNaN(startValueStr)) {
          if (dayjs(startValueStr).isValid()) {
            if (option.xAxis.type == "time") {
              axisStart = dayjs(startValueStr).valueOf();
            } else {
              let dateValues = srcData.map((s) => dayjs(s[0]).valueOf());
              dateValues.sort();
              axisStart = _.sortedIndex(dateValues, dayjs(startValueStr).valueOf());
            }
          } else {
            axisStart = srcData.map((s) => s[0]).indexOf(startValueStr);
          }
        } else {

          axisStart = Number(startValueStr);

          // if (option.xAxis.type == "value") {
          //   //补充一个逻辑，当为数字类型坐标轴时，仍然需要算排序
          //   let dateValues = srcData.map((s) => s[0]);
          //   dateValues.sort();
          //   axisStart = _.sortedIndex(dateValues, Number(startValueStr));
          // } else {
          //   axisStart = Number(startValueStr);
          // }
        }
      }

      if (endValueStr != "") {
        if (isNaN(endValueStr)) {
          if (dayjs(endValueStr).isValid()) {
            if (option.xAxis.type == "time") {
              axisEnd = dayjs(endValueStr).valueOf();
            } else {
              let dateValues = srcData.map((s) => dayjs(s[0]).valueOf());
              let valueIndex = dateValues.indexOf(dayjs(endValueStr).valueOf());
              if (dateValues.indexOf(dayjs(endValueStr).valueOf()) == -1) {
                //如果它是比最大值还大，它的位置是最大值的下一位，这里减1处理
                //同样地当比最大值要小时，也需要将它的位置减1，引用到比它小的值作为下界
                axisEnd = _.sortedIndex(dateValues, dayjs(endValueStr).valueOf()) - 1;
              } else {
                axisEnd = valueIndex;
              }
            }
          } else {
            axisEnd = srcData.map((s) => s[0]).indexOf(endValueStr);
          }
        } else {
          axisEnd = Number(endValueStr);
        }
      }

      option.dataZoom[0].startValue = axisStart;
      option.dataZoom[0].endValue = axisEnd;

      // if (startValueStr != "") {
      //   if (isNaN(startValueStr)) {
      //     if (dayjs(startValueStr).isValid) {
      //       let dateValues = srcData.map((s) => dayjs(s[0]).valueOf());
      //       dateValues.sort();
      //       option.dataZoom[0].startValue = _.sortedIndex(dateValues, dayjs(startValueStr).valueOf());
      //     } else {
      //       option.dataZoom[0].startValue = srcData.map((s) => s[0]).indexOf(startValueStr);
      //     }
      //   } else {
      //     option.dataZoom[0].startValue = Number(startValueStr);
      //   }
      // }

      // if (endValueStr != "") {
      //   if (isNaN(endValueStr)) {
      //     if (dayjs(endValueStr).isValid) {
      //       let dateValues = srcData.map((s) => dayjs(s[0]).valueOf());
      //       let valueIndex = dateValues.indexOf(dayjs(endValueStr).valueOf());
      //       if (dateValues.indexOf(dayjs(endValueStr).valueOf()) == -1) {
      //         //如果它是比最大值还大，它的位置是最大值的下一位，这里减1处理
      //         //同样地当比最大值要小时，也需要将它的位置减1，引用到比它小的值作为下界
      //         option.dataZoom[0].endValue = _.sortedIndex(dateValues, dayjs(endValueStr).valueOf()) - 1;
      //       } else {
      //         option.dataZoom[0].endValue = valueIndex;
      //       }
      //     } else {
      //       option.dataZoom[0].endValue = srcData.map((s) => s[0]).indexOf(endValueStr);
      //     }
      //   } else {
      //     option.dataZoom[0].endValue = Number(endValueStr);
      //   }
      // }

      //蛇形折线图时要转换下坐标轴
      let xAxisObj = _.cloneDeep(option.xAxis);
      let yAxisObj = _.cloneDeep(option.yAxis);
      if (option.extraSetting.isVerticalLine) {
        option.xAxis = yAxisObj;
        option.yAxis = xAxisObj;
      }

      //先处理下全屏与否
      if (option.isFullScreen) {
        $("#main4").height("100%");
        $("#main4").width("100%");
      } else {
        $("#main4").height(option.chartHeigth);
        $("#main4").width(option.chartWidth);
      }
      //实例化对象
      var myChart;
      if (!option.isSvgRender) {
        myChart = echarts.init(document.getElementById("main4"));
      } else {
        myChart = echarts.init(document.getElementById("main4"), null, { renderer: "svg" });
      }

      //最开始创建图表
      if (option.extraSetting.stackType == "percentStack") {
        let selectDims = _.tail(headers);
        SettingNewDatasource(selectDims);
      } else {
        SettingSeriesAndGradientColor();
        //关一下图例，如果只有一个系列
        if (option.series.length == 1) {
          option.legend.show = false;
        }

        myChart.setOption(option);
      }

      //绑定echart的resize事件
      windowResizeEvent(() => {
        myChart.resize();
      });

      function windowResizeEvent(callback) {
        window.onresize = function () {
          var target = this;
          if (target.resizeFlag) {
            clearTimeout(target.resizeFlag);
          }

          target.resizeFlag = setTimeout(function () {
            callback();
            target.resizeFlag = null;
          }, 100);
        };
      }

      myChart.on("legendselectchanged", function (params) {
        let selectDims = headers.filter((s) => params.selected[s] == true);
        SettingNewDatasource(selectDims);
      });

      myChart.on("legendselectall", function (params) {
        let selectDims = headers.filter((s) => params.selected[s] == true);
        SettingNewDatasource(selectDims);
      });

      myChart.on("legendinverseselect", function (params) {
        let selectDims = headers.filter((s) => params.selected[s] == true);
        SettingNewDatasource(selectDims);
      });

      function SettingNewDatasource(selectDims) {
        if (option.extraSetting.stackType == "percentStack") {
          let newData = [];
          newData.push(headers.slice(0, 1).concat(selectDims));
          srcData.forEach((row) => {
            let newRow = [];
            let newDataRow = [];

            newRow.push(row[0]);

            selectDims.forEach((dim) => {
              let index = headers.indexOf(dim);
              newDataRow.push(row[index] == null || row[index] == "" ? 0 : row[index]);
            });

            let total = _.sum(newDataRow);
            newDataRow.forEach((item) => {
              newRow.push(item / total); //计算百分比
            });

            newData.push(newRow);
          });

          //设置下纵坐标的范围
          if (option.extraSetting.isVerticalLine) {
            option.xAxis.min = 0;
            option.xAxis.max = 1;
          } else {
            option.yAxis.min = 0;
            option.yAxis.max = 1;
          }

          option.dataset.source = newData;

          SettingSeriesAndGradientColor();

          myChart.setOption(option);
        }
      }

      function SettingSeriesAndGradientColor() {
        let headers = option.dataset.source[0];
        let srcSourceData = _.tail(option.dataset.source);
        //生成多个数据系列
        let seriesArr = [];
        for (let index = 1; index < headers.length; index++) {
          const seriesName = headers[index];
          let newSer = _.cloneDeep(option.series[0]);
          newSer.name = seriesName;
          //将数据装入series引用的data数组，不能用encode,因为时间轴不支持
          seriesData = [];
          for (let irow = 0; irow < srcSourceData.length; irow++) {
            const row = srcSourceData[irow];
            if (option.extraSetting.isVerticalLine) {
              seriesData.push([row[index], row[0]]);
            } else {
              seriesData.push([row[0], row[index]]);
            }
          }

          newSer.data = seriesData;

          newSer.itemStyle.color = option.color[index - 1];

          if (option.extraSetting.stackType != "none") {
            newSer.stack = "堆积";
          }

          //面积渐变色
          if (option.extraSetting.isAreaChart && option.extraSetting.isShowGradientColor) {
            let gradientColor = {
              type: "linear",
              x: 0,
              y: option.extraSetting.isGradientColorUpToDown ? 0 : 1,
              x2: 0,
              y2: option.extraSetting.isGradientColorUpToDown ? 1 : 0,
              colorStops: [
                {
                  offset: 0,
                  color: option.color[index - 1] // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: option.extraSetting.sencondColor //"white" 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            };
            newSer.areaStyle.color = gradientColor;
            newSer.areaStyle.opacity = 1; //把透明色重新设置为1
          }

          seriesArr.push(newSer);
        }
        option.series = seriesArr;
      }
    