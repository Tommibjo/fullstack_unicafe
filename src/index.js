import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Headline = ({ text }) => <h2>{text}</h2>
const Button = ({ listener, text }) => <button onClick={listener}>{text}</button>
const Statistic = ({ text, value }) => {
    if (text === "positiivisia") {
        return (
            <tr><td>{text}</td><td>{value} %</td></tr>
        )
    }
    return (
        <tr><td>{text}</td><td>{value}</td></tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const yhteensä = good + neutral + bad
    const keskiarvo = (good - bad) / yhteensä
    const positiivisia = good / yhteensä * 100
    if (yhteensä === 0) {
        return (
            <div>
                Ei yhtään palautetta annettu
            </div>
        )
    }
    return (
        <table>
            <tbody>
                <Statistic text="hyvä" value={good} />
                <Statistic text="neutraali" value={neutral} />
                <Statistic text="huono" value={bad} />
                <Statistic text="yhteensä" value={yhteensä} />
                <Statistic text="keskiarvo" value={keskiarvo} />
                <Statistic text="positiivisia" value={positiivisia} />
            </tbody>
        </table>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Headline text="anna palautetta" />
            <Button listener={() => setGood(good + 1)} text="hyvä" />
            <Button listener={() => setNeutral(neutral + 1)} text="neutraali" />
            <Button listener={() => setBad(bad + 1)} text="huono" />
            <Headline text="statistiikka" />
            <Statistics good={good} neutral={neutral} bad={bad} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
