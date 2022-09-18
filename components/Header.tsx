import React from 'react';
import { SocialIcon } from 'react-social-icons';


type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div>
        <SocialIcon url="https://twitter.com/swarts_d" fgColor='gray' bgColor='transparent'/>
        </div>
    </header>
  )
}

export default Header