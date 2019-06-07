import request from './request';
let domainurl = 'https://jsonplaceholder.typicode.com'; // main api domain url

// call api with name and param
export function login() { return request(domainurl+'/users',);}
export function post(){ return request(domainurl+'/posts');}
export function comments(){ return request(domainurl+'/comments');}