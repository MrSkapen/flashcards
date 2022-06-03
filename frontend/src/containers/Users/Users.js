import React, {Component} from 'react';

class Users extends Component {

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.meaning.value);


        fetch(' http://localhost:8080/api/test/add_flashcard', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': localStorage.userToken
            },
        body: JSON.stringify({word: e.target.word.value, meaning: e.target.meaning.value, category: e.target.category.value, urladdress: e.target.urladdress.value})
        }).then(r => r.json())
            .then(data => alert(data.message));
    };

    render() {
        return (
            <div>
                <h1>The teacher Page</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="word">Word</label>
                        <input type="word" name="word" placeholder="hello"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="meaning">Meaning</label>
                        <input type="meaning" name="meaning" placeholder="czesc"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="category">Category</label>
                        <input type="category" name="category" placeholder="przywitania"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="urladdress">URL: </label>
                        <input type="urladdress" name="urladdress" placeholder="https://obrazek.pl/.."/>
                    </div>
                    <button className="primary">Send</button>
                </form>
            </div>
        );
    }
}

export default Users;
