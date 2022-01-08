import styled from 'styled-components'

export const DivHeader = styled.div`
  background: ${(props) => (props.active ? '' : 'white')};
  position: absolute;
  height: 100px;
  // left: 0px;
  // top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // position: fixed;
  .main-nav {
    &__menu {
      width: 46px;
      height: 46px;
      cursor: pointer;
    }
  }
`
