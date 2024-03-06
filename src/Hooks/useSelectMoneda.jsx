import {useState}from 'react'
import styled from '@emotion/styled'


const Label = styled.label`

    font-family: 'Lato', cursive;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 3rem;
    display: block;
    text-align: center;
`;

const SelectM  = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

export const useSelectMoneda = (label, opciones) => {
    //State de nuestro custom hook
    const [state, setState] = useState('')

    const SelectMonedas = () => {
       
        return <>
                <Label> {label} </Label>
                <SelectM
                    onChange={e => setState(e.target.value)}
                    value={state} 
                >
                    <option value="">- Seleccione -</option>
                    {opciones.map(opcion => (
                        <option 
                        key={opcion.id} 
                        value={opcion.id}>  {opcion.nombre}
                        </option>
                    ))}
                </SelectM>
             </>
        
    }

    return [state,SelectMonedas]
}

