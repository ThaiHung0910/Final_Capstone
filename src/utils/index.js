// import { courseService } from "../services/courseService";


export const isValueInArray = (value, array) => array?.includes(value);

// export const fetchApi = async (nameUri, params , optional) => {
//     try {
//         let result = []
//         for(let i = 9; i > 0; i--) {
//             let res = await courseService[nameUri]({maNhom: `GP0${i}`, ...params})
//             let data = res.data.content
//             if(data.length > 0 || optional) {
//                 result = data
//                 break;
//             }
//         }
//         return result
//     } catch (err) {
//         console.log(err)
//     }
// }
