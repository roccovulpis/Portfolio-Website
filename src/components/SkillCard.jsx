import React from 'react';
import '../styles/SkillCard.css';

export default function SkillCard(props) {
  return (
    <div className="card-container">
      <div className="card-img-container"
        style={{ backgroundColor: props.imgBgColor }}
      >
        <img src={props.img} alt={`${props.name} logo`} />
      </div>
      <div className="card-text-container">
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
