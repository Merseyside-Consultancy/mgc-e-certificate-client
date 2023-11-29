import { useLoaderData } from "react-router-dom";
import { BsShieldCheck } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ClipLoader } from "react-spinners";

const SingleCertificate = () => {
  const {loading} = useContext(AuthContext)
  const data = useLoaderData();
  const { nameText, certificateImage } = data;
  if(loading){
    return <div className='text-center mt-52'>
    <ClipLoader
    loading={loading}
    size={50}/>
    </div>
}
  return (
    <div>
      <h2 className="text-3xl font-serif font-bold my-16 text-center w-1/2 mx-auto bg-green-200 p-2 rounded-md backdrop-blur-md backdrop-opacity-60">
        This is a verified certificate of
        <span className="text-green-700 "> {nameText} <BsShieldCheck className="inline-block mb-2 text-green-500" /></span>
      </h2>
      <img className="w-1/4 mb-20 mx-auto" src={certificateImage} alt="" />
    </div>
  );
};

export default SingleCertificate;
