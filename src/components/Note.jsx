import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";


// 定义了一个React函数组件`Note`，它接收一个参数`props`，用来传递数据到组件内部
function Note(props) {

  /*
    在组件内部定义了一个函数handleClick，用来处理点击删除按钮的事件。
    
    当按钮被点击时，会调用props.onDelete(props.id)，
    也就是调用父组件传递过来的onDelete函数，
    并将当前便签的id作为参数传递给它
  */

  function handleClick() {
    props.onDelete(props.id);
  }

  return (

    /*
      <div className="note"> ... </div>：这是便签的外层<div>元素，它具有note类名用于样式定义。

      <h1>{props.title}</h1>：显示便签的标题，标题的内容由props.title提供，这个值由父组件传递给Note组件。

      <p>{props.content}</p>：显示便签的内容，内容由props.content提供，同样也是由父组件传递给Note组件。

      <button onClick={handleClick}> ... </button>：这是一个删除按钮，当点击时触发handleClick函数。
      
      这个按钮使用了一个图标组件DeleteIcon，
      但是代码中没有提供DeleteIcon的定义，
      这可能是一个自定义图标或者第三方图标库中的图标。

    */
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
