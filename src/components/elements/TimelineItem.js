import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        {props.url ?
          <h1 className="title is-4"><a href={props.url}>{props.title}</a></h1>
          :
          <h1 className="title is-4">{props.title}</h1>
        }
        {props.subtitle &&
          <h1 className="title is-6">{props.subtitle}</h1>
        }
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
