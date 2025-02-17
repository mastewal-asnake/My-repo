

function App() {

  const names =   [   {firstName: 'Mastewal', lastName: 'Asnake'}, 
    {firstName: 'Rediet', lastName: 'Sleshi'},
    {firstName: 'Ruth', lastName: 'Akalu'},
    {firstName: 'Birhanu', lastName: 'Matebe'},
    {firstName: 'Hermela', lastName: 'Ejigu'},
    {firstName: 'Alemayehu', lastName: 'Tesfaye'},
    {firstName: 'Mikiyas', lastName: 'Habtamu'},
    {firstName: 'Birhan', lastName: 'Aklilu'}
  ];
  const listItems = names.map(fruit => <li>{fruit.firstName} &nbsp;{fruit.lastName}</li>);
  
  return (
    <ul className = "lists">{listItems}</ul>
  )
}

export default App
