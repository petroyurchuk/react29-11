import { Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    productCount: number
}
const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <h4>{product.title}</h4>
                    <p>Price for one item: $ {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
