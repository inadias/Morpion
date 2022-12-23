import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarComponent({props,progress}) {
    const loading= progress < 100 ? "Loading..." : "Let's play !!"

    return (
        <div className='container w-25 '>
                                <h8 className='d-flex justify-content-center'> {progress}%</h8>
            <ProgressBar style={{transition:'now 0.5s'}} striped variant="danger" now={progress} />
            <h6>{loading}</h6>

        </div>
    );
}

export default React.memo(ProgressBarComponent);