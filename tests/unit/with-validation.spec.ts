import { mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import WithValidation from '@/components/WithValidation.vue'

describe('WithValidation.vue', () => {
  const wrapper = mount(WithValidation)

  const textField = wrapper.find('.v-text-field')
  const input = textField.find('input')

  const vnode = textField.vm.$vnode
  const componentOptions = vnode.componentOptions
  // @ts-ignore
  const listeners = vnode.componentOptions.listeners


  it('applies listeners correctly', () => {
    expect(listeners).toMatchObject({
      input: expect.any(Function),
      change: expect.any(Function),
      blur: expect.any(Function),
    })
  })

  it('displays validation message', async () => {
    input.setValue('invalid')
    input.trigger('change') // either event should trigger validation
    input.trigger('blur')

    await flushPromises()
    await wrapper.vm.$nextTick()

    expect(textField.find('.v-messages__message').text()).toMatchSnapshot()
  })
})
