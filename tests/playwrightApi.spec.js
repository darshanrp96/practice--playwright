import { test,expect } from "@playwright/test";
import { request } from "http";

test('playwright api test', async ({request})=>{

const resp = await request.get('https://jsonplaceholder.typicode.com/posts/1');
const respjson=await resp.json();
const respstatus= resp.status();
const respstatusText= resp.statusText();

// console.log(respjson);
// console.log(respstatus);
// console.log(respstatusTesxt);

expect(respstatus).toBe(200);
expect(respstatusText).toBe('OK');

});