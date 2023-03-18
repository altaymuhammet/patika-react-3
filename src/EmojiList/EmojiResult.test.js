import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import emojiList from '../emojiList.json'
describe("Emoji liste testi",()=>{
    beforeEach(()=>{
        render(<App/>)
    })
    test("Emoji liste testi",()=>{
        const emoList = emojiList.slice(0, 20);
        emoList.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    })
})