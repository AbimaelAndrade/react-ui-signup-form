import React, { Component } from 'react'
import styled from "styled-components"

const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border-bottom: 1px solid rgba(255, 252, 232, 0.1);
  padding-bottom: 5px;
  margin-bottom: 10px;

  & label {
    font-family: FontAwesome;
    font-size: 13px;
    opacity: 0.1;
    transition: opacity 0.5s ease;
  }

  & label::before {
    align-items: center;
    color: #fffce8;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 30px;
  }

  & input:focus ~ label {
    opacity: 1;
  }

  & input[type="text"] ~ label::before {
    content: "\f007";
  }

  & input[type="email"] ~ label::before {
    content: "\f007";
  }

  & input[type="password"] ~ label::before {
    content: "\f023";
  }
`;

const InputStyle = styled.input`
  outline: none;
  border: 0;
  color: #fffce8;
  background: transparent;
  font-family: "Lato", sans-serif;
  flex: 1 0 auto;
  font-size: 16px;
  font-weight: 300;
`;

class Input extends Component {
  
   render(){
       const { type, id, name, placeholder, isRequired = false, label } = this.props
    return (
        <Div>
            <InputStyle
                id={id}
                name={name}
                autoComplete="false"
                required={isRequired}
                type={type}
                placeholder={placeholder}
                />
             <label htmlFor={id}>{label}</label>   
        </Div>
    )
  }
}

export default Input