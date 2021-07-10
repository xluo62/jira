

export const SearchPanels = ({param, setParam, users}) => {

  return <form>
    <input type="text" value={param.name} placeholder='project name'
    onChange={event => setParam({
      ...param,
      name: event.target.value
    })}
    />
    <select onChange={event => setParam({
      ...param,
      personId: event.target.value
    })}>
      <option value=''>负责人 </option>
      {
        users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
      }
    </select>
  </form>;
}