import React from 'react'
import Loadable from 'react-loadable';

const loadingComponent = ({ error, pastDelay }) => {
    if (error) {
        return <div>ERROR!</div>;
    }
    else if (pastDelay) {
        return <div />;
    } else {
        return null;
    }
};
let config = [
 {
    name: '/',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../components/home/Home.jsx'),
      loading: loadingComponent,
      delay: 300,
    }),
    }
]
export default config;