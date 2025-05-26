function render(vdom, container) {
  // 문자열 처리
  if (typeof vdom === "string") {
    const textNode = document.createTextNode(vdom);
    container.appendChild(textNode);
    return;
  }

  // 엘리먼트 처리
  const { type, props, children } = vdom;
  const element = document.createElement(type);

  // props 설정
  for (const [key, value] of Object.entries(props || {})) {
    element.setAttribute(key, value);
  }

  // 자식 노드 재귀 렌더링
  children.forEach((child) => render(child, element));

  // 부모 컨테이너에 엘리먼트 추가
  container.appendChild(element);
}

export default render;
