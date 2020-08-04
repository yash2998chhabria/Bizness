import React from 'react';
import Articles from '../component/Article';
import axios from 'axios';
import Acustomform from '../component/ArticleCRUD'; 
// import Item from 'antd/lib/list/Item';
// import { Card } from 'antd'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class ArticleListView extends React.Component {

    state = {
        
        articless: []
    };
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         articles : [],
    //         isLoaded : false
    //     }
    // }
    // componentDidMount() {
    //     axios.get('http://127.0.0.1:8000/api/')
    //         .then(res => {
    //             this.setState({
    //                 aritcles: res.data
    //             });
    //             console.log(res.data)
    //             console.log(this.state.articles)
                
    //         })
            
    // }
    componentDidMount() {
        
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                // const sr=res.data
                // console.log(sr);
                this.setState({articless:res.data });
                
            })
            
            
            
        }
    render() {
        
        return(
            <div>
                <Articles data={this.state.articless} />
            <h1>Create a new blog</h1>

            {
            this.props.isAuthenticated ?
            
            <Acustomform 
            requestType = "post"
            articleID = {null}
            btnText="Create"
            />
            
            :
              
            
            <Acustomform 
            requestType = "null"
            articleID = {null}
            btnText="Login To create"
            />
            
            }
            </div>
            
            
            
        )    
    }

}
export default ArticleListView;