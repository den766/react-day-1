function ProductCard({ title, price, rating }) {


    return(

        <div>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{rating}</p>
        </div>
    )

}

export default ProductCard;
