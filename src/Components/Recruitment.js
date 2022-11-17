import React from "react";
import FestCSS from "./Recruitment.module.css";

//  function Fest(props){

// return (
//     <div id="frame" className={FestCSS.main}>
// {/* <iframe className={comingCSS.frame} id="inlineFrameExample"
//     title="Inline Frame Example"
//     width="300"
//     height="200"
//     frameborder="0" marginheight="0" marginwidth="0"
//     src="https://docs.google.com/forms/d/e/1FAIpQLSf2EyJGhbunlVCuxDGvs3CcjDKZYYya5NrB8XAKXB6d-9Oz6A/viewform?usp=sf_link">
// </iframe> */}

// <iframe title="Form" classname={FestCSS.frame} src="https://docs.google.com/forms/d/e/1FAIpQLSf2EyJGhbunlVCuxDGvs3CcjDKZYYya5NrB8XAKXB6d-9Oz6A/viewform?embedded=true" width="640" height="770" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

// </div>
    
    
// );
// }

// export default Fest;


class App extends React.Component {
  formUrl="https://docs.google.com/forms/d/e/1FAIpQLScQfJgJB96nZ06ZXsucixRJ4cbCDqrosWB022Y3DEKm6k9sEg/viewform?embedded=true"
    // formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfu5-AGCG_9VQnOPs1P2tMECc9C66h-Hzto4DbKQ89F8ACvGA/viewform?embedded=true";
  state = {
    // check if the iframe is hovered
    iframeMouseOver: false
  };

  componentDidMount() {
    // Focus the page
    window.focus();
    // Add listener to check when page is not focussed
    // (i.e. iframe is clicked into)
    window.addEventListener("blur", this.onWindowBlur);
  }

  componentWillUnmount() {
    // Clean up
    window.removeEventListener("blur", this.onWindowBlur);
  }

  // If the iframe is hovered and the page becomes
  // blurred then the iframe must have been clicked
  onWindowBlur = () => {
    const { iframeMouseOver } = this.state;
    if (iframeMouseOver) {
        this.props.DisableNav();
    }
  };

  handleOnMouseOver = () => {
    this.setState({ iframeMouseOver: true });
  };

  handleOnMouseOut = () => {
    window.focus(); // Make sure to set focus back to page
    this.setState({ iframeMouseOver: false });
  };

  render() {
    return (
      <>
        <div
          className={"iframeWrapper "+FestCSS.main}
          onMouseOver={this.handleOnMouseOver}
          onMouseOut={this.handleOnMouseOut}
        >
          <iframe classname={FestCSS.frame} title="Form" src="https://docs.google.com/forms/d/e/1FAIpQLScQfJgJB96nZ06ZXsucixRJ4cbCDqrosWB022Y3DEKm6k9sEg/viewform?embedded=true" width="2000" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          {/* <iframe title="Form" classname={FestCSS.frame} src={this.formUrl} width="640" height="770" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
        </div>
      </>
    );
  }
}

export default App;