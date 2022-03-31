import {useState, useEffect} from "react";
import Characters from "./components/Characters"
import Navi from "./components/Navi";
import CharacterStatus from "./components/CharacterStatus";
import {motion} from "framer-motion";
import './index.css'
import './reset.css'

function App() {

    const [characters, setCharacters] = useState([])
    const [filterCharacter, setFilterCharacter] = useState('')
    const [checked, setChecked] = useState("")


    //Gets characters from API

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${filterCharacter}&status=${checked}&page=1`)
            .then(data => data.json())
            .then(data => {data?.results?.length ? setCharacters(data.results): setCharacters([])
            });
    }, [checked,filterCharacter]);

    //Infinite Scroll

    useEffect(() => {

        let pages = 2

        const handleScroll = (event,) => {
            // console.log('top: ' + e.target.documentElement.scrollTop)
            // console.log('win: ' + window.innerHeight)
            // console.log('height: ' + e.target.documentElement.scrollHeight)
            if (window.innerHeight + event.target.documentElement.scrollTop + 1 >= event.target.documentElement.scrollHeight){
                fetch(`https://rickandmortyapi.com/api/character?page=${pages++}&name=${filterCharacter}&status=${checked}`)
                    .then(data => data.json())
                    .then(data => {
                        const newCharacter = []
                        data.results.forEach(el => newCharacter.push(el))
                        setCharacters(oldCharacter => [...oldCharacter,...newCharacter])
                    });
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    //Searchbar functionality

    const handleFilter = (event) => {
        setFilterCharacter(event.target.value)
        const searchName = event.target.value
        console.log(filterCharacter)
        const newFilter = characters.filter((value => {
            return value.name.toLowerCase().includes(searchName.toLowerCase())
        }))
        setCharacters(newFilter)

    }


    return (
        <div  className='container max-w-5xl'>
            <Navi/>
            <CharacterStatus checked={checked} setChecked={setChecked} placeholder="Search..." handleFilter={handleFilter}/>
            <div className="container">
                <motion.div className='flex justify-center flex-wrap bg-primary' >
                    {characters.length !== 0 && characters.map((value, i) => {
                    return <Characters key={`${value.id}-${i}`} character={value}/>
                })}</motion.div>
            </div>
        </div>

    );
}

export default App;
