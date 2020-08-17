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
    },

    async getSpecificInsta(req,res){
        try {
            (async () => {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(`https://www.instagram.com/${req.params.id}/`);
                // other actions...
                const imgList = await page.evaluate(()=>{

                    const nodeList = document.querySelectorAll('article img')
                    const accountExist = document.querySelector('main div h2')

                    if(nodeList.length === 0) {
                        return {message: "Sorry, this Account is Private, isn't available or may have been removed."}   
                    }

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
            return res.errorMessage(error)
        }
    }
}