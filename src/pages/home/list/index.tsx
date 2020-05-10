import React, { useContext } from 'react'
import {
    GridList, GridListTile, GridListTileBar, IconButton, Typography, Box,
} from '@material-ui/core'
import { Info as InfoIcon } from '@material-ui/icons'
import { Character } from 'stores/characters/types'
import styled from 'styled-components'
import { CharacterRequestContext } from 'helps/context'

const GridListCustom = styled(GridList)`
    display: flex;
    flex-flow: row wrap;
    transform: translateZ(0);
`

const InfoIcoCustom = styled(InfoIcon)`
    color: rgba(255, 255, 255, 0.80);
`

type OnDetailType = (character: Character) => void

interface Props {
    results: Character[]
    onDetail ?: OnDetailType
}

const HomeList = ({ results, onDetail }: Props) => {
    const characters = useContext(CharacterRequestContext)

    function handleDetail(index:number) {
        if (typeof onDetail === 'function') { onDetail(results[index]) }
    }

    return (
        <>
            {(results.length === 0 && characters.term !== '') && (
                <>
                    <Typography variant="h5" align="center">
                        <Box color="text.secondary" component="span">Desculpe não encontramos o herói por</Box>
                        <Box color="text.primary" component="span">
                            {` ${characters.term}`}
                        </Box>
                        .
                    </Typography>
                </>
            )}
            {results.length > 0 && (
                <GridListCustom cols={3} spacing={1}>
                    {results.map((character, index) => (

                        <GridListTile
                            key={`${character.id}`}
                        >
                            <img
                                width="100%"
                                src={character.thumbnail.extension ? `${character.thumbnail.path}.${character.thumbnail.extension}` : character.thumbnail.path}
                                alt={character.name}
                            />
                            <GridListTileBar
                                title={character.name}
                                actionIcon={(
                                    <IconButton onClick={() => handleDetail(index)} area-label={`Info about ${character.name}`}>
                                        <InfoIcoCustom />
                                    </IconButton>
                                )}
                            />
                        </GridListTile>

                    ))}
                </GridListCustom>
            )}
        </>
    )
}

export default HomeList
