import React from 'react';
import './CertificationCard.css';

function CertificationCard({ certification }: Props) {
    const Fade = require('react-reveal/Fade')
    return (
        <Fade duration={800} bottom>
        <a className="certification-card" target="_blank" rel="noopener noreferrer">
            <div className="certification-card-title">
                <p>{certification.title}</p>
            </div>
            <div className="certification-card-desc">
                <p>{certification.desc}</p>
            </div>
        </a>
        </Fade>
    )
}
interface Props {
    certification: {
        title: string,
        desc: string,
    }
}
export default CertificationCard;