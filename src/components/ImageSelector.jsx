import React, { useState } from 'react';
import bgImage from '../assets/webp/bg-img.webp'

const ImageSelector = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePath, setImagePath] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setImagePath(file.name);
        }
    };
    const BgImg = {
        backgroundImage: `url(${bgImage})`,
    }
    return (
        <div className='min-h-screen flex items-center bg-center bg-no-repeat bg-cover' style={BgImg}>
            <div className="container mx-auto px-5">
                <div className='p-4 shadow-image-box rounded-lg max-w-[600px] h-[345px] w-full mx-auto bg-gradient'>
                    <label className="cursor-pointer border border-black rounded-lg flex justify-center items-center h-full">
                        {selectedImage ? (
                            <img src={selectedImage} alt="Selected" className="w-full h-full object-cover rounded-lg" />
                        ) : (
                            <span className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">Select your image</span>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                </div>
                <p className="mt-3 sm:mt-8 text-black text-center text-base sm:text-2xl drop-shadow-md">Image Path: {imagePath}</p>
            </div>
        </div>
    );
};

export default ImageSelector;