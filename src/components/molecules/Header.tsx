import React from 'react'
import {ColorButton} from 'src/components/atoms/Button';

export const Header = () => (
  <header className="header">
    <h1 className="logo">
      GTB
    </h1>
    <div className="account" >
      <div>ログイン</div>
      <ColorButton />
    </div>
  </header>

)
