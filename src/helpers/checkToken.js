// /* eslint-disable import/prefer-default-export */
// import jwtDecode from 'jwt-decode';


// export default () => {
//   const localToken = localStorage.getItem('to_do_token');
//   const localTokenValues = localToken ? JSON.parse(localToken) : null;
//   let data;
//   if ((localTokenValues.expiry < new Date())) {
//     const decode = jwtDecode(localTokenValues.value);
//     data = (decode.exp < new Date()) && decode;
//   }
//   return data ? {
//     ...data,
//     token: localTokenValues.value,
//   } : null;
// };
