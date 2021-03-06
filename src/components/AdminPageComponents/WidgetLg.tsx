import { useEffect, useState } from "react";
import { format } from "timeago.js";
import { Grid, styled, Typography } from "@mui/material";
import { userRequest } from "src/constants";

interface Orders {
  _id: string;
  userId: string;
  createdAt: Date;
  amount: number;
  status: string;
}

type ButtonType = {
  type: string;
};

const PREFIX = "WidgetLg";

const StyledInfoWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(3, 4),
  boxShadow: `0px 0px 5px ${theme.palette.secondary.light}`,
  margin: theme.spacing(3, 0),
  width: "60%",
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 20,
  marginBottom: theme.spacing(2),
  fontFamily: "CormorantInfantBold",
}));

const StyledTable = styled("table", {
  name: `${PREFIX}-StyledTable`,
})({
  width: "100%",
  borderSpacing: 20,
});

const StyledTh = styled("th", {
  name: `${PREFIX}-StyledTable`,
})({
  textAlign: "left",
});

const StyledUser = styled("td", {
  name: `${PREFIX}-StyledTable`,
})({
  display: "flex",
  alignItems: "center",
  fontFamily: "CormorantInfantSemiBold",
});

const StyledDate = styled("td", {
  name: `${PREFIX}-StyledTable`,
})({
  fontFamily: "CormorantInfantLight",
});

const StyledButton = styled("button", {
  name: `${PREFIX}-StyledButton`,
})(({ theme }) => ({
  padding: theme.spacing(1),
  border: "none",
  borderRadius: 5,

  "&:hover": {
    opacity: 0.7,
    cursor: "pointer",
  },

  "&.approved": {
    backgroundColor: "#e5faf2",
    color: "#3bb077",
  },

  "&.declined": {
    backgroundColor: "#fff0f1",
    color: "#d95087",
  },

  "&.pending": {
    backgroundColor: "#ebf1fe",
    color: "#2a7ade",
  },
}));

export const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  const Button = ({ type }: ButtonType) => {
    return (
      <StyledButton className={"widgetLgButton " + type}>{type}</StyledButton>
    );
  };

  return (
    <StyledInfoWrapper>
      <StyledTitle className="widgetLgTitle">Latest transactions</StyledTitle>
      <StyledTable className="widgetLgTable">
        <tr className="widgetLgTr">
          <StyledTh>Customer</StyledTh>
          <StyledTh>Date</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Status</StyledTh>
        </tr>
        {orders.map((order: Orders) => (
          <tr className="widgetLgTr" key={order._id}>
            <StyledUser>
              <span className="widgetLgName">{order.userId}</span>
            </StyledUser>
            <StyledDate>{format(order.createdAt)}</StyledDate>
            <StyledDate>${order.amount}</StyledDate>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </StyledTable>
    </StyledInfoWrapper>
  );
};
