import { useEffect, useState } from 'react';

// material-ui
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { Button } from '@mui/material';
import { useAddCountryMutation, useUpdateCountryMutation } from 'services/countryApi';
import { useSnackbar } from 'notistack';
import { Country } from 'types/country';

interface MyFormValues {
    _id?: string;
    name: string;
    image: File | null;
    description: string;
}

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    // image: yup.string().required('Image is required'),
    description: yup.string()
});

interface AddLeadDialogBodyProps {
    row?: Country;
    refetchLeads: () => void;
}

// ==============================|| ADD LEAD BODY ||============================== //

const AddLeadDialogBody = ({ row, refetchLeads }: AddLeadDialogBodyProps) => {
    const { enqueueSnackbar } = useSnackbar();

    const [addCountry] = useAddCountryMutation();
    const [updateCountry] = useUpdateCountryMutation();

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const formik = useFormik<MyFormValues>({
        initialValues: {
            // _id: '',
            name: row ? row?.name : '',
            image: row ? null : (null as File | null),
            description: row ? row?.description : ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('values', values);
            const formData: FormData = new FormData();
            // Append other fields to formData
            formData.append('name', values.name);
            formData.append('description', values.description);
            formData.append('_id', '');

            // Append the image file to formData if available
            if (values.image) {
                formData.append('image', values.image);
            }

            try {
                if (!row) {
                    addCountry(formData)
                        .unwrap()
                        .then((response) => {
                            console.log('Success:', response);
                            enqueueSnackbar('Item created successfully!', { variant: 'success' });
                            refetchLeads();
                        })
                        .catch((err) => {
                            console.error('Error:', err);
                        });
                } else {
                    updateCountry({ id: row._id, formData })
                        .unwrap()
                        .then((response) => {
                            //     console.log('Success:', response);
                            enqueueSnackbar('Item created successfully!', { variant: 'success' });
                            refetchLeads();
                        })
                        .catch((err) => {
                            console.error('Error:', err);
                        });
                }
            } catch (error) {
                alert('error');
                console.error('Error saving user:', error);
            }
        }
    });

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];
        if (file) {
            formik.setFieldValue('image', file);
            // Generate a preview of the image
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (row?.image) {
            setImagePreview(row?.image);
        } else {
            setImagePreview(null);
        }
    }, [row?.image]);
    return (
        <CardContent sx={{ px: 2, py: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack spacing={2}>
                        <form onSubmit={formik.handleSubmit}>
                            {row ? <TextField type="hidden" defaultValue={row && `${row._id}`} style={{ display: 'none' }} /> : ''}
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="image"
                                        name="image"
                                        type="file"
                                        inputProps={{ accept: 'image/*' }}
                                        onChange={handleImageChange}
                                        error={formik.touched.image && Boolean(formik.errors.image)}
                                        helperText={formik.touched.image && formik.errors.image}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {imagePreview && (
                                        <img src={imagePreview} alt="Preview" style={{ marginTop: '10px', maxWidth: '200px' }} />
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="Name"
                                        placeholder="Name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="description"
                                        name="description"
                                        label="Description"
                                        placeholder="Leave description..."
                                        multiline
                                        rows={5}
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        error={formik.touched.description && Boolean(formik.errors.description)}
                                        helperText={formik.touched.description && formik.errors.description}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack direction="row" justifyContent="flex-end">
                                        <AnimateButton>
                                            <Button variant="contained" type="submit">
                                                {!row ? 'Submit' : 'Update'}
                                            </Button>
                                        </AnimateButton>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </form>
                    </Stack>
                </Grid>
            </Grid>
        </CardContent>
    );
};

export default AddLeadDialogBody;
