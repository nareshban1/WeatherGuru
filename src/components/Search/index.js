
import { useFormik } from "formik";
import * as Yup from "yup";
import { loadCurrentWeather } from "../../redux/features/Reducers/currentReducer";
import { useSelector, useDispatch } from "react-redux";
import { Search, Searchbar, SearchButton, WeatherContainer } from "../StyledComponents/Styled";
import {FaSearchLocation} from "react-icons/fa"

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
            placeholder= {formik.errors.searchQuery ? "Location Required" : "Enter Location"}
            value={formik.values.searchQuery} />
            <SearchButton type="submit"><FaSearchLocation/></SearchButton>
        </Searchbar>
        </>
    );
};
