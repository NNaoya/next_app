import React from 'react'
import {ColorButton} from 'src/components/atoms/Button';

export const Header = () => (
  <header className="header">
    <h1 className="logo">
      GTB
    </h1>
    <div className="account" >
      <ColorButton>ログイン</ColorButton>
      <ColorButton>会員登録</ColorButton>
    </div>
  </header>
)
