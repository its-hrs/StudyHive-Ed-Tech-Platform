import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCheckCircle } from "react-icons/fa";

const CheckPassword = ( {password} ) => {
    var numFlag, capFlag, smallFlag, specialFlag, lenFlag;
    password = Array.from(password);

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const capArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const smallArr = [  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const specialChar = [ '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

    password.forEach((el) => {
        if(numbers.includes(el)) numFlag = true;
        if(capArr.includes(el)) capFlag = true;
        if(smallArr.includes(el)) smallFlag = true;
        if(specialChar.includes(el)) specialFlag = true;
        if(password.length >= 8) lenFlag = true;
    })


  return (
    <div className=' w-full flex flex-wrap gap-5 mt-4 text-[16px]'>
        <div className={`flex ${smallFlag ? "text-caribbeangreen-400" : "text-pink-400"} items-center gap-3 font-semibold`}>
            {
                smallFlag ? (<FaRegCheckCircle /> ) : (<RxCrossCircled />)
            }
            <div>one lowercase charater</div>
        </div>

        <div className={`flex ${specialFlag ? "text-caribbeangreen-400" : "text-pink-400"} items-center gap-3 font-semibold`}>
            {
                specialFlag ? (<FaRegCheckCircle /> ) : (<RxCrossCircled />)
            }
            <div>one special charater</div>
        </div>    

        <div className={`flex ${capFlag ? "text-caribbeangreen-400" : "text-pink-400"} items-center gap-3 font-semibold`}>
            {
            capFlag ? (<FaRegCheckCircle /> ) : (<RxCrossCircled />)
            }
            <div>one uppercase charater</div>
        </div>

        <div className={`flex ${lenFlag ? "text-caribbeangreen-400" : "text-pink-400"} items-center gap-3 font-semibold`}> 
            {
                lenFlag ? (<FaRegCheckCircle /> ) : (<RxCrossCircled />)
            }
            <div>8 character minimum</div>
        </div>

        <div className={`flex ${numFlag ? "text-caribbeangreen-400" : "text-pink-400"} items-center gap-3 font-semibold`}>
            {
                numFlag ? (<FaRegCheckCircle /> ) : (<RxCrossCircled />)
            }
            <div>one number</div>
        </div>

    </div>
  )
}

export default CheckPassword
