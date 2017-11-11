//WITH REACT COMPONENTS

class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Toggle Visibility</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                <p>{this.state.visibility && "Hidden text"}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



//WITHOUT REACT COMPONENTS

// let visibility = false;
// let buttonText = 'Show details';

// const toggleVisibility = () => {
//     if (!visibility) {
//         visibility = true;
//         buttonText = 'Hide details';
//         render();
//     } else {
//         visibility = false;
//         buttonText = 'Show details';
//         render();
//     }
    
//     //visibility = !visibility          THIS IS THE EASIEST WAY TO TOGGLE A BOOLEAN
// };


// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{buttonText}</button>
//             {visibility ? <p>Here is the hidden text</p> : undefined}
//         </div>
//     );
    
//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();