/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import moment from "moment";
import { Box, useMediaQuery } from "@mui/material";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function CountDownTimer({ time }) {
  const matches = useMediaQuery("(max-width:700px)");

  const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });
  const startTime = async () => {
    let until = moment.unix(time).format("x");

    let interval = setInterval(() => {
      let now = moment().format("x");
      const distance = +until - +now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minusts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTime();
  }, [time]);

  const timerStyle = {
    backgroundColor: `#FFFFFF14`,
    boxShadow: "0px 14.171783447265625px 38.97240447998047px 0px #000000CC",
    color: "#ffffff",
    fontSize: matches ? "24px" : "24px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: matches ? "61px" : "49px",
    width: matches ? "60px" : "49px",
    letterSpacing: 2,
    fontFamily: "Inter",
    fontWeight: "600",
    p: matches ? 0.4 : 0.4,

    borderRadius: "12px",
  };

  // const timerValueStyle = {
  //   color: "#ffffff",
  //   fontFamily: "inter",
  //   fontSize: matches ? "17px" : "18px",
  //   fontWeight: "400",
  //   marginTop: "10px",
  //   border: "2px solid blue",
  //   mt: 2,
  // };
  const squareBoxStyle = {
    mx: { xs: 1.1, sm: 1.5, md: 2.1 },
    mb: matches ? 1 : 1,
    color: "#ffffff",
    fontWeight: "700",
    fontSize: matches ? "20px" : "20px",
  };
  return (
    <>
      <Box
        mt={{ xs: 2, sm: 2 }}
        display="flex"
        width={"100%"}
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={timerStyle}>
            {countTime.time_days > 9 ? "" : 0}
            {countTime.time_days}
          </Box>
          {/* <Box sx={timerValueStyle}>Day</Box> */}
        </Box>
        <Box sx={squareBoxStyle}>
          <FiberManualRecordIcon sx={{ fontSize: matches ? "8px" : "6px" }} />

          <FiberManualRecordIcon
            sx={{
              fontSize: matches ? "8px" : "6px",
              marginTop: matches ? "10px" : "2px",
              display: "block",
            }}
          />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={timerStyle}>
            {countTime.time_Hours > 9 ? "" : 0}
            {countTime.time_Hours}
          </Box>
          {/* <Box sx={timerValueStyle}>Hours</Box> */}
        </Box>
        <Box sx={squareBoxStyle}>
          <FiberManualRecordIcon sx={{ fontSize: matches ? "8px" : "6px" }} />

          <FiberManualRecordIcon
            sx={{
              fontSize: matches ? "8px" : "6px",
              marginTop: matches ? "10px" : "2px",
              display: "block",
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={timerStyle}>
            {countTime.time_Minusts > 9 ? "" : 0}
            {countTime.time_Minusts}
          </Box>
          {/* <Box sx={timerValueStyle}>Mins</Box> */}
        </Box>
        <Box sx={squareBoxStyle}>
          <FiberManualRecordIcon sx={{ fontSize: matches ? "8px" : "6px" }} />
          <FiberManualRecordIcon
            sx={{
              fontSize: matches ? "8px" : "6px",
              marginTop: matches ? "10px" : "2px",
              display: "block",
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={timerStyle}>
            {countTime.time_seconds > 9 ? "" : 0}
            {countTime.time_seconds}
          </Box>
          {/* <Box sx={timerValueStyle}>Sec</Box> */}
        </Box>
      </Box>
    </>
  );
}
