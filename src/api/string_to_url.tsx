export function stringToUrl(str: string):string{
    return str.toLocaleLowerCase().replaceAll(/[" *" "_", ".", \s]/g, "-");
}

