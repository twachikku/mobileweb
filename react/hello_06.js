
const rootdiv = document.getElementById('react-app');

class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.value = props.value;
  }
  handleChange(event) {    
    this.setState({value:event.target.value});
    if(this.props.onChangeText){
       this.props.onChangeText(event.target.value);
    }
  }
  render(){
    return <div className={this.props.class}>
      <label>{this.props.label}</label>
      <input 
    type="text" 
    className="form-control"
    value={this.state.value} 
    onChange={(e)=>this.handleChange(e)} />
      </div>
  }
}

class Main extends React.Component {
    
    constructor(){
      super();
      this.state = {
        first_name: "",
        last_name: "",
        age : 0,
      }      
    }    
    render(){
      return <div className="card">
<div className='card-header'>{this.props.children}</div>
<div className='card-body'>
<div className='row'>       
<TextInput 
   class='col-md-4'
   label="Input First name:"
   value={this.state.first_name} 
   onChangeText={(text)=>this.setState({'first_name':text})}     
/>
<TextInput 
   label="Input Last name:"
   class="col-md-4"
   value={this.state.last_name} 
   onChangeText={(text)=>this.setState({'last_name':text})}     
/>
<div className="col-md-6 py-4">
<button type="button" className="btn btn-primary">ตกลง</button>
</div>
<div className="col-md-12 alert alert-info">
Hello, {this.state.first_name} {this.state.last_name}
</div>
  </div>
  </div>
</div>
      ;
    }
}

ReactDOM.render(<div><Main>Hello BootStrap</Main></div>, rootdiv)
