import React from 'react';

const Address = () => {
    return (
        <div>
            <div className="card text-dark bg-light mb-4" style={ { maxWidth: "25rem" } }>
                <div className="card-header"><h4>Birmingham Office</h4></div>
                <div className="card-body">
                    <div className="card-text">
                        <p>
                            <b>Tel: </b><a href="tel: +441217713444" className='text-warning'><b>0121 771 3444 / 0444</b></a><br />
                            <b>Fax: </b>0121 572 1503<br />
                            <b>Email: </b><a href='mailto: info@alifandco.co.uk' className='text-warning'><b>info@alifandco.co.uk</b></a><br />
                            <b>Address:</b> Office 3, Heath Court, <br /> 489-493 Coventry Road <br />Birmingham B10 0JS
                        </p>
                    </div>
                </div>
            </div>
            <div className="card text-dark bg-light" style={ { maxWidth: "25rem" } }>
                <div className="card-header"><h4>London Office</h4></div>
                <div className="card-body">
                    <div className="card-text">
                        <p>
                            <b>Tel: </b><a href="tel: +442072470606" className='text-warning'><b>0207 247 0606</b></a><br />
                            <b>Fax: </b>0207 247 0606<br />
                            <b>Email: </b><a href='mailto: london@alifandco.co.uk' className='text-warning'><b>london@alifandco.co.uk</b></a><br />
                            <b>Address: </b>Second Floor<br /> 235 Whitechapel Road<br /> London E1 1DB
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Address;