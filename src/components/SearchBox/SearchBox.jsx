// import { Formik, Form, Field } from 'formik';
// import searchContact from '../../redux/contactsSlice/contactsSlice';
import { searchDishes, selectSearch } from '../../redux/MainMenuSlice/SearchMenuSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'

const SearchBox = () => {

    const dispatch = useDispatch();

    const value = useSelector( selectSearch );

    const onChange = (newvalue) => {
        dispatch(searchDishes(newvalue))
    }
    
    return (
        <>
        <div>
            <p>Search dishes</p>
            <input type="text" value={value} className={css.searchBox} onChange={event => onChange(event.target.value)}/>
        </div>
        
    </>
  )
}

export default SearchBox