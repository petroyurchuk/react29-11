import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type ProductsCartType = {
    [id: number]: number
}
const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsCartType>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (count: number, price: number) => {}
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
