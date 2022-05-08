import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './drop-file-input.css';

import { ImageConfig } from '../config/ImageConfig'; 
import uploadImg from '../assets/cloud-upload-regular-240.png';

const DropFileInput = props => {

    const closeUploader = () =>{
props. SetImageUpload(false)
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
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <div className=' absolute flex justify-center items-center h-full w-full bg-gray-100 z-[100]' >
    <div className='w-[30rem] bg-white shadow-lg h-auto p-5 rounded-lg'>
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
            <div   className='flex w-96 h-[4.5rem] self-center mt-8 bg-green-500 cursor-pointer hover:bg-green-600 shadow-lg rounded-lg justify-center items-center gap-x-3'>

        <p className='text-lg tracking-tight font-semibold text-white'>valider</p>
             </div>
             <div  onClick={closeUploader}  className='flex w-96 h-[4.5rem] self-center mt-8 bg-red-500 cursor-pointer hover:bg-red-600 shadow-lg rounded-lg justify-center items-center gap-x-3'>
       
        <p className='text-lg tracking-tight font-semibold text-white'>annuler</p>
             </div>
            </div>
        </div>
        </div>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;