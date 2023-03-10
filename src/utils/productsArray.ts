type Product = {
    id:number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}
const productsArray: Product[] = [
    {
        id:1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
    },
    {
        id:2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 1200,
    },
    {
        id:3,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 1000,
    },
    {
        id:4,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '256',
        price: 1250,
    },
    {
        id:5,
        title: 'iPhone 13 Pro Max',
        description: 'This is iPhone 13 Pro Max',
        type: 'phone',
        capacity: '512',
        price: 1700,
    },
    {
        id:6,
        title: 'iPhone 14 Pro Max',
        description: 'This is iPhone 14 Pro Max',
        type: 'phone',
        capacity: '256',
        price: 1450,
    },
]

export default productsArray
