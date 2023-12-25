import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../redux/services/productService";
import {useEffect} from "react";

export function ListProduct() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        console.log(products.list)
        return products.list;
    });

    useEffect(() => {
        dispatch(getAll());
    }, [])
    return (
        <>
            <h1>List Product</h1>
            {
                products.map((item) => (
                    <h3>Name: {item.name} - Image: <img src={item.image} alt={"#"} style={{width: "100px", height: "100px"}}/></h3>
                ))
            }

        </>
    )
}