import React, { Component, useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_dark from "@amcharts/amcharts5/themes/Dark";
import Layout from "@theme/Layout";



const PieChart = () => {
  useLayoutEffect(() => {
    let root = am5.Root.new("piechartdiv");

    root.setThemes([
      am5themes_dark.new(root)
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/ 
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.horizontalLayout,
        innerRadius: am5.percent(50)
      })
    );

    root.container.children.push(am5.Label.new(root, {
      text: "ATTR distribution\nacross the network's\n participants",
      fontSize: 16,
      fontWeight: "500",
      textAlign: "center",
      x: am5.percent(34),
      y: am5.percent(45),
      //centerX: am5.percent(50),
      paddingTop: 0,
      paddingBottom: 0
    }));

    am5.net.load("https://docs.google.com/spreadsheets/d/1U4sJOs7nZKaMn7Jnp7TWTH3Sd-Gp9VviYmxnghY87MI/gviz/tq?tqx=out:json&tq&gid=0&range=V16:X27&headers=1").then(function (result) {
      // slice off google stuff
      const json = am5.JSONParser.parse(result.response.substring(47).slice(0, -2));
      const rows = json.table.rows;

      // normalise data
      const data = [];
      rows.forEach(function (row, rowIndex) {
        var element = {
          name: row.c[0].v,
          percentage: row.c[1].v,
        };
        data[rowIndex] = element;
      });
      

      

      // Create series
      let series = chart.series.push(
        am5percent.PieSeries.new(root, {
          name: "Distribution",
          valueField: "percentage",
          categoryField: "name",
        })
      );
      series.labels.template.set("visible", false);
      series.ticks.template.set("visible", false);


      series.data.setAll(data);

      let legend = chart.children.push(am5.Legend.new(root, {
        y: am5.percent(50),
        centerY: am5.percent(50),
        layout: root.verticalLayout
      }));

      legend.labels.template.setAll({
        fontSize: 12,
        fontWeight: "300"
      });

      legend.valueLabels.template.setAll({
        fontSize: 12,
        fontWeight: "300"
      });

      
      legend.data.setAll(series.dataItems);
    });

    //set root
    root.current = root;
    return () => {
      root.dispose();
    }
  }, []);

  return (
    <div id="piechartdiv" style={{ width: "100%", height: "500px" }}></div>
  );

}

export default PieChart;