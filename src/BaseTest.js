// import dependencies
import React from 'react'
// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Fetch from '../fetch'

export default class BaseTest{
    constructor(){
        this.server = setupServer(
            // capture "GET /greeting" requests
            rest.get('/greeting', (req, res, ctx) => {
            // respond using a mocked JSON body
            return res(ctx.json({greeting: 'hello there'}))
            }),
        )
    }

}