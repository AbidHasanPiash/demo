import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import {RiDonutChartFill} from "react-icons/ri";

const data = [
    { name: 'Salesman A', value: 40560 },
    { name: 'Salesman B', value: 31205 },
    { name: 'Salesman C', value: 35689 },
    { name: 'Salesman D', value: 20540 },
    { name: 'Salesman E', value: 4050 },
    { name: 'Salesman F', value: 3650 },
    { name: 'Salesman G', value: 6050 },
  ];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Value ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class SalesmanPerSale extends PureComponent {
    state = {
        activeIndex: 0,
      };
    
      onPieEnter = (_, index) => {
        this.setState({
          activeIndex: index,
        });
      };
    
      render() {
        return (
        <div className="w-full sm:w-1/3 shadow-xl border rounded m-3">
            <div className="h-16 text-gray-500 text-2xl flex items-center justify-start space-x-3 ml-10">
                <RiDonutChartFill/> 
            <h1>Sale Percentage</h1> 
            </div>
            <ResponsiveContainer width="100%" aspect={2} className="pt-10" >
                <PieChart width={900} height={400}>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={this.onPieEnter}
                />
                </PieChart>
            </ResponsiveContainer>
        </div>
          
        );
      }
}