import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

interface InputProps {
    name ?: string
    onChange ?: (image: string) => void
}

const Input = styled.input`
    display: none;
`

export default function Upload(props: InputProps) {
    const { onChange, ...other } = props

    function handleChange(event: React.ChangeEvent<HTMLInputElement>):void {
        const fileListObj: FileList | null = event.target.files
        if (fileListObj) {
            const reader = new FileReader()
            reader.readAsDataURL(fileListObj[0])
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    if (onChange) onChange(reader.result)
                }
            }
        }
    }

    return (
        <>
            <Input
                accept="image/*"
                type="file"
                multiple
                id="upload-file"
                onChange={handleChange}
                {...other}
            />
            <label htmlFor="upload-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
            </label>
        </>
    )
}
