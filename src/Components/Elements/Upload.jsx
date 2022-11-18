import React, { useState } from 'react'
import {FaCamera} from 'react-icons/fa';
import { storage } from '../../firebase';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Upload() {
    const [file,setFile] = useState("");
    const [progress,setProgress] = useState(0);

    const handleFileChange = (e) => {

        const storage = getStorage();
        const storageRef = ref(storage, 'images/');
        
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

        
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                }, 
                (error) => {
                    // Handle unsuccessful uploads
                }, 
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setFile(downloadURL)
                    });
                }
                );
            }
                return (
    <div>
         <label>
                {progress < 1 ? (
                  <>
                    <input
                      type='file'
                      id='input-file'
                      className='form-control '
                      onChange={handleFileChange}
                    />
                    <FaCamera size={30} /> <br />
                    <progress value={progress} max='100' />
                  </>
                ) : (
                  <img src={file} alt='...' />
                )}
              </label>

    </div>
  )
}

export default Upload