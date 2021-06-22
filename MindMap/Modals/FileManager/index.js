import {Component} from 'react';
import {Modal} from 'antd';
import Disk from './disk';
import axios from 'axios';
import './index.less';
const {Item} = Disk;

class FileManager extends Component{
    state = {
        path:window.basePath
    }
    show(callback){
        this.callback = callback;
        this.queryData();
        this.setState({visible:true})
    }

    queryData(){
        axios.get(`/remind-api/path?path=${this.state.path}`).then(res=>{
            const {data} = res;
            const files = [];
            const dirs = [];
            data.data.map(item=>{
                item.path = this.state.path+'/'+item.name;
                (item.type==='folder'?dirs:files).push(item);
            })
            this.setState({
                data:[
                    ...dirs,...files
                ]
            })
        })
    }

    onClose= ()=>{
        this.setState({
            visible:false
        })
    }

    onClick = (item)=>{
        const date = new Date().getTime();
        if(this.beforeDate&&date-this.beforeDate<300){
            //doubleclick
            if(item.type==='folder'){
                this.state.path = item.path;
                this.queryData();
                this.callback&&this.callback(item);
            }else{
                this.callback&&this.callback(item);
            }
            this.callback = undefined;
        }else{
            //singleclick
        }
        this.beforeDate = date;
        console.log(date)
    }

    changePath(paths,index){
        let path = '';
        for(let i = 0;i<=index;i++){
            path+=paths[index]+'/'
        };
        this.state.path = path.substr(0,path.length-1);
        this.queryData()
    }

    render(){
        const {visible,data=[],path} = this.state||{};
        const paths = path.split("/");
        return <Modal className="file-manager" width={800}  onCancel={this.onClose}  visible={visible} footer={false} 
                title={<>
                    <span>文件管理</span>
                    <div>{paths.map((item,index)=>(<span onClick={()=>{this.changePath(paths,index)}}>{item}</span>))}</div>
                </>}
            >
            <Disk>
                {
                    data.map(item=>(
                        <Item onClick={()=>{this.onClick(item)}} itemKey={item.name} type={item.type}  subType={item.type==='folder'?undefined:'mind'} title={item.name} ></Item>
                    ))
                }
            </Disk>
        </Modal>
    }
}
export default FileManager;