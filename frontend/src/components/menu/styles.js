import styled from 'styled-components'

const menuHeight = 50

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #242424;
  height: ${menuHeight}px;

  ul {
    display: flex;
    flex: 1;
    list-style-type: none;
  }
`
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
      color: #edb637;
    }
  }

`