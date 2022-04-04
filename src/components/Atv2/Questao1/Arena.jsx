import React from "react";

/*export default () => {
  return (
    <div>
      <Hero name='Baki' />
      <Enemy name='Yujiro' />
    </div>
  )
}*/

export default (props) => {
  return (
    <div>
      <h2> Arena : {props.arena}</h2>
      {React.Children.map(props.children, (arena) => {
        return React.cloneElement(arena, { arena: props.arena });
      })}
    </div>
  );
};
