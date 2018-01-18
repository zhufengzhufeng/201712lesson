// Provider是一个组件，接收了一个store的属性,内部将其挂载在了context上
import React from 'react';
import PropTypes from 'prop-types'
class Provider extends React.Component{
   static childContextTypes = {
     store:PropTypes.object
   };
   getChildContext(){
      return {store:this.props.store}
   }
   render(){
      return this.props.children
   }
}
let connect =(mapStateToProps,mapDispatchToProps)=>(Component)=>{
   return class Proxy extends React.Component{
      static contextTypes = {
         store:PropTypes.object
      };
      render(){
         return <Component
           {...mapStateToProps(this.context.store.getState())}
           {...mapDispatchToProps(this.context.store.dispatch)}
         />
      }
   }
};
export {Provider,connect}