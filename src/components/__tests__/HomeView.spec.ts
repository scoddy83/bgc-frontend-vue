import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '@/views/HomeView.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Die nögschte Events vo dr BGC' } })
    expect(wrapper.text()).toContain('Die nögschte Events vo dr BGC')
  })
})
