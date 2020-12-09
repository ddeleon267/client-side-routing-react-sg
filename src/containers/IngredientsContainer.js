import React, { Component } from 'react'
import Ingredient from '../components/Ingredient'

const URL = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"

export class IngredientsContainer extends Component {
    state = {
        ingredients: [],
        ingredient: ""
    }

    handleOnClick = (event) => {
        this.setState({
            ingredient: event.target.id
        })
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => {
                console.log()
                this.setState({
                    ingredients: data.meals
                })
            })
    }
    render() {
        const ingredients = this.state.ingredients.map((ingredient, i) => {
            return <Ingredient key={i} ingredient={ingredient.strIngredient} handleClick={this.handleOnClick} />
        })
        return (
            <div>
                <h3>The meal ingredients</h3>
                <br/>
                {ingredients}
            </div>
        )
    }
}

export default IngredientsContainer
