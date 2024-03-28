import GithubLogo from "./GithubLogo"

type Props = {
    title: string,
    date?: string,
    description: string,
    link?: string
}

export default function Card(props: Props) {
    return (
        <div className="w-full md:w-64 lg:w-80 flex flex-col  dark:bg-header_d bg-header shadow-lg items-center justify-between rounded-xl m-2  p-5">
            <div className="mb-2 flex flex-col items-center">
                <h4 className="text-xl mb-2 text-center">{props.title}</h4>
                {props.date ? <b className="text-sm">{props.date}</b> : <></>}

                <p className="mt-3 text-sm ">
                    {props.description}
                </p>
            </div>

            {props.link ?
                <a href={props.link} className="w-[80%] mt-3">
                    <button className="dark:bg-button_d hover:dark:bg-button_hover_d 
                    bg-button hover:bg-button_hover
                    text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center w-full">
                        <div className="w-4 h-4 mr-3">
                            <GithubLogo></GithubLogo>
                        </div>
                        <span>Check Out</span>
                    </button>
                </a>
                : <></>}
        </div>
    )
}

