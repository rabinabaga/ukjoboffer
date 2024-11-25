import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// project-imports
import LeadDrawer from './LeadDrawer';
import LeadTable from './LeadTable';
import Filter from './Filter';
import MainCard from 'ui-component/cards/MainCard';

// types
import { Country } from 'types/country';
import { useCountriesQuery } from 'services/countryApi';

// ==============================|| LEAD LIST ||============================== //

const LeadList = () => {
    const dispatch = useDispatch();

    const { data, error, isLoading, isFetching, isSuccess, refetch } = useCountriesQuery();

    const [rows, setRows] = useState<Country[]>([]);

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleToggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    useEffect(() => {
        if (isSuccess && data) {
            setRows(data.data);
        }
    }, [data, isSuccess]);

    if (isLoading || isFetching) {
        return <div>Loading...</div>;
    }

    if (error) {
        // return <div>Error: {error.}</div>;
    }

    return (
        <MainCard content={false}>
            {/* table */}
            <Box sx={{ display: drawerOpen ? 'flex' : 'block' }}>
                <Grid container sx={{ position: 'relative', display: drawerOpen ? 'flex' : 'block' }}>
                    <Grid item xs={12} {...{ sm: drawerOpen && 8 }}>
                        <Filter {...{ handleToggleDrawer, rows: data?.data, setRows, refetch }} />
                        <LeadTable {...{ rows, refetch }} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        {...{ sm: drawerOpen && 4 }}
                        sx={{
                            borderLeft: '1px solid',
                            borderColor: 'divider'
                        }}
                    >
                        <LeadDrawer {...{ open: drawerOpen, handleToggleDrawer }} />
                    </Grid>
                </Grid>
            </Box>
        </MainCard>
    );
};

export default LeadList;
