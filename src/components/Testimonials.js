import React from 'react'
import "../css/Testimonials.css"
import img2 from "../assets/img7.jpg"



const Testimonials = () => {
    const tests = [
        {
            id: 1, 
            img: img2, 
            title: 'Review 1', 
            content: 'He\'s a pro web developer. He delivers fast.'
        },
        {
            id: 1, 
            img: img2, 
            title: 'Review 2', 
            content: 'He\'s a pro web developer. He delivers fast.'
        },
        {
            id: 1, 
            img: img2, 
            title: 'Review 3', 
            content: 'He\'s a pro web developer. He delivers fast.'
        },
        {
            id: 1, 
            img: img2, 
            title: 'Review 4', 
            content: 'He\'s a pro web developer. He delivers fast.'
        },
    ]

    return (
        <div className="testset-container">
            <div className="text">
                <h1>Testimonies & <br /> Recommendations</h1>
            </div>
            <div className="tests-right">
                <div className="tests-container">
                    {tests.map(test=> {
                        return (
                            <div key={test.id} style={{textAlign: 'center'}}>
                                <img src={test.img} alt="testimonial-description"/>
                                <h2>{test.title}</h2>
                                <p>{test.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div> 
        </div>
      )
    }
    
    export default Testimonials;