import {SearchPanels} from "./search-panels";
import {List} from './list';
import { useEffect, useState } from "react";
import qs from 'qs';
import {cleanObject} from "../../utils";

const apiURL = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  /**
   * state
   * *******************
   */
  const [param, setParam] = useState({
    name: "",
    personId: ''
  })

  const [list, setList] = useState([]);

  const [users, setUsers] = useState([]);

  //********************
  const debouncedParam = useDebounce(param, 2000);

  /**
   * useEffectHook
   */
  useEffect(() => {
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(responseJSON => {
      setList(responseJSON);
    })
  },[debouncedParam]);

  useMount(() => {
    fetch(`${apiURL}/users`).then(response => {
      if (response.ok) {
        return response.json();
      }
    }).then(responseJSON => {
      setUsers(responseJSON);
    })
  });
//********************
  return <div>
    <SearchPanels param={param} setParam={setParam} users={users}/>
    <List list={list} users={users}/>
  </div>

}

/**
 * custom hook
 */

export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}

export const useDebounce = (param, delay) => {
  const [debouncedParam, setDebouncedParam] = useState(param);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedParam(param);
    }, delay);
    return () => {
      clearTimeout(timer);
    }
  }, [param, delay]);
  return debouncedParam;
}