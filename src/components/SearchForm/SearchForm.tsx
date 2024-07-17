import { Form, FormLabel } from "react-bootstrap";

const SearchForm = () => {
  return (
    <div className="container w-50">
      <Form>
        <Form.Group>
          <FormLabel>Введите название сериала</FormLabel>
          <Form.Control
            type="text"
            name="name"
            placeholder="например: The Walking Dead"
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
