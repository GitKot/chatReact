import React, {Component as ReactComponent} from 'react'


export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
   
    state = {
        isOpen: false,
        openArticlId : null
    }
   
  
    render (){
     
       
        return(
            <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen }
            toggleOpenArticl = {this.toggleOpenArticl}/>
        )
    }
    
    toggleOpen = (ev) => 
    { ev && ev.preventDefault && ev.prevventDefault
    this.setState({
        isOpen: !this.state.isOpen
        })}

    toggleOpenArticl = (openArticlId ) => (ev) => {
        
      if(this.state.openArticlId === openArticlId){
        this.setState({openArticlId: null})
      }else{
             this.setState({openArticlId})
            }
        }     
}