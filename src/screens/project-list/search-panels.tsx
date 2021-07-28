export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}
interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  //setParam: () => void;
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanels = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        placeholder="project name"
        onChange={(event) =>
          setParam({
            ...param,
            name: event.target.value,
          })
        }
      />
      <select
        onChange={(event) =>
          setParam({
            ...param,
            personId: event.target.value,
          })
        }
      >
        <option value="">负责人 </option>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
