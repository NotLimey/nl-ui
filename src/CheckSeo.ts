
// interface CheckSEOProps {
    
// }
const consoleWarn = text => console.warn(`nl-ui/CheckSeo: ${text}`)
const consoleLog = text => console.info(`nl-ui/CheckSeo: ${text}`)

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
    return true;
}

const CheckKeywords = () => {
    //
}

export const CheckSeo = () => {
    CheckTitles();
    CheckPageTitle();
    CheckDescription()
}