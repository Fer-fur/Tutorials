import SvgImage from "./SvgImage";
import fern from "./assets/images/fern.JPG";

export default function Card() {
  return (
    <div className="w-80 rounded-2xl bg-white p-4 border-black border shadow-custom-bottom-right">
        <div>
            <div className="rounded-xl overflow-hidden">
                <SvgImage />
            </div>
            <div className="my-4">
                <div className=" mb-2">
                    <p className=" font-bold bg-yellow-400 inline-block px-3 py-0.5 rounded-md"> 
                        Learning 
                    </p>
                </div>
                <p>Published 23 Jul 2024</p>
            </div>
            <div >
                <h2 className="font-extrabold mb-3 text-xl">HTML & CSS Foundations</h2>
                <p className=" text-gray-500 mb-3 ">
                    These languages are the backbone of every website, defining structure, content, and presentation.
                </p>
            </div>
            <div className="flex items-center gap-2">
                <img 
                    src={fern} 
                    alt="profile picture" 
                    className="h-10 w-10 rounded-[50%]"
                />
                <p className="font-bold">Syfer</p>
            </div>
        </div>
    </div>
  )
}
