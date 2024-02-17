import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ProductSlider = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products').then(response => setData(response.data));
    }, [])

    return (
        <Container>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
            >
                <Grid container>
                    {
                        data && data.map((e) => {
                            return (
                                <SwiperSlide>
                                    <Grid item lg={3}>
                                        <ProductCard image={e.images} title={e.title} description={e.description} price={e.price} />
                                    </Grid>
                                // </SwiperSlide>

                            )
                        })
                    }
                </Grid>
            </Swiper>
        </Container>
    );
};

export default ProductSlider;