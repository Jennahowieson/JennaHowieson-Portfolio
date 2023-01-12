import React from "react";
import '../App.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// https://github.com/stephane-monnot/react-vertical-timeline

function Timeline() {
    return (
        <VerticalTimeline lineColor="#EE4E34"
        >
            <VerticalTimelineElement
                className="vertical-timeline-element"
                date="Oct 2022 - Present"
            >
                <h3 className="vertical-timeline-element-title">Software Development Bootcamp</h3>
                <h4 className="vertical-timeline-element-subtitle">CodeClan</h4>
                <p>
                    After 7 years of working in the tech industry in non-engineering roles, I followed my passion for learning new skills and successfully completed the 16 week intensive Professional Software Development course at CodeClan.     </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                date="Jan 2020 - Oct 2022"
            >
                <h3 className="vertical-timeline-element-title">Global Diversity Equity Inclusion Lead</h3>
                <h4 className="vertical-timeline-element-subtitle">Skyscanner</h4>
                <p> Initially a voluntary role from '16-'20, founding the first Employee Resource Group, developing the organisation first inclusion training and advising stakeholders globally up to C-Suite level. This led to securing the organisation's first full time DEI role in Jan 2020.                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                date="2016 - 2020"
            >
                <h3 className="vertical-timeline-element-title">Corporate Travel Management</h3>
                <h4 className="vertical-timeline-element-subtitle">Skyscanner</h4>
                <p>Starting initially as a Corporate Travel Executive, my role and impact quickly evolved to team lead and then a team management role.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                date="2012 - 2016"
            >
                <h3 className="vertical-timeline-element-title">LLB Law Bachelors</h3>
                <h4 className="vertical-timeline-element-subtitle">Univeristy of Edinburgh</h4>
                <p>Final Grade 2:1
                    <br></br>Honours Course Subjects: Child Law, Unjustified Enrichment, Punishment and Society
                    <br></br>Dissertation: Legal Pluralism, Islamic Law, State and Religion, Multiculturalism</p>
            </VerticalTimelineElement>
        </VerticalTimeline>

    )
}
export default Timeline;