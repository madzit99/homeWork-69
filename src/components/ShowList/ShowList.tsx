import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Show from "./Show";

const ShowList = () => {
  const shows = useSelector((state: RootState) => state.app.showArray);

  return (
    <div className="show-list">
      {shows &&
        shows.length > 0 &&
        shows.map((showData) => (
          <Show key={showData.show.id} show={showData.show} />
        ))}
    </div>
  );
};
export default ShowList;
