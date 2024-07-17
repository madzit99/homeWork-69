import { Form, FormLabel } from "react-bootstrap";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { saveInput } from "../../app/appSlice";
import { fetchShows } from "../../app/appThunks";

const SearchForm = () => {
  const value = useSelector((state: RootState) => state.app.inputValue);
  const shows = useSelector((state: RootState) => state.app.showArray);
  const dispatch: AppDispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(saveInput(value));
    dispatch(fetchShows(value));
    console.log(shows);
  };

  return (
    <div className="container w-50">
      <Form>
        <Form.Group>
          <FormLabel>Введите название сериала</FormLabel>
          <Form.Control
            type="text"
            name="name"
            placeholder="например: The Walking Dead"
            value={value}
            onChange={onChange}
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
