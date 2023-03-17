import productsArray from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {productsArray
                .filter(({ id }) => productsInCart[id])
                .map(({ id, title }) => (
                    <div key={id}>
                        {title} : {productsInCart[id]}
                    </div>
                ))}
        </div>
    )
}
export default CartHeader
