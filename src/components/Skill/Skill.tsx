import React from 'react';
import './Skill.css';
import { skills } from '../../portfolio';
import SkillCard from '../SkillCard/SkillCard';

function Skill() {
    const Fade: any = require("react-reveal/Fade");
    return(
        <section className="section--skill" id="skills">
            <div className="inner">

                <Fade left duration={800}>
                <div className="wrapper">
                    <div className="skill-title">
                        <p>{skills.title}</p>
                    </div>
                    <div className="skill-subtitle">
                        <p>{skills.mainSkill}</p>
                    </div>
                    <div className="skill-cards">
                        {skills.mainLists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                     <div className="skill-subtitle">
                        <p>{skills.serverSkill}</p>
                    </div>
                    <div className="skill-cards">
                        {skills.serverLists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                    <div className="skill-subtitle">
                        <p>{skills.communicationSkill}</p>
                    </div>
                    <div className="skill-cards">
                        {skills.communicationLists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                    <div className="skill-subtitle">
                        <p>{skills.languageSkill}</p>
                    </div>
                    <div className="skill-cards">
                        {skills.languageLists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                </div>
                </Fade>

                <Fade right duration={800}>
                <div className="skill-image">
                    <i className="fas fa-code"></i>
                </div>
                </Fade>

            </div>
        </section>
    );
}
export default Skill;