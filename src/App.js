import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import UserForm from './components/UserForm';
function App() {
  return (
    <ChakraProvider>
        <div className="App">
            <UserForm/>
        </div>
    </ChakraProvider>
  );
}

export default App;
