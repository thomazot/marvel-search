import React from 'react'
import {
    render,
} from '@testing-library/react'
import DialogTitle from '../../components/dialogTitle'

describe('Component <DialogTitle />', () => {
    test('should home', async () => {
        const { getByText } = render(<DialogTitle>Testing</DialogTitle>)
        getByText('Testing')
    })
})
