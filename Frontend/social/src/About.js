import React from 'react'
import Left from './Left'
import Right from './Right'

export default function About() {
    return (
        <>
            <div className='contain lft'>
                <Left></Left>
            </div>
            <div className='contain md'>
                <div className='mid_container'>
                    <h2 className='mid_container_h2'>About</h2>
                    <hr></hr>
                </div>
                <div>
                    <iframe src='https://drive.google.com/file/d/1CHMqO7_qPpsx2R2Pm16frmO_foFcoKH_/view?usp=sharing' height=""autoPlay="allow"></iframe>
                </div>
            </div>
            <div className='contain rt'>
                <Right></Right>
            </div>
        </>
    )
}
