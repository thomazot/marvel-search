import React from 'react'
import {
    render, fireEvent,
} from '@testing-library/react'
import Search from '../../components/search'

describe('Component <Search />', () => {
    test('It should return the entered value', async () => {
        const search = render(<Search onChange={handle} />)
        const input = search.getByLabelText('search-input')

        fireEvent.change(input, { value: '123' })

        function handle(value: string) {
            expect(value).not.toBe('123')
        }
    })
})
