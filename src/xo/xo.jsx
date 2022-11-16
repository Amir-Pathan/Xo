import React,{useState} from 'react'
import { formGroupClasses, Grid } from '@mui/material'

const style={
    box:{
        border:'1px solid black',
        height:'100px'
    }
}

function Xo(){


    const hlder = ['','','','','','','','','']

    const [plc,setPlc] = useState(['','','','','','','','',''])

    const [xCount,setXcount] = useState(0)

    const [yCount,setYcount] = useState(0)

    const [isX,setIsX] = useState(true)

    const [drawCount,setDrawCount] = useState(0)

    const [indxx,setIndx] = useState(12)

    const [change,setChange] = useState(true)

    const checkWin=()=>{

        if(plc[0]==='X'&&plc[1]==='X'&&plc[2]==='X'||plc[0]==='O'&&plc[1]==='O'&&plc[2]==='O'||
        plc[3]==='X'&&plc[4]==='X'&&plc[5]==='X'||plc[3]==='O'&&plc[4]==='O'&&plc[5]==='O'||
        plc[6]==='X'&&plc[7]==='X'&&plc[8]==='X'||plc[6]==='O'&&plc[7]==='O'&&plc[8]==='O'||
        plc[0]==='X'&&plc[3]==='X'&&plc[6]==='X'||plc[0]==='O'&&plc[3]==='O'&&plc[6]==='O'||
        plc[1]==='X'&&plc[4]==='X'&&plc[7]==='X'||plc[1]==='O'&&plc[4]==='O'&&plc[7]==='O'||
        plc[2]==='X'&&plc[5]==='X'&&plc[8]==='X'||plc[2]==='O'&&plc[5]==='O'&&plc[8]==='O'||
        plc[0]==='X'&&plc[4]==='X'&&plc[8]==='X'||plc[0]==='O'&&plc[4]==='O'&&plc[8]==='O'||
        plc[2]==='X'&&plc[4]==='X'&&plc[6]==='X'||plc[2]==='O'&&plc[4]==='O'&&plc[6]==='O'
        ){
            
            incWin()

            empty()

            console.log('sahi hai');

        }

    }

    const empty =()=>{
        plc.fill('')

        setPlc(plc)
    }


    const draw=()=>{

        let incl = plc.includes('')

        if(!incl){

            plc.fill('')

            setPlc(plc)

            setDrawCount(drawCount+1)

            alert('Draw')

        }

    }

    const incWin=()=>{

        if(isX){

            setXcount(xCount+1)

            alert('X win')

        }else{

            setYcount(yCount+1)

            alert('O Win')

        }

    }

    const HandlePlace=(indx)=>{

        if(plc[indx].length>0){
            return
        }

        if(isX){


        plc[indx] = 'X'
   
        setIndx(indx)

        checkWin()
   
   
           setPlc(plc)

           draw()

           setIsX(false)


        }else{


        plc[indx] = 'O'
   
        setIndx(indx)
   
   
           setPlc(plc)

           checkWin()

           draw()

           setIsX(true)

        }

    }

    return(
        <>
           <Grid item xs={12} md={6} container>

            <Grid item xs={4} md={4} 
            style={isX?{color:'blue'}:null}
            >
                <h1>Player X :{xCount}</h1>
            </Grid>
            <Grid item xs={4} md={4}
            style={!isX?{color:'blue'}:null}>
                <h1>Player O :{yCount}</h1>
            </Grid>
            <Grid item xs={4} md={4}>
                <h1>Draw : {drawCount}</h1>
            </Grid>
           
            <Grid item xs={4} md={4} style={style.box} onClick={()=>HandlePlace(0)}>
                <h1>{plc[0]}</h1>
            </Grid>
            <Grid item xs={4} md={4} style={style.box} onClick={()=>HandlePlace(1)}>
                <h1>{plc[1]}</h1>
            </Grid>
            <Grid item xs={4} md={4} style={style.box} onClick={()=>HandlePlace(2)}>
                <h1>{plc[2]}</h1>
            </Grid>
            <Grid item xs={4} md={4} style={style.box} onClick={()=>HandlePlace(3)}>
                <h1>{plc[3]}</h1>
            </Grid>
            <Grid item xs={4} md={4} style={style.box} onClick={()=>HandlePlace(4)}>
                <h1>{plc[4]}</h1>
            </Grid>
            <Grid item xs={4} md={4} style={style.box} onClick={()=>HandlePlace(5)}>
                <h1>{plc[5]}</h1>
            </Grid>
            <Grid item xs={4} md={4} style={style.box} onClick={()=>HandlePlace(6)}>
                <h1>{plc[6]}</h1>
            </Grid>
            <Grid item xs={4} md={4} style={style.box} onClick={()=>HandlePlace(7)}>
                <h1>{plc[7]}</h1>
            </Grid>
            <Grid item xs={4} md={4} style={style.box} onClick={()=>HandlePlace(8)}>
                <h1>{plc[8]}</h1>
            </Grid>
           </Grid>
        </>
    )

}

export default Xo