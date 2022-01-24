
const MyInput=({value,onChange,placeholder})=>{

    return(
        <>
        <input type='text' value={value} onChange={onChange} style={{width: "50%"}}  placeholder={placeholder} className="p-3 m-2 d-flex mx-auto" />
        </>
    )
}

export default MyInput