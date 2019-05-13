import React from 'react'
import { shallow } from 'enzyme'
import Spinner from '../'

describe('Spinner', () => {
  it('should NOT render Spinner when show is false', () => {
    const wrapper = shallow(<Spinner show={false} />)
    expect(wrapper.find('Spinner')).toHaveLength(0)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Spinner', () => {
    const wrapper = shallow(<Spinner show />)
    expect(wrapper.find('.loading')).toHaveLength(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render Spinner', () => {
    const wrapper = shallow(<Spinner show />)
    expect(wrapper).toMatchSnapshot()
  })
})
