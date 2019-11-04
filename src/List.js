import React,{Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);  
        this.state = {
            list:['good','better','best']
        }
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    componentWillReceiveProps(nextProps,nextContext){ //组件将要收到属性props 2个参数 新的值 和之前的值 Context在该组件注入一个context 生存期的组件 只有在生存期内被调用
        //在这个生命钩子里，此时this.props还没有拿到props的最新值 
        //console.log(this.props.item,nextProps)  //   新值与老值对比
        let {item} = nextProps
        if(this.props.item !== item && item !== ""){  //不等的时候改变list   不改变list不会改变页面 list就是state
           this.state.list.push(item) 
        }
    }

    render(){
        //this.state.list.push(this.props.item)  //不执行setstate  改变state  改变list值
        return(
            <ul>
                {
                    this.state.list.map((value,index)=>{
                        return (
                            <li key={index} onClick={() => this.handleItemDelete(index)}>{value}</li>
                        )
                    })
                }
            </ul>
        )
    }
    // 删除li  父组件向子组件传递参数 父组件拿数据 子组件删除功能
    handleItemDelete(index){
        let list = [...this.state.list]
        list.splice(index,1)   
        this.setState({
            list
        })
    }
}
export default List;