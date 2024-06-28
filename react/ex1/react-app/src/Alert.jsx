/* eslint-disable react/prop-types */
import { useState } from "react";


export default function Alert({type='information', heading, children, closable, onClose}) {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    function handleCloseClick() {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    }

    return (
        <div>
            <div>
                <span 
                    role="img" 
                    aria-label= {
                        type === 'warning' 
                        ? "Warning" 
                        : "Information"
                    }>
                    {
                        type === 'warning' 
                        ? "⚠️" 
                        : "Information "
                    }
                </span>
                <span>
                    {heading}
                </span>
            </div>
            {closable && (<button aria-label="Close" onClick={handleCloseClick}>
                <span role="img" aria-label="Close">
                    X
                </span>
            </button>)}
            <div>
                {children}
            </div>
        </div>
    )
}