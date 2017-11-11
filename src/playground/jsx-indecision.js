console.log('App.js is running');

//JSX - JavaScript XML
const app = {
    title: 'My App',
    subtitle: 'Check me out',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();         //will stop full page refresh
    
    const option = e.target.elements.option.value;      //ACCESS THE FORMSUBMIT EVENT, TARGET THE OPTION ELEMENT AND RETURN THE VALUE
    
    if (option) {
        app.options.push(option);                       //PUSH NEW OPTION TO OPTIONS ARRAY
        e.target.elements.option.value = '';            //CLEAR FORM INPUT
        render();
    }
};

const clearOptions = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);                                          //CREATES POPUP IN BROWSER
    console.log(randomNum);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearOptions}>Remove All</button>
            
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }    
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();