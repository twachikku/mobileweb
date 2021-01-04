// ประกาศ
const {
    colors,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    makeStyles,
    createMuiTheme,
    Box,
    SvgIcon,
    Link,
    Card, 
    CardActionArea, 
    CardContent,
    Grid,
    TextField,
    Paper
 } = MaterialUI;
  
  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: colors.red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  });
  
  function LightBulbIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
      </SvgIcon>
    );
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }));
  
  function ProTip() {
    const classes = useStyles();
    return (
      <Typography className={classes.root} color="textSecondary">
        <LightBulbIcon className={classes.lightBulb} />
        เอกสารเพิ่มเติม <Link href="https://material-ui.com/"> Material-UI documentation </Link>.
      </Typography>
    );
  }
  
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Wachirawut Thamviset
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  
  function App() {
    return (
      <Container maxWidth="lg">
        <div style={{ marginTop: 24, }}>
          <Typography variant="h4" component="h1" gutterBottom>
          React 08: Material-UI Library
          </Typography>
          <ProTip />
          <MainForm />
          <Copyright />
        </div>
      </Container>
    );
  }

  class MainForm extends React.Component {   
    state ={
        first_name:"",
        last_name:""
    }; 
    render(){
      return <Card>
<CardContent>
<Grid container>
   <Grid item xs={6}>
      <TextField 
          label="First Name" value={this.state.first_name} 
          onChange={(v)=>this.setState({first_name:v.target.value}) }
      />
   </Grid>
   <Grid item xs={6}>
      <TextField label="Last Name" value={this.state.last_name}
          onChange={(v)=>this.setState({last_name:v.target.value}) }
      />
   </Grid> 
</Grid>
<br/>
<br/>
<Box  bgcolor="success.main" p={1} color="white">
 สวัสดี {this.state.first_name} {this.state.last_name}
</Box>
</CardContent>
      </Card>;
    }
  }
  
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>,
    document.querySelector('#root'),
  );