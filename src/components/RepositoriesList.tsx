import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchRepositories } from "../redux/repositories/repositoriesAction";
import { RootState } from "../redux/root-reducer";

const RepositoriesList = (): JSX.Element => {
  const [term, setTerm] = useState("");

  const { loading, data, error } = useSelector((state: RootState) => state.repositories);

  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(searchRepositories(term) as any);

    setTerm("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
    </div>
  );
};
export default RepositoriesList;
