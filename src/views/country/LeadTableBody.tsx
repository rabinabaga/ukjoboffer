import { useState } from 'react';

// mui
import { alpha, useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// third-party
import { Chance } from 'chance';

// project imports
import AddLeadDialog from './AddLeadDialog';
import NewMessage from './NewMessage';
import useConfig from 'hooks/useConfig';

// assets
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import EditTwoTone from '@mui/icons-material/EditTwoTone';
import { useSnackbar } from 'notistack';

// types
import { Country } from 'types/country';
import { useDeleteCountryMutation } from 'services/countryApi';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { limitDescription } from 'utils/limitString';

interface Props {
    row: Country;
    selected: string[];
    handleClick: (name: string) => void;
    refetchLeads: () => void;
    countNumber: number;
}

// ==============================|| LEAD LIST - TABLE BODY ||============================== //

const LeadTableBody = ({ row, selected, handleClick, refetchLeads, countNumber }: Props) => {
    const { enqueueSnackbar } = useSnackbar();

    const [deleteCountry, { isLoading, isError }] = useDeleteCountryMutation();

    const { mode, borderRadius } = useConfig();

    const [openMsgDialog, setOpenMsgDialog] = useState(false);
    const [openAddDialog, setOpenAddDialog] = useState(false);

    const isSelected = (name: string) => selected.indexOf(name) !== -1;
    const isItemSelected = isSelected(row._id);

    const handleToggleAddDialog = () => {
        setOpenAddDialog(!openAddDialog);
    };
    // open dialog to edit review
    const handleToggleMsgDialog = () => {
        setOpenMsgDialog(!openMsgDialog);
    };

    const [open, setOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<string | null>(null);

    const handleClickOpen = (item: any) => {
        setItemToDelete(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setItemToDelete(null);
    };

    const handleDelete = async () => {
        if (itemToDelete) {
            const result = await deleteCountry(`${itemToDelete}`).unwrap();
            enqueueSnackbar('Item deleted successfully!', { variant: 'success' });

            refetchLeads();
            handleClose();
        }
    };

    return (
        <>
            <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} selected={isItemSelected}>
                <TableCell sx={{ pl: 3 }} onClick={() => handleClick(row._id)}>
                    <Checkbox color="primary" checked={isItemSelected} />
                </TableCell>
                <TableCell sx={{ cursor: 'pointer' }}>{countNumber + 1}</TableCell>
                <TableCell>
                    <Avatar alt="User 1" src={`${row.image}`} />
                </TableCell>

                <TableCell>
                    <Typography variant="h5">{row.name}</Typography>
                </TableCell>

                <TableCell sx={{ cursor: 'pointer' }}>
                    <Typography variant="h5">{limitDescription(row?.description, 30)}</Typography>
                </TableCell>
                <TableCell sx={{ pr: 3 }}>
                    <Stack direction="row" spacing={1.25} justifyContent="center">
                        <IconButton
                            color="primary"
                            size="small"
                            onClick={handleToggleAddDialog}
                            sx={{
                                borderRadius: `${borderRadius}px`,
                                p: 1.25,
                                border: '1px solid',
                                borderColor: 'divider'
                            }}
                        >
                            <EditTwoTone />
                        </IconButton>
                        <IconButton
                            color="error"
                            size="small"
                            onClick={() => handleClickOpen(row._id)}
                            sx={{
                                borderRadius: `${borderRadius}px`,
                                p: 1.25,
                                border: '1px solid',
                                borderColor: 'divider'
                            }}
                        >
                            <DeleteOutlineOutlined />
                        </IconButton>
                    </Stack>
                </TableCell>
            </TableRow>

            <AddLeadDialog {...{ open: openAddDialog, handleToggleAddDialog, row, refetchLeads }} />
            <NewMessage {...{ open: openMsgDialog, handleToggleMsgDialog }} />

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{'Confirm Deletion'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to delete this item?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="secondary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default LeadTableBody;
