import React from 'react'

export default function Card1(props) {
  return (
    <div>
      <div class="progress">
            <span class="skill">{props.lang} <i class="val">{props.per}</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
    </div>
  )
}
