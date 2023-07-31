const VIdeosCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    console.log("info-->>", info);
    console.log("snippet-->>", snippet);

    return (
        <>
           <div className="w-64 m-2 p-1 shadow-md">
              <div>
                <img src={thumbnails.medium.url}/>
              </div>
              <div>
                <h1 className="text-2md font-semibold">{title}</h1>
                <h2>{channelTitle}</h2>
                <p>{Math.floor((statistics.viewCount)/1000)}K - View</p>
              </div>
           </div>
        </>
    );
};

export default VIdeosCard;
