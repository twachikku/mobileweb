
const rootdiv = document.getElementById('react-app');

class Green extends React.Component {
    render() {
      return <h1 style={{color:"green"}}>ฉันมีสีเขียว</h1>;
    }
}
function Red() {
    return <div style={{color:"red"}}>ฉันมีแดง</div>;
}

ReactDOM.render(<div><Green/><Red/></div>, rootdiv)
