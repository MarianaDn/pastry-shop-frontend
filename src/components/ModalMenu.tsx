import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  typographyClasses,
} from "@mui/material";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { headerData } from "src/constants";
import { ROUTES } from "src/constants/routes";

const PREFIX = "ModalMenu";

const StyledModalContent = styled("div", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  padding: theme.spacing(4, 3),
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  zIndex: 100,
  inset: "85px 0 0",
  borderTop: `1px solid ${theme.palette.black.main}`,
}));

const StyledList = styled(List, {
  name: `${PREFIX}-StyledList`,
})({
  display: "flex",
  flexDirection: "column",

  [`& .${typographyClasses.root}`]: {
    fontFamily: "MarckScript",
    fontSize: 30,
  },
});

export type ModalMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalMenu = ({ isOpen, onClose }: ModalMenuProps) => {
  const navigate = useNavigate();

  return (
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
      <StyledList>
        {headerData.nav.map(({ id, name, category }) => (
          <ListItem disablePadding key={id} sx={{ px: 1, width: "auto" }}>
            <ListItemButton
              onClick={() => {
                navigate(`${ROUTES.HOME}${category}`);
                window.scrollTo(0, 0);
                onClose();
              }}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </StyledList>
    </Modal>
  );
};
