
interface IStringToJavaScriptDate {
    scale?: number;
    input: string;
}

function CombineClasses(a? : string, b? : string) {
    return (
        (a && b && `${a} ${b}`) ||
        a ||
        b || ''
    )
}

const StringIsUrl = (str : string) => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(str);
}

const StringFormatPascalAndSpace =  (str : string) => {
    str.replace(/([A-Z])/g, ' $1').trim();
    return (str.charAt(0).toUpperCase() + str.slice(1));
};

const StringToJavaScriptDate = (date : string) => {
    return new Date(Date.parse(date));
}

const GetDiceBearIdenticonByString = (props : IStringToJavaScriptDate) => `https://avatars.dicebear.com/api/identicon/${props.input ?? "Username"}.svg?scale=${props.scale ? (props.scale >= 0 && props.scale <= 100 ? props.scale : 100) : 100 }`

export { CombineClasses, StringIsUrl, StringFormatPascalAndSpace, StringToJavaScriptDate, GetDiceBearIdenticonByString }