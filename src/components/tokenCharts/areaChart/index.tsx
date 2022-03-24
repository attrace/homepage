import React, { Component, useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_dark from "@amcharts/amcharts5/themes/Dark";



const AreaChart = () => {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_dark.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      pinchZoomX: true,
      layout: root.verticalLayout
    }));



    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);



    chart.gridContainer.toFront();

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "date",
      startLocation: 0.5,
      endLocation: 0.5,
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));

    let xRenderer = xAxis.get("renderer");
    xRenderer.labels.template.setAll({
      fontSize: "12px"
    });

    // create yAxis
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      max: 1000000000, //max token distribution
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    let yRenderer = yAxis.get("renderer");
    yRenderer.labels.template.setAll({
      fontSize: "12px"
    });



    // Token distributions doc here:
    // https://docs.google.com/spreadsheets/d/1U4sJOs7nZKaMn7Jnp7TWTH3Sd-Gp9VviYmxnghY87MI/edit

    // headers for mapping
    const headers = [
      "date",
      "team",
      "pre-sale",
      "remaining",
      "conversion",
      "airdrop",
      "marketing"
    ];

    /// load range=B1:H31
    am5.net.load("https://docs.google.com/spreadsheets/d/1U4sJOs7nZKaMn7Jnp7TWTH3Sd-Gp9VviYmxnghY87MI/gviz/tq?tqx=out:json&tq&gid=0&range=B1:H31&headers=1").then(function (result) {
      // slice off google stuff
      const json = am5.JSONParser.parse(result.response.substring(47).slice(0, -2));
      const cols = json.table.cols;
      const rows = json.table.rows;

      // normalise data
      const data = [];
      rows.forEach(function (row, rowIndex) {
        var element = {};
        headers.forEach(function (header, headerIndex) {
          let field = row.c[headerIndex];
          element[header] = (header == 'date') ? field.f : field.v;
        });
        data[rowIndex] = element;
      });
      xAxis.data.setAll(data);

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

      function createSeries(name, field) {
        var series = chart.series.push(am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          stacked: true,
          valueYField: field,
          categoryXField: "date",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "[bold]{name}[/]\n{categoryX}: {valueY}"
          })
        }));


        series.fills.template.setAll({
          fillOpacity: 0.5,
          visible: true
        });

        series.data.setAll(data);
        series.appear(1000);
      }

      // Set the labels 
      headers.forEach(function (header, headerIndex) {
        if (header == 'date') {
          //date is x axis
          return;
        }
        createSeries(cols[headerIndex].label, header);
      });


      // add legend
      let legend = chart.children.push(am5.Legend.new(root, {
        nameField: "name",
        fillField: "color",
        strokeField: "color",
        centerX: am5.percent(50),
        x: am5.percent(50),
      }));

      legend.labels.template.setAll({
        fontSize: 12,
        fontWeight: "300"
      });


      legend.data.setAll(chart.series.values);


      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      chart.appear(1000, 100);


    });

    //set root
    root.current = root;
    return () => {
      root.dispose();
    }
  }, []);



  return (
    <div id="chartdiv" style={{ width: "100%", height: "600px" }}></div>
  );

}

export default AreaChart;