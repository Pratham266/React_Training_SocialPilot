
export const youtubeObjectData = (arrData,ytId)=>{
    console.log("arrData : ",arrData,"YTID : ",ytId);
    const filterArrayData = arrData.filter((ele)=>ele.id === Number.parseInt(ytId))
    return filterArrayData[0];
}   