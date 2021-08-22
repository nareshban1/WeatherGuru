
import { useFormik } from "formik";
import * as Yup from "yup";
import { loadCurrentWeather } from "../../redux/features/Reducers/currentReducer";
import { useSelector, useDispatch } from "react-redux";
import { Search, Searchbar, SearchButton, WeatherContainer } from "../StyledComponents/Styled";
import {HiOutlineSearchCircle} from "react-icons/hi"

export const SearchBar = () => {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
          searchQuery: "",
        },
        validationSchema: Yup.object({
          searchQuery: Yup.string()
            .min(3, "Must be more than 3 letters")
            .required("Required"),
        }),
        onSubmit: (values) => {
          dispatch(loadCurrentWeather(values.searchQuery));
        },
      });

    return(
      <>
        <Searchbar onSubmit={formik.handleSubmit} >
        <Search id="searchQuery"
            color={formik.errors.searchQuery ? "red" : "green"}
            name="searchQuery"
            type="text"
            onChange={formik.handleChange}
            placeholder= {formik.errors.searchQuery ? "Enter a search Query" : "Search by Location"}
            value={formik.values.searchQuery} />
            <SearchButton type="submit"><HiOutlineSearchCircle/></SearchButton>
        </Searchbar>
        </>
    );
};
