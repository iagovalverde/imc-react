import { useEffect, useState } from "react"
import styles from './Formulario.module.css'

const Formulario = ({valorImc, setValorImc}) => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const calcImc = weight / (height * height);
        setValorImc(calcImc.toFixed(2));
    }, [weight, height])

    return (
        <div className="container">
            <h1>Calcule seu IMC</h1>
            <form className={styles.form}>
                <label htmlFor="height">Altura(m):</label>
                <input id="height" onChange={({ target }) => setHeight(parseFloat(target.value))} type="number" placeholder="Digite sua altura" />
                <label htmlFor="weight">Peso(kg):</label>
                <input id="weight" onChange={({ target }) => setWeight(parseFloat(target.value))} type="number" placeholder="Digite seu peso (kg)" />
            </form>
            <p>Seu IMC é: {valorImc}</p>
        </div>
    )
}

export default Formulario