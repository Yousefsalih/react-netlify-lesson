import { useState } from "react";

const Form = () => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const cityObject = { city }
        console.log(cityObject)
        return cityObject;
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <legend>Search for an event in your City</legend>
        <label for="city">City</label>
        <input type="text" name="city" placeholder="Please enter a City" required="true" value={city} onChange={(e) => setCity(e.target.value)}>
        </input>
        <button type="submit">Search</button>
        </form>
        </div>
    )

    }

export default Form;