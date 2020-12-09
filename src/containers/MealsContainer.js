import React, { Component } from 'react'
import Meal from '../components/Meal'

class MealsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            meals: [],
            searchTerm: ""
        }
    }

    fetchMeals = () => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${this.props.searchType}=${this.props.searchTerm}`
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (data.meals) {
                    this.setState({
                        meals: data.meals,
                        searchTerm: this.props.searchTerm
                    })
                }
            })
    }

    componentDidUpdate(prevState) {
        if (prevState.searchTerm !== this.props.searchTerm) {
            this.fetchMeals()
        }
    }

    componentDidMount() {
        this.fetchMeals()
    }



    render() {
        if (this.props.searchTerm !== "") {
            const meals = this.state.meals.map((meal, i) => {
                return <Meal key={i} meal={meal.strMeal} />
            })
            return (
                <div>
                    <h2>{this.state.searchTerm} Meals</h2>
                    {meals}
                </div>
            )
        } else {
            return <h3>{this.props.banner}</h3>
        }
    }
}

export default MealsContainer