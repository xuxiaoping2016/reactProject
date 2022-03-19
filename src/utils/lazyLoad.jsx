/*
 * @Author: xiaoping.xu
 * @Date: 2019-07-23 13:47:12
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-19 21:13:59
 * @Desc:
 */
import React, {
  Component,
  lazy,
  Suspense,
} from 'react';

const errorStyle = {
  margin: '20px auto',
  width: '100%',
  textAlign: 'center',
  color: 'red',
};

const DefaultLoading =  () => (<div>加载中</div>)
// 错误边界组件与懒加载组件结合
export default function lazyLoad(
  loader,
  Loading = DefaultLoading
) {
  const LazyComponent = lazy(loader);
  return class Lazy extends Component {
      state = { hasError: false };

     static getDerivedStateFromError() {
      return { hasError: true };
    }

     componentDidCatch(error, info) {
      console.log(error, info);
    }

     render() {
      const { hasError } = this.state;
      if (hasError) {
        return <div style={errorStyle}>加载组件错误！</div>;
      }
      return (
        <Suspense fallback={<Loading />}>
          <LazyComponent {...this.props} />
        </Suspense>
      );
    }
  };
}
