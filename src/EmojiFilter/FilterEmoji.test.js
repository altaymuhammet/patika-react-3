import React from 'react'
import App from '../App'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

describe('Emoji Bul', () => { 
    let emojiSearch;
    beforeEach(()=>{
        render(<App/>)
        emojiSearch = screen.getByLabelText("input")
    })
    test("render after filter",() =>{
        const text = screen.getByText("Grinning");
        userEvent.type(emojiSearch,"Grinning")
        expect(text).toBeInTheDocument();
    })

})