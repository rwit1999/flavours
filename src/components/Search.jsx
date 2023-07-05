import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate, useNavigates } from 'react-router-dom'

function Search() {
    const [input,setInput] = useState("")
    const navigate = useNavigate()

    const submitHander = (e)=>{
        e.preventDefault();
        navigate('/searched/' + input)
    }

  return (
    <FormStyle onSubmit={submitHander}>
        <div>
            <FaSearch/>
            <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} />
        </div>  
        
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
   div{
    width: 100%;
    position: relative;
   }
    input{
        border: none;
        background: linear-gradient(90deg, rgba(73,73,73,1) 70%, rgba(49,49,49,1) 100%);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        color: white;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
    }
`;

export default Search