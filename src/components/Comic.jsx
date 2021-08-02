// import React, { Component } from "react";
// import { getComicOne } from "../firebase/comicOneService";
// import ComicPage from "./ComicPage";

// class Comic extends Component {
//   state = {
//     pages: getComicOne(),
//     viewPage: {
//       id: 0,
//       url: "",
//       name: "",
//       description: "",
//       commission: false,
//       fanart: false,
//       mature: false,
//     },
//   };

//   componentDidMount = () => {
//     let paramsId = parseInt(this.props.match.params.id);
//     let viewPage = this.state.pages.find((page) => page.id === paramsId);
//     this.setState({ viewPage });
//   };

//   PrevPage = () => {
//     let paramsId = parseInt(this.props.match.params.id);
//     console.log("prev button " + paramsId);
//     if (paramsId === 0) {
//       return 0;
//     } else {
//       return paramsId - 1;
//     }
//   };

//   NextPage = () => {
//     let paramsId = parseInt(this.props.match.params.id);
//     if (paramsId === 8) {
//       return 8;
//     } else {
//       return paramsId + 1;
//     }
//   };

//   render() {
//     console.log("viewpage id " + this.state.viewPage.id);
//     return (
//       <div>
//         <a href={`/cornstaff/0`}>Go to Start</a>
//         <ComicPage
//           page={this.state.viewPage}
//           paramsPrev={this.PrevPage()}
//           paramsNext={this.NextPage()}
//         />
//       </div>
//     );
//   }
// }

// export default Comic;
