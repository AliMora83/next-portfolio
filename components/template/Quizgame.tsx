import React from 'react'

type Props = {}

function Quizgame({}: Props) {
  return (
    <div>

        <div className='m-5 justify-center text-center'>
            <h1 className='mb-5'>Quiz Game</h1>
            <form action="greet" method="post">
                <p>Welcome! Start here</p>
                <br/>
                <input type="text" name="name_input" className='pr-2 text-black'/>
                <br/>
                <input type="submit" value="GREET" id="greet" className='heroButton mt-3'/>
            </form>
        </div>
    </div>
  )
}

export default Quizgame