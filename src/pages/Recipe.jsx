import React from 'react'
import { useEffect,useState } from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom'

function Recipe() {
    let params = useParams()
    const [details,setDetails] = useState({})
    const [activeTab,setActiveTab] = useState('instructions')

    const fetchDetails = async ()=>{
        const data =await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=c048b0a6b40b41cfbc286d8d89082ab5`)
        const detailData = await data.json()
        setDetails(detailData)
        console.log(detailData);
    }

    useEffect(()=>{
            fetchDetails(params.name)
    },[params.name])
  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
        </div>
        <Info>
            <Button className={activeTab==='instructions' ? 'active':''} onClick={()=>setActiveTab('instructions')}> Instructions</Button>
            <Button className={activeTab==='ingredients' ? 'active':''} onClick={()=>setActiveTab('ingredients')}>Ingredients</Button>
            {activeTab==='instructions' && (
                <div>
                    <p dangerouslySetInnerHTML={{__html:details.summary}}></p>
                    <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
                </div>
            )}
            {activeTab === 'ingredients' && (
                    <ul>
                    {
                        details.extendedIngredients.map((ingredient)=>(
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))
                    }
                    </ul>
            )}
            
        </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
    margin-bottom:5rem;
    margin-top:10rem;
    display: flex;
    .active{
        background:linear-gradient(90deg, rgba(73,73,73,1) 70%, rgba(49,49,49,1) 100%);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
    p{
        margin-top: 1.5rem;
    }
`
const Button = styled.button`
    padding:1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`
const Info = styled.div`
    margin-left: 10rem;
`

export default Recipe