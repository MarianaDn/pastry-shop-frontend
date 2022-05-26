import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FC } from "react";
import { Grid, styled } from "@mui/material";

type ChartData = {
  name: string;
  Sales: number;
};

interface ChartProps {
  title: string;
  data: ChartData[];
  dataKey: string;
  grid: boolean | undefined;
}

const PREFIX = "Chart";

const StyledInfoWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(3, 4),
  boxShadow: `0px 0px 5px ${theme.palette.secondary.light}`,
  margin: theme.spacing(3, 0),
}));

export const Chart: FC<ChartProps> = ({ title, data, dataKey, grid }) => (
  <StyledInfoWrapper className="chart">
    <h3 className="chartTitle">{title}</h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#5550bd" />
        <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
        <Tooltip />
        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
      </LineChart>
    </ResponsiveContainer>
  </StyledInfoWrapper>
);
