import React from "react";
import TimelineItem from "./TimelineItem";
import TimelineHeader from "./TimelineHeader";
import Resume from "../../resume.json";

function dateFormatter(date) {
  const d = new Date(date);
  if (d instanceof Date && !isNaN(d)) {
    return d.toLocaleString("en-UK", {
      month: "long",
      year: "numeric"
    });
  }
  return "now"
}

/**
 * 
 * @param {*} field can be either work or education
 * @returns 
 */
function Timeline({ field }) {
  const resumeItems = Resume[field];
  const years = new Set();
  resumeItems.forEach((item) => {
    years.add(new Date(item.startDate).getFullYear());
  });
  const yearsList = [...years];
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {
        yearsList.map((year, i) => {
          const content = [];
          content.push(
            <TimelineHeader key={i} year={year} />
          );
          content.push(
            resumeItems
              .filter(item => new Date(item.startDate).getFullYear() === year)
              .map((item, j) => {
                if (field === "education") {
                  return (
                    <TimelineItem
                      key={j}
                      date={`${dateFormatter(item.startDate)} - ${dateFormatter(item.endDate)}`}
                      title={item.institution}
                      url={item.url}
                      subtitle={`${item.studyType} / ${item.area}`}
                      summary={item.courses}
                    />
                  );
                } else {
                  return (
                    <TimelineItem
                      key={j}
                      date={`${dateFormatter(item.startDate)} - ${dateFormatter(item.endDate)}`}
                      title={item.company}
                      subtitle={item.position}
                      url={item.website}
                      summary={item.summary}
                    />
                  );
                }
              })
          );
          return content;
        })}
    </div>
  );
}

export default Timeline;
