import React, { FC } from "react";
import Products from "./modules/products";
import { Switch, Route } from "react-router-dom";
import FavoritesPart from "./Components/FavoritesPart";
import { useStateContext } from "./state/reducer";
import { Box } from "@mui/material";
import ProductPage from "./modules/productPage";

const App: FC = () => {
  const { favorites } = useStateContext();
  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        padding: 2,
        marginTop: 10,
        overflowY: "auto",
        scrollbarWidth: "thin",
        "::-webkit-scrollbar": {
          width: "0px", 
        },
      }}
    >
      <FavoritesPart favorites={favorites} />
      <Switch>
        <Route path="/" exact render={() => <Products />} />
        <Route path="/product/:id" exact render={() => <ProductPage />} />
      </Switch>
    </Box>
  );
};

export default App;
