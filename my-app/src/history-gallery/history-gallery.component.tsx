import React, {useState} from 'react'
import PhotoAlbum from "react-photo-album";

// import { useEffect } from 'react';
// import { getImageSize} from 'react-image-size';
// import { galleryData } from '../application-data/gallery-data';

import { fullGalleryData } from '../application-data/gallery-data';
import './history-gallery.component.scss'

type Photo = {
  src:string,
  width:number,
  height:number
}

const HistoryGallery = () => {
 
  const [photos, setPhotos] = useState<Photo[]>(fullGalleryData);

// This block extracts all the sizes of the images on the remote hosting by url
// Then the object is stored in photos and console.logged 
// just copy object from 'inspect' / console and paste as fullGaleryData 

//   useEffect(() => {
//     async function fetchPhotos() {
//       const fetchedPhotos = await Promise.all(
//         galleryData.map(async (url) => {
//           const size = await getImageSize(url);
//           return {
//             src: url,
//             width: size.width,
//             height: size.height,
//           };
//         })
//       );
//       setPhotos(fetchedPhotos);
//     }

//     fetchPhotos();
//   }, []);
//  console.log(photos);

  return (
    <div className='history-gallery-wrapper'>
      {photos.length > 0  && <PhotoAlbum layout="rows" photos={photos} />} 
  </div>
  )
}

export default HistoryGallery