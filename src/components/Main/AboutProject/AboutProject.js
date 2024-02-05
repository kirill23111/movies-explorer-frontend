import React from "react";
import "./AboutProject.css";

function ProjectDetails() {
  return (
    <div className="about-project">
      <div className="about-project__container">
        <div className="about-project__title-container">
          <p className="about-project__title">О проекте</p>
          <div className="about-project__divider" />
        </div>
        <div className="about-project__stage-container">
          <div className="about-project__stage">
            <p className="about-project__stage-title">
              Дипломный проект включал 5 этапов
            </p>
            <p className="about-project__stage-text">
              Составление плана, работа над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__stage">
            <p className="about-project__stage-title">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="about-project__stage-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
      </div>
      <div className="about-project__timeline-con">
        <div className="about-project__timeline">
          <div className="about-project__timeline-item1">
            <p className="about-project__timeline-item1-text">1 неделя</p>
          </div>
          <div className="about-project__timeline-item2">
            <p className="about-project__timeline-item2-text">4 недели</p>
          </div>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="about-project__timeline-item-back">
          <p className="about-project__timeline-item-text">Back-end</p>
        </div>
        <div className="about-project__timeline-item-front">
          <p className="about-project__timeline-item-text">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
