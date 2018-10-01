import React, { Component } from 'react'
import styled from "styled-components"
import Input from '../Input'

const ModalStyled = styled.div`
  background: #2b2f4e;
  border-radius: 2px;
  padding: 20px;
  width: 350px;
`;

const Button = styled.button`
  align-items: center;
  background: #9a60e8;
  border: 0;
  border-radius: 2px;
  color: white;
  display: flex;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  margin-top: 20px;
  outline: none;
  padding: 10px 9px 10px 11px;
  text-transform: uppercase;
  width: 100%;

  & .fa {
    font-size: 12px;
    margin-left: 5px;
    position: relative;
    top: 1px;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.99);
  }
`;

class Modal extends Component {

   render(){
       const { onSubmit } = this.props
    return (
        <ModalStyled>
              <form 
                className="modal-form"
                onSubmit={onSubmit}
              >
                <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name" />
                <Input
                    id="username"
                    name="username"
                    type="email"
                    placeholder="youremail@gmail.com" />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password" />
                <Button>
                    Log in <i className="fa fa-fw fa-chevron-right"></i>
                </Button>
              </form>
        </ModalStyled>
    )
  }
}

export default Modal