import React from 'react'
import './Modal.css'

type Props = {
    children: React.ReactNode
    title: string
    isOpen: boolean
    toggle: () => void
}

export default function Modal({ children, title, isOpen, toggle }: Props) {
    return (
        <>
            {isOpen && (
                <div className={'modalOverlay'} onClick={toggle}>
                    <div onClick={(e) => e.stopPropagation()} className={'modalBox'}>
                        <div className={'modalHeader'}>
                            <p className={'title'}>{title}</p>
                            <button type="button" className={'modalCloseButton'} data-dismiss="modal" aria-label="Close" onClick={toggle}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
