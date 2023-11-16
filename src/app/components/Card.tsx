type Props = {
    title: string,
    date: string,
    description: string;
}



export default function Card(props: Props) {
    return (
        <div className="min-h-64 w-full md:w-64 lg:w-80 flex flex-col  dark:bg-header_d bg-header shadow-lg  rounded-xl m-2  p-6">
            <div className="mb-2">
                <h4 className="text-xl">{props.title}</h4>
                <b className="text-sm">{props.date}</b>
            </div>

            <p className="text-sm">
                {props.description}
            </p>
        </div>
    )
}

