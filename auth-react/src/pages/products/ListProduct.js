import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAll} from "../../redux/services/userService";


export function ListProduct() {
    const dispatch = useDispatch();
    const listUser = useSelector(({users}) => {
        console.log(users.list);
        return users.list;
    })
    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        <>
            <h1>List Product</h1>
        </>
    )
}