import axios from 'axios'

// @ts-ignore
function Page({ users }) {
  return (
    <div>
      <p>id: {users[0].id}</p>
      <p>name: {users[0].name}</p>
      <p>age: {users[0].age}</p>
    </div>
  )
}

Page.getInitialProps = async (ctx: any) => {
  const res = await axios.get("http://192.168.0.18:8080/users");
  const data = await res.data;
  return { users: data }
}

export default Page
