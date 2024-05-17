import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const SmithChart = ({ impedance }) => {
  const ref = useRef();

  useEffect(() => {
    drawChart();
  }, [impedance]);

  const drawChart = () => {
    const svg = d3.select(ref.current);
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    svg.selectAll("*").remove();

    const chart = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    chart
      .append("circle")
      .attr("r", radius)
      .attr("fill", "none")
      .attr("stroke", "black");

    // Reaaliosan akseli ja lisää markkereita haluttuihin kohtiin
    chart
      .append("line")
      .attr("x1", -radius)
      .attr("y1", 0)
      .attr("x2", radius)
      .attr("y2", 0)
      .attr("stroke", "black")
      .attr("stroke-width", 2);
    chart
      .append("text")
      .attr("x", radius - 10)
      .attr("y", 40)
      .text("inf")
      .attr("text-anchor", "middle");
    chart
      .append("text")
      .attr("x", -radius + 10)
      .attr("y", 20)
      .text("0")
      .attr("text-anchor", "middle");

    // Vakioresistanssikäyrät
    const resistances = [0.2, 0.5, 1, 2, 5];
    resistances.forEach((res) => {
      const Z0 = 50; // Referenssiimpedanssi
      const centerX = res / (res + 1);
      const radiusR = 1 / (res + 1);
      chart
        .append("circle")
        .attr("cx", centerX * radius)
        .attr("cy", 0)
        .attr("r", radiusR * radius)
        .attr("fill", "none")
        .attr("stroke", "blue");
    });

    // Vakioimaginaarikäyrät (reaktanssikäyrät)
    const reactances = [-2, -1, -0.5, 0.5, 1, 2];
    reactances.forEach((react) => {
      const Z0 = 50; // Referenssiimpedanssi
      var radiusX = 0; //(Z0 * Math.abs(react)) / radius; //Z0 / (Math.abs(react) * Z0 + Z0);
      var centerY = 0;
      var centerX = 0;
      if (react < 0) {
        radiusX = radius / Math.abs(react); //(Z0 * Math.abs(react)) / radius; //Z0 / (Math.abs(react) * Z0 + Z0);
        centerY = -radiusX;
        centerX = -radiusX * Math.abs(react) + radius * 2;
      } else {
        radiusX = radius / Math.abs(react); //(Z0 * Math.abs(react)) / radius; //Z0 / (Math.abs(react) * Z0 + Z0);
        centerY = radiusX;
        centerX = radiusX * Math.abs(react);
      }
      chart
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radiusX)
        .attr("fill", "none")
        .attr("stroke", "green");
    });

    if (impedance) {
      const x = real(impedance) * radius;
      const y = imag(impedance) * radius;
      chart
        .append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 5)
        .attr("fill", "red");
    }
  };

  const real = (z) =>
    (z.real * z.real + z.imag * z.imag - 1) /
    ((z.real + 1) * (z.real + 1) + z.imag * z.imag);
  const imag = (z) =>
    (2 * z.imag) / ((z.real + 1) * (z.real + 1) + z.imag * z.imag);

  return <svg ref={ref} width="400" height="400" />;
};

export default SmithChart;
