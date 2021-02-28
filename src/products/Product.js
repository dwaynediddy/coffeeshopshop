import React from 'react'
import { 
    Card, 
    CardMedia, 
    CardContainer, 
    CardActions, 
    Typography, 
    IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './Styles'

const Product = ({ product }) => {

const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography varient='h5' guitterBottom>
                        {product.name}
                    </Typography>
                    <Typography varient='h5'>
                        {product.price}
                    </Typography>
                </div>
                <Typography varient='h2' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
