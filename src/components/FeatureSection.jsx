import React from "react"
import FeatureCard from "./FeatureCard"

const features = [
    {
        title:"salawu",
        description:"my fore father"
    },

    {
        title:"musakim",
        description:"my father"
    },

    {
        title:"baki",
        description:"my brother"
    },

    {
        title:"jamiu",
        description:"i, me, myself"
    },
]

export default function FeatureSection(){
    return(
        <section className="py-8 bg-gray-100">
            <div className="container mx-auto px-4 ">
                <h2 className="text-3xl font-bold text-center mb-8 ">why bloombreed ?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature,id)=>
                    <FeatureCard
                    key={feature.id}
                    title={feature.title}
                    description={feature.description}
                    />
                    )}
                </div>
            </div>
        </section>
    )
}