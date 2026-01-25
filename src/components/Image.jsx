export default function Image({DivCls , source , Imgcls , Alter}){
    return(
         <div className={DivCls}>
          <img src={source} className={Imgcls} alt={Alter} />
        </div>
    )
}