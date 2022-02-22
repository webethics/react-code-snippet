import React from 'react';

// import Components
import {PATH} from './routes.components';

const routes = [
    {
        path:'/',
        exact:true,
        private:false,
        component:(props)=><PATH.Home {...props} />  
    },
    {
        path:'/about',
        exact:true,
        private:false,
        component:(props)=><PATH.About {...props} />
    },
    {
        path:'/contact',
        exact:true,
        private:false,
        component:(props)=><PATH.ContactUs {...props} />
    },

    {
        path:'/productList',
        exact:true,
        private:false,
        component:(props)=><PATH.ProductList {...props} />
    },
    {
        path:'/ProductListItem/:id',
        exact:true,
        private:false,
        component:(props)=><PATH.ProductDetail {...props} />
    },
   
];

export default routes;
