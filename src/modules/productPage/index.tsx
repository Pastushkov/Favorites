import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatchContext, useStateContext } from "../../state/reducer";
import {
  AddToFavoritesAction,
  FetchProductByIdAction,
  RemoveFromFavoritesAction,
  SetProductByIdAction,
} from "../../state/actions";
import { fetchproductById, isFavorite } from "../config";
import ImageMagnify from "react-image-magnify";
import {  Grid,Typography } from "@mui/material";
import { Like, UnLike } from "../../assets/svgs";
import Header from "../../Components/Header";

const ProductPage: FC = () => {
  const location = useLocation();
  const dispatch = useDispatchContext();

  const { selectedItem, favorites } = useStateContext();

  useEffect(() => {
    const fetchData = async (id: string) => {
      dispatch(FetchProductByIdAction());
      const res = await fetchproductById(id);
      dispatch(SetProductByIdAction(res as any));
    };
    const id = location.pathname.split("/")[2];
    fetchData(id);
  }, [location]);

  const renderButton = () => {
    if (selectedItem) {
      return isFavorite(favorites, selectedItem?.id) ? (
        <UnLike
          onClick={() => {
            dispatch(RemoveFromFavoritesAction(selectedItem?.id));
          }}
          width="120"
          height="120"
        />
      ) : (
        <Like
          onClick={() => {
            dispatch(AddToFavoritesAction(selectedItem));
          }}
          width="120"
          height="120"
        />
      );
    }
  };

  return (
    <>
      <Header title="Product Page" back />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: `https://testbackend.nc-one.com${selectedItem?.src}`,
              },
              largeImage: {
                src: `https://testbackend.nc-one.com${selectedItem?.src}`,
                width: 1200,
                height: 1800,
              },
              enlargedImagePosition: "over",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" fontSize={64}>
            {selectedItem?.name}
          </Typography>
          <Typography
            variant="h6"
            fontSize={64}
            sx={{
              maxWidth: 290,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            ${selectedItem?.price} {renderButton()}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default ProductPage;
