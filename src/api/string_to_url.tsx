export function stringToUrl(str: string):string{
    return str.toLowerCase().replaceAll(/[" *" "_", ".", \s]/g, "-");
}

