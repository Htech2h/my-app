import ContactManager from './components/contactManager';


const contacts = ["htech agen","john doe"];
function App(){
  return <div>
    <ContactManager data={contacts} />
  </div>
}

export default App;