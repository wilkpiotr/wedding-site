import React, {Component} from 'react';
import WeddingWishes from '../WeddingWishes/WeddingWishes';
import Form from '../Form/Form';
import wishes from './data'

class Greetings extends Component {
    state = {wishes}


    render() {
        return(<>
            <WeddingWishes greetings={this.state.wishes}/>
            <Form/>
            </>
        )
    }
}

export default Greetings;