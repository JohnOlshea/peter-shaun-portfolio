import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experiencesData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
            link={ex.link}
            tag={ex.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}
const experiencesData = [
  {
    date: "2023 — Now",
    title: "Fullstack developer",
    subTitle: "MoIT",
    link: "#",
    tag: "Remote",
  },
  {
    date: "2021 — 2013",
    title: "Backend developer",
    subTitle: "Safi Solutions",
    link: "#",
    tag: "Remote",
  },
  {
    date: "2020 — 2021",
    title: "React js full stack developer",
    subTitle: "Toptal",
    link: "https://www.toptal.com/",
    tag: "Remote",
  },
];