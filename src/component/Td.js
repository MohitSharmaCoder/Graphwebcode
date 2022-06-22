import React from 'react'
import * as GiIcon from 'react-icons/gi'
const TdStyle = ()=>{
    return (
        <style>
            {`
            .navbar-bg-one{
                background-color: white;
                border-radius: 10px;
                width:98%;
                margin:auto;

            }
            .td{
                font-size:20px;
                color: rgb(77, 76, 76);
            }
            .right{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #orders{
                border-radius: 5px;
                padding: 8px 30px 8px 5px;
                color: rgb(77, 76, 76);
                background-color: white;
                font-size: 15px;
            }
            .nav-icon{
                color: gray;
            }

            .td-boxes{
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                margin-auto;
            }
            .td-box{
                width: 220px;
                border-radius: 10px;
            }
            .td-one{
                border: 1px solid orange;
                border-left: 4px solid orange;
            }
            .td-two{
                border: 1px solid rgb(207, 27, 3);
                border-left: 4px solid rgb(207, 27, 3);
            }
            .td-three{
                border: 1px solid rgb(145, 144, 144);
                border-left: 4px solid rgb(145, 144, 144);
            }
            .td-four{
                border: 1px solid rgb(145, 144, 144);
                border-left: 4px solid rgb(145, 144, 144);
            }
            .td-five{
                border: 1px solid rgb(42, 116, 253);
                border-left: 4px solid rgb(42, 116, 253);
            }
            .td-six{
                border: 1px solid rgb(42, 116, 253);
                border-left: 4px solid rgb(42, 116, 253);
            }
            .td-box .box-p{
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: rgb(97, 96, 96);
            }
            .hpc{
                margin-right:10px;

            }
            @media screen and (max-width:720px){
                .td-box{
                    width: 300px;
                }
                .hp{
                    width: 350px;
                    margin:auto;
                }
                .hpc{
                    margin-right:0;

                }
            }
            `}
        </style>
    )
}
const Td = () => {
  return (
    <div>
    <section className="header-two navbar-bg-one pt-2">
    <nav class="navbar hp">
    <div class="container-fluid">
        <h2 className='ms-3 td'>Today's Delivery</h2>
        <div className="right hpc">
            <form class="d-flex" role="search">
            <input class="form-control" type="search" placeholder="Search Here" aria-label="Search"/>
            </form>
            <select className='me-3 ms-3' name="orders" id="orders">
                <option value="All Orders">All Orders</option>
                <option value="english">shoes</option>
                <option value="english">shirt</option>
            </select>
        </div>
    </div>
    </nav>
    <div class="td-boxes">    
        <div className="td-box td-one mx-3 my-3 p-3">
            <div className="box-p d-flex">
                <p>1334343</p>
                <p>ord-343</p>
            </div>
            <div>
                <span><GiIcon.GiMailShirt/></span>
            </div>
        </div>
        <div className="td-box td-two mx-3 my-3 p-3">
            <div className="box-p d-flex">
                <p>1334343</p>
                <p>ord-343</p>
            </div>
            <div>
                <span className="me-2"><GiIcon.GiMailShirt/></span>
                <span><GiIcon.GiMailShirt/></span>
            </div>
        </div>
        <div className="td-box td-three mx-3 my-3 p-3">
        <div className="box-p d-flex">
                <p>1334343</p>
                <p>ord-343</p>
            </div>
            <div>
                <span><GiIcon.GiBilledCap/></span>
            </div>
        </div>
        <div className="td-box td-four mx-3 my-3 p-3">
            <div className="box-p d-flex">
                    <p>1334343</p>
                    <p>ord-343</p>
                </div>
                <div>
                    <span className="me-2"><GiIcon.GiConverseShoe/></span>
                    <span><GiIcon.GiBilledCap/></span>
                </div>
            </div>
        <div className="td-box td-five mx-3 my-3 p-3">
            <div className="box-p d-flex">
                <p>1334343</p>
                <p>ord-343</p>
            </div>
            <div>
                <span className="me-2"><GiIcon.GiBilledCap/></span>
                <span className="me-2"><GiIcon.GiMailShirt/></span>
                <span><GiIcon.GiShirt/></span>
            </div>
        </div>
        <div className="td-box td-six mx-3 my-3 p-3">
            <div className="box-p d-flex">
                <p>1334343</p>
                <p>ord-343</p>
            </div>
            <div>
                <span className="me-2"><GiIcon.GiMailShirt/></span>
                <span className="me-2"><GiIcon.GiShirt/></span>
                <span><GiIcon.GiShirt/></span>
            </div>
        </div>
    </div>
    </section>
    <TdStyle/>
</div>
  )
}

export default Td