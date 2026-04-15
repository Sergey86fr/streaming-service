import {  useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";


interface IDropdownProps {
    children?:ReactNode;
    handleClose?: () => void;
    isOpen: boolean;
}

export const Dropdown = ({children,handleClose, isOpen}:IDropdownProps) => {

//     const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//         // console.log(dropdownRef.current);
        
//       if (
//         dropdownRef.current && 
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         handleToggle?.();
//       }
//     };

//     if (isOpen) {
        
//                 document.addEventListener("mousedown", handleClickOutside);
           
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };

//   }, [isOpen, handleToggle]);


  useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Закрытие по нажатию ESC
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                handleClose?.();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, handleClose]);

    if (!isOpen) return null;

    
    return (
        createPortal(
            <>
             <div
                onClick={handleClose}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 999,
                    animation: "fadeIn 0.3s ease-in-out",
                }}
            />
        <div  style={isOpen? {display:"block", zIndex: 1000,width:"350px", height:"100vh", background:"#ffffff", position:"absolute", top:0, transition:"width .6s easy-in-out", padding:20}:{display:"none",height:"100vh", width:0}} >
            {children}
        </div>
         <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
         </>,
        document.body

        )
    )

}