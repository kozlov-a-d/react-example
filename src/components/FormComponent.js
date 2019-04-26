import React from 'react';

function FormComponent(props) {
    return (
        <form onSubmit={props.handleSubmit}>        
            <input type="text" name="firstName" placeholder="First Name" onChange={props.handleChange} />
            <br />
            <input type="text" name="lastName" placeholder="Last Name" onChange={props.handleChange} />
            <br />
            <textarea  value={"Some default value"} onChange={props.handleChange}/>  
            <br />
            <label>
                <input type="checkbox" name="isFriendly"
                    checked={props.data.isFriendly}
                    onChange={props.handleChange}
                /> Is friendly?
            </label>
            <br />
            <label>
                <input type="radio" name="gender" value="male"
                    checked={props.data.gender === "male"}
                    onChange={props.handleChange}
                /> Male
            </label>
            <br />
            <label>
                <input type="radio" name="gender" value="female"
                    checked={props.data.gender === "female"}
                    onChange={props.handleChange}
                /> Female
            </label>

            <label>Favorite Color:</label>
            <select name="favColor"
                value={props.data.favColor}
                onChange={props.handleChange}>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
            </select>

            <h1>{props.data.firstName} {props.data.lastName}</h1>
            <h2><font color="#3AC1EF">You are a {props.data.gender}</font></h2>
            <h2><font color="#3AC1EF">Your favorite color is {props.data.favColor}</font></h2>



            <button>Submit</button>
        </form>
    )
}

export default FormComponent;
