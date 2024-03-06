import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import imagen from './img/cripto.png'
import { Formulario } from './Components/Formulario';
import { monedas } from './data/monedas';
import { Resultado } from './Components/Resultado';
import { Spinner } from './Components/Spinner';


const Contenedor = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

`;

const ImagenCripto = styled.img`

  max-width: 40rem;
  width: 80%;
  margin: 10rem auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: white;
  font-size: 3.4rem;
  text-align: center;
  font-weight: 800;
  margin-top: 5rem;
  margin-bottom: 5rem;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 0 auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargar, setCargar] = useState(false);


  //https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {

      const cotizar = async () => {
        setCargar(true);

        const { moneda, cmoneda } = monedas;


        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cmoneda}&tsyms=${moneda}`

        const response = await fetch(url);
        const data = await response.json();

        setCotizacion(data.DISPLAY[cmoneda][moneda]);
        console.log(data.DISPLAY[cmoneda][moneda]);
        setCargar(false);
      }
      cotizar();


    }


  }
    , [monedas])


  return (
    <>
      <Contenedor>
        <ImagenCripto src={imagen}
          alt="imagen cripto" />

        <div>
          <Heading>Criptomonedas</Heading>
          <Formulario
            setMoneda={setMonedas}

          />
          
          {cargar &&
            <Spinner />}
          {cotizacion.PRICE && <Resultado 
            cotizacion={cotizacion}
          />}
        </div>
      </Contenedor>
    </>
  )
}

export default App
