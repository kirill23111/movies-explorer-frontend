import React from 'react';

function ProjectDetails() {
  return (
    <div className='about-project'>
      <div className='about-project__container'>
        <div className='about-project__stage'>
          <p className='about-project__stage-title'>
            Дипломный проект включал 5 этапов
          </p>
          <p className='about-project__stage-text'>
            Составление плана, работа над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__stage'>
          <p className='about-project__stage-title'>
            На выполнение диплома ушло 5 недель
          </p>
          <p className='about-project__stage-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__timeline'>
        <p className='about-project__timeline-item'>
          1 неделя
        </p>
        <p className='about-project__timeline-item'>
          4 недели
        </p>
      </div>
      <div className='about-project__timeline'>
        <p className='about-project__timeline-item'>
          Back-end
        </p>
        <p className='about-project__timeline-item '>
          Front-end
        </p>
      </div>
    </div>
  );
}

export default ProjectDetails;