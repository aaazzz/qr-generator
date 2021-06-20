import http from '../helper/http-common';

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append('sampleFile', file);

  return http.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get('/files');
};

const FileUploadService = {
  upload,
  getFiles
}

export default {
  upload,
  getFiles,
};
