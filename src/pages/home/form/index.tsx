import React, { useState, useEffect, useContext } from 'react'
import { TextField, Box } from '@material-ui/core'
import styled from 'styled-components'
import Upload from 'components/upload'
import useDebounce from 'helps/useDebounce'
import { CharacterContext } from 'helps/context'

const Image = styled.div`
    position: relative;
`

const BoxUpload = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

export default function Form() {
    const { character, setUpdated } = useContext(CharacterContext)

    const [image, setImage] = useState('')
    const [name, setName] = useState(character.name || '')
    const [description, setDescription] = useState(character.description || '')
    const [thumbnail, setThumbnail] = useState(character.thumbnail)

    const debounceName = useDebounce(name, 500)
    const debounceDescription = useDebounce(description, 500)

    function handleImage(url: string) {
        if (url) {
            const thumb = {
                path: url,
                extension: '',
            }
            setImage(url)
            setThumbnail(thumb)
        }
    }

    useEffect(() => {
        if (character) {
            const url = character.thumbnail.extension
                ? `${character.thumbnail.path}.${character.thumbnail.extension}`
                : character.thumbnail.path

            setImage(url)
        }
    }, [character, setImage])

    useEffect(() => {
        if (debounceDescription || debounceName || thumbnail) {
            if (setUpdated) {
                setUpdated({
                    ...character, name: debounceName, description: debounceDescription, thumbnail,
                })
            }
        }
    }, [setUpdated, character, debounceName, debounceDescription, thumbnail])

    return (
        <form action="">
            <Image>
                <img src={image} alt={character.name} />
                <BoxUpload><Upload onChange={handleImage} /></BoxUpload>
            </Image>
            <Box m={2}>
                <TextField
                    name="name"
                    id="name"
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    fullWidth
                />

            </Box>
            <Box m={2}>
                <TextField
                    name="description"
                    id="description"
                    label="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    fullWidth
                />
            </Box>
        </form>
    )
}
