export default function FeatureList({data, number}) {
    let {title, description} = data;
    
    return (
        <article id="list-container" className="px-6 md:px-5">
            <div id="title-list" className="flex space-x-3 md:space-x-4 bg-brightRedSupLight mb-2 py-0.5 rounded-l-full md:bg-transparent">
                <div className=" px-3 py-1 max-h-7 bg-brightRed rounded-full text-brightRedSupLight text-sm hover:bg-brightRedLight">
                    {`0${(number + 1)}`}
                </div>

                <h3 className="font-bold text-veryDarkBlue">
                    { title }
                </h3>
            </div>

            <div className="text-sm text-darkGrayishBlue mb-6 pl-14">
                { description }
            </div>
        </article>
    )
}