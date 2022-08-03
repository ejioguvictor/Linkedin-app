import React from 'react'
import { Container, ShareBox, CommonCard } from './Main.styled'
import styled from './Main.styled'

const Main = () => {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
      <div>
        <img src="/images/user.svg" alt="user-img" />
        <button>Start a post 📍</button>
        <button>
          <img src="/images/photo-icon.svg" alt="" />
          <span>Photo</span>
        </button>

        <button>
          <img src="/images/video-icon.svg" alt="" />
          <span>Video</span>
        </button>

        <button>
          <img src="/images/event-icon.svg" alt="" />
          <span>Event</span>
        </button>

        <button>
          <img src="/images/article-icon.svg" alt="" />
          <span>Write article</span>
        </button>
      </div>

    </Container>
  )
}

export default Main