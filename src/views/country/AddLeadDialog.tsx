import { SyntheticEvent } from 'react';

// material-ui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AddLeadDialogBody from './AddLeadDialogBody';

// assets
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import { Country } from 'types/country';

type AddLeadProps = {
    open: boolean;
    handleToggleAddDialog: (e: SyntheticEvent) => void;
    row?: Country;
    refetchLeads: () => void;
};

// ==============================|| ADD LEAD ||============================== //

const AddLeadDialog = ({ open, handleToggleAddDialog, row, refetchLeads }: AddLeadProps) => {
    return (
        <Dialog
            open={open}
            onClose={handleToggleAddDialog}
            sx={{
                '& .MuiDialog-paper': {
                    maxWidth: '100%',
                    width: 696,
                    borderRadius: 3,
                    py: 0
                }
            }}
        >
            {open && (
                <>
                    <DialogTitle sx={{ px: 3, py: 2 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            {!row ? (
                                <Typography variant="h4">Add Country</Typography>
                            ) : (
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Typography variant="h4">Edit Country</Typography>
                                    <Typography variant="h4" sx={{ color: 'grey.400' }}>
                                        #{row.name}
                                    </Typography>
                                </Stack>
                            )}
                            <IconButton sx={{ p: 0 }} size="medium" onClick={handleToggleAddDialog}>
                                <CancelTwoToneIcon />
                            </IconButton>
                        </Stack>
                    </DialogTitle>
                    <Divider />
                    <DialogContent sx={{ p: 0 }}>
                        <AddLeadDialogBody {...{ row, refetchLeads }} />
                    </DialogContent>
                </>
            )}
        </Dialog>
    );
};

export default AddLeadDialog;
