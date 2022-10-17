import { useState } from "react";
import TestimonialCard from "./Testimonial-card";

export default function TestimonialSection() {
    const defaultData = [
        {
            img: "avatar-anisha",
            name: "Anisha Li",
            description: `“Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps
            everyone motivated.”`
        },
        {
            img: "avatar-ali",
            name: "Ali Bravo",
            description: `“We have been able to cancel so many other subscriptions since
            using Manage. There is no more cross-channel confusion and
            everyone is much more focused.”`
        },
        {
            img: "avatar-richard",
            name: "Richard Watts",
            description: `“Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps
            everyone motivated.”`
        },
    ]

    let [persons, setPersons] = useState(() => defaultData);

    const dataPersonElement = persons.map((person, index) => <TestimonialCard 
                                                                key={index} 
                                                                data={person}
                                                            />)
    return (
        <div id="testimonial-section" className="text-center">
            <h1 className="text-3xl font-bold mb-7 md:mb-20">What's Different About Manange?</h1>

            <div id="testimonial-card" className="md:flex md:space-x-4 mb-10">
                { dataPersonElement }
            </div>

            <a href="" className="px-3 py-1 bg-brightRed rounded-full text-brightRedSupLight text-sm hover:bg-brightRedLight">Get Started</a>
        </div>
    )
}