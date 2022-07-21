import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/constants/routes";

const PREFIX = "Sidebar";

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontSize: 20,
  color: theme.palette.secondary.main,
  fontFamily: "CormorantInfantBold",
}));

const StyledText = styled(ListItemText, {
  name: `${PREFIX}-StyledText`,
})({
  span: {
    fontFamily: "CormorantInfantRegular",
  },
});

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <StyledTitle>Dashboard</StyledTitle>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(event) => {
                  navigate(ROUTES.ADMINPAGE);
                }}
              >
                <ListItemIcon>
                  <LineStyle />
                </ListItemIcon>
                <StyledText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Timeline />
                </ListItemIcon>
                <StyledText primary="Analytics" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TrendingUp />
                </ListItemIcon>
                <StyledText primary="Sales" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <nav aria-label="main mailbox folders">
          <StyledTitle>Quick Menu</StyledTitle>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PermIdentity />
                </ListItemIcon>
                <StyledText primary="Users" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={(event) => {
                  navigate(ROUTES.PRODUCTS);
                }}
              >
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <StyledText primary="Products" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AttachMoney />
                </ListItemIcon>
                <StyledText primary="Transactions" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BarChart />
                </ListItemIcon>
                <StyledText primary="Reports" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <nav aria-label="main mailbox folders">
          <StyledTitle>Notifications</StyledTitle>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailOutline />
                </ListItemIcon>
                <StyledText primary="Mail" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DynamicFeed />
                </ListItemIcon>
                <StyledText primary="Feedback" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ChatBubbleOutline />
                </ListItemIcon>
                <StyledText primary="Messages" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <nav aria-label="main mailbox folders">
          <StyledTitle>Staff</StyledTitle>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <WorkOutline />
                </ListItemIcon>
                <StyledText primary="Manage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Timeline className="sidebarIcon" />
                </ListItemIcon>
                <StyledText primary="Analytics" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Report />
                </ListItemIcon>
                <StyledText primary="Reports" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  );
};
