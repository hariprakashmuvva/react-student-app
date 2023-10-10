import React from 'react';

class DisplayField extends React.Component{
    
    render() {
        return (
            <>
                <div className="hstack gap-1">
                    <div className="p-1 fw-semibold">{this.props.LabelToDisplay}</div>
                    <div className="p-1">{this.props.ValueToDisplay}</div>
                </div>
            </>
        );
    }
}

export default DisplayField;