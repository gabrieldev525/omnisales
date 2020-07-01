import styled from 'styled-components'

const menuHeight = 50

// Menu style directed to the top
export const ContainerTopMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, .3) , 0 -2px 5px -2px rgba(0, 0, 0, .3);
  height: ${menuHeight}px;

  span {
    margin-left: 3%;
  }

  ul {
    display: flex;
    width: 90%;
    justify-content: flex-end;
    list-style-type: none;
    margin-right: 5px;
  }

  li {
    margin-right: 25px;
    cursor: pointer;
  }

`
export const ImgUser = styled.p`
  background: blue;
  width: 35px;
  height: 35px;
  margin-right: 3%;
  border-radius: 50%;
`

// Link style that provides page navigation
export const MenuItem = styled.li`
  height: ${menuHeight}px;
  display: flex;
  align-items: center;
  margin: 0 1%;
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      transform: scale(1.2);
    }
  }
`

// Base container style for the menu
export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

// Side-directed menu style
export const ContainerSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 75px;
  background: #2196D9;

  ul {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li a, li span {
    font-size: 25px;
  }
`