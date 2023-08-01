import React, { FC } from "react";
import { Product } from "../../state/type";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Like, UnLike } from "../../assets/svgs";
import { isFavorite } from "../../modules/config";
import { useDispatchContext } from "../../state/reducer";
import {
  AddToFavoritesAction,
  RemoveFromFavoritesAction,
} from "../../state/actions";
import { useHistory } from "react-router-dom";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  FixedSizeGrid,
  GridChildComponentProps,
} from "react-window";

interface IProps {
  list: Product[];
  favorites: Product[];
}
interface IAutoResize {
  width: number;
  height: number;
}
const ProductsPart: FC<IProps> = ({ list, favorites }) => {
  const dispatch = useDispatchContext();

  const renderButton = (element: Product) => {
    if (isFavorite(favorites, element.id)) {
      return (
        <UnLike
          onClick={(e: any) => {
            e.stopPropagation();
            dispatch(RemoveFromFavoritesAction(element.id));
          }}
        />
      );
    } else {
      return (
        <Like
          onClick={(e: any) => {
            e.stopPropagation();
            dispatch(AddToFavoritesAction(element));
          }}
        />
      );
    }
  };

  const history = useHistory();
  const goToProduct = (id: number) => {
    history.push(`/product/${id}`);
  };

  const CellComponent = ({
    columnIndex,
    rowIndex,
    style,
  }: GridChildComponentProps) => {
    const element = list[rowIndex * 3 + columnIndex]; 

    if (!element) {
      return null;
    }

    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={4}
        style={{ ...style, padding: 8 }}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            borderRadius: 10,
            border: "2px dashed #000",
            cursor: "pointer",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            },
          }}
          onClick={() => goToProduct(element.id)}
        >
          <CardMedia
            component="img"
            height="140"
            image={`https://testbackend.nc-one.com${element.src}`}
            alt={element.name}
            sx={{paddingTop:3}}
          />
          <CardContent>
            <Typography variant="h6" fontSize={20}>
              {element.name}
            </Typography>
            <Typography variant="h2" color="text.secondary" fontSize={24}>
              $ {element.price}
            </Typography>
            <Typography sx={{ cursor: "pointer" }}>
              {renderButton(element)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }: IAutoResize) => (
        <FixedSizeGrid
          height={height}
          width={860}
          columnCount={3}  
          rowCount={Math.ceil(list.length / 3)} 
          columnWidth={280} 
          rowHeight={360} 
        >
          {CellComponent}
        </FixedSizeGrid>
      )}
    </AutoSizer>
  );
};
export default ProductsPart;
