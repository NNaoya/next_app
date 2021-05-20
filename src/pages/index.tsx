import axios from 'axios'
import { signIn, signOut, useSession } from 'next-auth/client'
import React from "react";
import {Top} from 'src/components/templates/Top'

// @ts-ignore
function Page({ users }) {
  // const [ session ] = useSession()

  // return <>
  //   {!session && <>
  //     Not signed in <br/>
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>}
  //   {session && <>
  //     Signed in as {session.user.email} <br/>
  //     <p>{session.user.name}</p>
  //     <p>{session.user.image}</p>
  //     <p>{session.accessToken}</p>
  //     <p>{session.expires}</p>
  //
  //     <div>
  //       <p>id: {users[0].id}</p>
  //       <p>name: {users[0].name}</p>
  //       <p>age: {users[0].age}</p>
  //     </div>
  //
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>}
  // </>

  return (
    <div>
      <Top />
    </div>
  )
}

Page.getInitialProps = async (ctx: any) => {
  // const res = await axios.get("http://192.168.0.9:8080/users");
  // const data = await res.data;
   return { users: "" }
}

export default Page
