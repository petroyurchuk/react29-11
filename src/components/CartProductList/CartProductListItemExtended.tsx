import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
type Props = {
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
    onDecrement: () => void
    onIncrement: () => void
}
const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    onDecrement,
    onIncrement,
}: Props) => {
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
                    <Quantity
                        count={productCount}
                        onDecrement={() => console.log('test1')}
                        onIncrement={() => console.log('test2')}
                    />
                    <Button
                        onClick={() => removeProductFromCart(product.id)}
                        variant="outlined"
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
