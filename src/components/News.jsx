import React, { useEffect, useState, useContext } from 'react'

import noteContext from "../context/noteContext";
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const context = useContext(noteContext)
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, []);

    // const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" });

    // const [loading, setLoading] = useState(true)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    }, [])

    return (
        <>
            <div className="d-flex align-items-center justify-content-center container-sm p-4 mt-5 mb-3 rounded"
                style={{ width: "84%", height: "150px", backgroundImage: "url('Erie.gif')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            >
                <h1 style={{ fontSize: '50pt', fontFamily: '"Homemade Apple", cursive' }}>Read Our Blog</h1>
            </div>

            <div className="container">

                <div className="row">
                    {notes.map((note) => {
                        const desc = note.description
                        console.log(desc ? desc.substring(0, 100) : "")
                        return <div className="col-md-4" key={note._id}>
                            <NewsItem title={note.title ? note.title : ""} description={note.description ? note.description.substring(0, 150) : "Description Not Available"} urlToImage={"./uploads/default_image.png"} newsUrl={''} author={''} date={''} source={''} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News