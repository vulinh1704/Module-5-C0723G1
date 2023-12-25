import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {add} from "../../redux/services/productService";
function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addForm = () => {
        let newProduct = {
            name: "Bánh Cay",
            description: "Qua cua Sang",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLctr9Ua1-ALXfWsDVTLxK3WGZDn76Ech45___PE4nIw&s",
            price: 0,
            category: {
                id: 1
            }
        }
        dispatch(add(newProduct)).then(() => {
            navigate('/products/home');
        })
    }
    return (
        <>
            <h1> ADD </h1>
            <button onClick={addForm}>Them moi</button>
        </>
    )
}

export default AddProduct;