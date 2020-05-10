import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

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
                <IconButton component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </>
    )
}
