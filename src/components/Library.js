import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
import './Library.css'
export default function Library() {
    return (
        <>
             <div className="my-5">
                <h1 className="text-center heading">Our Library</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                         {
                             Sdata.map((val,ind)=>{
                                 return <Card key={ind}
                                 imgSrc={val.imgSrc}
                                 title={val.title}
                                 text={val.text}
                                 btnLink={val.btnLink}
                                 />
                             })
                         }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
