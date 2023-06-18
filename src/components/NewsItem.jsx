import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, urlToImage, newsUrl, sourceName, date, author } = this.props;
        return (
            <div className='container'>
                <div className="row">
                    <div className="card my-3 shadow rounded" style={{ width: '24rem' }}>
                        <span className="position-absolute top-0100 translate-middle badge rounded-pill bg-danger fs-6" style={{left: '95%', zIndex: 1}}>
                            {sourceName} 
                        </span>
                        <img src={urlToImage} className="card-img-top mt-3 rounded" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {author ? author : "Anonymous"},<br /> at {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target='_blank' className="btn btn-sm btn-outline-primary">Read More...</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}