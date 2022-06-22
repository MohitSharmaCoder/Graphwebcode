import React from 'react'
import Boxes from './Boxes'
import Td from './Td'
import DonutChart from './DonutChart'
const SectionOneStyle = ()=>{
  return (
    <style>
      {`
        .two-details{
          display: flex;
          // flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }

        .a-details{
          width: 70%;
        }
        .b-details{
          width: 200px;
          margin:0px 0px 0px 30px;
        }
        @media screen and (max-width:720px){
          .two-details{
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
            }
      
            .a-details{
              width: 94%;
              margin: auto;
            }
            .b-details{
              width: 94%;
              margin: auto;
      
            }
      }
      `}
    </style>
  )
}

const SectionOne = () => {
  return (
    <div>
        <Boxes/>
        <div className="two-details">
          <div className="a-details"><Td/></div>
          <div className="b-details"><DonutChart/></div>
          
        </div>

        <SectionOneStyle/>
    </div>
  )
}

export default SectionOne