import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'
import Content from './Content'

const App = () => {
    return (
        <>
            <Title title="React" year={2020} />
            <Title title="App" year={2022} />
            <Content
                text1="Lorem ipsum dolor, sit amet consectetur adipisicing elit. "
                text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis porro nisi maxime delectus consequatur quas perspiciatis! Numquam, itaque! "
            />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
