import React from 'react';

const Modal = (props) => {
    console.log(props.singleData);
    const{image_link,description,integrations,features}=props.singleData;

    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            
                <div className="card lg:card-side bg-base-100 ">
                    
                    <div className="card-body border-2 border-error mr-2">
                        <h2 className="card-title">{description?description:"Not found."}</h2>
                        
                    
                    
                    <div className="flex justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Features</h1>
                        {
                            Object.values(features ||{}) && Object.values(features ||{}).map((value)=>
                            <p>{value.feature_name?value.feature_name:"Not found"}</p>)
                        }
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Integrations</h1>
                        {
                            integrations && integrations.map((int)=>
                            <p>{int?int:"Not found."}</p>)
                        }
                    </div>
                    </div>
                    
                    </div>
                    <figure className="w-full h-64"><img src={image_link && image_link[0]} alt="Album"/></figure>
                </div>

            <div className="modal-action">

            {/* if there is a button, it will close the modal */}
            <label htmlFor="my-modal-5" className="btn">Close</label>
            </div>
            </form>
            </dialog>
        </>
    );
};

export default Modal;