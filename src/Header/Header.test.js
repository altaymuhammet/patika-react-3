import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'


describe("header test",()=>{
    let header;
    beforeEach(()=>{
        render(<App/>)
        header =screen.getByText("Emoji Search")
    })
    test('header render test', () => {
        expect(header).toBeInTheDocument()
    });
})