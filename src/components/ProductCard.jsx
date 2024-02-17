import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductCard = ({image, title, description, price}) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
          {price}
        </Typography>

      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ProductCard