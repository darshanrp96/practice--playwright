const {test,expect} = require('@playwright/test')

test("my first test", async function ({page}) {
  //    
})

test("my second test", async function ({page}) {
   expect(12).toBe(12)
})

test("my third test", async function ({page}) {
   expect(100).toBe(100)
})

test("my fourth test", async function ({page}) {
   expect("darshan pardeshi").toContain("pardeshi")  
})

test.skip("my fifth test", async function ({page}) {
  //    
})

