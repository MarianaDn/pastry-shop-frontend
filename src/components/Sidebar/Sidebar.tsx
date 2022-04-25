import Modal from "react-modal";
import { Button, Divider, styled, Typography } from "@mui/material";
import { Icon, IconType } from "../common/Icon/Icon";

export type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

const PREFIX = "Sidebar";

const StyledModalContent = styled("div", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  padding: theme.spacing(5, 3, 4),
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  zIndex: 100,
  inset: "85px 0 0 60%",
  boxShadow: `-2px 9px 10px ${theme.palette.secondary.contrastText}`,

  [theme.breakpoints.down("ipad")]: {
    inset: "85px 0 0 50%",
  },

  [theme.breakpoints.down(600)]: {
    inset: "0",
  },
}));

const StyledIcon = styled(Icon, {
  name: `${PREFIX}-StyledIcon`,
})(({ theme }) => ({
  "& path": {
    color: theme.palette.white.main,
  },
}));

const StyledCloseButton = styled(Button, {
  name: `${PREFIX}-StyledCloseButton`,
})(({ theme }) => ({
  position: "absolute",
  top: 5,
  right: 10,

  [theme.breakpoints.down(600)]: {
    top: 20,
  },
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "CormorantInfantDemiBold",
  fontSize: 24,
}));

export const Sidebar = ({ isOpen, onClose, title }: SidebarProps) => (
  <Modal
    preventScroll
    shouldCloseOnEsc
    isOpen={isOpen}
    onAfterOpen={() => {
      const { body } = window.document;
      body.style.overflow = "hidden";
    }}
    onAfterClose={() => {
      const { body } = window.document;
      body.style.overflow = "auto";
    }}
    onRequestClose={onClose}
    overlayElement={(_, contentEl) => contentEl}
    contentElement={({ style, ...props }, children) => (
      <StyledModalContent {...props}>{children}</StyledModalContent>
    )}
  >
    <StyledCloseButton sx={{ minWidth: 32, height: 36 }} onClick={onClose}>
      <StyledIcon icon={IconType.CloseBtn} viewBox="0 0 24 24" />
    </StyledCloseButton>
    <StyledTitle>{title}</StyledTitle>
    <Divider />
  </Modal>
);
