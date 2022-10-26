import React, { useState } from 'react';

export const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div>
      {selectedImage && (
        <div>
          <img alt="not fount" width={'250px'} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: Strict null checks
          const image = event.target.files[0];
          setSelectedImage(image);
        }}
      />
    </div>
  );
};
