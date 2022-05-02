import React from "react";
import styled from "styled-components";

export const Tag = styled.div`
  text-align: center;
  min-width : 100px;
  display: grid;
  padding : 4px 15px;
  min-width:100px;
  border-radius:4px;
  grid-template-rows: auto;
`;


export const GreenTag = styled(Tag)`
  color: #14ab72;
  background: #F1FCF6;
`;

export const RedTag = styled(Tag)`
  color: #e53935;
  background: rgba(253, 238, 233, 0.5);
`;

export const BlueTag = styled(Tag)`
  color: #0079bf;
  background: #e1eff7;
`;


export const AvatarImage = (props) => <img style={{width:"50px" , height:"50px" , borderRadius:"4px"}} src={props.src}/>

export const MenuIconImage = (props) => <img style={{width:"30px" , height:"30px" , borderRadius:"1px"}} src={props.src}/>

