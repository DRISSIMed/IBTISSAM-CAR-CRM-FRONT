export const PhotoService = {
        getData() {
            return [
                {
                    itemImageSrc: '../../Cars/Clio4.png',
                    thumbnailImageSrc: '../../Cars/Clio4.png',
                    alt: 'Description for Image 1',
                    title: 'Title 1'
                },
                {
                    itemImageSrc: '../../Cars/Clio5.png',
                     thumbnailImageSrc: '../../Cars/Clio5.png',
                    alt: 'Description for Image 2',
                    title: 'Title 2'
                },
                {
                    itemImageSrc: '../../Cars/Dacia_Duster.png',
                    thumbnailImageSrc:  '../../Cars/Dacia_Duster.png',
                    alt: 'Description for Image 3',
                    title: 'Title 3'
                },
                {
                    itemImageSrc: '../../Cars/Dacia_Sandero.png',
                    thumbnailImageSrc: '../../Cars/Dacia_Sandero.png',
                    alt: 'Description for Image 4',
                    title: 'Title 4'
                },
                {
                    itemImageSrc: '../../Cars/Golf8.png',
                    thumbnailImageSrc:'../../Cars/Golf8.png',
                    alt: 'Description for Image 5',
                    title: 'Title 5'
                },
                {
                    itemImageSrc: '../../Cars/Golf7.png',
                    thumbnailImageSrc: '../../Cars/Golf7.png',
                    alt: 'Description for Image 6',
                    title: 'Title 6'
                },
                {
                    itemImageSrc: '../../Cars/Range_rover_vuge.png',
                    thumbnailImageSrc: '../../Cars/Range_rover_vuge.png',
                    alt: 'Description for Image 7',
                    title: 'Title 7'
                },
                {
                    itemImageSrc: '../../Cars/Range_sport_2021.png',
                    thumbnailImageSrc: '../../Cars/Range_sport_2022.png',
                    alt: 'Description for Image 8',
                    title: 'Title 8'
                },
                {
                    itemImageSrc: '../../Cars/Tureg.png',
                    thumbnailImageSrc: '../../Cars/Tureg.png',
                    alt: 'Description for Image 9',
                    title: 'Title 9'
                },
                {
                    itemImageSrc: '../../Cars/Range_rover_évoque_2021-2022.png',
                    thumbnailImageSrc: '../../Cars/Range_rover_évoque_2021-2022.png',
                    alt: 'Description for Image 10',
                    title: 'Title 10'
                },
                {
                    itemImageSrc: '../../Cars/Toyota_land_cruisser_TX.png',
                    thumbnailImageSrc: '../../Cars/Toyota_land_cruisser_TX.png',
                    alt: 'Description for Image 11',
                    title: 'Title 11'
                },
                {
                    itemImageSrc: '../../Cars/TRock.png',
                    thumbnailImageSrc: '../../Cars/TRock.png',
                    alt: 'Description for Image 12',
                    title: 'Title 12'
                },
                {
                    itemImageSrc: '../../Cars/Tucson.png',
                    thumbnailImageSrc:'../../Cars/Tucson.png',
                    alt: 'Description for Image 13',
                    title: 'Title 13'
                },
                {
                    itemImageSrc:'../../Cars/AudiQ8.png',
                    thumbnailImageSrc: '../../Cars/AudiQ8.png',
                    alt: 'Description for Image 14',
                    title: 'Title 14'
                },
                {
                    itemImageSrc: '../../Cars/Peugot208.png',
                    thumbnailImageSrc:'../../Cars/Peugot208.png',
                    alt: 'Description for Image 15',
                    title: 'Title 15'
                }
            ];
        },

        getImages() {
            return Promise.resolve(this.getData());
        }
    };

    