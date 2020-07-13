import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function RecipeItem({ recipe }) {
  return (
    <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {console.log(recipe)}
      <CardActionArea>
        <CardMedia
          component='img'
          alt={recipe.label}
          height='220'
          image={recipe.image}
          title={recipe.label}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {recipe.label}
          </Typography>
          {recipe.ingredients.map((ing, i) => (
            <Typography key={i} variant='caption' display='block' gutterBottom>
              {ing.text}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions style={{ marginTop: "auto" }}>
        <Typography variant='body2' color='textSecondary' component='p'>
          {Math.round(recipe.calories)} calories
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {recipe.dietLabels[0]}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default RecipeItem;
