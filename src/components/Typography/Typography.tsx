import React from "react"



interface TypographyProps {
    elementType: 1|2|3|4|5|6;
    copyable?: boolean;
    deletable?: boolean;
    disabled?: boolean;
    strong?:boolean;
    italic?:boolean;
    onClick?: () => void;
    icon?:React.ReactNode;
    corner?: 'default' | 'round';
    type?:'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark';
    children: React.ReactNode;
    style?: React.CSSProperties
  }
  
const Typography:React.FC<TypographyProps> = ({

    elementType,
    copyable,
    deletable,
    disabled,
    strong,
    italic,
    onClick,
    icon,
    corner,
    type,
    style,
    children,
    ...props}: TypographyProps,) => {
    return (
        <div className={'twizzle-typography'}>
            {elementType===1 && <h1 {...props} style={{...style, fontSize:'2.5rem'}}>{children}</h1>}
            {elementType===2 && <h2 {...props} style={{...style, fontSize:'2rem'}}>{children}</h2>}
            {elementType===3 && <h3 {...props} style={{...style, fontSize:'1.5rem'}}>{children}</h3>}
            {elementType===4 && <h4 {...props} style={{...style, fontSize:'1.25rem'}}>{children}</h4>}
            {elementType===5 && <h5 {...props} style={{...style, fontSize:'1rem'}}>{children}</h5>}
            {elementType===6 && <h6 {...props} style={{...style, fontSize:'0.875rem'}}>{children}</h6>}
        </div>

        
    )
    
}



export  {Typography}