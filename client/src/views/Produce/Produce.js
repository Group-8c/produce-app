import React from 'react'
import ProduceItem from './ProduceItem'
import Search from '../../components/Searchbar'
import data from '../data/data'

class Produce extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          filterText: ''
        }
      }
    
    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }

    render() {
        console.log(this.state.filterText)
        return (
            <div className="App">
                <header className="home-head hero-image">
                    <div className="hero-text">
                        <h1>Produce</h1>
                        <br />
                        <Search
                            filterText={this.state.filterText}
                            filterUpdate={this.filterUpdate.bind(this)}
                        />
                    </div>
                </header>
                <br />
                <ProduceItem
                    data={data}
                    filterText={this.state.filterText}
                />
            </div>
        )
    }
}

export default Produce;