import React, { useState, useEffect, useRef } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './PhotoService';


export default function PhotoGalleria() {
//    const [images, setImages] = useState(null)
    const [images, setImages] = useState<{ itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string; }[]>([]);
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item: { itemImageSrc: string | undefined; alt: string | undefined; }) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '500px', height: '300px', display: 'block' }} />;
    }

    const thumbnailTemplate = (item: { thumbnailImageSrc: string | undefined; alt: string | undefined; }) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    
    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '100%' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
        </div>
    )
}
        