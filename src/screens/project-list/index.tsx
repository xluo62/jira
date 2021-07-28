import { SearchPanels } from "./search-panels";
import { List } from "./list";
import { useEffect, useState } from "react";
import qs from "qs";
import { cleanObject, useDebounce, useMount } from "../../utils";
import { useHttp } from "../../utils/http";

const apiURL = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  /**
   * state
   * *******************
   */

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);

  const [users, setUsers] = useState([]);

  const client = useHttp();
  //********************
  const debouncedParam = useDebounce(param, 2000);

  /**
   * useEffectHook
   */
  useEffect(() => {
    client('projects', {data: cleanObject(debouncedParam)}).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client('users').then(setUsers);
  });
  //********************
  return (
    <div>
      <SearchPanels param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
