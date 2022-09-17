import { useState } from "react";

function SearchBar(props) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")
    const searchButtonPressed = () => {
        props.callBack({Name: name, Price: price, Type: type, Brand: brand});
    }
    return(
        <div>
                <h2>
                    Search For An Item
                </h2>
            <form>
                <label htmlFor="name-field">Name: </label>
                <input id="name-field" type="text" value={name} onChange = {(e) => setName(e.target.value)}/>
                <label htmlFor="price-field">Price: </label>
                <input id="price-field" type="text" value={price} onChange = {(e) => setPrice(e.target.value)}/>
                <label htmlFor="type-field">Type: </label>
                <input id="type-field" type="text" value={type} onChange = {(e) => setType(e.target.value)}/>
                <label htmlFor="brand-field">Brand: </label>
                <input id="brand-field" type="text" value={brand} onChange = {(e) => setBrand(e.target.value)}/>
                <button type="button" onClick={searchButtonPressed}>Search</button>
            </form>


        </div>
    )
}
export default SearchBar;