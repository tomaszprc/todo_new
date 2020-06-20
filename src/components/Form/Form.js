import React from 'react';

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
            <form className="w-1/2 m-0 m-auto text-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nazwa zadania:
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        onChange={this.handleInput}
                        type="text" 
                        name="task_name"
                        value={this.state.task_name}
                    />
                </label>
                <label>
                    Treść zadania:
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        onChange={this.handleInput}
                        type="text"
                        name="task_description"
                        value={this.state.task_description}
                    />
                </label>
                <input 
                    className="bg-blue-500 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit" 
                    value="Wyślij"
                />
            </form>
        )
    }
}

export default Form;