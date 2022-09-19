import React from 'react'

interface ModalWindowProps {
    isOpen: boolean
    onCancel: () => void
    children: React.ReactElement
}

const ModalWindow = ({ isOpen, onCancel, children }: ModalWindowProps) => {
    return <div onClick={onCancel}>{children}</div>
}

export default ModalWindow
