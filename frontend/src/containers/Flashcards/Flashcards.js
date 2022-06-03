import React, {Component, useEffect, useState} from "react";
import {Link, Route} from "react-router-dom";
import "./Flashcards.css";

class Flashcards extends Component {

    state = {
        courses: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/test/flashcards',
            {headers: {'x-access-token': localStorage.userToken, 'Content-Type': 'application/json'}})
            .then((response) => response.json())
            .then(booksList => {
                console.log(booksList)
                this.setState({courses: booksList.cards});
            });
    }

    render() {
        return (
            <div>
                <h1>All flashcards</h1>
                <section className="Flashcards">
                    {this.state.courses.map(course => {
                        return (
                            <Link
                                key={course.id}
                                to={{
                                    pathname: this.props.match.url + "/" + course._id,
                                    search: "?title=" + course.title
                                }}>
                                <article className="Flashcard">{course.word}</article>
                            </Link>
                        );
                    })}
                </section>
            </div>
        );
    }
}

export default Flashcards;
