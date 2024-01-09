import React from 'react'
import { useParams } from 'react-router-dom'
import { youtubeObjectData } from '../Js/filterYoutubeData'
import { useSelector } from 'react-redux'

const DetailsCardComponent = () => {
    const {ytId} = useParams()
    const {youtube} = useSelector((state)=>state)
    const data = youtubeObjectData(youtube.data,ytId)
    console.log("YOUTUBEDATA OBJECT : ",data)
  return (
    <>
    {!ytId?<>
        <div class="lg:order-first">
     <div class="flex flex-col">
       <div class="p-8 rounded-3xl bg-[#0DD3CF] ring-1 ring-white/10 shadow-sm">
         
         <span className="text-xl font-bold">PLEASE SELECT FIRST!</span>
       </div>
     </div>
   </div></>:
     <div class="lg:order-first">
     <div class="flex flex-col">
       <div class="p-8 rounded-3xl bg-[#0DD3CF] ring-1 ring-white/10 shadow-sm">
         <div class="flex justify-between">
           <div class="flex items-center gap-3">
             <div class="text-neutral-800 font-semibold">
             <p> Name : {data.name}</p>
             <hr/>
              <p> Username: {data.username}</p>
              <hr/>
              <p> email : {data.email}</p>
              <hr/>

             </div>
           </div>
           <p> 
             <span class="text-lg font-medium text-neutral-800 uppercase lg:text-xl">
               {data.id}
               </span>
           </p>
         </div>
         <p class="mt-8  font-medium text-neutral-800 text-lg">
         Address : {data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}
         </p>
         {/* <div class="flex mt-6">
           <a class="items-center justify-between inline-flex w-full font-medium py-2.5 text-center text-neutral-800 duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black" href="#">
             Get starter <span>→</span>
           </a>
         </div> */}
       </div>
     </div>
   </div>
  }    
    </>
  )
}

export default DetailsCardComponent
