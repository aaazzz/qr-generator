import React, {useState} from 'react';
import UploadService from './service/FileUploadService';
import QRCode from 'qrcode.react';

const Form = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  }

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);
    console.log(currentFile);

    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.id);
        return response;
      })
      .catch(() => {
        setProgress(0);
        setMessage('Could not upload the file!');
        setCurrentFile(undefined);
      })

    setCurrentFile(undefined);
  }

  return (
    <div>
      {currentFile && (
        <div className="progress">
          <div
          className="progress-bar progress-bar-info progress-bar-striped"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: progress + "%" }}
        >
            {progress}%
        </div>
      </div>
      )}

      <label className="btn btn-default">
        <input type="file" onChange={selectFile} />
      </label>

      <button
      className="btn btn-success"
      disabled={!selectedFiles}
      onClick={upload}
    >
        Upload
    </button>

    {message && (
      <div>
        <div>
          <QRCode 
          value={'http://localhost:8888/files/'+message} 
          includeMargin={true}
          fgColor="#444"
        />
          </div>
          <div>
            <code>{message}</code>
          </div>
        </div>
    )}
      </div>
  );
}

export default  Form;

