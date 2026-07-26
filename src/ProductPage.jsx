import ProductCard from "./ProductCard"
import { useCart } from "./CartStore"

export default function ProductPage() {

    const { addToCart } = useCart();

    const products = [
        {
            "id": 1,
            "name": "Smartwatch",
            "price": 199.99,
            "imageUrl": "https://picsum.photos/id/8/300/200"
        },
        {
            "id": 2,
            "name": "Wireless Earbuds",
            "price": 79.99,
            "imageUrl": "https://picsum.photos/id/1/300/200"
        },
        {
            "id": 3,
            "name": "Portable Power Bank",
            "price": 49.99,
            "imageUrl": "https://picsum.photos/id/26/300/200"
        },
        {
            "id": 4,
            "name": "HD Action Camera",
            "price": 129.99,
            "imageUrl": "https://picsum.photos/id/96/300/200"
        }
    ]

    return <>
        <div className="container my-5">
            <h1>Our Products</h1>
            <div className="row">
                {
                    products.map(function (p) {
                        return (
                            <div className="col-md-3 mb-4" key={p.id}>
                                <ProductCard
                                    imageUrl={p.imageUrl}
                                    name={p.name}
                                    price={p.price}
                                    onAddToCart={() => {
                                        addToCart(p)
                                        
                                    }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </>
}