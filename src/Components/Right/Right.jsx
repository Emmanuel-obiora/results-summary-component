import React, {useState} from 'react'
import '../../style.css'
import data from '../../data.json'

const Right = () => {

    const [score, setScore] = useState({
        stuScore: ''
    });

    const handleNewScore = (e) => {
        e.preventDefault();
        setScore({
            ...score, [e.target.name]: e.target.value
        });
        console.log(info);
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

                            <span><strong className='stu-score_right' name="stuScore" onChange={handleNewScore}>{info.score}</strong>/100</span>
                        </div>
                    )
                })
            }

            <button type='button' className="stu-submit">Continue</button>
        </article>
    )
}

export default Right
