import * as React from 'react';

// material-ui
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

// project import
import AddLeadDialog from './AddLeadDialog';

// assets
import AddIcon from '@mui/icons-material/AddTwoTone';
import FilterListIcon from '@mui/icons-material/FilterListTwoTone';
import FileCopyIcon from '@mui/icons-material/FileCopyTwoTone';
import PrintIcon from '@mui/icons-material/PrintTwoTone';
import SearchIcon from '@mui/icons-material/Search';

// types
import { KeyedObject } from 'types';
import { Country } from 'types/country';

interface LeadFilterProps {
    rows: Country[];
    setRows: (rows: Country[]) => void;
    refetch: () => void;
}

// ==============================|| LEAD - SEARCH FILTER ||============================== //

const Filter = ({ rows, setRows, refetch }: LeadFilterProps) => {
    const [openAddDialog, setOpenAddDialog] = React.useState(false);
    const [search, setSearch] = React.useState<string>('');

    const handleToggleAddDialog = () => {
        setOpenAddDialog(!openAddDialog);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
        const newString = event?.target.value;
        setSearch(newString || '');

        if (newString) {
            const newRows = rows.filter((row: KeyedObject) => {
                let matches = true;
                const properties = ['_id', 'name'];
                let containsQuery = false;

                properties.forEach((property) => {
                    if (row[property].toString().toLowerCase().includes(newString.toString().toLowerCase())) {
                        containsQuery = true;
                    }
                });
                if (!containsQuery) {
                    matches = false;
                }
                return matches;
            });
            setRows(newRows);
        } else {
            setRows(rows);
        }
    };

    return (
        <>
            <Stack
                sx={{ p: 3 }}
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ sm: 'center' }}
                spacing={2}
            >
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        )
                    }}
                    placeholder="Search Country"
                    size="small"
                    value={search}
                    onChange={handleSearch}
                />
                <Stack direction="row" alignItems="center" justifyContent={{ xs: 'center' }} spacing={1.25}>
                    <Tooltip title="Print">
                        <IconButton size="large">
                            <PrintIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Add New Country">
                        <Fab
                            color="primary"
                            size="small"
                            onClick={handleToggleAddDialog}
                            sx={{ boxShadow: 'none', ml: 1, width: 32, height: 32, minHeight: 32 }}
                        >
                            <AddIcon fontSize="small" />
                        </Fab>
                    </Tooltip>
                </Stack>
            </Stack>
            <AddLeadDialog {...{ open: openAddDialog, handleToggleAddDialog, refetchLeads: refetch }} />
        </>
    );
};

export default Filter;
