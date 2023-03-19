import {Form} from 'react-router-dom'
import {useState} from 'react'
import {URL, appID, appKey} from '../keys'

async function searchResult(event){
    const response = await fetch(URL+`search/instant?query=${event.target.value}`, {
        method: "get",
        headers: {
            'x-app-id' : appID,
            'x-app-key': appKey
        }
    })
    const data = await response.json()
    return data
    
}

function Create(props){
    const [nameState, setNameState] = useState('') 
    const [carbState, setCarbState] = useState(0)
    const [dateState, setDateState] = useState('')
    const [resultsState, setResultsState] = useState([])

    async function nameChangeHandler(event){
        //confirm we're not breaking our endpoint w null value
        setNameState(event.target.value)
        if (event.target.value.length >= 1){
            const data = await searchResult(event)
            console.log(data.common)
            setResultsState(data.common)
        }else{
            setResultsState([])
        }

    }
    function dateChangeHandler(event){
        setDateState(event.target.value)
    }
    function carbChangeHandler(event){
        setCarbState(event.target.value)
    }




    return (
    <div>
        <h1> Create ! </h1>
        <Form>
            <input type='text' name='name' placeholder='name' 
            value={nameState}
            onChange={nameChangeHandler}
            ></input>
            <input type='number' name='carbs' placeholder='carbs'
            value={carbState}
            onChange={carbChangeHandler}
            ></input>
            <input type='date' name='date' placeholder='date'
            value={dateState}
            onChange={dateChangeHandler}    
            ></input>
            <input type='submit'/>
        </Form>

        <div>
            <h2>Search results:</h2>
            {resultsState.map((element) => {
                return <h3 key = {element.food_name}>{element.food_name}</h3>
            })}
        </div>

    </div>
    )
}

export default Create