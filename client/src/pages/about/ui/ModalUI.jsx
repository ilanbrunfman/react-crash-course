import { useState } from 'react';
import { useModal } from '@/context/modal/ModalContext';

import Button from '@/components/button/Button';

const ModalUI = () => {

    const { openModal } = useModal();

    const [variant, setVariant] = useState('slide-right');

    const handleOpen = () => {
        openModal( TestModal, {}, { variant, } );
    };
// 773.480.1989
// email@nathanwyse.us
 
    return (
        <div className="modal-ui">
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-2">Modal UI</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 content-container px-2 py-2">
                    <h4 className='mb-0-5'>Animation Settings</h4>

                    <div className='mb-1 form-group'>
                        <label className="form-label">Variant:</label>
                        <select className="form-select" value={variant} onChange={(e) => setVariant(e.target.value)}>
                            <option value="fade">fade</option>
                            <option value="slide-up">slide-up</option>
                            <option value="slide-right">slide-right</option>
                            <option value="slide-down">slide-down</option>
                            <option value="slide-left">slide-left</option>
                            <option value="scale">scale</option>
                        </select>
                    </div>

                    <Button
                        variant="primary"
                        onClick={handleOpen}
                    >
                        Trigger Modal
                    </Button>
                </div>
            </div>
        </div>
    )
}

const TestModal = ({closeModal}) => {
    return (
        <>
        <div className="row">
            <div className="col-12 d-flex justify-between">
                <h1>Hello World</h1>
                <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
        </div>
        </>
    )
}

export default ModalUI