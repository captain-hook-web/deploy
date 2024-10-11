/* eslint-disable react/prop-types */
import Backdrop from "@mui/material/Backdrop";
import { GridLoader } from "react-spinners";

export default function Loading({ loading }) {
  return (
    <div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: 220000000,
        }}
        open={loading}
      >
        <GridLoader color="#ffffff" size={40} />
      </Backdrop>
    </div>
  );
}
