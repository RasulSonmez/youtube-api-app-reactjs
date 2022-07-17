import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { categories } from "../utils/categories";

function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Button onClick={() => scrollPrev()} color="error">
      <ArrowBackIosIcon />
    </Button>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Button onClick={() => scrollNext()} color="error">
      <ArrowForwardIosIcon />
    </Button>
  );
}

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Grid
      gap={5}
      sx={{
        overflow: "auto",
        width: "100%",
        height: "100px",
      }}
    >
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {categories.map((category) => (
          <Button
            className="category-btn"
            onClick={() => setSelectedCategory(category)}
            sx={{
              width: "170px",
              height: "50px",
              background: category === selectedCategory ? "black" : "#F9F9F9",
              borderRadius: 20,
              color: category === selectedCategory ? "white" : "black",
              cursor: "pointer",
              fontWeight: 600,
              mt: 1,
              ml: 1,
              textTransform: "capitalize",
            }}
            key={category}
          >
            {category}
          </Button>
        ))}
      </ScrollMenu>
    </Grid>
  );
};

export default Categories;
