function createElement(type, props = {}, ...children) {
  // 함수형 컴포넌트 처리
  if (typeof type == "function") {
    return type(props, ...children);
  }

  return {
    type,
    props,
    children,
  };
}

export default createElement;
