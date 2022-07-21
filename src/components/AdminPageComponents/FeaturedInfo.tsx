import { useEffect, useState } from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Grid, Typography, Box, styled } from "@mui/material";
import { userRequest } from "src/constants";

type incomeValue = {
  _id: number;
  total: number;
};

const PREFIX = "FeaturedInfo";

const StyledInfoWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInfoWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(3, 4),
  boxShadow: `0px 0px 5px ${theme.palette.secondary.light}`,
  width: "30%",
}));

const StyledSum = styled(Typography, {
  name: `${PREFIX}-StyledSum`,
})(({ theme }) => ({
  fontSize: 25,
  fontFamily: "CormorantInfantBold",
  marginRight: theme.spacing(5),
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 20,
  marginBottom: theme.spacing(2),
  fontFamily: "CormorantInfantRegular",
}));

const StyledRangeWrapper = styled(Box, {
  name: `${PREFIX}-StyledRangeWrapper`,
})({
  display: "flex",
});

const StyledPerc = styled(Typography, {
  name: `${PREFIX}-StyledPerc`,
})({
  fontSize: 20,
  fontFamily: "CormorantInfantSemiBold",
});

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 20,
  color: theme.palette.secondary.main,
  fontFamily: "CormorantInfantSemiBold",
  marginTop: theme.spacing(2),
}));

export const FeaturedInfo = () => {
  const [income, setIncome] = useState<incomeValue[]>([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <Grid container justifyContent="space-between" width="100%">
      <StyledInfoWrapper item>
        <StyledTitle>Revanue</StyledTitle>
        <StyledRangeWrapper>
          <StyledSum>${income[1]?.total ? income[1]?.total : 0}</StyledSum>
          <StyledPerc>
            %{Math.floor(perc)}{" "}
            {perc <= 0 ? (
              <ArrowDownward color="error" />
            ) : (
              <ArrowUpward color="success" />
            )}
          </StyledPerc>
        </StyledRangeWrapper>
        <StyledText>Compared to last month</StyledText>
      </StyledInfoWrapper>
      <StyledInfoWrapper item>
        <StyledTitle>Sales</StyledTitle>
        <StyledRangeWrapper>
          <StyledSum>$4,415</StyledSum>
          <StyledPerc>
            {" "}
            -1.4 <ArrowDownward color="error" />
          </StyledPerc>
        </StyledRangeWrapper>
        <StyledText>Compared to last month</StyledText>
      </StyledInfoWrapper>
      <StyledInfoWrapper item>
        <StyledTitle>Cost</StyledTitle>
        <StyledRangeWrapper>
          <StyledSum>$2,225</StyledSum>
          <StyledPerc>
            +2.4 <ArrowUpward color="success" />
          </StyledPerc>
        </StyledRangeWrapper>
        <StyledText>Compared to last month</StyledText>
      </StyledInfoWrapper>
    </Grid>
  );
};
