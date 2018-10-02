import React, {Component as ReactComponent} from 'react'


export default (OriginalComponent) => class WrappedArticl extends ReactComponent {
   constructor(props){
super(props)
this.state = { 
    openArticlId : props.defaultOpen
}
   }
    
   
  
    render (){
     
       
        return(
            <OriginalComponent {...this.props} {...this.state} 
            toggleOpenArticl = {this.toggleOpenArticl}/>
        )
    }
    
    

    toggleOpenArticl = (openArticlId ) => (ev) => {
        
      if(this.state.openArticlId === openArticlId){
        this.setState({openArticlId: null})
      }else{
             this.setState({openArticlId})
            }
        }     
}