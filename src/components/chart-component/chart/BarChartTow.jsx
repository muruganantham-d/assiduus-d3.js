import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChartTow = ({ data }) => {
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
      .padding(0.8);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.max([d.segments[0].top, d.segments[0].bottom]))])
      .range([height - margin.bottom, margin.top]);

    // Draw bars with segments
    const barGroups = svg.selectAll('g.bar-group')
      .data(data)
      .enter().append('g')
      .attr('class', 'bar-group')
      .attr('transform', d => `translate(${xScale(d.label)}, 0)`);

    barGroups.selectAll('rect')
      .data(d => d.segments)
      .enter().append('rect')
      .attr('class', 'bar-segment')
      .attr('x', 0)
      .attr('y', segment => yScale(segment.top))
      .attr('width', xScale.bandwidth())
      .attr('height', segment => yScale(segment.bottom) - yScale(segment.top))
      .attr('fill', segment => segment.colors[0]);

    barGroups.selectAll('rect.bottom-segment')
      .data(d => d.segments)
      .enter().append('rect')
      .attr('class', 'bar-segment bottom-segment')
      .attr('x', 0)
      .attr('y', segment => yScale(segment.bottom))
      .attr('width', xScale.bandwidth())
      .attr('height', segment => height - margin.bottom - yScale(segment.bottom))
      .attr('fill', segment => segment.colors[1]);

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

export default BarChartTow;
