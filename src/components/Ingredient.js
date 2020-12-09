import React from 'react'
import { Link } from 'react-router-dom'

const Ingredient = (props) => {
    return (
        <Link
            to={`/ingredients/${props.ingredient.split(" ").join("_")}`}
        >
            <button>{props.ingredient}</button>
        </Link>
    )
}

export default Ingredient