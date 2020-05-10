import React from 'react'
import { SeriesItem } from 'stores/characters/types'
import { ListItem, Divider, Typography } from '@material-ui/core'

export default function HomeSeries({ serie }: { serie: SeriesItem }) {
    return (
        <>
            <Divider />
            <ListItem>
                <Typography variant="body2">{serie.name}</Typography>
            </ListItem>
        </>
    )
}
