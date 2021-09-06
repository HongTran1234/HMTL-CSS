import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addNewHobby } from "../action/hobby"
// import hobbyReducer from '../reducers/hobby';
function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    console.log(hobbyList)
    const dispatch = useDispatch()
    const handleClick = () => {
        const newHobby = {
            id: 123,
            title: "test"

        }
        const action = addNewHobby(newHobby)
        dispatch(action)

    }
    const renderList = () => {
        return hobbyList.map((value, key) => {
            return <li key={key}>{value.title}</li>
        })
    }
    const handleAddHobby =()=>{
        
    }
    return (
        <div>
            {/* <div>Hello</div> */}
            <button onClick={handleClick}>ADD</button>
           <button onClick={handleAddHobby}>Random hobby</button>
            <ul>
                {renderList()}
            </ul>
        </div>
    );
}

export default HomePage;