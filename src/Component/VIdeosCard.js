const VIdeosCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    console.log("info-->>", info);
    console.log("snippet-->>", snippet);

    return (
        <>
           <div className="w-64 m-2  shadow-md">
              <div >
                <img className="border rounded-md" src={thumbnails.medium.url}/>
              </div>
              <div className="p-2">
                <p className="text-2md font-semibold truncate ">{title}...</p>
                <h2>{channelTitle}</h2>
                <p>{Math.floor((statistics.viewCount)/1000)}K - View</p>
              </div>
           </div>
        </>
    );
};

export default VIdeosCard;
