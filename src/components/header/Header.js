import React from 'react'
import { Container, Content, Logo, Search, SearchIcon, Nav, NavListWrap, NavList, SignOut, User, Work } from "./Header.styled"

// const Header = (props) => {
//   return (
//     <Container>
//       <Content>Header</Content>
//     </Container>
//   )
// }


const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="home-logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search-icon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="home-icon" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="my-network-icon" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="jobs-icon" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="messaging-icon" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="notifications-icon" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img src="/images/user.svg" alt="user-profile-icon" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="arrow-down-icon" />
              </a>

              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="work-icon" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="arrow-down-icon" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};


export default Header