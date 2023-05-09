import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag_one from "./assets/bag_1.png";
import bag_two from "./assets/bag_2.png";
import bag_three from "./assets/bag_3.png";
import bag_four from "./assets/bag_4.png";
import Article from "./components/Article";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <Button buttonType="button">to the collection</Button>
            <Button buttonType="button">shop all bags</Button>
            <Button buttonType="button" disabled={true}>pre-orders</Button>
            <main>
                <Article
                    label="Best seller"
                    image={bag_one}
                    title="The handy bag"
                    price="€400,-"
                />
                <Article
                    label="Best seller"
                    image={bag_two}
                    title="The stylish bag"
                    price="€250,-"
                />
                <Article
                    label="New collection"
                    image={bag_three}
                    title="The simple bag"
                    price="€300,-"
                />
                <Article
                    label="New collection"
                    image={bag_four}
                    title="The trendy bag"
                    price="€150,-"
                />
            </main>
        </>
    );
}

export default App;



