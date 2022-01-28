import React from 'react'

export default function About() {
  return (
    <div>
        <h1>About Me</h1>
        
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Who Am I?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                Hello guys I am <strong> Abhishek.</strong> I'm a Software Engineer working for ARBA Development Studios Pvt. Ltd. (Bengaluru)
                <br /> 
                <br />
                <img src="abhi beach pic.jpg" className="img-fluid" alt="Abhishek"></img>
            </div>
            </div>
        </div>
        
</div>

    </div>
  )
}
