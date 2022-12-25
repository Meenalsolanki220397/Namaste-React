// Will be creating below mentioned nested structure with React
{/* <div>
    <div id="firstChild">
        <h1>Hello I am first Header</h1>
    </div>
    <div id="secondChild">
        <h2>Hello I am second header</h2>
        <p>Somme content......</p>
    </div>
</div> */}

// nested Html

const heading1 = React.createElement('h1', {}, 'Hello I am first Header');

const firstChild = React.createElement('div', {
    id: 'firstChild'
}, [heading1]);

const heading2 = React.createElement('h2', {}, 'Hello I am second header');

const paragraph = React.createElement('p', {}, 'Somme Content.....');

const secondChild = React.createElement('div', {
    id: 'secondChild'
}, [heading2, paragraph]);

const parentDiv = React.createElement('div', {
    id: 'parentDiv'
}, [firstChild, secondChild]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parentDiv);