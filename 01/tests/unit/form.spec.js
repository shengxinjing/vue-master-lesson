import Vue from 'vue'
import KForm from '../../src/components/KForm'
import KInput from '../../src/components/KInput'
import KFormItem from '../../src/components/KFormItem'
import { mount } from '@vue/test-utils'
// Vue.component({KForm})
// Vue.component({KInput})
// Vue.component({KFormItem})
describe('测试表单',()=>{

  it('加法',()=>{
    expect(1+2).toBe(3)
  })
  it('输入',()=>{

    let wrapper = mount({
      components:{KInput},
      template:`
        <div>
          <h1>{{name}}</h1>
          <k-input type="text" v-model="name"></k-input>
        </div>
      `,
      data(){
        return {
          name:'hi'
        }
      }
    })
    expect(wrapper.find('input').attributes().type ).toBe('text')
    expect(wrapper.find('input').element.value ).toBe('hi')
    expect(wrapper.find('h1').text() ).toBe('hi')
    wrapper.vm.name = 'hello world'
    expect(wrapper.find('input').element.value ).toBe('hello world')
    expect(wrapper.find('h1').text() ).toBe('hello world')

  })
  it('输入',()=>{
    let wrapper = mount({
      components:{KInput},
      template:`
        <div>
          <h1>{{name}}</h1>
          <k-input type="text" v-model="name"></k-input>
        </div>
      `,
      data(){
        return {
          name:'hi'
        }
      }
    })
    expect(wrapper.find('input').attributes().type ).toBe('text')
    expect(wrapper.find('input').element.value ).toBe('hi')
    expect(wrapper.find('h1').text() ).toBe('hi')
    wrapper.vm.name = 'hello world'
    expect(wrapper.find('input').element.value ).toBe('hello world')
    expect(wrapper.find('h1').text() ).toBe('hello world')

  })
  it('validate field', done => {
    let wrapper = mount({
      components:{
        KInput,
        KFormItem,
        KForm
      },

      template: `
        <k-form :model="form" :rules="rules" ref="form">
          <k-form-item label="活动名称" prop="name" ref="field">
            <k-input v-model="form.name"></k-input>
          </k-form-item>
        </k-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', min: 3, max: 6 }
            ]
          }
        };
      },
      methods: {
        setValue(value) {
          this.form.name = value;
        }
      }
    }, true);
    console.log()
    wrapper.vm.$refs.form.validate(valid => {
      expect(valid).toBe(false);
      done();
    });
  });
})