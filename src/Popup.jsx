import React from 'react'
import { BiCopy } from 'react-icons/bi'
import { toast } from 'react-toastify';

//Popup component for displaying a share popup with URL.
const Popup = ({onClose}) => {

    //Handles copying the current URL to the clipboard.
  function copyHandler(){
    navigator.clipboard.writeText(window.location.href);
    toast.success('Url copied!')
  }

  return (
    <div className='popup-container'>
        <div className='popup'>
            <span className="close icon-container" onClick={onClose}> &times;</span>   
            <div className='link'>
                {window.location.href}
                <BiCopy className='icon-container' onClick={copyHandler}/>
            </div>
        </div>
        
    </div>
  )
}

export default Popup