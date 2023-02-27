import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App component</h1>
}
const Content = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                sunt dolorem eum nesciunt, iusto, doloremque eius quidem,
                similique cupiditate cum esse excepturi laudantium labore quae
                fugit dolores vitae maxime eaque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                sed incidunt alias quasi dolore! Eos error officiis corporis
                obcaecati quo? Illum nisi laudantium aliquid, totam animi harum
                dolore atque neque?
            </p>
        </>
    )
}
const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
