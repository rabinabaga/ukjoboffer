import React from 'react';
import { Card, CardContent, Typography, Avatar, List, ListItem, ListItemText, Box, Divider } from '@mui/material';
import { useParams } from 'react-router';
import { useCountryQuery } from 'services/countryApi';
import Loader from 'ui-component/Loader';

const CountryProfile = () => {
    const { id } = useParams();
    console.log(id);
    const { data, isError, isLoading, isFetching, error } = useCountryQuery(id as string);
    console.log({ data: data });

    if (isFetching || isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <p>{error.toString()}</p>;
    }
    return (
        <Box className="flex flex-col items-start px-8 text-[#333]">
            {/* Country Header */}
            <Typography variant="h4" component="h1" sx={{ py: 2, fontWeight: 'medium', textAlign: 'start' }}>
                Country
            </Typography>

            {/* Profile Card */}
            <Card sx={{ width: '100%', backgroundColor: '#fff', borderRadius: 2, p: 3 }}>
                <CardContent>
                    {/* Country Name */}
                    <Typography variant="h4" component="h1" sx={{ color: 'primary.main', textAlign: 'left', fontWeight: 'medium', mb: 2 }}>
                        {data?.name}
                    </Typography>

                    <Box display="flex flex-col" gap={5}>
                        {/* Profile Section */}
                        <Box display="flex" flexDirection="column" sx={{ mb: 2 }} alignItems="left" flexGrow={1}>
                            {/* Avatar */}
                            <Avatar
                                alt={data?.name}
                                src={data?.image || 'https://via.placeholder.com/150'} // Fallback image
                                sx={{
                                    width: 128,
                                    height: 128,
                                    mb: 2,
                                    objectFit: 'cover'
                                }}
                            />
                            {/* Description */}
                            <Typography sx={{ textAlign: 'left' }}>{data?.description || 'No description available'}</Typography>
                        </Box>

                        {/* States Section */}
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 'medium', mb: 1, color: 'primary.main' }}>
                                States
                            </Typography>
                            <Divider sx={{ mb: 1 }} />
                            <List>
                                {data?.state?.map((item: any, index: number) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemText primary={item.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CountryProfile;
