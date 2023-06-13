import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag_one from "./assets/bag_1.png";
import bag_two from "./assets/bag_2.png";
import bag_three from "./assets/bag_3.png";
import bag_four from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";
import Article from "./components/Article";
import Tile from "./components/Tile";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <Button buttonType="button" disabled={false} clickHandler={() => console.log("to the collection")}>to the collection</Button>
            <Button buttonType="button" disabled={false} clickHandler={() => console.log("shop all bags")}>shop all bags</Button>
            <Button buttonType="button" disabled={true} clickHandler={() => console.log("pre-orders")}>pre-orders</Button>
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
            <footer>
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, maiores?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae, impedit ipsa laudantium
                    maiores odio quo recusandae repudiandae sed voluptate!</p>
                </Tile>
                <Tile image={brand} altImage="brand"></Tile>
                <Tile image={story} altImage="story"></Tile>
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam atque autem deleniti iste iure laborum neque nobis praesentium sapiente?</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



