const Items = ({storeName, storeType}) =>{
    return(
        <li id="items">
            {/* Title Area */}
            <div id="Title-Area">
                {/* Title for the button will be gotten from the API call that we get */}
                <h1 id="Main-Title">{storeInfo.title}</h1>

                {/* This will hold the distance form the current location to the suggested location with siaplyed info */}
                <div id="subtitle-info">
                    <div className="info">5M</div>
                    <div className="info"> storeInfo.type </div>
                </div>
            </div>

            {/* This area will contain the description and the share features */}
            <div id="description-area">
                {/* This area will contain the Information about the locaiton */}
                <div id="Locaiton-Description">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lacinia blandit. Nulla vestibulum quis dolor efficitur semper. Suspendisse sed cursus nisl. Quisque ipsum ligula, efficitur in porttitor congue, sodales vel velit. Morbi quis mi sit amet augue semper auctor id euismod nisl. Proin finibus orci quis magna pulvinar interdum.</div>
                </div>
                <ul className="btns-container">
                    <li className="btn-item">
                        <a href="#" className="btn-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{fill: "black"}}><circle cx="17" cy="4" r="2"></circle><path d="M15.777 10.969a2.007 2.007 0 0 0 2.148.83l3.316-.829-.483-1.94-3.316.829-1.379-2.067a2.01 2.01 0 0 0-1.272-.854l-3.846-.77a1.998 1.998 0 0 0-2.181 1.067l-1.658 3.316 1.789.895 1.658-3.317 1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196 5.169 1.034 1.816 5.449 1.896-.633-1.815-5.448a2.007 2.007 0 0 0-1.506-1.33l-3.039-.607 1.772-2.954.417.625z" className="fa-primary"></path></svg>
                        </a>
                        <span className="link-text">Directions</span>
                    </li>
                    <li className="btn-item">
                        <a href="#" className="btn-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{fill: "black"}}><path d="M11 15h2V9h3l-4-5-4 5h3z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg>
                        </a>
                        <span className="link-text">Share</span>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default Items