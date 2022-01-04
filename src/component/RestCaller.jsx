// import axios from "axios";
// import { HostManagement } from "./HostManagement";


// function GetCaller(props) {
//     const { url, input } = props;


//     setTimeout(() => {
//         axios.get(`${HostManagement.OffersMain}${url}/${input}`)
//             .then((response) => {

//                 console.log(response);

//                 return (response.data)
//             }, (error) => {
//                 console.log(error);
//                 // alert(error);

//             });
//     }, 500);

// }
// function PostCaller(props) {
//     const { url, input } = props;





//     setTimeout(() => {

//         axios.post(`${HostManager.mainHostL3}/npim/insert/responses/from/L3`, inputData).

//             then(responce => {

//                 let mailSms = "";
//                 console.log(responce.data);
//                 if (responce.data.code === "1001") {

//                     if (productDetails.collection == "ALL" || productDetails.consumerBase == "ALL" ||
//                         productDetails.group == "ALL" || productDetails.category == "ALL") {
//                         mailSms = "You have successfully completed the Indented. Thankyou."

//                     } else if (productDetails.collection !== "ALL" || productDetails.consumerBase !== "ALL" ||
//                         productDetails.group !== "ALL" || productDetails.category !== "ALL") {
//                         mailSms = "No more data available for the selected category."
//                     } else {
//                         mailSms = responce.data.value;
//                     }

//                     setImmediate(() => {
//                         setAlertPopupStatus({
//                             status: true,
//                             main: mailSms,
//                             contain: "",
//                             mode: true,

//                         });
//                     });
//                     // alert(responce.data.value)


//                 } else {

//                     setImmediate(() => {
//                         setFeedShowState(responce.data.value)
//                         setStatusRefresh(!statusRefresh);
//                     });
//                     seventhDigits = responce.data.value.itemCode[6];
//                 }


//             }).catch(error => {
//                 console.log(error);
//                 alert(error);
//             });
//         setImmediate(() => {
//             setLoading(false);
//         });



//     }
//         , 500);

// }

// export { GetCaller, PostCaller };

