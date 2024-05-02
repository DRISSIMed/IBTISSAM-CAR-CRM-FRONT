
import React from 'react';

export default function CardInfo(props: { Icon: any; disc: any; disc2:any}) {
    const { Icon, disc,disc2 } = props;
    return (
        //border-1 surface-border border-round 
        <div className="m-2 text-center py-3 px-2" style={{width:200}}>
            <div className="mb-3">
                <img src={Icon} alt='' className="w-4" />
            </div>
            <div>
                <h4 className="mb-1">{disc}</h4>
                <h4 className="mb-1">{disc2}</h4>
            </div>
        </div>
    )
}
