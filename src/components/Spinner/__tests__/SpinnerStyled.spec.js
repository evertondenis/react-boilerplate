import React from 'react'
import { shallow } from 'enzyme'
import { StyledLoader } from '../styled'
import 'jest-styled-components'

describe('SpinnerStyle', () => {

  it('should have styled component', () => {
    const wrapper = shallow(<StyledLoader show />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should NOT render Spinner when show is false', () => {
    const wrapper = shallow(<StyledLoader show={false} />)
    expect(wrapper).toMatchSnapshot()
  })
})
