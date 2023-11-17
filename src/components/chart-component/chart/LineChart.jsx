import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../../../styles/LineChart.css'


const LineChart = ({ data, width, height, selectedDate }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (data && data.length > 0) {
      drawChart();
    }
  }, [data, selectedDate]);



  const drawChart = () => {
    const svg = d3.select(svgRef.current);

    const margin = { top: -20, right: 20, bottom: 70, left: 0 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      // .range([0, innerWidth]);
      .range([0, innerWidth - 5]);
  
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      // .range([innerHeight, 0]);
      .range([innerHeight -50, 100]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.y))
      .curve(d3.curveCatmullRom);

    svg.selectAll('*').remove(); // Clear existing elements
    
  // Set the desired stroke width
  const strokeWidth = 2;
    svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .selectAll('path')
      .data([data])
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#52b75d')
      .attr('stroke-width', strokeWidth);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);

    svg
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${innerHeight - margin.bottom + 65})`)
      .call(xAxis);

    svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(yScale).ticks(5));

      // Hide x-axis and y-axis lines
  svg.select('.x-axis').select('path').style('display', 'none');
  svg.select('.y-axis').select('path').style('display', 'none');


  };

  return <svg ref={svgRef} className="line-chart-svg" />;
};

export default LineChart;
