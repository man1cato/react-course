import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));                           
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({
           selectedOption: undefined 
        }));
    }
    componentDidMount() {                                                       //NATIVE "LIFECYCLE" METHOD THAT TRIGGERS WHEN THE APP IS MOUNTED
        try {
            console.log('componentDidMount!');
            const json = localStorage.getItem('options');                           //Retrieve the options from local storage as JSON 
            const options = JSON.parse(json);                                       //convert JSON back to javascript
            if (options) {
                this.setState(() => ({options}) );                                      //Update options array based on local storage
            }
        } catch (e) {
            //Do nothing at all
        }
        
    }
    componentDidUpdate(prevProps, prevState) {                                  //NATIVE "LIFECYCLE" METHOD THAT TRIGGERS WHENEVER PAGE IS UPDATED
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);                    
            localStorage.setItem('options', json);                              //Save the options array into local storage (must be in JSON format)                      
            console.log('saving data');
        }
    }
    componentWillUnmount() {                                                    //NATIVE "LIFECYCLE" METHOD THAT TRIGGERS WHEN NAVIGATING AWAY FROM PAGE
        console.log('componentWillUnmount!');
    }
    
    render() {
        const subtitle = 'Put your life in the hands of a computer.';
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

 