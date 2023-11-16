import { useEffect, useState } from "react"
import styles from './Tabela.module.css'

const Tabela = ({ valorImc }) => {
    const [tableRow, setTableRow] = useState(false)

    useEffect(() => {
            if(valorImc < 18.5) {
                setTableRow('Magreza')
            } else if (valorImc >= 18.5 && valorImc < 24.9) {
                setTableRow('Normal')
            } else if (valorImc >= 25 && valorImc < 29.9) {
                setTableRow('Sobrepeso')
            } else if (valorImc >= 30 && valorImc < 34.9) {
                setTableRow('Obesidade1')
            } else if (valorImc >= 35 && valorImc < 39.9) {
                setTableRow('Obesidade2')
            } else if (valorImc > 40) {
                setTableRow('Obesidade3')
            } else {
                setTableRow('')
            }
    }, [valorImc])

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={tableRow == 'Magreza' ? styles.rowClass : ''}>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                    </tr>
                    <tr className={tableRow == 'Normal' ? styles.rowClass : ''}>
                        <td>18,5 a 24,9</td>
                        <td>Normal</td>
                    </tr>
                    <tr className={tableRow == 'Sobrepeso' ? styles.rowClass : ''}>
                        <td>25 a 29,9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr className={tableRow == 'Obesidade1' ? styles.rowClass : ''}>
                        <td>30 a 34,9</td>
                        <td>Obesidade grau I</td>
                    </tr>
                    <tr className={tableRow == 'Obesidade2' ? styles.rowClass : ''}>
                        <td>35 a 39,9</td>
                        <td>Obesidade grau II</td>
                    </tr>
                    <tr className={tableRow == 'Obesidade3' ? styles.rowClass : ''}>
                        <td>Maior que 40</td>
                        <td>Obesidade grau III</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabela