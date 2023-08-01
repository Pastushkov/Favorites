import React, { FC } from "react";
import { Product } from "../../state/type";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { UnLike } from "../../assets/svgs";
import { useDispatchContext } from "../../state/reducer";
import { RemoveFromFavoritesAction } from "../../state/actions";
import { useHistory } from "react-router-dom";

interface IProps {
  favorites: Product[];
}

const FavoritesPart: FC<IProps> = ({ favorites }) => {
  const dispatch = useDispatchContext();
  const renderButton = (id: number) => {
    return (
      <UnLike
        onClick={(e: any) => {
          e.stopPropagation();
          dispatch(RemoveFromFavoritesAction(id));
        }}
      />
    );
  };

  const history = useHistory();
  const goToProduct = (id: number) => {
    history.push(`/product/${id}`);
  };

  return (
    <Box
      sx={{
        maxWidth: 310,
        width: "100%",
        height: 800,
        border: "2px dashed #000",
        borderRadius: 10,
        padding: 2,
        overflowY: "auto",
        scrollbarWidth: "none",
        "::-webkit-scrollbar": {
          width: "0px", 
        },
      }}
    >
      <Typography variant="h6" fontSize={24} textAlign={"left"}>
        Favorites
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {favorites.map((element) => (
          <Card
            key={element.id}
            sx={{ p: 2, display: "flex", borderRadius: 8, cursor: "pointer" }}
            onClick={() => goToProduct(element.id)}
          >
            <CardMedia
              component="img"
              image={`https://testbackend.nc-one.com${element.src}`}
              alt={element.name}
              sx={{ width: 100, height: 100 }}
            />
            <div>
              <Typography variant="body2" fontSize={16} textAlign="center">
                {element.name}
              </Typography>

              <Typography
                variant="body2"
                fontSize={20}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                {" "}
                $ {element.price}{" "}
                <Typography sx={{ cursor: "pointer" }}>
                  {renderButton(element.id)}
                </Typography>
              </Typography>
            </div>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default FavoritesPart;
