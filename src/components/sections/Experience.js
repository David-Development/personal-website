import React from "react";

import Timeline from "../elements/Timeline";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h1 className="title">Experience</h1>
        <Timeline field="work" title="company" subtitle="doesnt-exists" summary="summary" />
      </div>
    </section>
  );
}

export default Experience;
