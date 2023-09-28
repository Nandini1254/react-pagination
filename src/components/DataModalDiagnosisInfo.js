import React from 'react'

const DataModalDignosisInfo = (props) => {
    return (
        <div>
            <div className='head'>
                <span>Date</span>
                <span>Code</span>
                <span>Diagnosis</span>
            </div>
            {
                props.diagnosisList.map((data) => {
                    return <div className='body'>
                        <span>{data.diag_date}</span>
                        <span>{data.code}</span>
                        <span>{data.description}</span>
                    </div>
                })
            }
        </div>
    )
}

export default DataModalDignosisInfo
