import { Input, Select } from "antd";

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
      <Input
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
      <Select
        value={param.personId}
        onChange={(value) =>
          setParam({
            ...param,
            personId: value,
          })
        }
      >
        <Select.Option value="">负责人 </Select.Option>
        {users?.map((user) => (
          <Select.Option key={user.id} value={user.id}>
            {user.name}
          </Select.Option>
        ))}
      </Select>
    </form>
  );
};
