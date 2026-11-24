import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const navigate = useNavigate();

    // Récupérer le produit selon son ID
    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error));

    }, [id]);

    // Pendant le chargement
    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>

            <button onClick={() => navigate("/")}>
                Retour
            </button>

            <h1>{product.title}</h1>

            <img
                src={product.image}
                width="250"
                alt={product.title}
            />

            <p>{product.description}</p>

            <h3>
                Price : {product.price} $
            </h3>

            <p>
                Category : {product.category}
            </p>

        </div>
    );
}