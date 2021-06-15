import logo from './logo.svg';
import './App.css';
import Title from './components/title/Title';
import Container from './components/container/Container'



function App() {
  return (
    <div className="App">
        <Title style="title1" content="Hello Redspher !" />
        {/* <Title style="title2" content="Calculator" /> */}
        <Container style="container1" />
        <Title style="title2" content={`Design : Mac | Copyright ${new Date().getFullYear()}`} />
    </div>
  );
}

export default App;
