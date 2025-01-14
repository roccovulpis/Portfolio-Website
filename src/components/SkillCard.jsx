import React from 'react';
import '../styles/SkillCard.css';

export default function SkillCard(props) {
  return (
    <a href={props.link} target='_blank'>
      <div className="skill-card-container">
        <div className="skill-card-img-container"
          style={{ backgroundColor: props.imgBgColor }}
        >
          <img src={props.img} alt={`${props.name} logo`} />
        </div>
        <div className="skill-card-text-container">
          <h4>{props.name}</h4>
          <p>{props.desc}</p>
        </div>
      </div>
    </a>
  );
}
