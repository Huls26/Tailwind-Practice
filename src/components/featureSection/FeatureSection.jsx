import { useState } from "react";

import FeatureDescription from "./FeatureDescription";
import FeatureList from "./FeatureList";

export default function FeatureSection() {
    const defaultList = [
        {
            title: "Track company-wide progress",
            description: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again."
        }, 
        {
            title: "Advanced built-in reports",
            description: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        },
        {
            title: "Everything you need in one place",
            description: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution"
        },
    ];

    let [lists, setList] = useState(() => defaultList);

    let listElement = lists.map((list, index) => <FeatureList key={index} number={ index } data={list }/>)

    return (
        <main id="feauture-section" className="md:flex md:space-x-1">
            <section className="basis-full md:pr-9">
                <FeatureDescription />
            </section>

            <section className="basis-full">
                { listElement }
            </section>
        </main>
    )
}