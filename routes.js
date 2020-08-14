const puppeteer = require('puppeteer');

module.exports = {
    async index(req,res){
        try {
            (async () => {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto('https://www.instagram.com/elonmusk/');
                // other actions...
                const imgList = await page.evaluate(()=>{

                    const nodeList = document.querySelectorAll('article img')
                    if(nodeList.length === 0) return {message: "This Account is Private"}

                    const imgArray = [...nodeList]
                    const imgList = imgArray.map(({src})=>({
                        src
                    }))
                    
                    return imgList
                })
                await browser.close();

                return res.json(imgList)        
              })();
        } catch (error) {
            return res.json({errorMessage: error})
        }
    }
}