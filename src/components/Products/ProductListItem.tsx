import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductListItem.scss'
type Props = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    addProductToCart: (id: number, count: number) => void
}
const ProductListItem = ({
    id,
    title,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt={title} />
                </div>
                <h4 className="product-title">{title}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}GB</div>
                <div className="product-price">
                    Price: <strong>${price}</strong>
                </div>

                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
                <CardActions className="btns-wrap">
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
