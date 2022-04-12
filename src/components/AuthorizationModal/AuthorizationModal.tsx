import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Box, Button, Grid, styled, Typography, Link } from "@mui/material";
import { ROUTES } from "src/constants/routes";
import { Input } from "../common/Input/Input";
import { Icon, IconType } from "../common/Icon/Icon";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  buttonText: string;
  text: string;
  link: string;
  variantForm: "authorization" | "registration";
  handleChangeVariant: (variantForm: "authorization" | "registration") => void;
};

const PREFIX = "AuthorizationModal";

const StyledModalOverlay = styled("div", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledModalContent = styled("div", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  width: 450,
  height: 450,
  backgroundColor: theme.palette.white.main,
  padding: theme.spacing(5),
  overflow: "auto",
  display: "grid",
  position: "relative",
  outline: "none",
  borderRadius: 35,

  "@media (max-width: 769px)": {
    width: "100%",
    height: "100%",
    padding: theme.spacing(8, 2),
    borderRadius: 0,
  },
}));

const StyledButton = styled(Button, {
  name: `${PREFIX}-StyledButton`,
})(({ theme }) => ({
  padding: theme.spacing(1, 8),
  alignSelf: "center",
  transition: "all 0.3s",
}));

const StyledBlock = styled(Box, {
  name: `${PREFIX}-StyledBlock`,
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledTitle = styled(Typography, {
  name: `${PREFIX}-StyledTitle`,
})(({ theme }) => ({
  fontFamily: "MarckScript",
  fontSize: 50,
}));

const StyledInputsWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInputsWrapper`,
})(({ theme }) => ({
  padding: theme.spacing(3, 2),
  border: `1px solid ${theme.palette.secondary.light}`,
}));

const StyledInputWrapper = styled(Grid, {
  name: `${PREFIX}-StyledInputWrapper`,
})(({ theme }) => ({
  width: "100%",
}));

const StyledText = styled(Typography, {
  name: `${PREFIX}-StyledText`,
})(({ theme }) => ({
  fontFamily: "CormorantInfantRegular",
}));

const StyledIcon = styled(Icon, {
  name: `${PREFIX}-StyledIcon`,
})(({ theme }) => ({
  "& path": {
    color: theme.palette.white.main,
  },
}));

const StyledCloseButton = styled(Button, {
  name: `${PREFIX}-StyledIcon`,
})(({ theme }) => ({
  display: "none",
  position: "absolute",
  top: 20,
  right: 15,

  "@media (max-width: 769px)": {
    display: "block",
  },
}));

export interface FormValueType {
  email: string;
  password: string;
}

export const REG_EX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const REG_EX_PASSWORD =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export interface ValidFormValueType {
  isEmailValid: boolean;
  isPasswordValid: boolean;
}

export const AuthorizationModal = ({
  isOpen,
  onClose,
  title,
  buttonText,
  text,
  link,
  variantForm,
  handleChangeVariant,
}: ModalProps) => {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const [formValue, setFormValue] = useState<FormValueType>({
    email: "",
    password: "",
  });

  const [isValidForm, setValidForm] = useState<ValidFormValueType>({
    isEmailValid: true,
    isPasswordValid: true,
  });

  const isEmailValid = useMemo(
    () => REG_EX_EMAIL.test(formValue.email),
    [formValue.email]
  );

  const isPasswordValid = useMemo(
    () => REG_EX_PASSWORD.test(formValue.password),
    [formValue.password]
  );

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      email: e.target.value,
    }));
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      password: e.target.value,
    }));
  };

  useEffect(() => {
    setValidForm({ isEmailValid, isPasswordValid });
  }, [isEmailValid, isPasswordValid]);

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
      overlayElement={({ style, ...props }, children) => (
        <StyledModalOverlay {...props}>{children}</StyledModalOverlay>
      )}
      contentElement={({ style, ...props }, children) => (
        <StyledModalContent {...props}>{children}</StyledModalContent>
      )}
    >
      <StyledBlock>
        <StyledCloseButton onClick={onClose}>
          <StyledIcon icon={IconType.CloseBtn} viewBox="0 0 24 24" />
        </StyledCloseButton>
        <StyledTitle>{title}</StyledTitle>
        <StyledInputsWrapper container>
          <StyledInputWrapper item sx={{ mb: 2 }}>
            <StyledText>Email</StyledText>
            <Input
              rows={1}
              paddingY={1.2}
              paddingX={2.5}
              placeholder="Email"
              isMask={false}
              multiline={false}
              variant="outlined"
              helperText="Please enter corect email"
              handleChange={handleChangeEmail}
              value={formValue.email}
              onBlur={() => setEmailError(true)}
              error={emailError && !isValidForm.isEmailValid}
              data-testid="userName"
            />
          </StyledInputWrapper>
          <StyledInputWrapper item>
            <StyledText>Password</StyledText>
            <Input
              rows={1}
              paddingY={1.2}
              paddingX={2.5}
              placeholder="Password"
              allowEmptyFormatting={false}
              variant="outlined"
              isMask={false}
              helperText="Please enter correct password"
              handleChange={handleChangePassword}
              value={formValue.password}
              onBlur={() => setPasswordError(true)}
              error={passwordError && !isValidForm.isPasswordValid}
              multiline={false}
              type="password"
            />
          </StyledInputWrapper>
        </StyledInputsWrapper>
        <StyledButton
          disabled={
            isPasswordValid && isEmailValid
              ? !isDisabledButton
              : isDisabledButton
          }
          variant="outlined"
          onClick={() => {
            navigate(`${ROUTES.USERPAGE}`);
            window.scrollTo(0, 0);
            onClose();
          }}
        >
          {buttonText}
        </StyledButton>
        <StyledText>
          {`${text} `}
          <Link
            sx={{ cursor: "pointer" }}
            onClick={() => handleChangeVariant(variantForm)}
          >
            {link}
          </Link>
        </StyledText>
      </StyledBlock>
    </Modal>
  );
};
