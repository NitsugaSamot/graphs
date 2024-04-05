import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.Nombre + ' ' + d.Apellido))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length));

    const pie = d3.pie()
      .sort(null)
      .value(d => d.ExpLaboral);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius - 10);

    const arcs = pie(data);

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    svg.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("fill", d => color(d.data.Nombre + ' ' + d.data.Apellido))
      .attr("d", arc)
      .append("title")
      .text(d => `${d.data.Nombre} ${d.data.Apellido}: ${d.data.ExpLaboral}`);

    // Agregar etiquetas de texto
    svg.selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "black")
      .text(d => `${d.data.Nombre} ${d.data.Apellido}`);

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default PieChart;


// import { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const PieChart = ({ data }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     const width = 928;
//     const height = Math.min(width, 500);

//     const color = d3.scaleOrdinal()
//       .domain(data.map(d => d.name))
//       .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

//     const pie = d3.pie()
//       .sort(null)
//       .value(d => d.value);

//     const arc = d3.arc()
//       .innerRadius(0)
//       .outerRadius(Math.min(width, height) / 2 - 1);

//     const labelRadius = arc.outerRadius()() * 0.8;

//     const arcLabel = d3.arc()
//       .innerRadius(labelRadius)
//       .outerRadius(labelRadius);

//     const arcs = pie(data);

//     const svg = d3.select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .attr("viewBox", [-width / 2, -height / 2, width, height])
//       .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

//     svg.append("g")
//       .attr("stroke", "white")
//       .selectAll()
//       .data(arcs)
//       .join("path")
//       .attr("fill", d => color(d.data.name))
//       .attr("d", arc)
//       .append("title")
//       .text(d => `${d.data.name}: ${d.data.value.toLocaleString("en-US")}`);

//     svg.append("g")
//       .attr("text-anchor", "middle")
//       .selectAll()
//       .data(arcs)
//       .join("text")
//       .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
//       .call(text => text.append("tspan")
//         .attr("y", "-0.4em")
//         .attr("font-weight", "bold")
//         .text(d => d.data.name))
//       .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
//         .attr("x", 0)
//         .attr("y", "0.7em")
//         .attr("fill-opacity", 0.7)
//         .text(d => d.data.value.toLocaleString("en-US")));

//   }, [data]);

//   return <svg ref={svgRef}></svg>;
// };

// export default PieChart;
