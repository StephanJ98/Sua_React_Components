import React from 'react'
import styles from './Modal.css'

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
                <div className={styles.modalOverlay} onClick={toggle}>
                    <div onClick={(e) => e.stopPropagation()} className={styles.modalBox}>
                        <div className={styles.modalHeader}>
                            <p className={styles.title}>{title}</p>
                            <button type="button" className={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={toggle}>
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
