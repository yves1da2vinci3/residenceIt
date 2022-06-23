import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './drop-file-input.css';

import { ImageConfig } from '../config/ImageConfig'; 
import uploadImg from '../assets/cloud-upload-regular-240.png';
import UploadingVideoFile from './UploadingVideoFile';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {toast} from 'react-toastify'
const DropFileInput = props => {
    // les etats pour les liens
    localStorage.setItem("videoLink","")
const [ProgressBar,SetProgressBar] = useState()
    const [IsUploading,SetIsUploading] = useState(false)
    console.log(IsUploading)
    const SaveVideoLink = () => { 
        props.setVideo(JSON.parse(localStorage.getItem("videoLink")))
        toast.success(`  video téléchargé avec succés`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          props. SetVideoUpload(false)
       }
    const UploadMedia = (fileList) => { 
        SetIsUploading(true)
        // tester le type des elements et les telecharger
        
            // s'l s'agit d'une video
            SetProgressBar(<UploadingVideoFile SetVideoUpload={props. SetVideoUpload} key={fileList[0].name} item={fileList[0]} />)
           
        // Ajouter les progressBar
        // recuperer Les liens
        // les mettre dans un contexte

     }

    const closeUploader = () =>{
props. SetVideoUpload(false)
    }
    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        console.log(newFile)
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <div className=' absolute flex flex-col justify-center gap-y-5 items-center h-full w-full bg-gray-100 z-[100]' >
            {/* upload Modal */}
            <h1 className='font-bold tracking-wide text-lg text-center'>video</h1>
            { IsUploading  ? (
              <div className='w-[30rem] bg-white shadow-lg h-auto p-5 rounded-lg'>
                  <h1 className='font-bold tracking-wide text-lg text-center'>Etat d'avancement des telechargements</h1>
                  <hr/>
     {ProgressBar}
  
     
        </div>
            
            )  : ( <div className='w-[30rem] bg-white shadow-lg h-auto p-5 rounded-lg'>
            <div
                ref={wrapperRef}
                className="drop-file-input ml-5"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label flex justify-center flex-col items-center">
                    <img src={uploadImg} alt="" />
                    <p>glisser & deposer les  fichiers ici</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title text-center">
                           pret a uploader
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
            <div className='flex gap-x-4' >
            <div   onClick={() => UploadMedia(fileList)}  className='flex w-96 h-[4.5rem]  self-center mt-8 bg-green-500 cursor-pointer hover:bg-green-600 shadow-lg rounded-lg justify-center items-center gap-x-3'>

        <p className='text-lg tracking-tight font-semibold text-white'>valider</p>
             </div>
             <div  onClick={closeUploader}  className='flex w-96 h-[4.5rem] self-center mt-8 bg-red-500 cursor-pointer hover:bg-red-600 shadow-lg rounded-lg justify-center items-center gap-x-3'>
       
        <p className='text-lg tracking-tight font-semibold text-white'>annuler</p>
             </div>
            </div>
        </div>) }
        {/* DragAndDrop Modal */}
        { IsUploading  ? (<div className='flex flex-col gap-x-2'>
           <div className='flex gap-x-2 items-center'>
               <AiOutlineInfoCircle  size={24} color='red' />
           <p className='text-lg tracking-tight font-semibold text-red-500'> n'appuyez sur ce boutton que lorsque le téléchargement de cette video  soit terminé </p>
           </div>
       <div onClick={SaveVideoLink}   className='flex w-96 h-[4.5rem] self-center mt-8 bg-white cursor-pointer hover:bg-yellow-500 shadow-lg rounded-lg justify-center items-center gap-x-3'>
        
        <p className='text-lg tracking-tight font-semibold'>sauvergarder</p>
             </div> </div>) : ""}
        {/* progressBar */}
       
        </div>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;