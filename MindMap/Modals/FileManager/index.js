import { Component } from 'react';
import { Modal,Form,Input } from 'antd';
import Disk from './disk';
import axios from 'axios';
import './index.less';
const { Item } = Disk;

class FileManager extends Component {
    state = {
        path: window.basePath
    }
    show(callback,showName) {
        this.callback = callback;
        this.queryData();
        this.setState({ visible: true,showName })
    }

    queryData() {
        axios.get(`/remind-api/path?path=${this.state.path}`).then(res => {
            const { data } = res;
            const files = [];
            const dirs = [];
            data.data.map(item => {
                item.path = this.state.path + '/' + item.name;
                (item.type === 'folder' ? dirs : files).push(item);
                if(item.name.match(/\.remind$/)){
                    item.subType = 'mind'   
                }
            })
            this.setState({
                data: [
                    ...dirs, ...files
                ]
            })
        })
    }

    onClose = () => {
        this.setState({
            visible: false
        })
    }

    onClick = (item) => {
        const date = new Date().getTime();
        if (this.beforeDate && date - this.beforeDate < 300) {
            //doubleclick
            if (item.type === 'folder') {
                this.state.path = item.path;
                this.queryData();
                this.callback && this.callback(item);
            } else {
                this.onClose();
                this.callback && this.callback(item);
            }
            this.callback = undefined;
        } else {
            this.setState({
                activeKey:item.name
            })
            //singleclick
        }
        this.beforeDate = date;
        console.log(date)
    }

    changePath(paths, index) {
        let path = '';
        for (let i = 0; i <= index; i++) {
            path += paths[index] + '/'
        }
        this.state.path = path.substr(0, path.length - 1);
        this.queryData()
    }

    render() {
        const { visible, data = [], path,showName,activeKey } = this.state || {};
        const paths = path.split("/");
        return <Modal className="file-manager" width={800} onCancel={this.onClose} visible={visible} 
            title={<>
                <span>我的文件
                <Input size="small" placeholder="保存名称" style={{width:200,marginLeft:10}}></Input>

                </span>
                <div>{paths.map((item, index) => (<span onClick={() => { this.changePath(paths, index) }}>{item}</span>))}</div>
            </>}
        >
            <Disk activeKey={activeKey}>
                {
                    data.map(item => (
                        <Item  onClick={() => { this.onClick(item) }} itemKey={item.name} type={item.type} subType={item.subType} title={item.name} ></Item>
                    ))
                }
            </Disk>
        </Modal>
    }
}
export default FileManager;