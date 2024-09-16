import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Import the clock icon

interface IArticleCard {
  title:string;
  description:string;
  imageUrl:string;
  altText:string;
  date:string;
  readMoreUrl:string;
}

const ArticleCard = ({
  title,
  description,
  imageUrl,
  altText,
  date,
  readMoreUrl,
}:IArticleCard) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        padding: "20px",
        marginBottom: "30px",
      }}
    >
      {/* Article Image */}
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={altText}
        sx={{ borderRadius: "12px" }}
      />

      {/* Article Content */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary" display="flex">
          <AccessTimeIcon sx={{ color: "text.secondary", fontSize: "18px" }} />{" "}
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {description}
        </Typography>
      </CardContent>

      {/* Actions Section */}
      <CardActions>
        <Box sx={{ flexGrow: 1 }} />
        <Button size="small" variant="contained" href={readMoreUrl}>
          ادامه
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
