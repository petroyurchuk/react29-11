import { Typography } from '@mui/material'

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
        </>
    )
}
export default ProductList
