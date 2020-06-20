import React from 'react';
import FormInput from './FormInput/FormInput';
import Button from '../Button/Button';

class Form extends React.Component {

    state = {
        task_name: '',
        task_description: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form 
                className="w-1/2 m-0 m-auto text-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={this.props.submit}
            >
                <FormInput 
                    title="Nazwa zadania:"
                    change={this.handleInput}
                    name="task_name" 
                    value={this.state.task_name}
                />
                <FormInput 
                    title="Treść zadania:"
                    change={this.handleInput}
                    name="task_description"
                    value={this.state.task_description}
                />
                <Button 
                    value="Wyślij"
                />
            </form>
        )
    }
}

export default Form;