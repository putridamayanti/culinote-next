'use client'

import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Paper,
    Stack,
    styled,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import BlankCard from "components/cards/BlankCard";
import Image from "next/image";
import {Search} from "@mui/icons-material";
import {useFormik} from "formik";
import {useState} from "react";
import ImagePicker from "components/forms/ImagePicker";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Recipe = styled(Box)(() => ({
    '.h3': {
        marginBottom: 3
    }
}));

export default function SearchRecipe() {
    const [preview, setPreview] = useState([]);
    const [loading, setLoading] = useState(false);
    const [generatedRecipe, setGeneratedRecipe] = useState(null);

    const formik = useFormik({
        initialValues: { images: [] },
        onSubmit: values => handleSubmit(values),
    });

    const handleChangeImage = (e) => {
        formik.setFieldValue('images', [...formik.values.images, e.target.files[0]]);
        setPreview([...preview, URL.createObjectURL(e.target.files[0])]);
    };

    const handleSubmit = async (values) => {
        setLoading(true);
        console.log(values.images);
        const formData = new FormData();
        values.images.forEach((file) => {
            formData.append('file', file);
        });

        try {
            const response = await fetch('http://localhost:5000/api/recipe/search', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                if (result?.data?.choices?.length > 0 ) {
                    setGeneratedRecipe(result?.data?.choices[0]?.message?.content);
                }
                alert('File uploaded successfully');
            } else {
                throw new Error('File upload failed');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ paddingTop: 10, paddingBottom: 10 }}>
                <Box sx={{
                    width: { xl: '40%', sm: '90%' }
                }}>
                    <Typography variant="h1" textAlign="center" sx={{ fontSize: 64, lineHeight: 1.2 }}>What’s On Your Refrigerator?</Typography>
                    <Typography variant="h6" textAlign="center" sx={{ fontWeight: 400, marginTop: 4, marginBottom: 4 }}>
                        You can search by food image or your ingredients
                    </Typography>
                    <BlankCard sx={{ padding: 2, marginTop: 4 }}>
                        <Stack direction="row" justifyContent="center" spacing={2}>
                            {preview.map((e, i) => (
                                <Image
                                    key={i}
                                    src={e} alt={`pic-${i+1}`}
                                    width={150}
                                    height={150}
                                    style={{ borderRadius: 10, objectFit: 'cover' }}/>
                            ))}
                            {preview.length <= 3 && (
                                <ImagePicker width={150} height={150} onChange={handleChangeImage}/>
                            )}
                        </Stack>
                    </BlankCard>
                </Box>
                <Stack direction="row" spacing={2} sx={{ marginTop: 4 }}>
                    <Button
                        disabled={loading}
                        startIcon={<Search/>}
                        variant="contained"
                        type="submit">
                        {loading ? <CircularProgress size={20}/> : 'Search Recipe'}
                    </Button>
                </Stack>
                <Box height={40}/>
                {generatedRecipe && (
                    <Card>
                        <CardContent sx={{ padding: 5 }}>
                            <Recipe>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{generatedRecipe}</ReactMarkdown>
                            </Recipe>
                        </CardContent>
                    </Card>
                )}
            </Stack>
        </form>
    )
}