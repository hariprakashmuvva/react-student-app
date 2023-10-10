import React from "react";
import Moment from "moment";

class FeeDetails extends React.Component{
    
    render() {
        return (
            <>
                <span className="fw-semibold fs-4 link-underline-dark">Payment History</span>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Date of Payment</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {JSON.parse(this.props.PaymentHistory).map((fee) => <tr key={fee.ReceiptId }><td>{Moment(fee.PaidOn).format('DD MMM yyyy')}</td><td>₹ {fee.Amount }</td></tr>)}
                    </tbody>
                </table>
            </>
        );
    }
}

export default FeeDetails;
