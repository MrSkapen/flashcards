import React, { Component } from "react";
import FlipCard from "./FlipCard";

class Flashcard extends Component {

  state = {
    flashcard: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/test'+this.props.location.pathname,
        {headers: {'x-access-token': localStorage.userToken, 'Content-Type': 'application/json'}})
        .then((response) => response.json())
        .then(booksList => {
          console.log(booksList.cards._id)
          this.setState({flashcard: booksList.cards});
        });
  }

  render() {
    return (
        <div>
          <h1>All flashcards</h1>
          <section className="Flashcards">

              <FlipCard
                  frontContent={<React.Fragment>
                                 <h1>{this.state.flashcard.word}</h1>

                  </React.Fragment>}
                  backContent={<React.Fragment>{this.state.flashcard.meaning}</React.Fragment>}
                  style={{ width: "300px", height: "200px" }}
                  frontStyle={{
                      boxShadow: "5px 5px 13px 0 rgba(0,0,0,0.3)"
                  }}
                  backStyle={{
                      boxShadow: "5px 5px 13px 0 rgba(0,0,0,0.3)"
                  }}
              />


          </section>
        </div>
    );
  }
}

export default Flashcard;
