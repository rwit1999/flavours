import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components"
import { Link } from 'react-router-dom';

function Searched() {
    let params= useParams()
    const [searchedRecipes,setSearchedRecipes] = useState([])
    
    const getSearched = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c048b0a6b40b41cfbc286d8d89082ab5&query=${name}`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        console.log(searchedRecipes);
    };

    useEffect(()=>{
        getSearched(params.search)
        // console.log(params.search);
    },[params.search])

  return (
    <Grid>
        {searchedRecipes.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+ item.id} >
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Searched