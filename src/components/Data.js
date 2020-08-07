import React, { Component } from 'react'
import axios from 'axios'
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[] }
    }
    componentDidMount(){
        const APP_ID = "76b9dda2";
        const APP_KEY = "1c37f0112c25760510b13a15265424a5";
        axios.get(`https://api.edamam.com/search?q=cupcake&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`)
        .then(response =>{
           this.setState({data: response.data.hits})
           console.log(this.state.data)
        })
        .catch(error =>{
            console.log("No data from api !!", error)
        })
    }
    render() { 
        const recipes = this.state.data;
        return ( 
            <div>
               {recipes.map(recipe => (
                   <div>
                      <img src={recipe.recipe.image} alt=""/>
                   </div>
               ))}
            </div>
         );
    }
}
 
export default Data;