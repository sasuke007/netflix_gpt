const VideoTitle = ({title, overview}) => {
    return (
        <div className="absolute top-2/3">
            <h1 className="font-bold text-3xl pl-[5%]">{title}</h1>
            <p className="pl-[5%]">{overview}</p>
            <div className="flex pl-[5%]">
                <button className="w-1/6 mr-2 text-2xl bg-white rounded-lg">▶️Play</button>
                <button className="w-1/5 ml-2 mr-2 text-2xl bg-gray-400 text-white rounded-lg">ℹ️More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;