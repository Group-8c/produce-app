import React, { Component } from 'react';

//Static data file
import featItems from './featItems';

//Component that defines individual items
import ItemCard from './ItemCard';


export class Carousel extends Component {

    state = {
        featItems: featItems,
        featItem: featItems[0]
    }


    /*
        Functions that keeps track of the current index in list
        of featured items.
    */
    nextCard = () => {
        const newIndex = this.state.featItem.index+1;
        this.setState({
            featItem: this.state.featItems[newIndex]
        })
    }

    prevCard = () => {
        const newIndex = this.state.featItem.index-1;
        this.setState({
            featItem: this.state.featItems[newIndex]
        })
    }

    render() {
        const {featItems, featItem } = this.state;
        return (
            <div>
                <button
                    onClick={() => this.prevCard()}
                    disabled={featItem.index === 0}
                >Prev</button>
                <button
                    onClick={() => this.nextCard()}
                    disabled={featItem.index === featItems.length-1}
                >Next</button>
                <div>
                    <ItemCard featItem={featItem} />
                </div>
            </div>
        )
    }
}

export default Carousel
