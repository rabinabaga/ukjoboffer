import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import Grid from '@mui/material/Grid';

// project-imports
import LeadTable from './LeadTable';
import Filter from './Filter';
import MainCard from 'ui-component/cards/MainCard';

// types
import { Country } from 'types/country';
import { useCountriesQuery } from 'services/countryApi';

// ==============================|| LEAD LIST ||============================== //

const LeadList = () => {
    const { data, error, isLoading, isFetching, isSuccess, refetch } = useCountriesQuery();

    const [rows, setRows] = useState<Country[]>([]);

    useEffect(() => {
        if (isSuccess && data) {
            setRows(data.data);
        }
    }, [data, isSuccess]);

    if (isLoading || isFetching) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.toString()}</div>;
    }

    return (
        <MainCard content={false}>
            {/* table */}
            <Grid container sx={{ position: 'relative' }}>
                <Grid item xs={12}>
                    <Filter {...{ rows: data?.data, setRows, refetch }} />
                    <LeadTable {...{ rows, refetch }} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default LeadList;
