// import React, { useEffect, useRef } from "react";
// import * as d3 from "d3";

// const SmithChart = ({ impedance }) => {
//   const ref = useRef();

//   useEffect(() => {
//     drawChart();
//   }, [impedance]);

//   const drawChart = () => {
//     const svg = d3.select(ref.current);
//     const width = 400;
//     const height = 400;
//     const radius = Math.min(width, height) / 2;

//     svg.selectAll("*").remove();

//     const chart = svg
//       .append("g")
//       .attr("transform", `translate(${width / 2}, ${height / 2})`);

//     chart
//       .append("circle")
//       .attr("r", radius)
//       .attr("fill", "none")
//       .attr("stroke", "black");

//     // Reaaliosan akseli ja lisää markkereita haluttuihin kohtiin
//     chart
//       .append("line")
//       .attr("x1", -radius)
//       .attr("y1", 0)
//       .attr("x2", radius)
//       .attr("y2", 0)
//       .attr("stroke", "black")
//       .attr("stroke-width", 2);
//     chart
//       .append("text")
//       .attr("x", radius - 10)
//       .attr("y", 40)
//       .text("inf")
//       .attr("text-anchor", "middle");
//     chart
//       .append("text")
//       .attr("x", -radius + 10)
//       .attr("y", 20)
//       .text("0")
//       .attr("text-anchor", "middle");

//     // Vakioresistanssikäyrät
//     const resistances = [0.2, 0.5, 1, 2, 5];
//     resistances.forEach((res) => {
//       const Z0 = 50; // Referenssiimpedanssi
//       const centerX = res / (res + 1);
//       const radiusR = 1 / (res + 1);
//       chart
//         .append("circle")
//         .attr("cx", centerX * radius)
//         .attr("cy", 0)
//         .attr("r", radiusR * radius)
//         .attr("fill", "none")
//         .attr("stroke", "blue");
//     });

//     // Vakioimaginaarikäyrät (reaktanssikäyrät)
//     const reactances = [-2, -1, -0.5, 0.5, 1, 2];
//     reactances.forEach((react) => {
//       const Z0 = 50; // Referenssiimpedanssi
//       var radiusX = 0; //(Z0 * Math.abs(react)) / radius; //Z0 / (Math.abs(react) * Z0 + Z0);
//       var centerY = 0;
//       var centerX = 0;
//       if (react < 0) {
//         radiusX = radius / Math.abs(react); //(Z0 * Math.abs(react)) / radius; //Z0 / (Math.abs(react) * Z0 + Z0);
//         centerY = -radiusX;
//         centerX = -radiusX * Math.abs(react) + radius * 2;
//       } else {
//         radiusX = radius / Math.abs(react); //(Z0 * Math.abs(react)) / radius; //Z0 / (Math.abs(react) * Z0 + Z0);
//         centerY = radiusX;
//         centerX = radiusX * Math.abs(react);
//       }
//       chart
//         .append("circle")
//         .attr("cx", centerX)
//         .attr("cy", centerY)
//         .attr("r", radiusX)
//         .attr("fill", "none")
//         .attr("stroke", "green");
//     });

//     if (impedance) {
//       const x = real(impedance) * radius;
//       const y = imag(impedance) * radius;
//       chart
//         .append("circle")
//         .attr("cx", x)
//         .attr("cy", y)
//         .attr("r", 5)
//         .attr("fill", "red");
//     }
//   };

//   const real = (z) =>
//     (z.real * z.real + z.imag * z.imag - 1) /
//     ((z.real + 1) * (z.real + 1) + z.imag * z.imag);
//   const imag = (z) =>
//     (2 * z.imag) / ((z.real + 1) * (z.real + 1) + z.imag * z.imag);

//   return <svg ref={ref} width="400" height="400" />;
// };

// export default SmithChart;

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

    // Define the clipping path (mask) to constrain the drawing within the Smith chart circle
    svg
      .append("defs")
      .append("clipPath")
      .attr("id", "smith-chart-mask")
      .append("circle")
      //.attr("cx", width / 2)
      //.attr("cy", height / 2)
      .attr("r", radius);

    // Append the main chart group, applying the clipping path
    const chart = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .attr("clip-path", "url(#smith-chart-mask)"); // Apply the clip-path

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
      let radiusX = 0;
      let centerY = 0;
      let centerX = 0;

      if (react < 0) {
        radiusX = radius / Math.abs(react);
        centerY = -radiusX;
        centerX = -radiusX * Math.abs(react) + radius * 2;
      } else {
        radiusX = radius / Math.abs(react);
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

    // Add constant conductance circles (Admittance)
    const conductances = [0.2, 0.5, 1, 2, 5];
    conductances.forEach((g) => {
      const centerX = -g / (g + 1); // Mirror the center for admittance
      const radiusG = 1 / (g + 1);
      chart
        .append("circle")
        .attr("cx", centerX * radius)
        .attr("cy", 0)
        .attr("r", radiusG * radius)
        .attr("fill", "none")
        .attr("stroke", "purple")
        .style("stroke-dasharray", "5,5"); // Use dashed lines to differentiate
    });

    // Add constant susceptance circles (Admittance)
    const susceptances = [-2, -1, -0.5, 0.5, 1, 2];
    susceptances.forEach((b) => {
      let radiusB = 0;
      let centerY = 0;
      let centerX = 0;

      // Calculate the center and radius for susceptance circles (opposite to reactance)
      if (b < 0) {
        radiusB = radius / Math.abs(b);
        centerY = radiusB; // Mirror the sign
        centerX = radiusB * Math.abs(b) - radius * 2; // Center on the opposite side
      } else {
        radiusB = radius / Math.abs(b);
        centerY = -radiusB; // Mirror the sign
        centerX = -radiusB * Math.abs(b);
      }
      chart
        .append("circle")
        .attr("cx", centerX)
        .attr("cy", centerY)
        .attr("r", radiusB)
        .attr("fill", "none")
        .attr("stroke", "orange")
        .style("stroke-dasharray", "5,5"); // Use dashed lines to differentiate
    });

    // Plot impedance points (original and adjusted)
    if (impedance && impedance.length) {
      impedance.forEach((imp, index) => {
        const x = real(imp) * radius;
        const y = imag(imp) * radius;

        // Choose different colors based on the index
        const color = index === 0 ? "red" : "orange"; // "red" for original, "orange" for adjusted

        chart
          .append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 5)
          .attr("fill", color);

        // Optionally, add a label to identify the points
        chart
          .append("text")
          .attr("x", x + 10)
          .attr("y", y)
          .text(imp.label)
          .attr("text-anchor", "start")
          .attr("fill", color);
      });
    }
  };

  const real = (z) =>
    (z.real * z.real + z.imag * z.imag - 1) /
    ((z.real + 1) * (z.real + 1) + z.imag * z.imag);
  const imag = (z) =>
    -(2 * z.imag) / ((z.real + 1) * (z.real + 1) + z.imag * z.imag);

  return <svg ref={ref} width="400" height="400" />;
};

export default SmithChart;
