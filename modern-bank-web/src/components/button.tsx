import React from "react";

interface PropStyles {
  'styles' : string | undefined
}



const Button : React.FC<PropStyles>= ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);



export default Button;