import React,{Component,Fragment} from 'react';
import List from './List'

export default class TodoList extends Component{
// 初始化
    constructor(props){
        super(props);
        this.state = {
            keywords:'',
            list:['good','better','best']
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
    }
//html
    render(){
        return <Fragment> 
            <input type="text" value={this.state.keywords} onChange={this.handleInput} onKeyUp={this.handleKeyUp}/> 
            <button onClick={this.handleButtonClick}>提交</button>
            {/* 
                1、this.state.keywords是在父组件中
                2、keywords值只要发生变化List组件就会重绘
                3、只有在父组件中执行setState来改变state里的keywords，才能导致this.state.keywords发生变化。
            */}
            <List onDelete={this.handleItemDelete} items={this.state.list}/>
        </Fragment>
    }
//同步
    handleInput(e){
        this.setState({
            keywords:e.target.value
        })
    }
// 提交【】
    handleButtonClick(){
        this.setState({
            list:[...this.state.list,this.state.keywords],
            keywords:''
        })  
    }
// 键盘事件
    handleKeyUp(e){
        if(e.keyCode === 13){
            this.handleButtonClick();
        }
    }
    handleItemDelete(index){
        console.log(index)
        let list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list
        })
    }
}


// setstate  重绘dom  比较2棵树是否发生变化 