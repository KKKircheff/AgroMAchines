import React, {CSSProperties} from 'react';

type Props ={
    className?: string,
    style:CSSProperties
    onClick?:()=>void
}


function SlickNextArrow(props:Props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
function SlickPrevArrow(props:Props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }





// function SampleNextArrow(props:Props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props:Props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "green" }}
//         onClick={onClick}
//       />
//     );
//   }

//   appendDots: dots => (
//     <div
//       style={{
//         backgroundColor: "#ddd",
//         borderRadius: "10px",
//         padding: "10px"
//       }}
//     >
//       <ul style={{ margin: "0px" }}> {dots} </ul>
//     </div>
//   ),