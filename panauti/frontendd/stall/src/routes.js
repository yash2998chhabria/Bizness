import React from 'react';
import { Route } from 'react-router-dom';
import ArticleListView from './containerr/ArticleList';
import ArticleDetailView from './containerr/ArticleDetail'
import loginPage  from './containerr/Login'
import signup  from './containerr/signup'
import ProductList from './containerr/Products'
import sproduct from './containerr/stalls'
import StallDetailView from './containerr/StallDetailView'
import StallCRUDView from './component/StallCRUD'
import StallDetailViewCRUD from './containerr/stalldetailcrud';
import StallListViewCreate from './containerr/stalllistcreate';

const BaseRouter = () =>(
    <div>
        <Route exact path='/articles/' component = {ArticleListView} />
        <Route exact path='/articles/:articleID/' component = {ArticleDetailView} />
        <Route exact path='/login/' component = { loginPage } />
        <Route exact path='/signup/' component = { signup } />
        <Route exact path='/sproducts/' component ={ProductList}/>
        <Route exact path='/stalls/' component ={sproduct}/>
        <Route exact path='/stalls/:stallid' component ={StallDetailView}/>
        <Route exact path='/yourstall/' component ={ StallListViewCreate }/>
        <Route exact path='/yourstall/:stallID/' component ={StallDetailViewCRUD}/>

    </div>

);

export default BaseRouter;