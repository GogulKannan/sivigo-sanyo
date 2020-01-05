import React from 'react';
import FileUpload from '../../components/FileUpload/FileUpload';

const Upload = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> React File Upload
    </h4>

    <FileUpload />
  </div>
);

export default Upload;
