// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

// const headers = {
//     'content-type': 'application/json',
//   'X-RapidAPI-Key': '21f955141cmshf78e6e9b036eb86p12c2d6jsn5d40e03c8aac',
//   'X-RapidAPI-Host': 'restaurants-deliver-to-me.p.rapidapi.com'
// }
// const ResturantData = createApi({
//     reducerPath:'ResturantData',
//     baseQuery:fetchBaseQuery({
//         baseUrl: 'https://restaurants-deliver-to-me.p.rapidapi.com/',
//         prepareHeaders:(headers)=>{
//             return {
//                 ...headers,
//                 ...headers,

//             }
//         },
//     }),
//     endpoints:(builder)=>({
//         getResturantData:builder.query({
//             query:({latitude,longitude})=>({
//                 url:'/',
//                 method:'POST',
//                 headers:headers,
//                 body:JSON.stringify({
//                     input:{
//                         latitude,
//                         longitude
//                     }
//                 })
//             })
//         })
//     })
// })

// export const {useGetResturantDataQuery} = ResturantData;

// export default ResturantData;