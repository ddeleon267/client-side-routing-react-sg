import React, { Component } from 'react'
import MealsContainer from './MealsContainer'

class IngredientMealsList extends Component {
    render() {
        const ingredientName = this.props.match.params.id.split("_").join(" ")
        console.log("props is", this.props)
        return (
            <div>
                <MealsContainer searchTerm={ingredientName} searchType="i" banner="" />
            </div>
        )
    }
}

export default IngredientMealsList
