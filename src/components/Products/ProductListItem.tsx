import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductListItem.scss'
type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}
type State = {
    count: number
}
class ProductListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 1,
        }
        this.onIncrementClick = this.onIncrementClick.bind(this)
        this.onDecrementClick = this.onDecrementClick.bind(this)
    }
    onDecrementClick() {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }))
    }
    onIncrementClick() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }
    render() {
        const { title, description, type, capacity, price, image } = this.props
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt={title} />
                    </div>
                    <h4 className="product-title">{title}</h4>
                    <div className="product-description">{description}</div>
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity}GB
                    </div>
                    <div className="product-price">
                        Price: <strong>${price}</strong>
                    </div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={this.onDecrementClick}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="outlined"
                            onClick={this.onIncrementClick}
                        >
                            +
                        </Button>
                    </div>
                    <CardActions className="btns-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }
}

export default ProductListItem
