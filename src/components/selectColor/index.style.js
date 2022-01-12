import styled from 'styled-components'
export const DivSelectColor = styled.div`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: ${(props) => (props.active ? '#000' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  .background {
    width: 24px;
    height: 24px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &-children {
      border-radius: 50%;
      width: 16px;
      height: 16px;
      background: ${(props) => props.color || '#fff'};
    }
  }
`
