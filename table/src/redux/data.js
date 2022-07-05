import { setData } from "./slices/dataSlice";
import { setKeys } from "./slices/keySlice";
import { setDefaultOption } from "./slices/filterSlice";
import { useDispatch } from "react-redux";

let remove = (array) => { 
    // return array.filter((value) => {return value !== 'id'});
    return array;
}

function Data() {
    // const url = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
    const url = "https://fakestoreapi.com/products"
    const dispatch = useDispatch();
    fetch(url)
        .then(res => res.json())
        .then(json => { dispatch(setData(json)); dispatch(setKeys(remove(Object.keys(json[0])))); dispatch(setDefaultOption(Object.keys(json[0])[0])); })

}

export default Data;