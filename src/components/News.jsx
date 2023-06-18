import NewsItem from './NewsItem'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        apiKey: ""
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        apiKey: PropTypes.string
    }

    constructor() {
        super();
        console.log("Constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews() {
        console.log("componentDidMount run");
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
    }

    async componentDidMount() {
        console.log("componentDidMount run");
        this.updateNews()
    }

    handlePrevClick = async () => {
        console.log("Previous");
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
        console.log("Next");
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    render() {
        console.log("render");
        return (
            <div className='container my-4'>
                <h1 className='text-center mt-4'>Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {(!this.state.loading) && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.key}>
                                <NewsItem key={element.key} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""} urlToImage={element.urlToImage ? element.urlToImage : "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"} newsUrl={element.url} sourceName={element.source.name} date={element.publishedAt} author={element.author} />
                            </div>
                        )
                    })}
                </div>
                <div className="container d-flex justify-content-around my-4">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary btn-lg" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-secondary btn-lg" onClick={this.handleNextClick}>Next  &rarr;</button>
                </div>
            </div>
        )
    }
}
