import { PieChart, Pie, Cell, Tooltip } from "recharts";

const CategoryChart = ({ data }) => {
  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  // Custom tooltip function
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "#fff",
            padding: "5px",
            border: "none",
            color: '#000'
          }}
        >
          <p>
            {payload[0].payload.category}: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={400} height={400} className="mx-auto">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="count"
        nameKey="category" // Ensure category is recognized
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  );
};

export default CategoryChart;
