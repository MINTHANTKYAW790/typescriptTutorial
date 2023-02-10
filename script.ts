// const fetchData = (): any => {
//     console.log("fetching data");
// };

// fetchData();

const num1: number = 50;
const name1: string = "min thant kyaw";
const isTrue: boolean = true;

interface User {
    name: string;
    age: number;
    email: string;
}

interface Props1 {
    num1: number;
    num2: number;
    users: User[];
    fetchData: (url: string) => void;
}

const calculate1 = ({ num1, num2, users, fetchData }: Props1): number => {
    const userEmail = users[0].email;
    console.log(userEmail);
    fetchData("http://localhost3000");
    return num1 + num2;
};

const fetchData = (url: string) => {
    console.log(url);
};

calculate1({
    num1: 50,
    num2: 80,
    users: [
        { name: "min thant kyaw", age: 20, email: "haaaaaaaaaaaaaa@gmail.com" },
    ],
    fetchData,
});
