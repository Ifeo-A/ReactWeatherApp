class UtilityFunctions
{
    upperCaseFirstLetter(string)
    {
        let upperCaseFirstChar = string.charAt(0).toUpperCase();
        return upperCaseFirstChar + string.slice(1);
    }
}

export default UtilityFunctions;