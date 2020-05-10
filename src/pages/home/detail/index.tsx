import React, { useState, useEffect } from 'react'
import {
    Dialog, DialogContent, Typography, List, IconButton,
} from '@material-ui/core'
import DialogTitle from 'components/dialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import { Character } from 'stores/characters/types'
import styled from 'styled-components'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import { updateCharacter } from 'stores/characters/actions'
import { useDispatch } from 'react-redux'
import { CharacterContext } from 'helps/context'
import HomeSeries from '../series/index'
import Form from '../form'

type Props = {
    onClose: () => void
    open: boolean
    detail: Character
}

const TypographyCustom = styled(Typography)`
    padding: 20px 0;
`

export default function HomeDetail({ onClose, open, detail }: Props) {
    const dispatch = useDispatch()
    const [character, setCharacter] = useState(detail)
    const [edit, setEdit] = useState(false)
    const [updated, setUpdated] = useState(detail)

    async function handleEdit() {
        if (!edit) setEdit(true)
        else {
            await dispatch(updateCharacter({ character: updated }))
            setEdit(false)
            onClose()
        }
    }

    useEffect(() => {
        if (detail) setCharacter(detail)
    }, [detail, character])

    return (
        <CharacterContext.Provider value={{ character, setUpdated }}>
            <Dialog onClose={onClose} aria-labelledby="Hero details" open={open}>
                <DialogTitle onClose={onClose}>
                    {character.name}
                </DialogTitle>
                <DialogContent dividers>
                    { !edit && (
                        <>
                            <img
                                width="100%"
                                src={character.thumbnail.extension
                                    ? `${character.thumbnail.path}.${character.thumbnail.extension}`
                                    : character.thumbnail.path}
                                alt={character.name}
                            />
                            <TypographyCustom variant="body2">{character.description}</TypographyCustom>
                            {character.series.returned > 0 && (
                                <>
                                    <Typography variant="h5">Series</Typography>
                                    <List>
                                        {character.series.items.map((item) => (
                                            <HomeSeries key={item.name} serie={item} />
                                        ))}
                                    </List>
                                </>
                            )}
                        </>
                    ) }
                    {edit && <Form />}
                </DialogContent>
                <DialogActions>
                    <IconButton onClick={handleEdit} aria-label="edit">
                        { edit ? <SaveIcon /> : <EditIcon /> }
                    </IconButton>
                </DialogActions>
            </Dialog>
        </CharacterContext.Provider>
    )
}
