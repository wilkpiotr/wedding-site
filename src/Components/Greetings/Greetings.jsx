import React, {Component} from 'react';
import WeddingWishes from '../WeddingWishes/WeddingWishes';
import Form from '../Form/Form';
import wishes from './data'

class Greetings extends Component {
    state = {wishes,
        validated: false}

    handleSubmit = (event)  => {
        const form = event.currentTarget;
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } 
        this.setState((state) => {return {validated: true}})
        if (form.checkValidity() === true) {
            event.preventDefault();
            const newWish = {author: this.inputElement.value,
                date: new Date().toISOString().slice(0, 10),
                text: this.textarea.value}
            const newWishes = [...this.state.wishes, newWish];
            this.inputElement.value = "";
            this.textarea.value = "";
            this.setState((state) => {return {wishes: newWishes, validated: false}});
        }
        
    }


    render() {
        return(<>
            <WeddingWishes greetings={this.state.wishes}/>
            <Form textareaRef={el => (this.textarea = el)} inputRef={el => (this.inputElement = el)} validated={this.state.validated} onSubmit={this.handleSubmit}/>
            </>
        )
    }
}

export default Greetings;