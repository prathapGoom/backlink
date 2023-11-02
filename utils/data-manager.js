import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_STRAPI_DEPLOY_URL : process.env.NEXT_PUBLIC_STRAPI_LOCAL;

export const getData = async (url) => {
    const response = await axios({
        method: "GET",
        url: `${baseURL}/api/${url}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_AUTH_TOKEN}`
        },
    }).catch(e => { return e.response; });
    
    return response;
};