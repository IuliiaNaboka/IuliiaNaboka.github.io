function isPangram(string) {

    var s = string.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";

    for (var i = 0; i < s.length; i++) {
        if (s.indexOf(letters.charAt(i)) == -1) {
            return false;
        }
    }
    return true;
}