import React from 'react'
import ProduceItem from './ProduceItem'
import Search from '../../components/Searchbar'
import data from '../data/data'
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'

class Produce extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       filterText: ''
    //     }
    // }

    state = {
        filterText: ''
    }
    
    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    }

    render() {
        //console.log(this.state.filterText)
        const { isAdmin } = this.props.auth
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
                <Container>
                    <ProduceItem
                        data={data}
                        isAdmin={isAdmin}
                        filterText={this.state.filterText}
                    />
                </Container>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Produce);