import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {characters, Swcontext} from "./utils/constants.ts";


function App() {
    const [title, setTitle] = useState(characters.luke.name);
    const changeTitle = (title:string) => {
        setTitle(title);
    }
    return (
        <div>
            <Swcontext.Provider value={
            {title, changeTitle}
            }>
                <Header/>
                <Main/>
                <Footer/>
            </Swcontext.Provider>
        </div>
    )
}

export default App
