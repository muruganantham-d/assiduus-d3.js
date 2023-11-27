import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "../../../styles/LineChart.css";

const tooltipStyle = {
  position: "absolute",
  padding: "8px",
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "4px",
  pointerEvents: "none",
};

const LineChart = ({ data, width, height, selectedDate }) => {
  const [tooltip, setTooltip] = useState(null);

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
      .range([innerHeight - 50, 100]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.y))
      .curve(d3.curveCatmullRom);

    svg.selectAll("*").remove(); // Clear existing elements

    // Set the desired stroke width
    const strokeWidth = 2;
    svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .selectAll("path")
      .data([data])
      .enter()
      .append("path")
      .attr("class", "line")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "#52b75d")
      .attr("stroke-width", strokeWidth)
      .on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${innerHeight - margin.bottom + 65})`)
      .call(xAxis);

    svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale).ticks(5));

    // Hide x-axis and y-axis lines
    svg.select(".x-axis").select("path").style("display", "none");
    svg.select(".y-axis").select("path").style("display", "none");

    ///MoseHover & ToolTip
    function handleMouseOver(event, d) {
      const mouseX = event.pageX - margin.left;
      const mouseY = event.pageY - margin.top;

      setTooltip({
        content: `Y: ${d3.format(".2f")(yScale.invert(yScale(d.y)))}`,
        x: mouseX,
        y: mouseY,
      });
    }

    function handleMouseMove(event, d) {
      const mouseX = event.pageX - margin.left;
      const mouseY = event.pageY - margin.top;

      setTooltip((prevTooltip) => ({
        ...prevTooltip,
        x: mouseX,
        y: mouseY,
      }));
    }

    function handleMouseOut() {
      setTooltip(null);
    }
  };

  return (
    <div>
      <svg ref={svgRef} className="line-chart-svg" />;
      {tooltip && (
        <div style={{ ...tooltipStyle, top: tooltip.y, left: tooltip.x }}>
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default LineChart;
