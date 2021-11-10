import styled from 'styled-components';




const Spinner = () => {
  return (
    <StyledSpinner>
        <div className="spin-wrapper">
          <div className="spinner"></div>
        </div>
       
    </StyledSpinner>
  );
};

export default Spinner;


const StyledSpinner = styled.div `
.spin-wrapper{
    position: relative;
    width: 100%;
    height: 100vh;
    background: #080705;
  
    .spinner{
      position: absolute;
      height: 60px;
      width: 60px;
      border: 3px solid transparent;
      border-top-color: #A04668;
      top: 50%;
      left: 50%;
      margin: -30px;
      border-radius: 50%;
      animation: spin 2s linear infinite;
      
      &:before, &:after{
        content:'';
        position: absolute;
        border: 3px solid transparent;
        border-radius: 50%;
      }
      
      &:before{
        border-top-color: #254E70;
        top: -12px;
        left: -12px;
        right: -12px;
        bottom: -12px;
        animation: spin 3s linear infinite;
      }
      
      &:after{
        border-top-color: #FFFBFE;
        top: 6px;
        left: 6px;
        right: 6px;
        bottom: 6px;  
        animation: spin 4s linear infinite;
      }
    }
  }
  
  @keyframes spin{
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
 `


