import React from "react";
import styled from "styled-components";

function Header() {
  return (
    //added imdb logo and icons
    <Nav>
      <Logo src="https://eyeinkfx.com/wp-content/uploads/2019/10/ICON-imdb.png" />

      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>SERIES</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
      </NavMenu>

      {/* added userimage */}

      <UserImage src="https://www.disneyplusinformer.com/wp-content/uploads/2021/12/Encanto-Avatar.png" />
    </Nav>
  );
}

export default Header;

//style

const Nav = styled.nav`
  height: 70px;
  background: #0d1a26;
  display: flex;
  align-items: center;
  padding: 0 35px;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  dislpay: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: inline;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      align-items: center;
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      //inserts something after the content of each selected element
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity:0;
        transform-origin:left center;
        //transition : selector duration timing-function delay
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        transform:scaleX(0)
      }
    }

    &:hover{
      span:after{
        transform:scaleX(1);
        opacity:1;
      }
    }
  }
`;
const UserImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
