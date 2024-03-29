import CTAButton from "../components/core/HomePage/Button";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-1 justify-center items-center text-white text-3xl">
      <div className="mt-4">ERROR 404</div>
      <div className="mt-4">Page Not Found</div>

      <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/"}>
                    <div className="flex items-center gap-3">
                    Back Home 
                    <FaHome />
                    </div>
              </CTAButton>

                <CTAButton active={true} linkto={navigate(-1)}>
                    <div className="flex items-center gap-3">
                    Go Back <IoMdArrowRoundBack />
                    </div>
                </CTAButton>
        </div>
      </div>

  );
}

export default Error;