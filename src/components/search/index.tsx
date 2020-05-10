import React, { useEffect, useState } from 'react'
import { InputBase } from '@material-ui/core'
import Styled from 'styled-components'
import useDebounce from '../../helps/useDebounce'

const Form = Styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`

const InputBaseCustom = Styled(InputBase)`
    flex: 1;
    min-width: 0;
    
    input {
        font-size: 24px;
        text-align: center;
        
        &:focus::placeholder {
            color: transparent;
        }
    }
`
type Props = {
    onChange ?: (value: string) => void
    isSearch ?: boolean
}
const Search = ({ onChange, isSearch = false }: Props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const debounceSearchTerm = useDebounce(searchTerm, 500)

    useEffect(
        () => {
            if (debounceSearchTerm && debounceSearchTerm.length > 1) {
                if (onChange) onChange(debounceSearchTerm)
            }
        },
        [debounceSearchTerm, onChange],
    )

    return (
        <Form>
            <InputBaseCustom
                aria-label="search-input"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Qual seu heroi?"
            />
        </Form>
    )
}

export default Search
