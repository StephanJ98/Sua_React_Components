import React from 'react'
import { render } from '@testing-library/react'

describe('Some checks', () => {
    it('true to be true', () => {
        expect(true).toBe(true)
    })

    it('false to be false', () => {
        expect(false).toBe(false)
    })

    it('1 to be 1', () => {
        expect(1 == 1).toBe(true)
    })

    it('to render p', () => {
        render(
            <p>Test</p>
        )
    })
})