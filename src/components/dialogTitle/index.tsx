
import React from 'react'
import {
    WithStyles, Theme, withStyles, Typography, createStyles, IconButton,
} from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'

const styles = (theme: Theme) => createStyles({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
})

export interface DialogTitleProps extends WithStyles<typeof styles> {
    children: React.ReactNode;
    onClose ?: React.ReactEventHandler;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const {
        children, classes, onClose, ...other
    } = props

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

export default DialogTitle
