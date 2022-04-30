import React, {useState} from 'react';
import quotes from '../quotes.json'


const SubProcess = () => {

    const colors = ["blue", "black", "green", "lightblue", "aquamarine", "brown", "lightcoral"]

    const randomNumber = Math.floor(Math.random() * quotes.length)

    const [ number, setNumber] = useState (randomNumber)

    const changeUser = () => {
        const randomNumber = Math.floor(Math.random() * quotes.length)
        setNumber(randomNumber)
    }

    const randomColor = Math.floor(Math.random() * colors.length)

    document.body.style = `background: ${colors[randomColor]}`

    return (
        <div>
            <p style={{color: colors[randomColor]}}>{quotes[number].quote}</p>
                <h3 style={{color: colors[randomColor]}}>{quotes[number].author}</h3>
                <button style={{background: colors[randomColor]}} onClick={changeUser}><i className="fa-solid fa-angle-right"></i></button>
            
        </div>
    );
};

export default SubProcess;