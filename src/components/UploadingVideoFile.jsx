import React,{ useRef,useContext} from 'react'
import {storage} from '../Firebase'
import {UploadContext} from "../context/UploadContext"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {toast} from 'react-toastify'
function UploadingVideoFile({item,SetVideoUpload}) {
  let Status = 0;
  

  const progressBar = useRef(null)
  const StatusPerCent = useRef(null)

  


let finish = false
const VideoRef = ref(storage,`/videos/${item.name}`)
    const uploadTask = uploadBytesResumable(VideoRef, item);
    uploadTask.on('state_changed', 
(snapshot) => {
// Observe state change events such as progress, pause, and resume
// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
Status = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
progressBar.current.style.width = ` ${Status}%`
console.log('Upload is ' + Status + '% done');
switch (snapshot.state) {
case 'paused':
console.log('Upload is paused');
break;
case 'running':
  StatusPerCent.current.innerText = ` ${Status.toFixed(2)}%`
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
  finish = true
  const video = {
    Filereference : `/videos/${item.name}`,
    FileLink : downloadURL
  }
  const videoStringified = JSON.stringify(video)
  localStorage.setItem("videoLink",videoStringified)
// console.log('File available at', downloadURL);
});
}
);
 


  return (
    <div className='flex flex-col mt-2'>
    <div className='flex w-full justify-between'>
   <p className='font-semibold'>{item.name.substring(0,14) + "..."}</p>
   <p  ref={StatusPerCent} className='font-semibold'></p>
   </div>
<div  className='border-2 w-[26rem] h-4'>
  {  finish ? (<div   
className='bg-green-500 h-full w-full'>

</div>) : (<div   ref={progressBar}
className='bg-green-500 h-full'>

</div>) }



</div>
</div>
  )
}

export default UploadingVideoFile