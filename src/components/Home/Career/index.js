import React from 'react';


const CareerMap = [{
    role: 'Senior Software Engineer',
    company: 'BYJUs, India',
    duration: 'Dec 2020 - Present',
    workItems: [
        'Working as a part of BYJUs Classes Team, developed and built the important features and bug fixes which enhances the user experience of the students who are using the product.'
    ]
}, {
    role: 'Front End Engineer',
    company: 'Zoho Corporation, India',
    duration: 'Jun 2017 - Nov 2020',
    workItems: [
        'Maintaining an Internal testing tool written on top of the EmberJS.',
        'Working on a developer-friendly web plugin to help the developer to write better code by showing insights of each REST API the developer make.',
        'Domain experience in Finance and Accounting.'
    ]
}]


const Career = (props) => {
    return (
        <div className="career-container">
            <div className="text-center text-uppercase">
                <h4>Experience</h4>
                <div className="selection-title-divider" />
            </div>
            <p className="text-center text-muted">
                <em>Reflection of My Educational Journey!</em>
            </p>
            <div className="container">
                {CareerMap.map((career, index) => {
                    return (
                        <div className="career-panel" key={`career-${index}`}>
                            <div className="d-flex justify-content-between pb-3">
                            <div>
                                <div className="font-md">{career.role}</div>
                                <div className="text-muted">{career.company}</div>
                            </div>
                            <div className="text-muted">{career.duration}</div>
                            </div>

                            <ul>
                                {career.workItems.map((work, workIndex) => <li key={`work-${index}-${workIndex}`}>{work}</li>)}
                            </ul>
                            <hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Career;