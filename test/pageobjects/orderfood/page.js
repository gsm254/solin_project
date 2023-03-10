export default class Page{
    async open(path){
        return browser.url(path);
    }
}