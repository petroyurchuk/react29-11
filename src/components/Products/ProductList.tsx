import { Grid, Typography } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductListItem from './ProductListItem'

type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textTransform: 'upppercase',
                    textAlign: 'center',
                }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map((item) => {
                    return (
                        <Grid item xs={12} sm={4}>
                            <ProductListItem
                                title={item.title}
                                description={item.description}
                                type={item.type}
                                capacity={item.capacity}
                                price={item.price}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
export default ProductList
