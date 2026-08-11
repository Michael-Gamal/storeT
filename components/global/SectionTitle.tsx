

function SectionTitle({text}:{text: string}) {
    return (
        <div>
            <h2 className="text-3xl capitalize font-bold">{text}</h2>
            <hr className="border-gray-300 my-6" />
        </div>
    )
}

export default SectionTitle;