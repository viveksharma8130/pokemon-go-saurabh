import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
  },
  media: {
    margin: "auto", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PokemonCard = ({ data }) => {
  const { id, image, name, type, image_front } = data;
  const classes = useStyles();
  return (
    <Card className={`${classes.root} ${type}`}>
      <CardHeader
        avatar={
          <Avatar alt={name} className={classes.avatar} src={image_front} />
        }
        title={`#${id}  ${name}`}
        subheader={type}
      />
      <CardMedia
        component="img"
        className={classes.media}
        height="140"
        image={image}
        title={name}
      />
      <CardContent>
        <Link
          to={{
            pathname: "/details",
            state: {
              data,
            },
          }}
          className="MuiButtonBase-root MuiButton-root MuiButton-text"
        >
          <span className="MuiButton-label">Read More</span>
        </Link>
      </CardContent>
    </Card>
  );
};
export default PokemonCard;
