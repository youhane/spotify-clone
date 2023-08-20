"use client"

import React from 'react'
import { Toaster } from 'react-hot-toast'

function ToasterProvider() {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: '#333',
                    color: '#fff'
                }
            }}
        />
    )
}

export default ToasterProvider