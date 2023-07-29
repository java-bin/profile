import React from 'react';
import './Achievement.css';
import { achievements } from '../../portfolio';
import AchievementCard from '../AhievementCard/AchievementCard'

function Achievement() {
    return (
        <section className="section--achievement" id="achievement">
            <div className="inner">
                <div className="achieve-title">
                    <p>{achievements.achievementTitle}</p>
                </div>
                <div className="achieve-content">
                    {achievements.achievementList.map((list, i) => {
                        return <AchievementCard achieves={list} key={i} />
                    })}
                </div>
                <div className="achieve-title">
                    <p>{achievements.certificationTitle}</p>
                </div>
                <div className="achieve-content">
                    {achievements.certificationList.map((list, i) => {
                        return <AchievementCard achieves={list} key={i} />
                    })}
                </div>
            </div>
        </section>
    );
}
export default Achievement;