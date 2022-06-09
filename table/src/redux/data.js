import { setData } from "./slices/dataSlice";
import { setKeys } from "./slices/keySlice";
import { useDispatch } from "react-redux";
import { addFilter } from "./slices/filterSlice";

let remove = (array) => { 
    // return array.filter((value) => {return value !== 'id'});
    return array;
}

function Data() {

    const dispatch = useDispatch();
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => { dispatch(setData(json)); dispatch(setKeys(remove(Object.keys(json[0]))))})

}

export default Data;