import { render } from '@testing-library/react'
import Modal from "../components/Modal"
import React from 'react'

describe('Modal', () => {
    it('Renders', () => {
        render(
            <Modal title='Test' isOpen={true} toggle={() => { }}>
                <p>Test</p>
            </Modal>
        )
    })
})