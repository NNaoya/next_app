import axios from 'axios'
import { signIn, signOut, useSession } from 'next-auth/client'
import React, {useEffect} from "react";
import {Top} from 'src/components/templates/Top'

// @ts-ignore
function Page({ columns }) {

  return (
    <div>
      { columns.length > 0 &&
        <Top columns={columns} />
      }
    </div>
  )
}

Page.getInitialProps = async () => {
  const res = await axios.get('https://note.com/api/v2/hashtags/%E8%B2%B7%E3%81%A3%E3%81%A6%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE');
  return { columns: res.data.data.relatedContests }
}

export default Page
