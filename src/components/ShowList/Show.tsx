import { NavLink } from "react-router-dom";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { fetchInfo } from "../../app/appThunks";

interface Props {
  show: {
    id: number;
    name: string;
  };
}

const Show: React.FC<Props> = ({ show }) => {
  const dispatch: AppDispatch = useDispatch();

  const onClick = () => {
    dispatch(fetchInfo(show.id));
  };
  return (
    <NavLink onClick={onClick} to={`/shows/${show.id}`} className="border">
      <div className="showlist-item">
        <h5>{show.name}</h5>
      </div>
    </NavLink>
  );
};

export default Show;
