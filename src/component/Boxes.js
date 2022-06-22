import React from 'react'
import * as BsIcon from 'react-icons/bs'
import * as DiIcon from 'react-icons/di'
import * as AiIcon from 'react-icons/ai'
import * as TiIcon from 'react-icons/ti'

// import * as DiIcon from 'react-icons/di'

const BoxStyle = ()=>{
    return (
        <style>
            {`
                .row-one{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .box-one{
                    background-color: white;
                    color: gray;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 234px;                                    
                    border-radius: 9px;
                    padding: 20px 17px;
                    box-shadow: 1px 5px 17px rgb(226, 225, 225);   

                }
                .icon-b1{
                    background-color: rgb(187, 187, 187);
                    border-radius: 50%;
                    padding: 5px;
                    width:40px;
                    height:40px;
                    text-align:center;
                    color: white;
                }
                .icon-b2{
                    background-color: rgb(252, 169, 15);
                    border-radius: 50%;
                    padding: 5px;
                    width:40px;
                    height:40px;
                    text-align:center;
                    color: white;
                }
                .icon-b3{
                    background-color: rgb(46, 165, 115);
                    border-radius: 50%;
                    padding: 5px;
                    width:40px;
                    height:40px;
                    text-align:center;
                    color: white;
                }
                .icon-b4{
                    background-color: rgb(42, 116, 253);
                    border-radius: 50%;
                    padding: 5px;
                    width:40px;
                    height:40px;
                    text-align:center;
                    color: white;

                }
                
                .box-one h3{
                    color: gray;
                    font-size: 17px;
                }
                
                .box-one div{
                    color: rgb(45, 46, 45);
                    font-weight:bold;
                }

                @media screen and (max-width:720px){
                    .box-one{
                        width: 300px;   
                        margin: auto;
                    }
                }
            `}
        </style>
    )
}
const Boxes = () => {
  return (
    <div>
        <div class="container-fluid">
            <div class="row-one px-3">
                <div class="box-one m-auto my-3">
                    <div className="content">
                        <h3>pending order</h3>
                        <div>202</div>
                    </div>
                    <span className="icon-b1"><BsIcon.BsFillBasket2Fill/></span>
                </div>
                <div class="box-one m-auto my-3">
                    <div className="content">
                        <h3>pending order</h3>
                        <div>99</div>
                    </div>
                    <span className="icon-b2"><DiIcon.DiReact/></span>
                </div>
                <div class="box-one m-auto my-3">
                    <div className="content">
                        <h3>pending order</h3>
                        <div>263</div>
                    </div>
                    <span className="icon-b3"><AiIcon.AiOutlineLike/></span>
                </div>
                <div class="box-one m-auto my-3">
                    <div className="content">
                        <h3>pending order</h3>
                        <div>347</div>
                    </div>
                    <span className="icon-b4"><TiIcon.TiTick/></span>
                </div>
            </div>
        </div>
        <BoxStyle/>
    </div>
  )
}

export default Boxes