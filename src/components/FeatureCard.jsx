export default function FeatureCard({title,description}){
    return(
        <div className="bg-white rounded-lg border  shadow-md py-20 px-6 text-center">
            <h1 className="text-xl font-semibold mb-2">{title}</h1>
            <p className="text-gray-500">{description}</p>
        </div>
    )
}