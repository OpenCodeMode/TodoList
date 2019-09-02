import React,{Component,Fragment} from 'react';

export default class TodoList extends Component{
// 初始化
    constructor(props){
        super(props);
        this.state = {
            keywords:'',
            list:[]
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
//html
    render(){
        return <Fragment>
            <input type="text" value={this.state.keywords} onChange={this.handleInput} onKeyUp={this.handleKeyUp}/> 
            <button onClick={this.handleButtonClick}>提交</button>
            <ul>
                {
                    this.state.list.map((value,index)=>{
                        return (
                            <li key={index} >{value}<button onClick={ () => {
                                this.handleDeleteItem(index)
                            }}>删除</button></li>
                        )
                    })
                }
            </ul>
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
        // 不提倡直接修改setState
        // this.state.list.push(this.state.keywords)
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
// 删除li  传参删除哪个li
    handleDeleteItem(index){
        let list = [...this.state.list]
        list.splice(index,1)   
        this.setState({
            list
        })
    }
}


// setstate  重绘dom  比较2棵树是否发生变化 