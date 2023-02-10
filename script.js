// const fetchData = (): any => {
//     console.log("fetching data");
// };
// fetchData ();
var num1 = 50;
var name1 = "min thant kyaw";
var isTrue = true;
var calculate1 = function (_a) {
    var num1 = _a.num1,
        num2 = _a.num2,
        users = _a.users,
        fetchData = _a.fetchData;
    var userEmail = users[0].email;
    console.log(userEmail);
    fetchData("http://localhost3000");
    return num1 + num2;
};
var fetchData = function (url) {
    console.log(url);
};
calculate1({
    num1: 50,
    num2: 80,
    users: [
        { name: "min thant kyaw", age: 20, email: "haaaaaaaaaaaaaa@gmail.com" },
    ],
    fetchData: fetchData,
});
