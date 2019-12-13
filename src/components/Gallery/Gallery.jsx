import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import "./style.css";

const tileData = [
  {
    img:
      "https://images.unsplash.com/photo-1557199582-14cd70bc6d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
    title: "Breakfast",
    author: "jill111",
    cols: 2,
    featured: true
  },
  {
    img:
      "https://images.unsplash.com/photo-1514147397633-2882c06ea2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2870&q=80",
    title: "Tasty burger",
    author: "director90"
  },
  {
    img:
      "https://images.unsplash.com/flagged/photo-1548245643-7b805f2f93d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    title: "Camera",
    author: "Danson67"
  },
  {
    img:
      "https://images.unsplash.com/photo-1567108793118-469d04bbe295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
    title: "Morning",
    author: "fancycrave1",
    featured: true
  },
  {
    img:
      "https://images.unsplash.com/photo-1541687786053-e441da2fa7f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
    title: "Hats",
    author: "Hans"
  },
  {
    img:
      "https://images.unsplash.com/photo-1552804080-85eb71cc23e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    title: "Honey",
    author: "fancycravel"
  },
  {
    img:
      "https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Vegetables",
    author: "jill111",
    cols: 2
  }
];

const Gallery = () => {
  //   const classes = useStyles();

  return (
    <div>
      <h1 className="title-gallery">Nasza Galeria</h1>
      <GridList cellHeight={160} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Gallery;
