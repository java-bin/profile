import React from 'react';
import './Certification.css';
import { certification } from '../../portfolio';
import CertificationCard from '../CertificationCard/CertificationCard';

function Certification() {
    return (
        <section className="section--certification" id="certification">
            <div className="inner">

                <div className="certification-title">
                    <p>{certification.title}</p>
                </div>

                <div className="certification-content">
                    {certification.lists.map((list, i) => {
                        return <CertificationCard certification={list} key={i} />;
                    })}
                </div>

            </div>
        </section>
    );
}
export default Certification;