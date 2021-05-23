// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios, { post }  from 'axios';

const React = require('react')
class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file1: 'data:image/png;base64,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',
      file2: 'data:image/png;base64,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',
      msg: '',
      image1:'',
      image2:''
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }
  handleChange1(event) {
    this.setState({
      file1: URL.createObjectURL(event.target.files[0]),
      image1: event.target.files[0]
    })
  }
  handleChange2(event) {
    this.setState({
      file2: URL.createObjectURL(event.target.files[0]),
      image2: event.target.files[0]
    })
  }
  render() {
    return (
      <>
        <div className="header">
          <h1>IMAGE COMPARISON</h1>
        </div>
        <div className='split left'>
          <div className="centered">
            <label className="custom-file-upload">
            {this.state.file2.name}
              <input type="file" onChange={this.handleChange1} />
              <i className="fa fa-cloud-upload"></i> choose image 1
            </label>
            <img src={this.state.file1} />
          
          </div>
        </div>
        <div className='split right'>
          <div className="centered">
            <label className="custom-file-upload">
            {this.state.file2.name}
              <input type="file" onChange={this.handleChange2} />
              <i className="fa fa-cloud-upload"></i> choose image 2
            </label>
            <img src={this.state.file2} />
            
          </div>
        </div>
        <div className="footer">
          <button type="button" className="button" onClick={this.submit}>compare images</button>
          <div className="footer-lable">{this.state.msg}</div>
          {/* <div className="footer-lable">Face matched 99%</div> */}
          {/* <Popup trigger={<button type="button" className="button" onClick={this.get}>compare images</button>} position="right center">
          <div>{this.state.msg}</div>
        </Popup> */}
        </div>
        
      </>
    );
  }
  onFileChangeHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image1", this.state.image1);
    formData.append('image2', this.state.image2);
    fetch('http://localhost:8080/compare', {
        method: 'post',
        body: formData
    }).then(res => {
        if(res.ok) {
            console.log(res.data);
            this.setState({msg:res.data})
        }
    }).catch(error => {
      console.log(error)
      this.setState({msg:error})
  });
};

  submit = (e) => {
    e.preventDefault();
    const data = new FormData() 
    data.append('image1', this.state.image1)
    data.append('image2', this.state.image2)
    let url = "http://localhost:8080/compare";

    const headers =  {
      'content-type': 'multipart/form-data'
    }

    axios.post(url,data, 
      { // receive two parameter endpoint url ,form data 
      headers: headers
    })
    .then(res => { // then print response status
        console.warn(res);
        this.setState({msg:res.data})
    }).catch(error => {
      console.log(error)
      this.setState({msg:error})
  });
  
}

fileUpload() {
  let url = 'http://localhost:8080/compare';
  const formData = new FormData();
  formData.append('image1',this.state.image1)
  formData.append('image2',this.state.image1)
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}
return  post(url, formData,config)
}

  onFormSubmit(e){
    e.preventDefault() 
    this.fileUpload().then((response)=>{
      console.log(response.data);
    })
  }
  compareImage = event => {
    event.preventDefault();
    axios.get('http://localhost:8080/compare?image1='+this.state.file1+'&image2='+this.state.file1)
    .then(result => {
      this.setState({msg:result.data})
    })
  }

  post = event => {
    event.preventDefault();
    axios.get('http://localhost:8080/compare?image1='+this.state.image1+'&image2='+this.state.image2)
    .then(result => {
      this.setState({msg:result.data})
    })
  }

  
}

export default Upload