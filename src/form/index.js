import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }
    state = {
        inputValue: ''
    }
    
    static getDerivedStateFromProps() {
        console.log('getGerivedStateFromProps')
        return {
            inputValue: ''
        }
    }
    changeHandler = (input) => {
        this.setState({ inputValue: input.target.value })
    }
    render() {
        console.log('render')
        return (
            <React.Fragment>
                <input type='text' onChange={this.changeHandler}></input>
                <button type='submit'>Submit</button>
            </React.Fragment>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return nextState !== this.state;
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    componentDidCatch(errorString, errorInfo) {
        console.log('componentDidCatch')
    }
}

export default Form;