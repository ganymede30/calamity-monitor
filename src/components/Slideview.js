import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'


const Wrapper = styled.div`
    width: 100%
`

const Page = styled.div`
   width: 100%
` 

export default class Slideview extends React.Component {
    render () {
        return (
            <Wrapper>
              <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={false}
              >

                  <Page>Page One</Page>
                  <Page>Page Two</Page>

              </Slider>
            </Wrapper>
        )
    }
}