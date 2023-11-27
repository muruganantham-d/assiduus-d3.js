import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../../../styles/BarChart.css'; 

const BarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Clear existing content
    svg.selectAll('*').remove();

    // Set up the chart dimensions
    const width = 650;
    const height = 200;
    const margin = { top: 20, right: 30, bottom: 20, left: -65 };
    
    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([margin.left, width - margin.right])
      // below line is Increase padding for space around bars
      .padding(0.8);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height - margin.bottom, margin.top]);

    // Draw bars
    svg.selectAll('rect')
      .data(data)
      .enter().append('rect') 
       // Apply the 'bar' class for styling
      .attr('class', 'bar')
      .attr('x', d => xScale(d.label))
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - margin.bottom - yScale(d.value))
      // Rounded corners
      .attr('rx', 5)
      // Rounded corners
      .attr('ry', 5);

    // Draw axes
    const xAxis = d3.axisBottom(xScale).tickSize(0);
    const yAxis = d3.axisLeft(yScale).tickSize(0).ticks(0);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height - margin.bottom + 20})`)
      .call(xAxis);

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis);

    // Hide axes lines
    svg.selectAll('.domain').remove();
    svg.selectAll('.tick line').remove();

  }, [data]);

  return (
    <svg ref={svgRef} width={600} height={300}></svg>
  );
};

export default BarChart;