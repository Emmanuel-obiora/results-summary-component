import React from 'react'
import '../../style.css'
import data from '../../data.json'

const Right = () => {

    function calculate() {
        const first = document.getElementById('firstNum').innerHTML;
        const second = document.getElementById('secondNum').innerHTML;
        const third = document.getElementById('thirdNum').innerHTML;
        const fourth = document.getElementById('fourthNum').innerHTML;
        // console.log(first);
    
        const averageSum = Math.trunc((+first + +second + +third + +fourth)/4);
        console.log(averageSum);

        localStorage.setItem('average', JSON.stringify(averageSum));

        window.location.reload();
    }
    

    return (
        <article className='stu'>
            <h2 className='stu-heading'>Summary</h2>
            {
                data.map((info,i) => {
                    return(
                        <div className='stu-score' key={i}>
                            <div className='stu-score_left'>
                                <img src={ info.icon } alt="" />
                                <p>{info.category}</p>                  
                            </div>

                            <p><span className='stu-score_right' id={info.identity}>{info.score}</span>/100</p>
                        </div>
                    )
                })
            }

            <button type='button' className="stu-submit" onClick={calculate}>Continue</button>
        </article>
    )
}

export default Right
