import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";
import { BackArrow } from "../../assets/svgs";
import { useHistory } from "react-router-dom";

interface IProps {
  title: string;
  back?: boolean;
}
const Header: FC<IProps> = ({ title, back }) => {
  const history = useHistory()
  return (
    <AppBar position="fixed" sx={{ top: 0, backgroundColor: "#FFCC26" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div />
        <div>
          <Typography
            variant="body1"
            textTransform="uppercase"
            sx={{ color: "#414141", display: "flex", alignItems: "center" }}
          >
            {back && (
              <Typography sx={{ cursor: "pointer" }}>
                <BackArrow  onClick={()=>history.goBack()}/>
              </Typography>
            )}
            {title}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
