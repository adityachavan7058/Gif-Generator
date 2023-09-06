
 import Random from "./components/Random";
 import Tag from "./components/Tag";
export default function App() {
  return (

   <div className="w-full h-screen flex flex-col background">

       <div className="w-90 text-center mt-[30px] text-3xl font-bold ml-[20px] mr-[20px] ">

       <h1 className="rounded-lg bg-white p-2">RANDOM GIFS</h1>
       </div>
       
       <div className="flex flex-col items-center mt-[30px]">
        <Random/>
        <Tag/>
       </div>
   </div>
  );
}
