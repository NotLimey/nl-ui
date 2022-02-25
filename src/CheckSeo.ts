
// interface CheckSEOProps {
    
// }
const words = [
    ["I think you can do a little better", "Its not exactly good..", "Your gonna have to look for this page"],
    ["This is pretty okay", "U did a decent job", "You're almost there!"],
    ["You're rocking this!", "Hats off to you", "You're so good you don't need to use google ads!"]
]

const consoleWarn = text => console.warn(`nl-ui/CheckSeo: ${text}`)
const consoleInfo = text => console.info(`nl-ui/CheckSeo: ${text}`)

const CheckTitles = () => {
    const titles = window.document.getElementsByTagName("h1");
    if(!titles) {
        consoleWarn("Cant find a h1 tag on the page")
        return false;
    }
    if(titles?.length > 1){
        consoleWarn(`Too many <h1> tags, you have ${titles.length}. It should be 1`)
        return false;
    }

    if(titles?.length < 1) {
        consoleWarn(`Page should have a <h1> tag`)
        return false;
    }

    consoleInfo("Page has a good h1 tag!")
    return true;
}

const CheckPageTitle = () => {
    const pageTitle = window.document.querySelector("title")?.innerText;
    if(!pageTitle) {
        consoleWarn("Page should have a <title> tag. Use title value in DefaultHelmet")
        return false;
    }
    if(pageTitle.length <= 7 || pageTitle.length >= 70) {
        consoleWarn(`You have a title tag of optimal length (between 10 and 70 characters). Current description length: ${pageTitle.length}`)
        return false;
    }
    
    consoleInfo("Page has a good title! Fantastic!")
    return true;
}

const CheckDescription = () => {
    const description = window.document.querySelector('meta[name="description"]');
    if(!description) {
        consoleWarn("Page should have a <meta> tag with description. Use description value in DefaultHelmet")
        return false;
    }
    const descriptionText = description.attributes["content"].nodeValue;
    if(descriptionText.length < 71 || descriptionText.length > 320) {
        consoleWarn(`Your page has a meta description of optimal length (between 70 and 320 characters). Current description length: ${descriptionText.length}`)
        return false;
    }
    
    consoleInfo("Page has a good description! Good job mate!")
    return true;
}

const CheckKeywords = () => {
    const keywords = window.document.querySelector('meta[name="keywords"]');
    if(!keywords) {
        consoleWarn("Page should have a <meta> tag with keywords. Use keywords value in DefaultHelmet")
        return false;
    }
    const keywordsText = keywords.attributes["content"].nodeValue;
    console.log(keywordsText)
}

export const CheckSeo = () => {
    let Works = [];
    if(CheckTitles()) Works.push("H1 tag");
    if(CheckPageTitle()) Works.push("Titles");
    if(CheckDescription()) Works.push("Description");
    CheckKeywords()

    const word = words[(Works.length - 1)]
    consoleInfo(`Report finished. ${word[Math.floor(Math.random()*word.length)]}`)
}