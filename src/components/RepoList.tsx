import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
const RepoList: React.FC = () => {
  const { data, error, loading } = useTypedSelector(
    (state) => state.repository
  );
  console.log(data);
  const { searchRepository } = useActions();
  const [term, setTerm] = React.useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepository(term);
  };
  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setTerm(e.target.value)} />
      <button>Find</button>
      {loading && <h1>Loading....</h1>}
      <div>
        {data.map((x) => (
          <div>{x}</div>
        ))}
      </div>
    </form>
  );
};

export default RepoList;
