import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from './App'


describe("Emoji kopyalama testi",() =>{
    let emoji;
    beforeEach(()=>{
        render(<App/>)
        emoji = screen.getByText("Blush")
    })
    test("Emoji kopyalama testi",()=>{
        const emojiAttribute = emoji.parentElement.getAttribute("data-clipboard-text");
        userEvent.click(emoji)
        expect(emojiAttribute).toMatch("😊")
    })
})