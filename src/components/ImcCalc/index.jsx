import { useEffect, useState } from "react"

const ImcCalc = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [imc, setImc] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const calcIMC = weight / (height * height);
        setImc(calcIMC.toFixed(2));
    }, [weight, height])

    useEffect(() => {
        if(imc < 18.5) {
            setMessage('Abaixo do peso')
        } else if (imc >= 18.5 && imc < 24.9) {
            setMessage('Peso normal')
        } else if (imc >= 25 && imc < 29.9) {
            setMessage('Pré-obesidade')
        } else if (imc >= 30 && imc < 34.9) {
            setMessage('Obesidade Grau 1')
        } else if (imc >= 35 && imc < 39.9) {
            setMessage('Obesidade Grau 2')
        } else {
            setMessage('Obesidade Grau 3')
        }
    }, [imc])

    return (
        <>
            <h1>Calcule seu IMC</h1>
            <form>
                <input onChange={({ target }) => setHeight(parseFloat(target.value))} type="number" placeholder="Digite sua altura" />
                <input onChange={({ target }) => setWeight(parseFloat(target.value))} type="number" placeholder="Digite seu peso" />
            </form>
            <p>Seu IMC é: {imc}</p>
            <span>{message}</span>
        </>
    )
}

export default ImcCalc