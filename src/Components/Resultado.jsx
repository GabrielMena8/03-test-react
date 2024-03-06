import React from 'react'
import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
    color: white;
    font-family: 'Arial', sans-serif;
    text-align: center;
    margin-top: 2rem;
    background-color: #6e7fff;
    padding: 1rem;
    border-radius: 10px;
    
    
    p {
        font-size: 1.8rem;
        span {
            font-weight: bold;
        }
    }
`;



export const Resultado = ({cotizacion}) => {
  return (
    <div>
        <ResultadoDiv>
            <p>El precio es: <span>{cotizacion.PRICE}</span></p>
            <p>Precio más alto del día: <span>{cotizacion.HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{cotizacion.LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span>{cotizacion.CHANGEPCT24HOUR}</span></p>
            <p>Última actualización: <span>{cotizacion.LASTUPDATE}</span></p>
        </ResultadoDiv>

    </div>
  )
}
