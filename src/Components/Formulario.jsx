import styled from "@emotion/styled"
import { useSelectMoneda } from "../Hooks/useSelectMoneda";
import { monedas } from "../data/monedas";
import { useEffect, useState } from "react";
import { Error } from "./Error";
  


// const [SelectCripto] = useSelectMoneda("Elige tu criptomoneda");


const Submit = styled.input`
    max-width: 600px;
    width: 100%;
    border: none;
    background-color: #9497ff;
    margin: 5rem auto;
    display: block;
    text-align: center;
    text-transform: uppercase;
    border-radius: 5px;
    font-weight: bold;
    padding: 1rem;
    color: white;
    font-size: 1.8rem;


    &:hover {
        cursor: pointer;
        background-color: #6e7fff;
        transition: all .3s ease;
    }

`;



export const Formulario = ({setMoneda}) => {
  
  const [cripto, setCripto] = useState([]);



  const [moneda, SelectMoneda] = useSelectMoneda("Elige tu moneda", monedas);
  const [cmoneda, SelectcMoneda] = useSelectMoneda("Elige tu criptomoneda",cripto);
  const [error, setError] = useState(false);
  
  
  
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      const response = await fetch(url);
      const data = await response.json();
      
      const array = data.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Id,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto;
      })

      setCripto(array);
      console.log(array);
    }
    fetchData();
  }, [])


  const handleSubmit = e => {
    e.preventDefault();

    console.log(cmoneda);
    if([moneda, cmoneda].includes('')) {
      setError(true);
      


      return;
    }
    setError(false);
    
    setMoneda({
      moneda,
      cmoneda
    
    });
  }



  return (
    <>
      {error && <Error> Error </Error> }
      <form
          onSubmit={handleSubmit}
      >
        
        <SelectMoneda />
        <SelectcMoneda />

        
        
          <Submit 
              
              type="submit"
              value="Cotizar"
          />
      </form>
    </>
  )
}
