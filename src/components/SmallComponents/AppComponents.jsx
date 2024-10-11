/* eslint-disable react/prop-types */
import { Alert, Box, Snackbar, TextField } from "@mui/material";
import { Button } from "@mui/material";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#ffffff",
          background:
            "radial-gradient(145.24% 943.2% at 7.91% 50%, #1c85fe91 0%, #be4bc870 40%)",
          fontSize: "18px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "capitalize",
          //   fontFamily: "Josefin Sans",
          borderRadius: "12px",
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background:
              "radial-gradient(145.24% 943.2% at 7.91% 50%, #be4bc870 0%, #1c85fe91 40%)",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

export function StyledText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          fontSize: "14px",
          fontFamily: "Open Sans",
          fontWeight: "600",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTitle({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "40px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "700",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export const StyledInput = ({ ...props }) => {
  return (
    <TextField
      {...props}
      sx={{
        background: "#E5E5E5",
        borderRadius: "8px",
        border: "0.56px solid #000000",
        boxShadow:
          "0px 5.913842678070068px 14.78460693359375px 0px #00000026,0px 1.4046640396118164px 1.75583016872406px 0px #FFFFFF inset",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },

        input: {
          "&::placeholder": {
            color: "#000000 !important",
            opacity: 1,
          },
          padding: { xs: "16px 16px", sm: "12px 18px" },
          color: "#000000",
          fontSize: "16px",
          fontWeight: "400",
          fontFamily: "Poppins",
        },
      }}
    />
  );
};
