import React from 'react'
import Grid from '@material-ui/core'

import Product from './Product'

const products = [
    { id: 1, name: 'beans', description: "dark blend", price: '$19.95' },
    { id: 2, name: 'mug', description: "cool mug" price: '$19.95' }
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => {
                    <Grid item key={product.id} xs={12} sc={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                })}
            </Grid>
        </main>
    )
}

export default Products
