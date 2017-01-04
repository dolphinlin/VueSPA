import Hello from '../components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import State from '../components/State'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const Foo = {
  template: '<div>foo</div>'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}
const Bar = {
  template: '<div>bar</div>'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

export default [
  {
    path: '/',
    name: 'index',
    component: Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }, {
    path: '/foo',
    component: Foo{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }, {
    path: '/bar',
    component: Bar{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }, {
    path: '/state',
    component: State{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]
