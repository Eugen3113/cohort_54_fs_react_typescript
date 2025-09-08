import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`;

export const Title = styled.p`
  color:#00ff2fff;
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonControl = styled.div`
  width: 200px;
  max-height: fit-content;
     background-color: #00ff2fff;
   color: #fff;
   font-size: 16px;
   font-weight: 500;
   padding: 10px 18px;
  border: none;
   border-radius: 8px;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

   &:hover {
     background-color: #5700b3ff;
     transform: translateY(-2px);
     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
   }

   &:active {
     transform: translateY(0);
     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
   }
`;
