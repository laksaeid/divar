const El = ({ element, child, ...rest }) => {
  const el = document.createElement(element);
  for (const key in rest) {
    el[key] = rest[key];
  }
  if (child && Array.isArray(child)) {
    el.append(...child);
  } else if(child) {
    el.append(child);
  }
  return el;
};
export default El;
