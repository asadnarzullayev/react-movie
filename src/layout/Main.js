import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Qidiruv from "../components/Qidiruv";
import "../index.css";
import React from "react";

export default class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=f48e87af&s=panda")
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    searchMovies = (str, type = "all") => {
        this.setState({
            loading: true,
        });
        fetch(
            `http://www.omdbapi.com/?apikey=f48e87af&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    render() {
        return (
            <div className="container content">
                <Qidiruv searchMovies={this.searchMovies} />
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <Movies movies={this.state.movies} />
                )}
            </div>
        );
    }
}
