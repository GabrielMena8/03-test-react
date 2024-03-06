import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 2rem;
    border-radius: 5px;
    font-size: 1.4rem;
`;



export const Error = ({children}) => {
  return (
    <div>
    <Texto>
        {children}
        </Texto>
    </div>
  )
}
