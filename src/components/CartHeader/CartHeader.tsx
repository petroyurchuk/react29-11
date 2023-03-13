type Props = {
    totalCount: number
    totalPrice: number
}
type PropsCartHeader = {
    cartData: Props
}
const CartHeader = ({ cartData }: PropsCartHeader) => {
    return (
        <div>
            <div>{cartData.totalCount}</div>
            <div>${cartData.totalPrice}</div>
        </div>
    )
}
export default CartHeader
